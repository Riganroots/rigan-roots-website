(() => {
  'use strict';

  function isExperienceDetailPage() {
    const pathname = window.location.pathname.replace(/\/+$/, '');
    return pathname === '/experiences/detail';
  }

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

  function injectDetailStyles() {
    if (document.getElementById('riganDetailPremiumStyles')) return;

    const style = document.createElement('style');
    style.id = 'riganDetailPremiumStyles';
    style.textContent = `
      body.rigan-detail-premium {
        background:
          radial-gradient(circle at 12% 8%, rgba(159,186,107,.18), transparent 28%),
          radial-gradient(circle at 88% 22%, rgba(164,106,63,.12), transparent 30%),
          #f7f0e4;
      }

      .rigan-detail-premium .detail-hero {
        min-height: min(760px, 86vh);
        background-position: center;
        isolation: isolate;
      }

      .rigan-detail-premium .detail-hero::after {
        z-index: 0;
        background:
          linear-gradient(to top, rgba(5,24,15,.92) 0%, rgba(5,24,15,.6) 42%, rgba(5,24,15,.16) 78%),
          linear-gradient(110deg, rgba(23,77,47,.34), transparent 56%);
      }

      .rigan-detail-premium .detail-hero::before {
        content: "";
        position: absolute;
        top: 86px;
        left: 2.5%;
        z-index: 1;
        width: 95%;
        height: 90px;
        pointer-events: none;
        opacity: .72;
        background: center / 100% 100% no-repeat
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 110'%3E%3Cpath d='M8 18 Q450 98 892 18' fill='none' stroke='rgba(255,255,255,.55)' stroke-width='2'/%3E%3Cg%3E%3Cpath d='M52 29h36v41l-18 11-18-11z' fill='%233157a4'/%3E%3Cpath d='M108 38h36v40l-18 11-18-11z' fill='%23f4efd9'/%3E%3Cpath d='M164 46h36v39l-18 11-18-11z' fill='%23b83a32'/%3E%3Cpath d='M220 53h36v38l-18 11-18-11z' fill='%233d7b50'/%3E%3Cpath d='M276 59h36v37l-18 11-18-11z' fill='%23d5ad38'/%3E%3Cpath d='M332 64h36v34l-18 9-18-9z' fill='%233157a4'/%3E%3Cpath d='M388 68h36v30l-18 9-18-9z' fill='%23f4efd9'/%3E%3Cpath d='M444 70h36v28l-18 9-18-9z' fill='%23b83a32'/%3E%3Cpath d='M500 68h36v30l-18 9-18-9z' fill='%233d7b50'/%3E%3Cpath d='M556 64h36v34l-18 9-18-9z' fill='%23d5ad38'/%3E%3Cpath d='M612 59h36v37l-18 11-18-11z' fill='%233157a4'/%3E%3Cpath d='M668 53h36v38l-18 11-18-11z' fill='%23f4efd9'/%3E%3Cpath d='M724 46h36v39l-18 11-18-11z' fill='%23b83a32'/%3E%3Cpath d='M780 38h36v40l-18 11-18-11z' fill='%233d7b50'/%3E%3Cpath d='M836 29h36v41l-18 11-18-11z' fill='%23d5ad38'/%3E%3C/g%3E%3C/svg%3E");
      }

      .rigan-detail-premium .hero-inner {
        z-index: 2;
        padding-bottom: 122px;
      }

      .rigan-detail-premium .hero-inner > span {
        border: 1px solid rgba(255,255,255,.26);
        background: rgba(255,255,255,.16);
        color: #fff;
        backdrop-filter: blur(12px);
      }

      .rigan-detail-premium .hero-inner h1 {
        max-width: 1040px;
        text-shadow: 0 10px 32px rgba(0,0,0,.28);
      }

      .rigan-detail-premium .hero-badges small {
        background: rgba(8,32,20,.42);
        border-color: rgba(255,255,255,.26);
        box-shadow: 0 10px 28px rgba(0,0,0,.12);
      }

      .rigan-detail-premium .container {
        margin-top: -82px;
      }

      .rigan-detail-premium .info-bar {
        border: 1px solid rgba(23,77,47,.1);
        border-radius: 32px;
        background: rgba(255,255,255,.96);
        box-shadow: 0 26px 70px rgba(13,56,34,.14);
      }

      .rigan-detail-premium .info-box {
        position: relative;
        min-height: 94px;
        padding: 18px 16px 18px 58px;
        border: 1px solid rgba(23,77,47,.07);
        background: linear-gradient(145deg, #fbfdf9, #f1f7ee);
      }

      .rigan-detail-premium .info-box::before {
        position: absolute;
        top: 21px;
        left: 16px;
        width: 31px;
        height: 31px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: rgba(23,77,47,.09);
        color: #174d2f;
        font-family: "Font Awesome 6 Free";
        font-size: 13px;
        font-weight: 900;
      }

      .rigan-detail-premium .info-box:nth-child(1)::before { content: "\\f017"; }
      .rigan-detail-premium .info-box:nth-child(2)::before { content: "\\f0c0"; }
      .rigan-detail-premium .info-box:nth-child(3)::before { content: "\\f6fc"; }
      .rigan-detail-premium .info-box:nth-child(4)::before { content: "\\f185"; }
      .rigan-detail-premium .info-box:nth-child(5)::before { content: "\\f3c5"; }

      .rigan-detail-premium .trip-quick-nav {
        position: sticky;
        top: 12px;
        z-index: 80;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 30px;
        padding: 9px;
        overflow-x: auto;
        scrollbar-width: none;
        border: 1px solid rgba(23,77,47,.1);
        border-radius: 999px;
        background: rgba(255,255,255,.9);
        box-shadow: 0 14px 38px rgba(13,56,34,.1);
        backdrop-filter: blur(16px);
      }

      .rigan-detail-premium .trip-quick-nav::-webkit-scrollbar { display: none; }

      .rigan-detail-premium .trip-quick-nav a,
      .rigan-detail-premium .trip-quick-nav button {
        flex: 0 0 auto;
        min-height: 42px;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 10px 15px;
        border: 0;
        border-radius: 999px;
        background: transparent;
        color: #174d2f;
        font: inherit;
        font-size: 13px;
        font-weight: 900;
        cursor: pointer;
        white-space: nowrap;
      }

      .rigan-detail-premium .trip-quick-nav a:hover,
      .rigan-detail-premium .trip-quick-nav button:hover {
        background: #edf5eb;
      }

      .rigan-detail-premium .trip-quick-nav .quote-jump {
        margin-left: auto;
        background: #174d2f;
        color: #fff;
      }

      .rigan-detail-premium .main-grid {
        gap: 34px;
      }

      .rigan-detail-premium .content-card,
      .rigan-detail-premium .booking-card {
        border-color: rgba(23,77,47,.09);
        border-radius: 34px;
        box-shadow: 0 24px 64px rgba(13,56,34,.09);
      }

      .rigan-detail-premium .content-card {
        padding: 38px;
      }

      .rigan-detail-premium .section {
        margin-bottom: 52px;
        scroll-margin-top: 92px;
      }

      .rigan-detail-premium .section h2,
      .rigan-detail-premium .custom-strip h2 {
        position: relative;
        padding-bottom: 12px;
      }

      .rigan-detail-premium .section h2::after,
      .rigan-detail-premium .custom-strip h2::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 54px;
        height: 3px;
        border-radius: 999px;
        background: linear-gradient(90deg, #174d2f, #9fba6b);
      }

      .rigan-detail-premium .custom-strip h2::after {
        background: linear-gradient(90deg, #fff, rgba(255,255,255,.36));
      }

      .rigan-detail-premium .gallery-grid {
        gap: 16px;
      }

      .rigan-detail-premium .gallery-main,
      .rigan-detail-premium .gallery-side img {
        border: 1px solid rgba(255,255,255,.7);
        box-shadow: 0 18px 42px rgba(13,56,34,.12);
        transition: transform .35s ease, box-shadow .35s ease;
      }

      .rigan-detail-premium .gallery-main:hover,
      .rigan-detail-premium .gallery-side img:hover {
        transform: scale(1.012);
        box-shadow: 0 24px 54px rgba(13,56,34,.16);
      }

      .rigan-detail-premium .premium-note {
        position: relative;
        padding: 26px 26px 26px 72px;
        border: 1px solid rgba(23,77,47,.1);
        border-left: 0;
        background: linear-gradient(135deg, #edf5eb, #f8fbf6);
        box-shadow: inset 5px 0 0 #174d2f;
      }

      .rigan-detail-premium .premium-note::before {
        content: "\\f005";
        position: absolute;
        top: 26px;
        left: 25px;
        width: 32px;
        height: 32px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: #174d2f;
        color: #fff;
        font-family: "Font Awesome 6 Free";
        font-size: 13px;
        font-weight: 900;
      }

      .rigan-detail-premium #itinerary {
        position: relative;
        padding-left: 32px;
        counter-reset: rigan-day;
      }

      .rigan-detail-premium #itinerary::before {
        content: "";
        position: absolute;
        top: 18px;
        bottom: 18px;
        left: 13px;
        width: 2px;
        border-radius: 999px;
        background: linear-gradient(#174d2f, #9fba6b, rgba(159,186,107,.18));
      }

      .rigan-detail-premium .itinerary-day {
        position: relative;
        counter-increment: rigan-day;
        margin-bottom: 16px;
        overflow: visible;
        border-color: rgba(23,77,47,.11);
        border-radius: 20px;
        background: #fff;
        box-shadow: 0 10px 28px rgba(13,56,34,.055);
      }

      .rigan-detail-premium .itinerary-day::before {
        content: counter(rigan-day);
        position: absolute;
        top: 15px;
        left: -32px;
        z-index: 2;
        width: 28px;
        height: 28px;
        display: grid;
        place-items: center;
        border: 3px solid #f7f0e4;
        border-radius: 50%;
        background: #174d2f;
        color: #fff;
        font-size: 11px;
        font-weight: 900;
        box-shadow: 0 5px 14px rgba(23,77,47,.18);
      }

      .rigan-detail-premium .day-head {
        min-height: 64px;
        border-radius: 20px;
        background: linear-gradient(135deg, #fff, #fbfdf9);
      }

      .rigan-detail-premium .itinerary-day.active .day-head {
        background: #f4f8f1;
      }

      .rigan-detail-premium .included,
      .rigan-detail-premium .excluded {
        border: 1px solid rgba(23,77,47,.09);
        border-radius: 26px;
        box-shadow: 0 12px 34px rgba(13,56,34,.055);
      }

      .rigan-detail-premium .included {
        background: linear-gradient(145deg, #e9fbf0, #f8fff9);
      }

      .rigan-detail-premium .excluded {
        background: linear-gradient(145deg, #fff1f1, #fffafa);
      }

      .rigan-detail-premium .custom-strip {
        position: relative;
        overflow: hidden;
        padding: 34px;
        border: 1px solid rgba(255,255,255,.1);
        box-shadow: 0 20px 48px rgba(23,77,47,.18);
      }

      .rigan-detail-premium .custom-strip::before {
        content: "";
        position: absolute;
        right: -60px;
        bottom: -90px;
        width: 240px;
        height: 240px;
        border: 1px solid rgba(255,255,255,.12);
        border-radius: 50%;
        box-shadow:
          0 0 0 34px rgba(255,255,255,.035),
          0 0 0 68px rgba(255,255,255,.025);
        pointer-events: none;
      }

      .rigan-detail-premium .booking-card {
        top: 82px;
        overflow: hidden;
        padding: 32px;
        background: linear-gradient(180deg, #fff 0%, #fff 78%, #f7faf5 100%);
      }

      .rigan-detail-premium .trip-quote-anchor {
        position: absolute;
        top: -18px;
        left: 0;
        width: 1px;
        height: 1px;
        pointer-events: none;
      }

      .rigan-detail-premium .booking-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: linear-gradient(90deg, #174d2f, #9fba6b, #d4af37);
      }

      .rigan-detail-premium .price {
        font-size: 44px;
        letter-spacing: -.02em;
      }

      .rigan-detail-premium .mode-toggle {
        padding: 5px;
        border-radius: 17px;
        background: #f1f5ef;
      }

      .rigan-detail-premium .mode-btn {
        border: 0;
        border-radius: 13px;
        background: transparent;
      }

      .rigan-detail-premium .mode-btn.active {
        background: #174d2f;
        box-shadow: 0 8px 20px rgba(23,77,47,.18);
      }

      .rigan-detail-premium .mini-list,
      .rigan-detail-premium .availability-box,
      .rigan-detail-premium .trust-box {
        border: 1px solid rgba(23,77,47,.08);
      }

      .rigan-detail-premium .availability-box {
        background: linear-gradient(145deg, #edf5eb, #f8fbf6);
      }

      .rigan-detail-premium .firebase-booking-btn,
      .rigan-detail-premium .inquiry-btn,
      .rigan-detail-premium .whatsapp-direct-btn {
        min-height: 56px;
        border-radius: 18px;
      }

      .rigan-detail-premium .firebase-booking-btn {
        background: linear-gradient(135deg, #174d2f, #2f6b3f);
        box-shadow: 0 15px 32px rgba(23,77,47,.25);
      }

      .rigan-detail-premium .whatsapp-direct-btn {
        background: linear-gradient(135deg, #25d366, #1fb75a);
        box-shadow: 0 13px 28px rgba(37,211,102,.2);
      }

      .rigan-detail-premium .trip-mobile-cta {
        display: none;
      }

      @media (max-width: 1050px) {
        .rigan-detail-premium .trip-quick-nav {
          top: 8px;
        }

        .rigan-detail-premium .booking-card {
          top: 76px;
        }
      }

      @media (max-width: 900px) {
        body.rigan-detail-premium {
          padding-bottom: 82px;
        }

        .rigan-detail-premium .detail-hero {
          min-height: 640px;
        }

        .rigan-detail-premium .detail-hero::before {
          top: 78px;
          left: 1%;
          width: 98%;
          height: 56px;
          opacity: .5;
        }

        .rigan-detail-premium .hero-inner {
          padding-bottom: 92px;
        }

        .rigan-detail-premium .container {
          margin-top: -54px;
        }

        .rigan-detail-premium .trip-quick-nav {
          position: relative;
          top: auto;
          border-radius: 22px;
        }

        .rigan-detail-premium .trip-quick-nav .quote-jump {
          margin-left: 0;
        }

        .rigan-detail-premium .booking-card {
          top: auto;
        }

        .rigan-detail-premium .trip-mobile-cta {
          position: fixed;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1300;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 10px;
          padding: 10px max(14px, env(safe-area-inset-right)) max(10px, env(safe-area-inset-bottom)) max(14px, env(safe-area-inset-left));
          border-top: 1px solid rgba(23,77,47,.1);
          background: rgba(255,255,255,.95);
          box-shadow: 0 -12px 34px rgba(13,56,34,.13);
          backdrop-filter: blur(16px);
        }

        .rigan-detail-premium .trip-mobile-cta button {
          min-height: 52px;
          border: 0;
          border-radius: 16px;
          font: inherit;
          font-weight: 900;
          cursor: pointer;
        }

        .rigan-detail-premium .trip-mobile-cta .mobile-whatsapp {
          background: #e9fbf0;
          color: #116b34;
        }

        .rigan-detail-premium .trip-mobile-cta .mobile-quote {
          background: #174d2f;
          color: #fff;
        }

        .rigan-detail-premium .floating-whatsapp {
          display: none;
        }
      }

      @media (max-width: 640px) {
        .rigan-detail-premium .detail-hero {
          min-height: 610px;
        }

        .rigan-detail-premium .info-bar {
          gap: 10px;
          padding: 12px;
        }

        .rigan-detail-premium .info-box {
          min-height: 92px;
          padding: 46px 12px 12px;
        }

        .rigan-detail-premium .info-box::before {
          top: 11px;
          left: 12px;
        }

        .rigan-detail-premium .content-card {
          padding: 22px;
        }

        .rigan-detail-premium .section {
          margin-bottom: 42px;
        }

        .rigan-detail-premium .premium-note {
          padding: 62px 20px 22px;
        }

        .rigan-detail-premium .premium-note::before {
          top: 20px;
          left: 20px;
        }

        .rigan-detail-premium #itinerary {
          padding-left: 28px;
        }

        .rigan-detail-premium .itinerary-day::before {
          left: -28px;
          width: 25px;
          height: 25px;
        }

        .rigan-detail-premium .custom-strip {
          padding: 28px 22px;
        }
      }

      @media print {
        .rigan-detail-premium .trip-quick-nav,
        .rigan-detail-premium .trip-mobile-cta {
          display: none !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function installSectionAnchors() {
    const anchors = [
      ['overview', 'trip-overview'],
      ['itinerary', 'trip-itinerary'],
      ['includes', 'trip-inclusions'],
      ['faqBox', 'trip-faq']
    ];

    anchors.forEach(([childId, sectionId]) => {
      const child = document.getElementById(childId);
      const section = child?.closest('.section');
      if (section && !section.id) section.id = sectionId;
    });

    const bookingCard = document.querySelector('.booking-card');
    if (bookingCard && !document.getElementById('trip-quote')) {
      const quoteAnchor = document.createElement('span');
      quoteAnchor.id = 'trip-quote';
      quoteAnchor.className = 'trip-quote-anchor';
      quoteAnchor.setAttribute('aria-hidden', 'true');
      bookingCard.prepend(quoteAnchor);
    }
  }

  function bookingSectionTarget() {
    return document.getElementById('trip-quote')
      || document.getElementById('bookingCard')
      || document.querySelector('.booking-card');
  }

  function scrollToElement(element) {
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function installQuickNav() {
    const infoBar = document.querySelector('.info-bar');
    if (!infoBar || document.querySelector('.trip-quick-nav')) return;

    const nav = document.createElement('nav');
    nav.className = 'trip-quick-nav';
    nav.setAttribute('aria-label', 'Trip detail shortcuts');
    nav.innerHTML = `
      <a href="#trip-overview"><i class="fa-regular fa-file-lines" aria-hidden="true"></i> Overview</a>
      <a href="#trip-itinerary"><i class="fa-solid fa-route" aria-hidden="true"></i> Itinerary</a>
      <a href="#trip-inclusions"><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Included</a>
      <a href="#trip-faq"><i class="fa-regular fa-circle-question" aria-hidden="true"></i> FAQ</a>
      <button class="quote-jump" type="button"><i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Request Quote</button>
    `;

    nav.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', event => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        scrollToElement(target);
      });
    });

    nav.querySelector('.quote-jump')?.addEventListener('click', () => {
      scrollToElement(bookingSectionTarget());
    });

    infoBar.insertAdjacentElement('afterend', nav);
  }

  function installMobileConversionBar() {
    if (document.querySelector('.trip-mobile-cta')) return;

    const bar = document.createElement('div');
    bar.className = 'trip-mobile-cta';
    bar.setAttribute('aria-label', 'Trip enquiry actions');
    bar.innerHTML = `
      <button class="mobile-whatsapp" type="button">
        <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp
      </button>
      <button class="mobile-quote" type="button">
        <i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Request Quote
      </button>
    `;

    bar.querySelector('.mobile-whatsapp')?.addEventListener('click', () => {
      const whatsapp = document.getElementById('whatsappBtn');
      if (whatsapp) whatsapp.click();
    });

    bar.querySelector('.mobile-quote')?.addEventListener('click', () => {
      scrollToElement(bookingSectionTarget());
    });

    document.body.appendChild(bar);
  }

  function installDetailPolish() {
    if (!isExperienceDetailPage()) return;

    document.body.classList.add('rigan-detail-premium');
    injectDetailStyles();
    installSectionAnchors();
    installQuickNav();
    installMobileConversionBar();
  }

  function installBookingButton() {
    if (!isExperienceDetailPage()) return;

    const card = document.querySelector('.booking-card');
    const whatsapp = document.getElementById('whatsappBtn');
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm || !card || !whatsapp || document.getElementById('firebaseBookingBtn')) return;

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

  function initializeDetailEnhancements() {
    installDetailPolish();
    installBookingButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDetailEnhancements, { once: true });
  } else {
    initializeDetailEnhancements();
  }
})();