import { auth, db } from './firebase-config.js';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const loginView = document.getElementById('loginView');
const dashboardView = document.getElementById('dashboardView');
const loginForm = document.getElementById('loginForm');
const loginNotice = document.getElementById('loginNotice');
const dashboardNotice = document.getElementById('dashboardNotice');
const logoutBtn = document.getElementById('logoutBtn');
const adminEmail = document.getElementById('adminEmail');
const rowsEl = document.getElementById('bookingRows');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');
const detailModal = document.getElementById('detailModal');
const detailGrid = document.getElementById('detailGrid');
const detailActions = document.getElementById('detailActions');
const detailTitle = document.getElementById('detailTitle');
const detailNotice = document.getElementById('detailNotice');
const quotedAmount = document.getElementById('quotedAmount');
const quotedCurrency = document.getElementById('quotedCurrency');
const internalNotes = document.getElementById('internalNotes');

const STATUSES = ['New', 'Contacted', 'Quoted', 'Confirmed', 'Paid', 'Completed', 'Cancelled'];
let bookings = [];
let selectedBookingId = null;

function setNotice(el, text, type = 'info') {
  el.textContent = text;
  el.className = `notice show ${type}`;
}

function clearNotice(el) {
  el.textContent = '';
  el.className = 'notice';
}

function formatDate(timestamp) {
  if (!timestamp) return '—';
  const date = typeof timestamp.toDate === 'function' ? timestamp.toDate() : new Date(timestamp);
  return Number.isNaN(date.getTime()) ? '—' : date.toLocaleString();
}

function safePhone(phone) {
  return String(phone || '').replace(/[^\d+]/g, '');
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function currentFilteredBookings() {
  const search = searchInput.value.trim().toLowerCase();
  const status = statusFilter.value;
  return bookings.filter(item => {
    const haystack = [
      item.bookingRef,
      item.fullName,
      item.phone,
      item.email,
      item.experienceName,
      item.nationality,
      item.tripType
    ].join(' ').toLowerCase();
    return (!search || haystack.includes(search)) && (status === 'All' || item.status === status);
  });
}

function renderStats() {
  document.getElementById('statTotal').textContent = bookings.length;
  document.getElementById('statNew').textContent = bookings.filter(b => b.status === 'New').length;
  document.getElementById('statConfirmed').textContent = bookings.filter(b => b.status === 'Confirmed').length;
  document.getElementById('statPaid').textContent = bookings.filter(b => b.status === 'Paid').length;
}

function bookingWhatsApp(item) {
  const whatsappText = encodeURIComponent(
    `Hello ${item.fullName || ''}, this is Rigan Roots & Routes regarding booking ${item.bookingRef || ''} for ${item.experienceName || 'your Nepal trip'}.`
  );
  return `https://wa.me/${safePhone(item.phone)}?text=${whatsappText}`;
}

function renderBookings() {
  const filtered = currentFilteredBookings();

  rowsEl.innerHTML = filtered.map(item => {
    const options = STATUSES.map(s => `<option value="${s}" ${item.status === s ? 'selected' : ''}>${s}</option>`).join('');
    const wa = bookingWhatsApp(item);
    const email = String(item.email || '').trim();
    return `
      <tr data-id="${escapeHtml(item.id)}">
        <td><div class="booking-ref">${escapeHtml(item.bookingRef || '—')}</div><div class="small">${escapeHtml(item.language || 'en')}</div></td>
        <td><strong>${escapeHtml(item.fullName || '—')}</strong><div class="small">${escapeHtml(item.nationality || '')}</div><div class="small">${escapeHtml(email)}</div></td>
        <td><strong>${escapeHtml(item.experienceName || '—')}</strong><div class="small">${escapeHtml(item.displayedPrice || 'Request Quote')}</div></td>
        <td><strong>${escapeHtml(item.travelDate || '—')}</strong><div class="small">${escapeHtml(item.travellers || 0)} traveller(s) • ${escapeHtml(item.tripType || '')}</div></td>
        <td>
          <div>${escapeHtml(item.phone || '—')}</div>
          ${item.phone ? `<a class="whatsapp-link" href="${wa}" target="_blank" rel="noopener noreferrer">WhatsApp</a>` : ''}
          ${email ? `<a class="email-link" href="mailto:${encodeURIComponent(email)}">Email</a>` : ''}
        </td>
        <td><select class="status-select" data-booking-id="${escapeHtml(item.id)}">${options}</select></td>
        <td>${escapeHtml(formatDate(item.createdAt))}</td>
        <td><button class="btn btn-outline btn-small view-booking" type="button" data-booking-id="${escapeHtml(item.id)}">View details</button></td>
      </tr>`;
  }).join('');

  emptyState.classList.toggle('show', filtered.length === 0);

  document.querySelectorAll('.status-select').forEach(select => {
    select.addEventListener('change', async () => {
      const id = select.dataset.bookingId;
      const booking = bookings.find(item => item.id === id);
      const previousStatus = booking?.status || 'New';
      const newStatus = select.value;
      select.disabled = true;
      try {
        await updateDoc(doc(db, 'bookings', id), {
          status: newStatus,
          updatedAt: serverTimestamp(),
          statusHistory: arrayUnion({
            from: previousStatus,
            to: newStatus,
            changedAt: new Date().toISOString(),
            changedBy: auth.currentUser?.email || auth.currentUser?.uid || 'admin'
          })
        });
        if (booking) booking.status = newStatus;
        renderStats();
        clearNotice(dashboardNotice);
      } catch (error) {
        console.error(error);
        select.value = previousStatus;
        setNotice(dashboardNotice, 'Could not update booking status. Check Firestore rules and admin access.', 'error');
      } finally {
        select.disabled = false;
      }
    });
  });

  document.querySelectorAll('.view-booking').forEach(button => {
    button.addEventListener('click', () => openBookingDetails(button.dataset.bookingId));
  });
}

function detailItem(label, value, full = false) {
  return `<div class="detail-item ${full ? 'full' : ''}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || '—')}</strong></div>`;
}

function openBookingDetails(id) {
  const item = bookings.find(booking => booking.id === id);
  if (!item) return;
  selectedBookingId = id;
  clearNotice(detailNotice);
  detailTitle.textContent = item.bookingRef || 'Booking';
  detailGrid.innerHTML = [
    detailItem('Traveller', item.fullName),
    detailItem('Nationality', item.nationality),
    detailItem('Phone / WhatsApp', item.phone),
    detailItem('Email', item.email),
    detailItem('Experience', item.experienceName),
    detailItem('Status', item.status),
    detailItem('Travel date', item.travelDate),
    detailItem('Travellers', item.travellers),
    detailItem('Trip type', item.tripType),
    detailItem('Preferred contact', item.preferredContact),
    detailItem('Displayed price', item.displayedPrice || 'Request Quote'),
    detailItem('Created', formatDate(item.createdAt)),
    detailItem('Special requests', item.specialRequests || 'None', true)
  ].join('');

  const links = [];
  if (item.phone) links.push(`<a class="whatsapp-link" href="${bookingWhatsApp(item)}" target="_blank" rel="noopener noreferrer">Open WhatsApp</a>`);
  if (item.email) links.push(`<a class="email-link" href="mailto:${encodeURIComponent(item.email)}?subject=${encodeURIComponent(`Rigan booking ${item.bookingRef || ''}`)}">Send email</a>`);
  if (item.sourceUrl) links.push(`<a class="btn btn-outline btn-small" href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">Source page</a>`);
  detailActions.innerHTML = links.join('');

  quotedAmount.value = item.quotedAmount ?? '';
  quotedCurrency.value = item.quotedCurrency || 'USD';
  internalNotes.value = item.internalNotes || '';
  detailModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeBookingDetails() {
  detailModal.hidden = true;
  selectedBookingId = null;
  document.body.style.overflow = '';
  clearNotice(detailNotice);
}

async function saveBookingOperations() {
  if (!selectedBookingId) return;
  const item = bookings.find(booking => booking.id === selectedBookingId);
  if (!item) return;
  const button = document.getElementById('saveOpsBtn');
  button.disabled = true;
  clearNotice(detailNotice);

  const amountText = quotedAmount.value.trim();
  const amount = amountText === '' ? null : Number(amountText);
  if (amount !== null && (!Number.isFinite(amount) || amount < 0)) {
    setNotice(detailNotice, 'Enter a valid quoted amount.', 'error');
    button.disabled = false;
    return;
  }

  try {
    await updateDoc(doc(db, 'bookings', selectedBookingId), {
      quotedAmount: amount,
      quotedCurrency: quotedCurrency.value,
      internalNotes: internalNotes.value.trim().slice(0, 5000),
      updatedAt: serverTimestamp()
    });
    item.quotedAmount = amount;
    item.quotedCurrency = quotedCurrency.value;
    item.internalNotes = internalNotes.value.trim().slice(0, 5000);
    setNotice(detailNotice, 'Quote and internal notes saved.', 'success');
  } catch (error) {
    console.error(error);
    setNotice(detailNotice, 'Could not save booking operations data.', 'error');
  } finally {
    button.disabled = false;
  }
}

function csvCell(value) {
  let text = String(value ?? '').replaceAll('"', '""');
  if (/^[=+\-@]/.test(text)) text = `'${text}`;
  return `"${text}"`;
}

function exportCsv() {
  const filtered = currentFilteredBookings();
  if (!filtered.length) {
    setNotice(dashboardNotice, 'There are no bookings in the current filter to export.', 'info');
    return;
  }
  const headers = [
    'Booking Ref','Status','Traveller','Nationality','Phone','Email','Experience','Travel Date','Travellers','Trip Type','Preferred Contact','Quoted Amount','Currency','Special Requests','Internal Notes','Created'
  ];
  const lines = [headers.map(csvCell).join(',')];
  filtered.forEach(item => {
    lines.push([
      item.bookingRef,item.status,item.fullName,item.nationality,item.phone,item.email,item.experienceName,item.travelDate,item.travellers,item.tripType,item.preferredContact,item.quotedAmount ?? '',item.quotedCurrency || '',item.specialRequests || '',item.internalNotes || '',formatDate(item.createdAt)
    ].map(csvCell).join(','));
  });
  const blob = new Blob(['\ufeff' + lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `rigan-bookings-${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function loadBookings() {
  setNotice(dashboardNotice, 'Loading bookings…');
  try {
    const snapshot = await getDocs(query(collection(db, 'bookings'), orderBy('createdAt', 'desc'), limit(250)));
    bookings = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    renderStats();
    renderBookings();
    clearNotice(dashboardNotice);
  } catch (error) {
    console.error(error);
    setNotice(dashboardNotice, 'Could not load bookings. Confirm this user has an admins/{UID} document and that the Firestore rules are published.', 'error');
  }
}

loginForm.addEventListener('submit', async event => {
  event.preventDefault();
  clearNotice(loginNotice);
  try {
    await signInWithEmailAndPassword(
      auth,
      document.getElementById('adminLoginEmail').value.trim(),
      document.getElementById('adminLoginPassword').value
    );
  } catch (error) {
    console.error(error);
    setNotice(loginNotice, 'Sign-in failed. Check the email/password and make sure Email/Password authentication is enabled in Firebase.', 'error');
  }
});

logoutBtn.addEventListener('click', () => signOut(auth));
document.getElementById('refreshBtn').addEventListener('click', loadBookings);
document.getElementById('exportBtn').addEventListener('click', exportCsv);
document.getElementById('closeDetailBtn').addEventListener('click', closeBookingDetails);
document.getElementById('saveOpsBtn').addEventListener('click', saveBookingOperations);
detailModal.addEventListener('click', event => {
  if (event.target === detailModal) closeBookingDetails();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !detailModal.hidden) closeBookingDetails();
});
searchInput.addEventListener('input', renderBookings);
statusFilter.addEventListener('change', renderBookings);
document.getElementById('clearFilters').addEventListener('click', () => {
  searchInput.value = '';
  statusFilter.value = 'All';
  renderBookings();
});

onAuthStateChanged(auth, async user => {
  if (!user) {
    loginView.style.display = '';
    dashboardView.classList.remove('show');
    logoutBtn.hidden = true;
    adminEmail.textContent = '';
    bookings = [];
    closeBookingDetails();
    return;
  }

  adminEmail.textContent = user.email || user.uid;
  logoutBtn.hidden = false;

  try {
    const adminDoc = await getDoc(doc(db, 'admins', user.uid));
    if (!adminDoc.exists()) {
      loginView.style.display = '';
      dashboardView.classList.remove('show');
      setNotice(loginNotice, `Signed in, but this account does not have admin access. Create Firestore document admins/${user.uid} and then sign in again.`, 'error');
      return;
    }

    loginView.style.display = 'none';
    dashboardView.classList.add('show');
    clearNotice(loginNotice);
    await loadBookings();
  } catch (error) {
    console.error(error);
    loginView.style.display = '';
    dashboardView.classList.remove('show');
    setNotice(loginNotice, `Unable to verify admin access. User UID: ${user.uid}`, 'error');
  }
});
