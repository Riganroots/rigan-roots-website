import { db } from './firebase-config.js';
import {
  doc,
  getDoc
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const params = new URLSearchParams(window.location.search);
const token = params.get('token') || '';
const receiptCard = document.getElementById('receiptCard');
const receiptError = document.getElementById('receiptError');
const receiptErrorMessage = document.getElementById('receiptErrorMessage');

function money(amount, currency = 'USD') {
  const number = Number(amount || 0);
  return `${currency} ${Number.isFinite(number) ? number.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}`;
}

function formatTimestamp(value) {
  if (!value) return '—';
  const date = typeof value.toDate === 'function' ? value.toDate() : new Date(value);
  return Number.isNaN(date.getTime()) ? '—' : date.toLocaleString();
}

function setText(id, value) {
  document.getElementById(id).textContent = value || '—';
}

function showError(message) {
  receiptCard.hidden = true;
  receiptError.hidden = false;
  receiptErrorMessage.textContent = message;
}

function renderReceipt(receipt) {
  const currency = receipt.currency || 'USD';
  setText('receiptNumber', receipt.receiptNumber);
  setText('bookingRef', receipt.bookingRef);
  setText('receivedDate', receipt.receivedDate);
  setText('issuedAt', formatTimestamp(receipt.issuedAt));
  setText('customerName', receipt.customerName);
  setText('experienceName', receipt.experienceName);
  setText('travelDate', receipt.travelDate);
  setText('travellers', String(receipt.travellers || '—'));
  setText('paymentAmount', money(receipt.paymentAmount, currency));
  setText('paymentMethod', receipt.paymentMethod || 'Payment');
  setText('paymentReference', receipt.paymentReference || 'Not provided');
  setText('quoteTotal', money(receipt.quoteTotal, currency));
  setText('totalPaidAfter', money(receipt.totalPaidAfter, currency));
  setText('balanceAfter', money(receipt.balanceAfter, currency));

  if (receipt.receiptNote) {
    document.getElementById('receiptNote').textContent = receipt.receiptNote;
    document.getElementById('receiptNoteWrap').hidden = false;
  }

  const waText = encodeURIComponent(`Hello Rigan Roots & Routes, I have a question about receipt ${receipt.receiptNumber || ''} for booking ${receipt.bookingRef || ''}.`);
  document.getElementById('whatsAppSupport').href = `https://wa.me/9779843322695?text=${waText}`;
  document.title = `${receipt.receiptNumber || 'Rigan'} Payment Receipt`;
  receiptError.hidden = true;
  receiptCard.hidden = false;
}

async function loadReceipt() {
  if (!/^[a-f0-9]{48}$/i.test(token)) {
    showError('This receipt link is invalid. Please ask Rigan Roots & Routes for the latest receipt link.');
    return;
  }

  try {
    const snapshot = await getDoc(doc(db, 'publicReceipts', token));
    if (!snapshot.exists()) {
      showError('This receipt could not be found. Please check that you opened the complete receipt link.');
      return;
    }
    const receipt = snapshot.data();
    if (receipt.status !== 'issued') {
      showError('This receipt is no longer available. Please contact Rigan Roots & Routes.');
      return;
    }
    renderReceipt(receipt);
  } catch (error) {
    console.error('Receipt loading failed:', error);
    showError('We could not load this receipt right now. Please try again or contact Rigan Roots & Routes.');
  }
}

document.getElementById('printReceiptBtn').addEventListener('click', () => window.print());
loadReceipt();
