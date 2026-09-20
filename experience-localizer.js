(() => {
  'use strict';

  const SUPPORTED = new Set(['ja', 'de', 'hi', 'es']);
  const loaded = new Map();

  function getExperienceId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('experience') || params.get('id') || '';
  }

  function isDetailRoute() {
    const pathname = window.location.pathname.replace(/\/+$/, '');
    return pathname === '/experiences/detail' || /experience-detail-v2\.html$/i.test(pathname);
  }

  function getLanguage() {
    if (window.RiganI18n && typeof window.RiganI18n.getLanguage === 'function') {
      return window.RiganI18n.getLanguage();
    }
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang) return urlLang;
    return localStorage.getItem('rigan-language') || 'en';
  }

  function findBaseExperience(id) {
    if (!window.experienceDataV2 || !id) return null;
    for (const category of Object.values(window.experienceDataV2)) {
      const item = (category.items || []).find(entry => entry.id === id || entry.slug === id);
      if (item) return item;
    }
    return null;
  }

  function normalizeItinerary(itinerary) {
    if (!Array.isArray(itinerary)) return [];
    return itinerary.map((item, index) => {
      if (Array.isArray(item)) return { day: item[0] || `Day ${index + 1}`, text: item[1] || '' };
      return {
        day: item.day || item.title || `Day ${index + 1}`,
        text: item.text || item.description || item.details || ''
      };
    });
  }

  function loadScriptOnce(key, src) {
    if (loaded.has(key)) return loaded.get(key);
    const promise = new Promise((resolve, reject) => {
      const existing = Array.from(document.scripts).find(script => script.src && script.src.endsWith(src));
      if (existing && existing.dataset.riganLoaded === 'true') {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => {
        script.dataset.riganLoaded = 'true';
        resolve();
      };
      script.onerror = () => reject(new Error(`Unable to load file: ${src}`));
      document.head.appendChild(script);
    });
    loaded.set(key, promise);
    return promise;
  }

  async function ensureEnrichment() {
    if (window.experienceEnhancementsV3) return;
    await loadScriptOnce('experience:enrichment', '/experience-enrichment-v3.js');
  }

  async function loadLocale(lang) {
    if (!SUPPORTED.has(lang)) return;

    if (!(window.RiganExperienceLocales && window.RiganExperienceLocales[lang])) {
      await loadScriptOnce(`${lang}:base`, `/experience-locale-${lang}.js`);
    }

    await loadScriptOnce(`${lang}:extra`, `/experience-locale-${lang}-extra.js`);
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }

  function setList(id, items) {
    const el = document.getElementById(id);
    if (!el || !Array.isArray(items) || !items.length) return;
    el.innerHTML = items.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function applyItinerary(items) {
    const target = document.getElementById('itinerary');
    if (!target || !items.length) return;

    target.innerHTML = items.map((item, index) => `
      <div class="itinerary-day ${index === 0 ? 'active' : ''}">
        <button class="day-head" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
          <span>${escapeHtml(item.day)}</span>
          <span class="day-icon">+</span>
        </button>
        <div class="day-body">${escapeHtml(item.text)}</div>
      </div>
    `).join('');

    target.querySelectorAll('.day-head').forEach(button => {
      button.addEventListener('click', () => {
        const day = button.parentElement;
        const isActive = day.classList.toggle('active');
        button.setAttribute('aria-expanded', String(isActive));
      });
    });
  }

  function installTrekFacts(facts) {
    if (!facts || document.querySelector('.trek-facts-panel')) return;
    const infoBar = document.querySelector('#experienceContainer .info-bar');
    if (!infoBar) return;

    if (!document.getElementById('riganTrekFactsStyle')) {
      const style = document.createElement('style');
      style.id = 'riganTrekFactsStyle';
      style.textContent = `
        .trek-facts-panel{margin:0 0 30px;padding:28px;border-radius:28px;background:#fff;box-shadow:0 18px 45px rgba(0,0,0,.08);border:1px solid rgba(23,77,47,.09)}
        .trek-facts-head{display:flex;align-items:end;justify-content:space-between;gap:16px;margin-bottom:20px}
        .trek-facts-head h2{margin:0;color:#174d2f;font-family:"Playfair Display",serif;font-size:30px}
        .trek-facts-head p{margin:0;color:#64748b;font-size:13px;font-weight:700;text-align:right}
        .trek-facts-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
        .trek-fact{padding:17px;border-radius:18px;background:#f8faf7;border:1px solid rgba(23,77,47,.08)}
        .trek-fact strong{display:block;margin-bottom:5px;color:#174d2f;font-size:12px;letter-spacing:.04em;text-transform:uppercase}
        .trek-fact span{display:block;color:#374151;font-weight:700;line-height:1.55}
        .trek-route-note{grid-column:1/-1;padding:18px 20px;border-left:4px solid #9fba6b;border-radius:16px;background:#edf5eb;color:#475467;line-height:1.65}
        @media(max-width:640px){.trek-facts-panel{padding:20px;border-radius:22px}.trek-facts-head{align-items:flex-start;flex-direction:column}.trek-facts-head p{text-align:left}.trek-facts-grid{grid-template-columns:1fr}.trek-route-note{grid-column:auto}}
      `;
      document.head.appendChild(style);
    }

    const panel = document.createElement('section');
    panel.className = 'trek-facts-panel';
    panel.setAttribute('aria-label', 'Trek essentials');
    panel.innerHTML = `
      <div class="trek-facts-head">
        <h2>Trek Essentials</h2>
        <p>Indicative route facts — final logistics are reconfirmed before departure.</p>
      </div>
      <div class="trek-facts-grid">
        <div class="trek-fact"><strong>Maximum Altitude</strong><span>${escapeHtml(facts.maxAltitude || 'Confirm before departure')}</span></div>
        <div class="trek-fact"><strong>Typical Walking</strong><span>${escapeHtml(facts.walking || 'Varies by route')}</span></div>
        <div class="trek-fact"><strong>Accommodation</strong><span>${escapeHtml(facts.accommodation || 'According to package')}</span></div>
        <div class="trek-fact"><strong>Meals</strong><span>${escapeHtml(facts.meals || 'According to package')}</span></div>
        <div class="trek-fact"><strong>Transport</strong><span>${escapeHtml(facts.transport || 'According to route')}</span></div>
        <div class="trek-fact"><strong>Permits</strong><span>${escapeHtml(facts.permits || 'Current requirements apply')}</span></div>
        <div class="trek-fact"><strong>Start / Finish</strong><span>${escapeHtml(facts.startEnd || 'Nepal')}</span></div>
        <div class="trek-route-note"><strong>Route note:</strong> ${escapeHtml(facts.routeNote || 'Final logistics are reconfirmed before departure.')}</div>
      </div>
    `;
    infoBar.insertAdjacentElement('afterend', panel);
  }

  function repairPremiumNavigation() {
    const overviewSection = document.getElementById('overview')?.closest('.section');
    const itinerarySection = document.getElementById('itinerary')?.closest('.section');
    const inclusionsSection = document.getElementById('includes')?.closest('.section');
    const faqSection = document.getElementById('faqBox')?.closest('.section');

    if (overviewSection && !overviewSection.id) overviewSection.id = 'trip-overview';
    if (inclusionsSection && !inclusionsSection.id) inclusionsSection.id = 'trip-inclusions';
    if (faqSection && !faqSection.id) faqSection.id = 'trip-faq';

    const nav = document.querySelector('.trip-quick-nav');
    if (nav) {
      const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
      const mapping = [
        ['Overview', overviewSection?.id || 'trip-overview'],
        ['Itinerary', itinerarySection?.id || 'itinerarySection'],
        ['Included', inclusionsSection?.id || 'trip-inclusions'],
        ['FAQ', faqSection?.id || 'trip-faq']
      ];
      mapping.forEach(([label, id]) => {
        const link = links.find(item => item.textContent.includes(label));
        if (link && id) link.setAttribute('href', `#${id}`);
      });
    }

    const bookingCard = document.getElementById('bookingCard') || document.querySelector('.booking-card');
    if (bookingCard && !document.getElementById('trip-quote')) {
      const anchor = document.createElement('span');
      anchor.id = 'trip-quote';
      anchor.setAttribute('aria-hidden', 'true');
      anchor.style.cssText = 'position:absolute;top:-110px;left:0;width:1px;height:1px;pointer-events:none;';
      if (getComputedStyle(bookingCard).position === 'static') bookingCard.style.position = 'relative';
      bookingCard.prepend(anchor);
    }
  }

  async function applyExperienceLocale() {
    const pathname = window.location.pathname.replace(/\/+$/, '');
    if (pathname !== '/experiences/detail' && !/experience-detail-v2\.html$/i.test(pathname)) return;

    const id = getExperienceId();
    const base = findBaseExperience(id);
    if (!base) return;

    const lang = getLanguage();
    let localized = null;

    if (SUPPORTED.has(lang)) {
      try {
        await loadLocale(lang);
        localized = window.RiganExperienceLocales?.[lang]?.[base.id] || null;
      } catch (error) {
        console.warn(error);
      }
    }

    const data = localized ? { ...base, ...localized } : base;

    setText('title', data.name);
    setText('subtitle', data.subtitle || data.overview || base.subtitle);
    setText('overview', data.overview || data.description || data.subtitle || base.overview);
    setText('style', data.style || base.style);
    setList('bestFor', data.bestFor || base.bestFor);
    setList('highlights', data.highlights || base.highlights);
    setList('goodToKnow', data.goodToKnow || base.goodToKnow);

    const itinerary = localized?.itinerary || normalizeItinerary(base.itinerary);
    applyItinerary(itinerary);
    installTrekFacts(base.trekFacts);
    repairPremiumNavigation();

    if (data.name) document.title = `${data.name} | Rigan Roots & Routes`;
  }

  function scheduleApply() {
    window.requestAnimationFrame(() => window.requestAnimationFrame(applyExperienceLocale));
  }

  if (document.readyState === 'complete') {
    scheduleApply();
  } else {
    document.addEventListener('DOMContentLoaded', scheduleApply, { once: true });
  }

  document.addEventListener('rigan:languagechange', scheduleApply);

  window.RiganExperienceLocalizer = { apply: applyExperienceLocale };
})();