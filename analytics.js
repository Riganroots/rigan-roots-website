(() => {
  'use strict';

  // GitHub Pages serves directory routes through index.html. If somebody opens
  // an explicit index.html address, normalize it back to the clean directory URL.
  if (/\/index\.html$/i.test(window.location.pathname)) {
    const cleanPath = window.location.pathname.replace(/index\.html$/i, '');
    window.location.replace(cleanPath + window.location.search + window.location.hash);
    return;
  }

  const MEASUREMENT_ID = 'G-0064L0NFLH';
  const params = new URLSearchParams(window.location.search);
  const experienceId = params.get('experience') || params.get('id') || '';
  const normalizedPath = window.location.pathname.replace(/\/+$/, '');
  const isExperienceDetail = normalizedPath === '/experiences/detail';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };

  // Analytics only. Advertising storage/signals remain disabled.
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {
    send_page_view: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const loader = document.createElement('script');
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.appendChild(loader);

  const clean = value => String(value || '').replace(/\s+/g, ' ').trim().slice(0, 120);
  const track = (eventName, eventParams = {}) => {
    window.gtag('event', eventName, {
      page_path: window.location.pathname + window.location.search,
      experience_id: experienceId || undefined,
      ...eventParams
    });
  };

  if (isExperienceDetail && experienceId) {
    track('experience_view', {
      page_title: document.title
    });
  }

  document.addEventListener('click', event => {
    const target = event.target.closest('a, button');
    if (!target) return;

    const href = target instanceof HTMLAnchorElement ? (target.getAttribute('href') || '') : '';
    const absoluteHref = target instanceof HTMLAnchorElement ? (target.href || '') : '';
    const label = clean(target.getAttribute('aria-label') || target.textContent || target.title);

    if (/wa\.me|api\.whatsapp\.com|whatsapp:/i.test(absoluteHref || href)) {
      track('whatsapp_click', {
        link_text: label || 'WhatsApp',
        link_url: absoluteHref || href
      });
    }

    if (/(?:^|\/)plan\/(?:\?|$)/i.test(href) || /plan (this )?trip|plan my trip|start planning/i.test(label)) {
      track('plan_trip_click', {
        link_text: label,
        link_url: absoluteHref || href
      });
    }

    if (/quote|enquir|inquir/i.test(label)) {
      track('quote_cta_click', {
        link_text: label,
        link_url: absoluteHref || href
      });
    }

    const experienceMatch = href.match(/\/experiences\/detail\/\?(?:[^#]*&)?(?:experience|id)=([^&#]+)/i);
    if (experienceMatch) {
      track('experience_click', {
        target_experience_id: decodeURIComponent(experienceMatch[1]),
        link_text: label
      });
    }
  });

  document.addEventListener('submit', event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    const action = form.getAttribute('action') || '';
    const formIdentity = clean([form.id, form.name, form.className].filter(Boolean).join(' '));
    const looksLikeEnquiry = /formspree/i.test(action) || /contact|enquir|inquir|quote|plan|booking/i.test(formIdentity);

    track(looksLikeEnquiry ? 'enquiry_submit' : 'form_submit', {
      form_id: clean(form.id || form.name || 'unnamed-form'),
      form_action: clean(action)
    });
  });
})();
