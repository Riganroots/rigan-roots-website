(() => {
  'use strict';

  const SUPPORTED = new Set(['ja', 'de', 'hi', 'es']);
  const loaded = new Map();

  function getExperienceId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('experience') || params.get('id') || '';
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

  function loadLocale(lang) {
    if (!SUPPORTED.has(lang)) return Promise.resolve();
    if (window.RiganExperienceLocales && window.RiganExperienceLocales[lang]) return Promise.resolve();
    if (loaded.has(lang)) return loaded.get(lang);

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `experience-locale-${lang}.js`;
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Unable to load locale: ${lang}`));
      document.head.appendChild(script);
    });

    loaded.set(lang, promise);
    return promise;
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }

  function applyItinerary(items) {
    const rows = Array.from(document.querySelectorAll('#itinerary .itinerary-day'));
    if (!rows.length || !items.length) return;
    rows.forEach((row, index) => {
      const item = items[index];
      if (!item) return;
      const heading = row.querySelector('.day-head span:first-child');
      const body = row.querySelector('.day-body');
      if (heading) heading.textContent = item.day;
      if (body) body.textContent = item.text;
    });
  }

  async function applyExperienceLocale() {
    if (!/experience-detail-v2\.html$/i.test(window.location.pathname)) return;

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

    const itinerary = localized?.itinerary || normalizeItinerary(base.itinerary);
    applyItinerary(itinerary);

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
