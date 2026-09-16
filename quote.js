import { db } from './firebase-config.js';
import {
  doc,
  getDoc,
  serverTimestamp,
  writeBatch
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const params = new URLSearchParams(window.location.search);
const token = params.get('token') || '';
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const errorMessage = document.getElementById('errorMessage');
const quoteDocument = document.getElementById('quoteDocument');
const printQuoteBtn = document.getElementById('printQuoteBtn');
const quoteWhatsApp = document.getElementById('quoteWhatsApp');
const acceptanceBox = document.getElementById('acceptanceBox');
const acceptedBox = document.getElementById('acceptedBox');
const acceptedText = document.getElementById('acceptedText');
const acceptedName = document.getElementById('acceptedName');
const acceptTerms = document.getElementById('acceptTerms');
const acceptQuoteBtn = document.getElementById('acceptQuoteBtn');
const acceptanceMessage = document.getElementById('acceptanceMessage');

let quote = null;

function showError(message) {
  loadingState.hidden = true;
  quoteDocument.hidden = true;
  errorMessage.textContent = message;
  errorState.hidden = false;
}

function money(amount, currency) {
  const number = Number(amount);
  if (!Number.isFinite(number)) return '—';
  return `${currency || 'USD'} ${number.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

function setText(id, value, fallback = '—') {
  document.getElementById(id).textContent = value === null || value === undefined || value === '' ? fallback : String(value);
}

function renderList(id, text) {
  const target = document.getElementById(id);
  target.innerHTML = '';
  const items = String(text || '')
    .split(/\r?\n/)
    .map(item => item.trim().replace(/^[-•]\s*/, ''))
    .filter(Boolean);
  if (!items.length) {
    const item = document.createElement('li');
    item.textContent = 'As stated in the final written confirmation.';
    target.appendChild(item);
    return;
  }
  items.forEach(value => {
    const item = document.createElement('li');
    item.textContent = value;
    target.appendChild(item);
  });
}

function setAcceptanceMessage(message, type) {
  acceptanceMessage.textContent = message;
  acceptanceMessage.className = `message show ${type}`;
}

function isExpired(data) {
  if (data.validUntilAt?.toDate) return data.validUntilAt.toDate().getTime() < Date.now();
  if (!data.validUntil) return false;
  const end = new Date(`${data.validUntil}T23:59:59`);
  return !Number.isNaN(end.getTime()) && end.getTime() < Date.now();
}

function renderStatus(data) {
  const statusEl = document.getElementById('quoteStatus');
  const status = String(data.status || 'active').toLowerCase();
  statusEl.className = `status-pill ${status === 'active' ? '' : status}`.trim();
  statusEl.textContent = status === 'active' ? 'Active' : status.charAt(0).toUpperCase() + status.slice(1);
}

function renderQuote(data) {
  quote = data;
  document.title = `${data.quoteNumber || 'Travel Quotation'} | Rigan Roots & Routes`;
  setText('experienceName', data.experienceName, 'Nepal Journey');
  setText('quoteNumber', data.quoteNumber);
  setText('bookingRef', data.bookingRef);
  setText('quoteVersion', data.version);
  renderStatus(data);
  setText('customerName', data.customerName);
  setText('travelDate', data.travelDate);
  setText('travellers', data.travellers);
  setText('tripType', data.tripType);
  setText('duration', data.duration, 'Flexible');
  setText('location', data.location, 'Nepal');
  setText('totalAmount', money(data.totalAmount, data.currency));
  setText('depositAmount', money(data.depositAmount, data.currency));
  setText('balanceAmount', money(data.balanceAmount, data.currency));
  setText('validUntil', data.validUntil);
  document.getElementById('itinerary').textContent = data.itinerary || 'Detailed itinerary to be confirmed in writing.';
  renderList('inclusions', data.inclusions);
  renderList('exclusions', data.exclusions);
  document.getElementById('paymentTerms').textContent = data.paymentTerms || 'Payment terms will be confirmed in writing.';
  document.getElementById('cancellationTerms').textContent = data.cancellationTerms || 'Cancellation and amendment conditions will be confirmed in writing.';
  setText('acceptanceVersion', `Version ${data.version || '—'}`);

  const waText = `Hello Rigan Roots & Routes, I am reviewing quotation ${data.quoteNumber || ''} for ${data.experienceName || 'my Nepal trip'}. Booking reference: ${data.bookingRef || ''}.`;
  quoteWhatsApp.href = `https://wa.me/9779843322695?text=${encodeURIComponent(waText)}`;
  printQuoteBtn.disabled = false;

  const expired = isExpired(data);
  if (data.status === 'accepted') {
    acceptanceBox.hidden = true;
    acceptedBox.hidden = false;
    acceptedText.textContent = data.acceptedName
      ? `Accepted by ${data.acceptedName}. Rigan will continue with the confirmed booking workflow.`
      : 'Your acceptance has been recorded. Rigan will continue with the confirmed booking workflow.';
  } else if (data.status === 'superseded') {
    acceptanceBox.hidden = false;
    acceptQuoteBtn.disabled = true;
    acceptedBox.hidden = true;
    setAcceptanceMessage('This quotation version has been superseded. Please use the newest quotation link sent by Rigan.', 'error');
  } else if (expired) {
    acceptanceBox.hidden = false;
    acceptQuoteBtn.disabled = true;
    acceptedBox.hidden = true;
    setAcceptanceMessage('This quotation has passed its validity date. Contact Rigan for an updated quotation.', 'error');
  } else {
    acceptanceBox.hidden = false;
    acceptedBox.hidden = true;
    acceptQuoteBtn.disabled = false;
  }

  loadingState.hidden = true;
  errorState.hidden = true;
  quoteDocument.hidden = false;
}

async function loadQuote() {
  if (!/^[a-f0-9]{48}$/i.test(token)) {
    showError('This quotation link is invalid. Please ask Rigan Roots & Routes for the latest quotation link.');
    return;
  }
  try {
    const snapshot = await getDoc(doc(db, 'publicQuotes', token));
    if (!snapshot.exists()) {
      showError('This quotation does not exist or is no longer available. Please contact Rigan Roots & Routes.');
      return;
    }
    renderQuote({ id: snapshot.id, ...snapshot.data() });
  } catch (error) {
    console.error('Quote load failed:', error);
    showError('We could not load this quotation. Please try again or contact Rigan Roots & Routes.');
  }
}

async function acceptQuote() {
  if (!quote || quote.status !== 'active' || isExpired(quote)) return;
  const name = acceptedName.value.trim();
  if (name.length < 2) {
    setAcceptanceMessage('Please enter your full name.', 'error');
    acceptedName.focus();
    return;
  }
  if (!acceptTerms.checked) {
    setAcceptanceMessage('Please confirm that you reviewed the quotation before accepting.', 'error');
    return;
  }

  acceptQuoteBtn.disabled = true;
  acceptQuoteBtn.textContent = 'Recording acceptance…';
  setAcceptanceMessage('Securely recording your acceptance…', 'success');

  try {
    const batch = writeBatch(db);
    const publicQuoteRef = doc(db, 'publicQuotes', token);
    const bookingRef = doc(db, 'bookings', quote.bookingId);

    batch.update(publicQuoteRef, {
      status: 'accepted',
      acceptedName: name.slice(0, 120),
      acceptedAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    batch.update(bookingRef, {
      status: 'Confirmed',
      quoteAcceptedName: name.slice(0, 120),
      quoteAcceptedToken: token,
      quoteAcceptedVersion: Number(quote.version || 0),
      quoteAcceptedAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    await batch.commit();
    quote.status = 'accepted';
    quote.acceptedName = name.slice(0, 120);
    renderStatus(quote);
    acceptanceBox.hidden = true;
    acceptedBox.hidden = false;
    acceptedText.textContent = `Accepted by ${name.slice(0, 120)}. Your booking status is now Confirmed. Rigan will contact you with payment and operational next steps.`;
  } catch (error) {
    console.error('Quote acceptance failed:', error);
    acceptQuoteBtn.disabled = false;
    acceptQuoteBtn.textContent = 'Accept Quotation';
    setAcceptanceMessage('We could not record acceptance. The quotation may have been replaced or the booking status may have changed. Please contact Rigan.', 'error');
  }
}

printQuoteBtn.addEventListener('click', () => window.print());
acceptQuoteBtn.addEventListener('click', acceptQuote);
loadQuote();
