(function () {
  'use strict';

  const MEASUREMENT_ID = 'G-0064L0NFLH';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.appendChild(gtagScript);

  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {
    send_page_view: true
  });

  function experienceSlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get('experience') || params.get('id') || '';
  }

  function pagePath() {
    return window.location.pathname + window.location.search;
  }

  function track(eventName, params) {
    window.gtag('event', eventName, Object.assign({
      page_path: pagePath(),
      experience: experienceSlug() || undefined
    }, params || {}));
  }

  function cleanText(node) {
    return String(node && node.textContent ? node.textContent : '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 100);
  }

  document.addEventListener('click', function (event) {
    const origin = event.target;
    if (!(origin instanceof Element)) return;

    const target = origin.closest('a, button');
    if (!target) return;

    const href = String(target.getAttribute('href') || '');
    const text = cleanText(target);
    const lowerText = text.toLowerCase();
    const lowerHref = href.toLowerCase();

    const isWhatsApp =
      lowerHref.includes('wa.me') ||
      lowerHref.includes('whatsapp') ||
      lowerText.includes('whatsapp');

    const isPlanTrip =
      lowerHref.includes('plan.html') ||
      /plan (this|your|trip|journey)/i.test(text);

    const isQuote = lowerText.includes('quote');

    if (isWhatsApp) {
      track('whatsapp_click', {
        link_text: text || undefined
      });
    }

    if (isPlanTrip) {
      track('plan_trip_click', {
        link_text: text || undefined
      });
    }

    if (isQuote) {
      track('quote_request_click', {
        link_text: text || undefined,
        channel: isWhatsApp ? 'whatsapp' : 'website'
      });
    }
  });

  document.addEventListener('submit', function (event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    let eventName = 'enquiry_submit';
    const path = window.location.pathname.toLowerCase();

    if (path.endsWith('/contact.html') || path === '/contact.html') {
      eventName = 'contact_enquiry_submit';
    } else if (path.endsWith('/plan.html') || path === '/plan.html') {
      eventName = 'plan_enquiry_submit';
    } else if (path.includes('experience-detail-v2.html')) {
      eventName = 'package_enquiry_submit';
    }

    track(eventName, {
      form_id: form.id || undefined,
      form_name: form.getAttribute('name') || undefined
    });
  });

  function trackPackageView() {
    if (!window.location.pathname.includes('experience-detail-v2.html')) return;

    const slug = experienceSlug();
    if (!slug) return;

    track('package_view', {
      experience: slug,
      page_title: document.title
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackPackageView, { once: true });
  } else {
    trackPackageView();
  }
})();
