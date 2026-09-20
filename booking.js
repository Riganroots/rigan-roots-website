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
const TEAM_NOTIFICATION_ENDPOINT = 'https://formspree.io/f/mbdpwkoz';

const form = document.getElementById('bookingForm');
const submitButton = document.getElementById('submitBooking');
const messageBox = document.getElementById('formMessage');
const bookingCard = document.getElementById('bookingCard');
const successCard = document.getElementById('successCard');
const successNotification = document.getElementById('successNotification');
const copyReferenceButton = document.getElementById('copyReference');
const calendarButton = document.getElementById('calendarButton');
const successEmail = document.getElementById('successEmail');

let lastSuccessfulBooking = null;

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

function restoreDetailBookingDraft() {
  let draft = null;
  try {
    const raw = sessionStorage.getItem('rigan-booking-draft');
    if (!raw) return;
    draft = JSON.parse(raw);
  } catch (error) {
    console.warn('Could not read booking draft:', error);
    sessionStorage.removeItem('rigan-booking-draft');
    return;
  }

  const savedAt = Number(draft?.savedAt || 0);
  const isFresh = savedAt > 0 && Date.now() - savedAt < 30 * 60 * 1000;
  const sameExperience = !draft?.experienceId || draft.experienceId === selected.id || draft.experienceId === experienceId;

  sessionStorage.removeItem('rigan-booking-draft');
  if (!isFresh || !sameExperience) return;

  const setValue = (id, value, max) => {
    const input = document.getElementById(id);
    if (!input || value === null || value === undefined) return;
    input.value = String(value).trim().slice(0, max);
  };

  setValue('fullName', draft.fullName, 120);
  setValue('phone', draft.phone, 40);
  setValue('email', draft.email, 160);
  setValue('specialRequests', draft.specialRequests, 3000);

  if (!params.get('travelDate') && /^\d{4}-\d{2}-\d{2}$/.test(String(draft.travelDate || ''))) {
    setValue('travelDate', draft.travelDate, 20);
  }

  if (!params.get('travellers') && /^\d+$/.test(String(draft.travellers || ''))) {
    const count = Number.parseInt(draft.travellers, 10);
    if (count >= 1 && count <= 100) setValue('travellers', String(count), 3);
  }

  if (!params.get('tripType')) {
    const tripTypeSelect = document.getElementById('tripType');
    if (tripTypeSelect && [...tripTypeSelect.options].some(option => option.value === draft.tripType)) {
      tripTypeSelect.value = draft.tripType;
    }
  }

  const contactSelect = document.getElementById('preferredContact');
  if (contactSelect && [...contactSelect.options].some(option => option.value === draft.preferredContact)) {
    contactSelect.value = draft.preferredContact;
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
    const back = new URL('/experiences/detail/', window.location.href);
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

async function notifyTeam(booking) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 6000);
  const payload = {
    _subject: `New booking request ${booking.bookingRef} — ${booking.experienceName}`,
    booking_reference: booking.bookingRef,
    status: booking.status,
    experience: booking.experienceName,
    traveller_name: booking.fullName,
    phone_whatsapp: booking.phone,
    nationality: booking.nationality || 'Not provided',
    preferred_travel_date: booking.travelDate,
    travellers: String(booking.travellers),
    trip_type: booking.tripType,
    preferred_contact: booking.preferredContact,
    displayed_price: booking.displayedPrice,
    language: booking.language,
    special_requests: booking.specialRequests || 'None',
    page_url: booking.pageUrl
  };

  if (booking.email) payload.email = booking.email;

  try {
    const response = await fetch(TEAM_NOTIFICATION_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    if (!response.ok) throw new Error(`Team notification failed with status ${response.status}`);
    return true;
  } finally {
    window.clearTimeout(timeout);
  }
}

function setSuccessNotification(sent) {
  if (sent) {
    successNotification.textContent = 'Your booking is safely stored and our team has been notified by email.';
    successNotification.classList.remove('warning');
  } else {
    successNotification.textContent = 'Your booking is safely stored. For the fastest follow-up, continue on WhatsApp below.';
    successNotification.classList.add('warning');
  }
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

function addOneDay(dateText) {
  const date = new Date(`${dateText}T00:00:00`);
  date.setDate(date.getDate() + 1);
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0')
  ].join('-');
}

function icsDate(dateText) {
  return String(dateText || '').replaceAll('-', '');
}

function icsEscape(value) {
  return String(value || '')
    .replaceAll('\\', '\\\\')
    .replaceAll('\n', '\\n')
    .replaceAll(',', '\\,')
    .replaceAll(';', '\\;');
}

function downloadCalendarReminder(booking) {
  if (!booking?.travelDate) return;
  const nowStamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const start = icsDate(booking.travelDate);
  const end = icsDate(addOneDay(booking.travelDate));
  const content = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Rigan Roots & Routes//Booking Request//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${icsEscape(booking.bookingRef)}@riganrootsroutes.com`,
    `DTSTAMP:${nowStamp}`,
    `DTSTART;VALUE=DATE:${start}`,
    `DTEND;VALUE=DATE:${end}`,
    `SUMMARY:${icsEscape(`${booking.experienceName} — Rigan travel date`)}`,
    `DESCRIPTION:${icsEscape(`Booking request ${booking.bookingRef}. Preferred travel date only; final trip confirmation and exact schedule are provided separately by Rigan Roots & Routes.`)}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${booking.bookingRef}-travel-date.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

copyReferenceButton.addEventListener('click', async () => {
  if (!lastSuccessfulBooking) return;
  const original = copyReferenceButton.textContent;
  try {
    await copyText(lastSuccessfulBooking.bookingRef);
    copyReferenceButton.textContent = 'Copied ✓';
  } catch (error) {
    console.error('Could not copy booking reference:', error);
    copyReferenceButton.textContent = 'Copy failed';
  }
  window.setTimeout(() => {
    copyReferenceButton.textContent = original;
  }, 1800);
});

calendarButton.addEventListener('click', () => {
  if (lastSuccessfulBooking) downloadCalendarReminder(lastSuccessfulBooking);
});

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
    lastSuccessfulBooking = { ...booking };

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'booking_request_submit', {
        experience_id: booking.experienceId,
        booking_status: 'New',
        traveller_count: travellers
      });
    }

    let teamNotificationSent = false;
    try {
      teamNotificationSent = await notifyTeam(booking);
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'booking_team_notification_sent', {
          experience_id: booking.experienceId
        });
      }
    } catch (notificationError) {
      console.warn('Booking saved but team email notification failed:', notificationError);
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'booking_team_notification_failed', {
          experience_id: booking.experienceId
        });
      }
    }

    document.getElementById('bookingReference').textContent = bookingRef;
    document.getElementById('successSummary').textContent = `${selected.name} • ${booking.travelDate} • ${travellers} traveller${travellers === 1 ? '' : 's'}`;
    setSuccessNotification(teamNotificationSent);

    const waText = encodeURIComponent(
      `Hello Rigan Roots & Routes! I just submitted booking request ${bookingRef} for ${selected.name}. Please help me with availability and the next steps.`
    );
    document.getElementById('successWhatsApp').href = `https://wa.me/9779843322695?text=${waText}`;

    const emailSubject = `My Rigan booking request ${bookingRef}`;
    const emailBody = [
      `Booking reference: ${bookingRef}`,
      `Experience: ${selected.name}`,
      `Preferred travel date: ${booking.travelDate}`,
      `Travellers: ${travellers}`,
      '',
      'This is a booking request reference. Final availability, price and confirmation are provided separately by Rigan Roots & Routes.'
    ].join('\n');
    successEmail.href = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

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
restoreDetailBookingDraft();
renderSummary();
