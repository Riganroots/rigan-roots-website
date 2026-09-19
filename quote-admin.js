import { auth, db } from './firebase-config.js';
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  where
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const detailModal = document.getElementById('detailModal');
const detailTitle = document.getElementById('detailTitle');
const quotedAmount = document.getElementById('quotedAmount');
const quotedCurrency = document.getElementById('quotedCurrency');
const quoteDeposit = document.getElementById('quoteDeposit');
const quoteValidUntil = document.getElementById('quoteValidUntil');
const quoteItinerary = document.getElementById('quoteItinerary');
const quoteIncludes = document.getElementById('quoteIncludes');
const quoteExcludes = document.getElementById('quoteExcludes');
const quotePaymentTerms = document.getElementById('quotePaymentTerms');
const quoteCancellationTerms = document.getElementById('quoteCancellationTerms');
const quoteBalance = document.getElementById('quoteBalance');
const quoteVersionLabel = document.getElementById('quoteVersionLabel');
const quoteHistory = document.getElementById('quoteHistory');
const quoteNotice = document.getElementById('quoteNotice');
const quoteLinkText = document.getElementById('quoteLinkText');
const publishQuoteBtn = document.getElementById('publishQuoteBtn');
const openQuoteBtn = document.getElementById('openQuoteBtn');
const copyQuoteLinkBtn = document.getElementById('copyQuoteLinkBtn');
const quoteWhatsAppBtn = document.getElementById('quoteWhatsAppBtn');
const quoteEmailBtn = document.getElementById('quoteEmailBtn');
const loadPackageItineraryBtn = document.getElementById('loadPackageItinerary');

let currentBooking = null;
let currentBookingId = null;
let currentQuoteUrl = '';

document.addEventListener('rigan:booking-status-changed', event => {
  if (!currentBooking || !currentBookingId) return;
  if (event.detail?.id === currentBookingId && event.detail?.status) {
    currentBooking.status = event.detail.status;
  }
});

const DEFAULT_PAYMENT_TERMS = 'A deposit is required to confirm services. The exact payment schedule, payment method, and any applicable bank or card charges will be confirmed in writing before payment.';
const DEFAULT_CANCELLATION_TERMS = 'Cancellation and amendment conditions depend on the confirmed suppliers and services. Any non-refundable permits, flights, hotels, transport, or third-party charges will be identified before payment.';

function setQuoteNotice(text, type = 'info') {
  quoteNotice.textContent = text;
  quoteNotice.className = `notice show ${type}`;
}

function clearQuoteNotice() {
  quoteNotice.textContent = '';
  quoteNotice.className = 'notice';
}

function clean(value, max = 12000) {
  return String(value || '').trim().slice(0, max);
}

function safePhone(phone) {
  return String(phone || '').replace(/[^\d+]/g, '');
}

function secureToken() {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return [...bytes].map(value => value.toString(16).padStart(2, '0')).join('');
}

function publicQuoteUrl(token) {
  const url = new URL('/quote/', window.location.href);
  url.searchParams.set('token', token);
  return url.href;
}

function quoteNumber(bookingRef, version) {
  const base = String(bookingRef || 'RIG-QUOTE').replace(/^RIG-/, '');
  return `Q-${base}-V${version}`;
}

function firstName(value) {
  return String(value || '').trim().split(/\s+/)[0] || 'there';
}

function money(amount, currency) {
  const number = Number(amount);
  if (!Number.isFinite(number)) return '—';
  return `${currency || 'USD'} ${number.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

function findExperience(id) {
  if (!window.experienceDataV2) return null;
  for (const category of Object.values(window.experienceDataV2)) {
    const item = (category.items || []).find(entry => entry.id === id || entry.slug === id);
    if (item) return item;
  }
  return null;
}

function itineraryText(item) {
  const itinerary = item?.itinerary || [];
  if (!Array.isArray(itinerary)) return '';
  return itinerary.map(step => {
    if (typeof step === 'string') return step;
    const day = step.day || step.title || 'Day';
    const text = step.text || step.description || '';
    return `${day}\n${text}`.trim();
  }).join('\n\n');
}

function listText(value) {
  if (!Array.isArray(value)) return '';
  return value.map(item => String(item || '').trim()).filter(Boolean).join('\n');
}

function loadPackageDefaults(force = false) {
  if (!currentBooking) return;
  const item = findExperience(currentBooking.experienceId);
  if (!item) {
    setQuoteNotice('Package details could not be loaded automatically. You can enter the quotation content manually.', 'info');
    return;
  }

  if (force || !quoteItinerary.value.trim()) quoteItinerary.value = itineraryText(item);
  if (force || !quoteIncludes.value.trim()) quoteIncludes.value = listText(item.includes);
  if (force || !quoteExcludes.value.trim()) quoteExcludes.value = listText(item.excludes);
  if (force) setQuoteNotice('Package itinerary and inclusions/exclusions loaded. Review them before publishing.', 'success');
}

function updateBalance() {
  const total = Number(quotedAmount.value);
  const deposit = Number(quoteDeposit.value || 0);
  const currency = quotedCurrency.value || 'USD';
  if (!Number.isFinite(total) || total < 0 || !Number.isFinite(deposit) || deposit < 0) {
    quoteBalance.textContent = 'Balance after deposit: —';
    return;
  }
  quoteBalance.textContent = `Balance after deposit: ${money(Math.max(0, total - deposit), currency)}`;
}

function renderHistory() {
  const history = Array.isArray(currentBooking?.quoteHistory) ? [...currentBooking.quoteHistory] : [];
  history.sort((a, b) => Number(b.version || 0) - Number(a.version || 0));
  quoteHistory.innerHTML = history.slice(0, 6).map(item => {
    const when = item.createdAt ? new Date(item.createdAt).toLocaleString() : '';
    return `<div class="quote-history-item"><strong>Version ${Number(item.version || 0)}</strong> · ${money(item.totalAmount, item.currency)} · valid until ${String(item.validUntil || '—')} ${when ? `· ${when}` : ''}</div>`;
  }).join('');
}

function setQuoteActions(token) {
  currentQuoteUrl = token ? publicQuoteUrl(token) : '';
  const enabled = Boolean(currentQuoteUrl);
  openQuoteBtn.disabled = !enabled;
  copyQuoteLinkBtn.disabled = !enabled;
  quoteWhatsAppBtn.disabled = !enabled || !currentBooking?.phone;
  quoteEmailBtn.disabled = !enabled || !currentBooking?.email;
  quoteLinkText.textContent = currentQuoteUrl ? `Customer quote link: ${currentQuoteUrl}` : '';
}

function populateQuoteBuilder() {
  if (!currentBooking) return;
  clearQuoteNotice();
  const draft = currentBooking.quoteDraft || {};
  quoteDeposit.value = draft.depositAmount ?? '';
  quoteValidUntil.value = draft.validUntil || '';
  quoteItinerary.value = draft.itinerary || '';
  quoteIncludes.value = draft.inclusions || '';
  quoteExcludes.value = draft.exclusions || '';
  quotePaymentTerms.value = draft.paymentTerms || DEFAULT_PAYMENT_TERMS;
  quoteCancellationTerms.value = draft.cancellationTerms || DEFAULT_CANCELLATION_TERMS;
  quoteVersionLabel.textContent = currentBooking.quoteVersion ? `Current version: ${currentBooking.quoteVersion}` : 'No quote yet';
  setQuoteActions(currentBooking.publicQuoteToken || '');
  renderHistory();
  loadPackageDefaults(false);
  updateBalance();
}

async function findBookingByReference(reference) {
  const snapshot = await getDocs(query(collection(db, 'bookings'), where('bookingRef', '==', reference), limit(1)));
  if (snapshot.empty) return null;
  const match = snapshot.docs[0];
  return { id: match.id, ...match.data() };
}

async function loadCurrentBooking() {
  const reference = detailTitle.textContent.trim();
  if (!reference || reference === 'Booking') return;
  try {
    const booking = await findBookingByReference(reference);
    if (!booking) {
      setQuoteNotice('Could not load this booking for quotation.', 'error');
      return;
    }
    currentBooking = booking;
    currentBookingId = booking.id;
    populateQuoteBuilder();
  } catch (error) {
    console.error('Could not load quotation booking:', error);
    setQuoteNotice('Could not load quotation details. Refresh and try again.', 'error');
  }
}

async function supersedeOldQuote(token) {
  if (!token) return;
  const oldRef = doc(db, 'publicQuotes', token);
  const oldSnapshot = await getDoc(oldRef);
  if (!oldSnapshot.exists()) return;
  if (oldSnapshot.data().status === 'accepted') return;
  await updateDoc(oldRef, { status: 'superseded', updatedAt: serverTimestamp() });
}

function validateQuote() {
  const total = Number(quotedAmount.value);
  const deposit = Number(quoteDeposit.value || 0);
  if (!Number.isFinite(total) || total <= 0) return 'Enter the total quoted amount above before publishing.';
  if (!Number.isFinite(deposit) || deposit < 0) return 'Enter a valid deposit amount.';
  if (deposit > total) return 'Deposit cannot be greater than the total quotation.';
  if (!quoteValidUntil.value) return 'Choose a quote validity date.';
  const validUntilDate = new Date(`${quoteValidUntil.value}T23:59:59`);
  if (Number.isNaN(validUntilDate.getTime())) return 'Choose a valid quote validity date.';
  if (validUntilDate.getTime() < Date.now()) return 'The quote validity date must be today or later.';
  if (!quoteItinerary.value.trim()) return 'Add or load an itinerary before publishing.';
  return '';
}

async function publishQuote() {
  if (!currentBooking || !currentBookingId) {
    setQuoteNotice('Open the booking again before publishing a quote.', 'error');
    return;
  }
  const validationError = validateQuote();
  if (validationError) {
    setQuoteNotice(validationError, 'error');
    return;
  }
  if (['Paid', 'Completed', 'Cancelled'].includes(currentBooking.status)) {
    setQuoteNotice(`This booking is ${currentBooking.status}. Change the booking status before publishing a revised quotation.`, 'error');
    return;
  }

  publishQuoteBtn.disabled = true;
  setQuoteNotice('Publishing secure customer quotation…', 'info');

  try {
    const totalAmount = Number(quotedAmount.value);
    const depositAmount = Number(quoteDeposit.value || 0);
    const currency = quotedCurrency.value || 'USD';
    const balanceAmount = Math.max(0, totalAmount - depositAmount);
    const version = Number(currentBooking.quoteVersion || 0) + 1;
    const token = secureToken();
    const number = quoteNumber(currentBooking.bookingRef, version);
    const validUntil = quoteValidUntil.value;
    const validUntilAt = Timestamp.fromDate(new Date(`${validUntil}T23:59:59`));
    const nowIso = new Date().toISOString();

    const quoteDraft = {
      quoteNumber: number,
      version,
      currency,
      totalAmount,
      depositAmount,
      balanceAmount,
      validUntil,
      itinerary: clean(quoteItinerary.value),
      inclusions: clean(quoteIncludes.value),
      exclusions: clean(quoteExcludes.value),
      paymentTerms: clean(quotePaymentTerms.value),
      cancellationTerms: clean(quoteCancellationTerms.value),
      createdAt: nowIso
    };

    await supersedeOldQuote(currentBooking.publicQuoteToken);

    const publicQuote = {
      schemaVersion: 1,
      status: 'active',
      token,
      bookingId: currentBookingId,
      bookingRef: clean(currentBooking.bookingRef, 40),
      quoteNumber: number,
      version,
      customerName: clean(currentBooking.fullName, 120),
      experienceName: clean(currentBooking.experienceName, 160),
      experienceId: clean(currentBooking.experienceId, 120),
      travelDate: clean(currentBooking.travelDate, 20),
      travellers: Number(currentBooking.travellers || 1),
      tripType: clean(currentBooking.tripType, 60),
      duration: clean(currentBooking.duration || '', 120),
      location: clean(currentBooking.location || 'Nepal', 160),
      language: clean(currentBooking.language || 'en', 10),
      currency,
      totalAmount,
      depositAmount,
      balanceAmount,
      validUntil,
      validUntilAt,
      itinerary: quoteDraft.itinerary,
      inclusions: quoteDraft.inclusions,
      exclusions: quoteDraft.exclusions,
      paymentTerms: quoteDraft.paymentTerms,
      cancellationTerms: quoteDraft.cancellationTerms,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    await setDoc(doc(db, 'publicQuotes', token), publicQuote);

    const update = {
      quotedAmount: totalAmount,
      quotedCurrency: currency,
      quoteDraft,
      quoteVersion: version,
      publicQuoteToken: token,
      publicQuoteUrl: publicQuoteUrl(token),
      status: 'Quoted',
      updatedAt: serverTimestamp(),
      quoteHistory: arrayUnion({
        quoteNumber: number,
        version,
        totalAmount,
        currency,
        depositAmount,
        validUntil,
        token,
        createdAt: nowIso,
        createdBy: auth.currentUser?.email || auth.currentUser?.uid || 'admin'
      })
    };

    if (currentBooking.status !== 'Quoted') {
      update.statusHistory = arrayUnion({
        from: currentBooking.status || 'New',
        to: 'Quoted',
        changedAt: nowIso,
        changedBy: auth.currentUser?.email || auth.currentUser?.uid || 'admin',
        reason: 'Quotation published'
      });
    }

    await updateDoc(doc(db, 'bookings', currentBookingId), update);

    currentBooking = {
      ...currentBooking,
      ...update,
      quoteDraft,
      quoteVersion: version,
      publicQuoteToken: token,
      publicQuoteUrl: publicQuoteUrl(token),
      status: 'Quoted',
      quotedAmount: totalAmount,
      quotedCurrency: currency,
      quoteHistory: [...(currentBooking.quoteHistory || []), {
        quoteNumber: number,
        version,
        totalAmount,
        currency,
        depositAmount,
        validUntil,
        token,
        createdAt: nowIso,
        createdBy: auth.currentUser?.email || auth.currentUser?.uid || 'admin'
      }]
    };

    quotedAmount.value = String(totalAmount);
    quotedCurrency.value = currency;
    quoteVersionLabel.textContent = `Current version: ${version}`;
    setQuoteActions(token);
    renderHistory();
    updateBalance();
    setQuoteNotice(`Quote ${number} published. Previous quote links are superseded automatically.`, 'success');
    document.getElementById('refreshBtn')?.click();
  } catch (error) {
    console.error('Quote publish failed:', error);
    setQuoteNotice('Could not publish the quotation. Confirm Firestore rules are updated for Phase 7D and try again.', 'error');
  } finally {
    publishQuoteBtn.disabled = false;
  }
}

async function copyQuoteLink() {
  if (!currentQuoteUrl) return;
  try {
    await navigator.clipboard.writeText(currentQuoteUrl);
    setQuoteNotice('Customer quotation link copied.', 'success');
  } catch (error) {
    console.error(error);
    setQuoteNotice('Could not copy the link. You can copy it from the text shown above.', 'error');
  }
}

function openQuote() {
  if (currentQuoteUrl) window.open(currentQuoteUrl, '_blank', 'noopener,noreferrer');
}

function quoteMessage() {
  if (!currentBooking || !currentQuoteUrl) return '';
  const version = currentBooking.quoteVersion || '';
  return `Hello ${firstName(currentBooking.fullName)}, your Rigan Roots & Routes quotation${version ? ` (version ${version})` : ''} for ${currentBooking.experienceName || 'your Nepal trip'} is ready.\n\nReview, print/save as PDF, and accept it here:\n${currentQuoteUrl}\n\nNo payment is collected through this quotation link.`;
}

function sendQuoteWhatsApp() {
  if (!currentBooking?.phone || !currentQuoteUrl) return;
  const url = `https://wa.me/${safePhone(currentBooking.phone)}?text=${encodeURIComponent(quoteMessage())}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function sendQuoteEmail() {
  if (!currentBooking?.email || !currentQuoteUrl) return;
  const subject = `Rigan quotation ${currentBooking.quoteDraft?.quoteNumber || currentBooking.bookingRef || ''}`;
  window.location.href = `mailto:${encodeURIComponent(currentBooking.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(quoteMessage())}`;
}

const modalObserver = new MutationObserver(() => {
  if (!detailModal.hidden) {
    window.setTimeout(loadCurrentBooking, 0);
  } else {
    currentBooking = null;
    currentBookingId = null;
    currentQuoteUrl = '';
    quoteLinkText.textContent = '';
    clearQuoteNotice();
  }
});
modalObserver.observe(detailModal, { attributes: true, attributeFilter: ['hidden'] });

quotedAmount.addEventListener('input', updateBalance);
quotedCurrency.addEventListener('change', updateBalance);
quoteDeposit.addEventListener('input', updateBalance);
loadPackageItineraryBtn.addEventListener('click', () => loadPackageDefaults(true));
publishQuoteBtn.addEventListener('click', publishQuote);
openQuoteBtn.addEventListener('click', openQuote);
copyQuoteLinkBtn.addEventListener('click', copyQuoteLink);
quoteWhatsAppBtn.addEventListener('click', sendQuoteWhatsApp);
quoteEmailBtn.addEventListener('click', sendQuoteEmail);
