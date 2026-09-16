import { auth, db } from './firebase-config.js';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import {
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

const STATUSES = ['New', 'Contacted', 'Quoted', 'Confirmed', 'Paid', 'Completed', 'Cancelled'];
let bookings = [];

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

function renderStats() {
  document.getElementById('statTotal').textContent = bookings.length;
  document.getElementById('statNew').textContent = bookings.filter(b => b.status === 'New').length;
  document.getElementById('statConfirmed').textContent = bookings.filter(b => b.status === 'Confirmed').length;
  document.getElementById('statPaid').textContent = bookings.filter(b => b.status === 'Paid').length;
}

function renderBookings() {
  const search = searchInput.value.trim().toLowerCase();
  const status = statusFilter.value;
  const filtered = bookings.filter(item => {
    const haystack = [item.bookingRef, item.fullName, item.phone, item.email, item.experienceName, item.nationality]
      .join(' ')
      .toLowerCase();
    return (!search || haystack.includes(search)) && (status === 'All' || item.status === status);
  });

  rowsEl.innerHTML = filtered.map(item => {
    const options = STATUSES.map(s => `<option value="${s}" ${item.status === s ? 'selected' : ''}>${s}</option>`).join('');
    const whatsappText = encodeURIComponent(`Hello ${item.fullName || ''}, this is Rigan Roots & Routes regarding booking ${item.bookingRef || ''} for ${item.experienceName || 'your Nepal trip'}.`);
    const wa = `https://wa.me/${safePhone(item.phone)}?text=${whatsappText}`;
    return `
      <tr data-id="${escapeHtml(item.id)}">
        <td><div class="booking-ref">${escapeHtml(item.bookingRef || '—')}</div><div class="small">${escapeHtml(item.language || 'en')}</div></td>
        <td><strong>${escapeHtml(item.fullName || '—')}</strong><div class="small">${escapeHtml(item.nationality || '')}</div><div class="small">${escapeHtml(item.email || '')}</div></td>
        <td><strong>${escapeHtml(item.experienceName || '—')}</strong><div class="small">${escapeHtml(item.displayedPrice || 'Request Quote')}</div></td>
        <td><strong>${escapeHtml(item.travelDate || '—')}</strong><div class="small">${escapeHtml(item.travellers || 0)} traveller(s) • ${escapeHtml(item.tripType || '')}</div></td>
        <td><div>${escapeHtml(item.phone || '—')}</div>${item.phone ? `<a class="whatsapp-link" href="${wa}" target="_blank" rel="noopener noreferrer">WhatsApp</a>` : ''}</td>
        <td><select class="status-select" data-booking-id="${escapeHtml(item.id)}">${options}</select></td>
        <td>${escapeHtml(formatDate(item.createdAt))}</td>
      </tr>`;
  }).join('');

  emptyState.classList.toggle('show', filtered.length === 0);

  document.querySelectorAll('.status-select').forEach(select => {
    select.addEventListener('change', async () => {
      const id = select.dataset.bookingId;
      const newStatus = select.value;
      select.disabled = true;
      try {
        await updateDoc(doc(db, 'bookings', id), {
          status: newStatus,
          updatedAt: serverTimestamp()
        });
        const booking = bookings.find(item => item.id === id);
        if (booking) booking.status = newStatus;
        renderStats();
        clearNotice(dashboardNotice);
      } catch (error) {
        console.error(error);
        setNotice(dashboardNotice, 'Could not update booking status. Check Firestore rules and admin access.', 'error');
      } finally {
        select.disabled = false;
      }
    });
  });
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
