(() => {
  'use strict';

  function currentLanguage() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || localStorage.getItem('rigan-language') || 'en';
  }

  function createBookingUrl() {
    const current = new URLSearchParams(window.location.search);
    const booking = new URL('/booking/', window.location.href);
    const experience = current.get('experience') || current.get('id');
    const travelDate = document.getElementById('travelDate')?.value;
    const travellers = document.getElementById('travelers')?.value;
    const tripType = document.getElementById('tripType')?.value;
    const lang = currentLanguage();

    if (experience) booking.searchParams.set('experience', experience);
    if (travelDate) booking.searchParams.set('travelDate', travelDate);
    if (travellers) booking.searchParams.set('travellers', travellers);
    if (tripType) booking.searchParams.set('tripType', tripType);
    if (lang && lang !== 'en') booking.searchParams.set('lang', lang);

    return booking.pathname + booking.search;
  }

  function installBookingButton() {
    const pathname = window.location.pathname.replace(/\/+$/, '');
    const isExperienceDetail =
      pathname === '/experiences/detail' ||
      /\/experience-detail-v2\.html$/i.test(pathname);
    if (!isExperienceDetail) return;

    const card = document.querySelector('.booking-card');
    const whatsapp = document.getElementById('whatsappBtn');
    if (!card || !whatsapp || document.getElementById('firebaseBookingBtn')) return;

    const style = document.createElement('style');
    style.textContent = `
      .firebase-booking-btn {
        width: 100%;
        min-height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 9px;
        margin-top: 12px;
        padding: 14px;
        border-radius: 16px;
        background: #174d2f;
        color: #fff;
        font-weight: 900;
        text-align: center;
        text-decoration: none;
        box-shadow: 0 14px 30px rgba(23,77,47,.22);
        transition: transform .2s ease, background .2s ease;
      }
      .firebase-booking-btn:hover { transform: translateY(-2px); background: #0d3822; }
    `;
    document.head.appendChild(style);

    const link = document.createElement('a');
    link.id = 'firebaseBookingBtn';
    link.className = 'firebase-booking-btn';
    link.href = createBookingUrl();
    link.innerHTML = '<i class="fa-solid fa-calendar-check" aria-hidden="true"></i> Book / Request Booking';
    link.addEventListener('click', event => {
      event.preventDefault();
      const url = createBookingUrl();
      if (typeof window.gtag === 'function') {
        const p = new URLSearchParams(window.location.search);
        window.gtag('event', 'booking_cta_click', {
          experience_id: p.get('experience') || p.get('id') || ''
        });
      }
      window.location.href = url;
    });

    whatsapp.insertAdjacentElement('beforebegin', link);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', installBookingButton, { once: true });
  } else {
    installBookingButton();
  }
})();
