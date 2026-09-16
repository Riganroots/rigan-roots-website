import { auth, db } from './firebase-config.js';
import {
  doc,
  getDoc,
  runTransaction,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const paymentPanel = document.getElementById('paymentPanel');
const paymentState = document.getElementById('paymentState');
const paymentQuoteTotal = document.getElementById('paymentQuoteTotal');
const paymentTotalPaid = document.getElementById('paymentTotalPaid');
const paymentBalance = document.getElementById('paymentBalance');
const paymentAmount = document.getElementById('paymentAmount');
const paymentMethod = document.getElementById('paymentMethod');
const paymentDate = document.getElementById('paymentDate');
const paymentReference = document.getElementById('paymentReference');
const paymentNote = document.getElementById('paymentNote');
const recordPaymentBtn = document.getElementById('recordPaymentBtn');
const paymentHistory = document.getElementById('paymentHistory');
const paymentNotice = document.getElementById('paymentNotice');

let currentBookingId = null;
let currentBooking = null;

function clean(value, max = 500) {
  return String(value || '').replace(/\s+/g, ' ').trim().slice(0, max);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function safePhone(phone) {
  return String(phone || '').replace(/[^\d+]/g, '');
}

function localToday() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
}

function money(amount, currency = 'USD') {
  const number = Number(amount || 0);
  return `${currency} ${Number.isFinite(number) ? number.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}`;
}

function secureToken() {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
}

function receiptUrl(token) {
  const url = new URL('receipt.html', window.location.href);
  url.searchParams.set('token', token);
  return url.toString();
}

function receiptNumber(bookingRef, sequence) {
  const base = String(bookingRef || 'RIG').replace(/[^A-Za-z0-9]/g, '').slice(-12).toUpperCase();
  const stamp = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  return `RCT-${stamp}-${base}-${String(sequence).padStart(2, '0')}`;
}

function setNotice(text, type = 'info') {
  paymentNotice.textContent = text;
  paymentNotice.className = `notice show ${type}`;
}

function clearNotice() {
  paymentNotice.textContent = '';
  paymentNotice.className = 'notice';
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  document.execCommand('copy');
  area.remove();
}

function sumPayments(history) {
  return (history || []).reduce((sum, item) => sum + Number(item.amount || 0), 0);
}

function renderHistory() {
  const history = Array.isArray(currentBooking?.paymentHistory) ? currentBooking.paymentHistory : [];
  if (!history.length) {
    paymentHistory.innerHTML = '<div class="payment-history-empty">No payments recorded yet.</div>';
    return;
  }

  paymentHistory.innerHTML = [...history].reverse().map(item => {
    const url = item.receiptUrl || (item.receiptToken ? receiptUrl(item.receiptToken) : '');
    const reference = item.reference ? ` • Ref: ${escapeHtml(item.reference)}` : '';
    return `
      <div class="payment-history-item">
        <div>
          <strong>${escapeHtml(item.receiptNumber || 'Receipt')} — ${escapeHtml(money(item.amount, item.currency))}</strong>
          <div class="payment-history-meta">${escapeHtml(item.receivedDate || '')} • ${escapeHtml(item.method || 'Payment')}${reference}</div>
        </div>
        <div class="payment-history-actions">
          ${url ? `<a class="btn btn-outline btn-small" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">Open receipt</a>` : ''}
          ${url ? `<button class="btn btn-outline btn-small copy-receipt-link" type="button" data-url="${escapeHtml(url)}">Copy link</button>` : ''}
          ${url ? `<button class="btn btn-whatsapp btn-small share-receipt-whatsapp" type="button" data-url="${escapeHtml(url)}" data-number="${escapeHtml(item.receiptNumber || '')}">WhatsApp</button>` : ''}
          ${url ? `<button class="btn btn-outline btn-small share-receipt-email" type="button" data-url="${escapeHtml(url)}" data-number="${escapeHtml(item.receiptNumber || '')}">Email</button>` : ''}
        </div>
      </div>`;
  }).join('');
}

function renderPaymentPanel() {
  if (!currentBooking) return;
  const currency = currentBooking.quotedCurrency || currentBooking.quoteDraft?.currency || 'USD';
  const quoteTotal = Number(currentBooking.quotedAmount ?? currentBooking.quoteDraft?.totalAmount ?? 0);
  const history = Array.isArray(currentBooking.paymentHistory) ? currentBooking.paymentHistory : [];
  const paid = Number.isFinite(Number(currentBooking.totalPaid))
    ? Number(currentBooking.totalPaid)
    : sumPayments(history);
  const balance = Math.max(0, quoteTotal - paid);

  paymentQuoteTotal.textContent = quoteTotal > 0 ? money(quoteTotal, currency) : '—';
  paymentTotalPaid.textContent = money(paid, currency);
  paymentBalance.textContent = quoteTotal > 0 ? money(balance, currency) : '—';

  const eligibleStatus = ['Confirmed', 'Paid'].includes(currentBooking.status);
  const fullyPaid = quoteTotal > 0 && balance <= 0.005;
  recordPaymentBtn.disabled = !eligibleStatus || fullyPaid || quoteTotal <= 0;
  paymentAmount.disabled = recordPaymentBtn.disabled;
  paymentMethod.disabled = recordPaymentBtn.disabled;
  paymentDate.disabled = recordPaymentBtn.disabled;
  paymentReference.disabled = recordPaymentBtn.disabled;
  paymentNote.disabled = recordPaymentBtn.disabled;

  paymentState.classList.toggle('paid', fullyPaid || currentBooking.status === 'Paid');
  if (fullyPaid || currentBooking.status === 'Paid') {
    paymentState.textContent = 'Paid in full';
  } else if (!eligibleStatus) {
    paymentState.textContent = 'Confirm booking first';
  } else if (quoteTotal <= 0) {
    paymentState.textContent = 'Quote amount required';
  } else {
    paymentState.textContent = `Recording in ${currency}`;
  }

  if (!paymentDate.value) paymentDate.value = localToday();
  if (!paymentAmount.value && balance > 0) paymentAmount.value = balance.toFixed(2);
  paymentAmount.max = balance > 0 ? balance.toFixed(2) : '';
  renderHistory();
}

async function loadPaymentPanel(bookingId) {
  if (!bookingId) return;
  currentBookingId = bookingId;
  clearNotice();
  paymentState.textContent = 'Loading…';
  try {
    const snapshot = await getDoc(doc(db, 'bookings', bookingId));
    if (!snapshot.exists()) throw new Error('Booking not found');
    currentBooking = { id: snapshot.id, ...snapshot.data() };
    paymentAmount.value = '';
    paymentReference.value = '';
    paymentNote.value = '';
    paymentDate.value = localToday();
    renderPaymentPanel();
  } catch (error) {
    console.error('Could not load payment panel:', error);
    currentBooking = null;
    paymentState.textContent = 'Unavailable';
    recordPaymentBtn.disabled = true;
    setNotice('Could not load payment information for this booking.', 'error');
  }
}

async function recordPayment() {
  if (!currentBookingId || !currentBooking) {
    setNotice('Open the booking again before recording a payment.', 'error');
    return;
  }

  const amount = Number(paymentAmount.value);
  const receivedDate = paymentDate.value;
  if (!Number.isFinite(amount) || amount <= 0) {
    setNotice('Enter a valid payment amount.', 'error');
    return;
  }
  if (!receivedDate) {
    setNotice('Choose the date the payment was received.', 'error');
    return;
  }

  recordPaymentBtn.disabled = true;
  setNotice('Recording payment and creating receipt…', 'info');

  try {
    const bookingRef = doc(db, 'bookings', currentBookingId);
    let createdReceipt = null;

    await runTransaction(db, async transaction => {
      const bookingSnap = await transaction.get(bookingRef);
      if (!bookingSnap.exists()) throw new Error('Booking not found');
      const booking = bookingSnap.data();

      if (!['Confirmed', 'Paid'].includes(booking.status)) {
        throw new Error('The booking must be Confirmed before recording payment.');
      }

      const quoteTotal = Number(booking.quotedAmount ?? booking.quoteDraft?.totalAmount ?? 0);
      if (!Number.isFinite(quoteTotal) || quoteTotal <= 0) {
        throw new Error('A quotation amount is required before recording payment.');
      }

      const history = Array.isArray(booking.paymentHistory) ? booking.paymentHistory : [];
      const totalPaid = Number.isFinite(Number(booking.totalPaid)) ? Number(booking.totalPaid) : sumPayments(history);
      const remaining = Math.max(0, quoteTotal - totalPaid);
      if (remaining <= 0.005) throw new Error('This booking is already paid in full.');
      if (amount > remaining + 0.005) throw new Error(`Payment exceeds the remaining balance of ${money(remaining, booking.quotedCurrency || 'USD')}.`);

      const currency = booking.quotedCurrency || booking.quoteDraft?.currency || 'USD';
      const sequence = history.length + 1;
      const token = secureToken();
      const number = receiptNumber(booking.bookingRef, sequence);
      const url = receiptUrl(token);
      const nowIso = new Date().toISOString();
      const newTotalPaid = Math.min(quoteTotal, totalPaid + amount);
      const newBalance = Math.max(0, quoteTotal - newTotalPaid);
      const fullyPaid = newBalance <= 0.005;
      const paymentRecord = {
        sequence,
        receiptNumber: number,
        receiptToken: token,
        receiptUrl: url,
        amount,
        currency,
        method: clean(paymentMethod.value, 60),
        receivedDate,
        reference: clean(paymentReference.value, 120),
        note: clean(paymentNote.value, 500),
        recordedAt: nowIso,
        recordedBy: auth.currentUser?.email || auth.currentUser?.uid || 'admin'
      };

      const receiptRef = doc(db, 'publicReceipts', token);
      transaction.set(receiptRef, {
        schemaVersion: 1,
        status: 'issued',
        token,
        receiptNumber: number,
        bookingRef: clean(booking.bookingRef, 40),
        quoteNumber: clean(booking.quoteDraft?.quoteNumber || '', 80),
        customerName: clean(booking.fullName, 120),
        experienceName: clean(booking.experienceName, 160),
        travelDate: clean(booking.travelDate, 20),
        travellers: Number(booking.travellers || 1),
        currency,
        paymentAmount: amount,
        paymentMethod: paymentRecord.method,
        paymentReference: paymentRecord.reference,
        receivedDate,
        receiptNote: paymentRecord.note,
        quoteTotal,
        totalPaidAfter: newTotalPaid,
        balanceAfter: newBalance,
        issuedAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      const update = {
        paymentHistory: [...history, paymentRecord],
        totalPaid: newTotalPaid,
        balanceDue: newBalance,
        lastPaymentAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      if (fullyPaid && booking.status !== 'Paid') {
        update.status = 'Paid';
        update.statusHistory = [
          ...(Array.isArray(booking.statusHistory) ? booking.statusHistory : []),
          {
            from: booking.status || 'Confirmed',
            to: 'Paid',
            changedAt: nowIso,
            changedBy: auth.currentUser?.email || auth.currentUser?.uid || 'admin',
            reason: 'Balance paid in full'
          }
        ];
      }

      transaction.update(bookingRef, update);
      createdReceipt = { ...paymentRecord, totalPaidAfter: newTotalPaid, balanceAfter: newBalance };
    });

    await loadPaymentPanel(currentBookingId);
    document.getElementById('refreshBtn')?.click();
    setNotice(`Payment recorded. Receipt ${createdReceipt?.receiptNumber || ''} is ready to share.`, 'success');
  } catch (error) {
    console.error('Payment recording failed:', error);
    setNotice(error?.message || 'Could not record the payment.', 'error');
  } finally {
    renderPaymentPanel();
  }
}

recordPaymentBtn.addEventListener('click', recordPayment);

paymentHistory.addEventListener('click', async event => {
  const copyButton = event.target.closest('.copy-receipt-link');
  if (copyButton) {
    try {
      await copyText(copyButton.dataset.url || '');
      setNotice('Receipt link copied.', 'success');
    } catch (error) {
      console.error(error);
      setNotice('Could not copy the receipt link.', 'error');
    }
    return;
  }

  const whatsappButton = event.target.closest('.share-receipt-whatsapp');
  if (whatsappButton && currentBooking?.phone) {
    const text = encodeURIComponent(
      `Hello ${currentBooking.fullName || ''}, here is your Rigan Roots & Routes payment receipt ${whatsappButton.dataset.number || ''}: ${whatsappButton.dataset.url || ''}`
    );
    window.open(`https://wa.me/${safePhone(currentBooking.phone)}?text=${text}`, '_blank', 'noopener,noreferrer');
    return;
  }

  const emailButton = event.target.closest('.share-receipt-email');
  if (emailButton && currentBooking?.email) {
    const subject = `Rigan payment receipt ${emailButton.dataset.number || ''}`;
    const body = `Hello ${currentBooking.fullName || ''},\n\nYour payment receipt is available here:\n${emailButton.dataset.url || ''}\n\nBooking reference: ${currentBooking.bookingRef || ''}\n\nThank you,\nRigan Roots & Routes`;
    window.location.href = `mailto:${encodeURIComponent(currentBooking.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
});

document.addEventListener('click', event => {
  const button = event.target.closest('.view-booking');
  if (button?.dataset.bookingId) {
    window.setTimeout(() => loadPaymentPanel(button.dataset.bookingId), 0);
  }
});

paymentDate.value = localToday();
