import { db } from './firebase-config.js';
import {
  collection,
  doc,
  serverTimestamp,
  setDoc
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const params = new URLSearchParams(window.location.search);
const experienceId = params.get('experience') || params.get('id') || 'custom-nepal-trip';
const language = params.get('lang') || localStorage.getItem('rigan-language') || 'en';

const form = document.getElementById('bookingForm');
const submitButton = document.getElementById('submitBooking');
const messageBox = document.getElementById('formMessage');
const bookingCard = document.getElementById('bookingCard');
const successCard = document.getElementById('successCard');

function clean(value, max = 3000) {
  return String(value || '').replace(/\s+/g, ' ').trim().slice(0, max);
}

function findExperience(id) {
  if (!window.experienceDataV2) return null;
  for (const category of Object.values(window.experienceDataV2)) {
    const item = (category.items || []).find(entry => entry.id === id || entry.slug === id);
    if (item) return item;
  }
  return null;
}

const selected = findExperience(experienceId) || {
  id: experienceId,
  name: 'Custom Nepal Trip',
  subtitle: 'A tailor-made Nepal journey designed around your dates and travel style.',
  duration: 'Flexible',
  location: 'Nepal',
  price: 'Request Quote'
};

function setMinimumDate() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .split('T')[0];
  document.getElementById('travelDate').min = localDate;
}

function prefillFromQuery() {
  const travelDate = params.get('travelDate');
  const travellers = params.get('travellers');
  const tripType = params.get('tripType');
  if (travelDate) document.getElementById('travelDate').value = travelDate;
  if (travellers && /^\d+$/.test(travellers)) document.getElementById('travellers').value = travellers;
  if (tripType) {
    const select = document.getElementById('tripType');
    if ([...select.options].some(option => option.value === tripType)) select.value = tripType;
  }
}

function renderSummary() {
  document.getElementById('experienceName').value = selected.name;
  document.getElementById('summaryTitle').textContent = selected.name;
  document.getElementById('summarySubtitle').textContent = selected.subtitle || selected.overview || 'A customizable Nepal experience.';
  document.getElementById('summaryDuration').textContent = selected.duration || 'Flexible';
  document.getElementById('summaryLocation').textContent = selected.location || 'Nepal';
  document.getElementById('summaryPrice').textContent = selected.price || 'Request Quote';

  const backLink = document.getElementById('backToExperience');
  if (selected.id && selected.id !== 'custom-nepal-trip') {
    const back = new URL('experience-detail-v2.html', window.location.href);
    back.searchParams.set('experience', selected.id);
    if (language !== 'en') back.searchParams.set('lang', language);
    backLink.href = back.pathname + back.search;
  }
}

function setMessage(text, type) {
  messageBox.textContent = text;
  messageBox.className = `form-message ${type}`;
}

function makeReference(docId) {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0')
  ].join('');
  return `RIG-${stamp}-${docId.slice(0, 6).toUpperCase()}`;
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (!document.getElementById('consent').checked) {
    setMessage('Please confirm that we may use your details to respond to this request.', 'error');
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Sending request…';
  setMessage('Securely saving your booking request…', 'info');

  try {
    const bookingDoc = doc(collection(db, 'bookings'));
    const bookingRef = makeReference(bookingDoc.id);
    const travellers = Number.parseInt(document.getElementById('travellers').value, 10);

    const booking = {
      schemaVersion: 1,
      bookingRef,
      status: 'New',
      experienceId: clean(selected.id || experienceId, 120),
      experienceName: clean(selected.name, 160),
      displayedPrice: clean(selected.price || 'Request Quote', 120),
      duration: clean(selected.duration || 'Flexible', 120),
      location: clean(selected.location || 'Nepal', 160),
      fullName: clean(document.getElementById('fullName').value, 120),
      phone: clean(document.getElementById('phone').value, 40),
      email: clean(document.getElementById('email').value, 160),
      nationality: clean(document.getElementById('nationality').value, 80),
      travelDate: clean(document.getElementById('travelDate').value, 20),
      travellers,
      preferredContact: clean(document.getElementById('preferredContact').value, 40),
      tripType: clean(document.getElementById('tripType').value, 60),
      specialRequests: clean(document.getElementById('specialRequests').value, 3000),
      language: clean(language, 10),
      sourceUrl: clean(document.referrer, 500),
      pageUrl: clean(window.location.href, 500),
      consent: true,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    await setDoc(bookingDoc, booking);

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'booking_request_submit', {
        experience_id: booking.experienceId,
        booking_status: 'New',
        traveller_count: travellers
      });
    }

    document.getElementById('bookingReference').textContent = bookingRef;
    document.getElementById('successSummary').textContent = `${selected.name} • ${booking.travelDate} • ${travellers} traveller${travellers === 1 ? '' : 's'}`;

    const waText = encodeURIComponent(
      `Hello Rigan Roots & Routes! I just submitted booking request ${bookingRef} for ${selected.name}. Please help me with availability and the next steps.`
    );
    document.getElementById('successWhatsApp').href = `https://wa.me/9779843322695?text=${waText}`;

    bookingCard.style.display = 'none';
    successCard.style.display = 'block';
    successCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch (error) {
    console.error('Booking submission failed:', error);
    const permissionMessage = error?.code === 'permission-denied'
      ? 'Booking storage is not active yet. Please contact us on WhatsApp while the booking system is being enabled.'
      : 'We could not save your booking request. Please try again or contact us on WhatsApp.';
    setMessage(permissionMessage, 'error');
    submitButton.disabled = false;
    submitButton.textContent = 'Send Booking Request';
  }
});

setMinimumDate();
prefillFromQuery();
renderSummary();
