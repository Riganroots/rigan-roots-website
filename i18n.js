(() => {
  'use strict';

  const LANGS = {
    en: { label: 'English', native: 'English' },
    ja: { label: 'Japanese', native: '日本語' },
    de: { label: 'German', native: 'Deutsch' },
    hi: { label: 'Hindi', native: 'हिन्दी' },
    es: { label: 'Spanish', native: 'Español' }
  };

  const translations = {
    ja: {
      'Home': 'ホーム',
      'Experiences': '体験',
      'Regions': '地域',
      'Plan My Trip': '旅行を計画',
      'Plan Your Trip': '旅行を計画',
      'About Us': '私たちについて',
      'Work With Us': '一緒に働く',
      'Contact': 'お問い合わせ',
      'Contact Us': 'お問い合わせ',
      'Explore Experiences': '体験を探す',
      'Explore Nepal': 'ネパールを探訪',
      'View Details': '詳細を見る',
      'Learn More': '詳しく見る',
      'Plan This Trip': 'この旅行を計画',
      'Get Quote on WhatsApp': 'WhatsAppで見積もり',
      'Request Quote': '見積もり依頼',
      'Tailored Quote': 'オーダーメイド見積もり',
      'Send Enquiry': 'お問い合わせを送信',
      'Send Inquiry': 'お問い合わせを送信',
      'Submit': '送信',
      'Name': 'お名前',
      'Full Name': 'お名前',
      'Email': 'メール',
      'Phone': '電話番号',
      'Phone / WhatsApp': '電話 / WhatsApp',
      'Message': 'メッセージ',
      'Duration': '期間',
      'Difficulty': '難易度',
      'Best Season': 'ベストシーズン',
      'Group Size': 'グループ人数',
      'From': '料金',
      'Includes': '含まれるもの',
      'Excludes': '含まれないもの',
      'Itinerary': '日程',
      'Highlights': 'ハイライト',
      'Packing': '持ち物',
      'Good to Know': '知っておきたいこと',
      'Trek Essentials': 'トレッキング基本情報',
      'Maximum Altitude': '最高標高',
      'Walking Time': '歩行時間',
      'Accommodation': '宿泊',
      'Meals': '食事',
      'Transport': '交通',
      'Permits': '許可証',
      'Start / Finish': '出発 / 終了',
      'Route Note': 'ルート注意事項',
      'Back to Experiences': '体験一覧に戻る',
      'Related Experiences': '関連する体験',
      'Custom Plan': 'カスタムプラン',
      'Search': '検索',
      'All': 'すべて',
      'Signature': 'シグネチャー',
      'Village': '村体験',
      'Trek & Mountains': 'トレッキング＆山',
      'Food': '食',
      'Culture': '文化',
      'Wellness': 'ウェルネス',
      'Festivals': '祭り',
      'Adventure': 'アドベンチャー',
      'Language': '言語',
      'Meet Nepal Through Its People': '人々を通してネパールに出会う',
      "You don’t come to Nepal to see. You come to feel.": 'ネパールは「見る」ためではなく、「感じる」ために訪れる場所です。',
      "You don't come to Nepal to see. You come to feel.": 'ネパールは「見る」ためではなく、「感じる」ために訪れる場所です。',
      'Why Rigan Roots & Routes?': 'なぜ Rigan Roots & Routes？',
      'Ready to experience Nepal differently?': 'いつもと違うネパールを体験しませんか？',
      'Start Planning': '計画を始める',
      'Your Name': 'お名前',
      'Your Email': 'メールアドレス',
      'Your Message': 'メッセージ',
      'Choose an experience': '体験を選択',
      'Choose Experience': '体験を選択',
      'Adults': '大人',
      'Children': '子ども',
      'Travel Date': '旅行日',
      'Estimated Budget': '予算目安',
      'Tell us about your trip': 'ご希望の旅行について教えてください'
    },
    de: {
      'Home': 'Startseite',
      'Experiences': 'Erlebnisse',
      'Regions': 'Regionen',
      'Plan My Trip': 'Reise planen',
      'Plan Your Trip': 'Reise planen',
      'About Us': 'Über uns',
      'Work With Us': 'Mit uns arbeiten',
      'Contact': 'Kontakt',
      'Contact Us': 'Kontakt',
      'Explore Experiences': 'Erlebnisse entdecken',
      'Explore Nepal': 'Nepal entdecken',
      'View Details': 'Details ansehen',
      'Learn More': 'Mehr erfahren',
      'Plan This Trip': 'Diese Reise planen',
      'Get Quote on WhatsApp': 'Angebot per WhatsApp',
      'Request Quote': 'Angebot anfordern',
      'Tailored Quote': 'Individuelles Angebot',
      'Send Enquiry': 'Anfrage senden',
      'Send Inquiry': 'Anfrage senden',
      'Submit': 'Senden',
      'Name': 'Name',
      'Full Name': 'Vollständiger Name',
      'Email': 'E-Mail',
      'Phone': 'Telefon',
      'Phone / WhatsApp': 'Telefon / WhatsApp',
      'Message': 'Nachricht',
      'Duration': 'Dauer',
      'Difficulty': 'Schwierigkeit',
      'Best Season': 'Beste Reisezeit',
      'Group Size': 'Gruppengröße',
      'From': 'Ab',
      'Includes': 'Inklusive',
      'Excludes': 'Nicht inklusive',
      'Itinerary': 'Reiseverlauf',
      'Highlights': 'Höhepunkte',
      'Packing': 'Packliste',
      'Good to Know': 'Gut zu wissen',
      'Trek Essentials': 'Trekking-Infos',
      'Maximum Altitude': 'Maximale Höhe',
      'Walking Time': 'Gehzeit',
      'Accommodation': 'Unterkunft',
      'Meals': 'Mahlzeiten',
      'Transport': 'Transport',
      'Permits': 'Genehmigungen',
      'Start / Finish': 'Start / Ende',
      'Route Note': 'Routenhinweis',
      'Back to Experiences': 'Zurück zu den Erlebnissen',
      'Related Experiences': 'Ähnliche Erlebnisse',
      'Custom Plan': 'Individueller Reiseplan',
      'Search': 'Suchen',
      'All': 'Alle',
      'Signature': 'Signature',
      'Village': 'Dorfleben',
      'Trek & Mountains': 'Trekking & Berge',
      'Food': 'Kulinarik',
      'Culture': 'Kultur',
      'Wellness': 'Wellness',
      'Festivals': 'Feste',
      'Adventure': 'Abenteuer',
      'Language': 'Sprache',
      'Meet Nepal Through Its People': 'Nepal durch seine Menschen erleben',
      "You don’t come to Nepal to see. You come to feel.": 'Nach Nepal kommt man nicht nur zum Sehen. Man kommt, um zu fühlen.',
      "You don't come to Nepal to see. You come to feel.": 'Nach Nepal kommt man nicht nur zum Sehen. Man kommt, um zu fühlen.',
      'Why Rigan Roots & Routes?': 'Warum Rigan Roots & Routes?',
      'Ready to experience Nepal differently?': 'Bereit, Nepal anders zu erleben?',
      'Start Planning': 'Planung starten',
      'Your Name': 'Ihr Name',
      'Your Email': 'Ihre E-Mail',
      'Your Message': 'Ihre Nachricht',
      'Choose an experience': 'Erlebnis auswählen',
      'Choose Experience': 'Erlebnis auswählen',
      'Adults': 'Erwachsene',
      'Children': 'Kinder',
      'Travel Date': 'Reisedatum',
      'Estimated Budget': 'Geschätztes Budget',
      'Tell us about your trip': 'Erzählen Sie uns von Ihrer Reise'
    },
    hi: {
      'Home': 'होम',
      'Experiences': 'अनुभव',
      'Regions': 'क्षेत्र',
      'Plan My Trip': 'मेरी यात्रा योजना',
      'Plan Your Trip': 'अपनी यात्रा योजना बनाएं',
      'About Us': 'हमारे बारे में',
      'Work With Us': 'हमारे साथ काम करें',
      'Contact': 'संपर्क',
      'Contact Us': 'संपर्क करें',
      'Explore Experiences': 'अनुभव देखें',
      'Explore Nepal': 'नेपाल देखें',
      'View Details': 'विवरण देखें',
      'Learn More': 'और जानें',
      'Plan This Trip': 'इस यात्रा की योजना बनाएं',
      'Get Quote on WhatsApp': 'WhatsApp पर कोटेशन लें',
      'Request Quote': 'कोटेशन मांगें',
      'Tailored Quote': 'व्यक्तिगत कोटेशन',
      'Send Enquiry': 'पूछताछ भेजें',
      'Send Inquiry': 'पूछताछ भेजें',
      'Submit': 'भेजें',
      'Name': 'नाम',
      'Full Name': 'पूरा नाम',
      'Email': 'ईमेल',
      'Phone': 'फोन',
      'Phone / WhatsApp': 'फोन / WhatsApp',
      'Message': 'संदेश',
      'Duration': 'अवधि',
      'Difficulty': 'कठिनाई',
      'Best Season': 'सबसे अच्छा मौसम',
      'Group Size': 'समूह का आकार',
      'From': 'से शुरू',
      'Includes': 'शामिल',
      'Excludes': 'शामिल नहीं',
      'Itinerary': 'यात्रा कार्यक्रम',
      'Highlights': 'मुख्य आकर्षण',
      'Packing': 'पैकिंग',
      'Good to Know': 'जानने योग्य बातें',
      'Trek Essentials': 'ट्रेक की जरूरी जानकारी',
      'Maximum Altitude': 'अधिकतम ऊंचाई',
      'Walking Time': 'चलने का समय',
      'Accommodation': 'आवास',
      'Meals': 'भोजन',
      'Transport': 'यातायात',
      'Permits': 'परमिट',
      'Start / Finish': 'शुरुआत / समाप्ति',
      'Route Note': 'रूट नोट',
      'Back to Experiences': 'अनुभवों पर वापस जाएं',
      'Related Experiences': 'संबंधित अनुभव',
      'Custom Plan': 'कस्टम योजना',
      'Search': 'खोजें',
      'All': 'सभी',
      'Signature': 'सिग्नेचर',
      'Village': 'गांव',
      'Trek & Mountains': 'ट्रेक और पहाड़',
      'Food': 'भोजन',
      'Culture': 'संस्कृति',
      'Wellness': 'वेलनेस',
      'Festivals': 'त्योहार',
      'Adventure': 'रोमांच',
      'Language': 'भाषा',
      'Meet Nepal Through Its People': 'नेपाल को उसके लोगों के माध्यम से जानें',
      "You don’t come to Nepal to see. You come to feel.": 'आप नेपाल सिर्फ देखने नहीं आते। आप यहां महसूस करने आते हैं।',
      "You don't come to Nepal to see. You come to feel.": 'आप नेपाल सिर्फ देखने नहीं आते। आप यहां महसूस करने आते हैं।',
      'Why Rigan Roots & Routes?': 'Rigan Roots & Routes क्यों?',
      'Ready to experience Nepal differently?': 'नेपाल को एक अलग तरीके से अनुभव करने के लिए तैयार हैं?',
      'Start Planning': 'योजना शुरू करें',
      'Your Name': 'आपका नाम',
      'Your Email': 'आपका ईमेल',
      'Your Message': 'आपका संदेश',
      'Choose an experience': 'एक अनुभव चुनें',
      'Choose Experience': 'अनुभव चुनें',
      'Adults': 'वयस्क',
      'Children': 'बच्चे',
      'Travel Date': 'यात्रा की तारीख',
      'Estimated Budget': 'अनुमानित बजट',
      'Tell us about your trip': 'अपनी यात्रा के बारे में बताएं'
    },
    es: {
      'Home': 'Inicio',
      'Experiences': 'Experiencias',
      'Regions': 'Regiones',
      'Plan My Trip': 'Planificar mi viaje',
      'Plan Your Trip': 'Planifica tu viaje',
      'About Us': 'Sobre nosotros',
      'Work With Us': 'Trabaja con nosotros',
      'Contact': 'Contacto',
      'Contact Us': 'Contáctanos',
      'Explore Experiences': 'Explorar experiencias',
      'Explore Nepal': 'Explorar Nepal',
      'View Details': 'Ver detalles',
      'Learn More': 'Saber más',
      'Plan This Trip': 'Planificar este viaje',
      'Get Quote on WhatsApp': 'Cotizar por WhatsApp',
      'Request Quote': 'Solicitar cotización',
      'Tailored Quote': 'Cotización personalizada',
      'Send Enquiry': 'Enviar consulta',
      'Send Inquiry': 'Enviar consulta',
      'Submit': 'Enviar',
      'Name': 'Nombre',
      'Full Name': 'Nombre completo',
      'Email': 'Correo electrónico',
      'Phone': 'Teléfono',
      'Phone / WhatsApp': 'Teléfono / WhatsApp',
      'Message': 'Mensaje',
      'Duration': 'Duración',
      'Difficulty': 'Dificultad',
      'Best Season': 'Mejor temporada',
      'Group Size': 'Tamaño del grupo',
      'From': 'Desde',
      'Includes': 'Incluye',
      'Excludes': 'No incluye',
      'Itinerary': 'Itinerario',
      'Highlights': 'Destacados',
      'Packing': 'Qué llevar',
      'Good to Know': 'Información útil',
      'Trek Essentials': 'Datos esenciales del trekking',
      'Maximum Altitude': 'Altitud máxima',
      'Walking Time': 'Tiempo de caminata',
      'Accommodation': 'Alojamiento',
      'Meals': 'Comidas',
      'Transport': 'Transporte',
      'Permits': 'Permisos',
      'Start / Finish': 'Inicio / Fin',
      'Route Note': 'Nota de la ruta',
      'Back to Experiences': 'Volver a experiencias',
      'Related Experiences': 'Experiencias relacionadas',
      'Custom Plan': 'Plan personalizado',
      'Search': 'Buscar',
      'All': 'Todas',
      'Signature': 'Signature',
      'Village': 'Aldea',
      'Trek & Mountains': 'Trekking y montañas',
      'Food': 'Gastronomía',
      'Culture': 'Cultura',
      'Wellness': 'Bienestar',
      'Festivals': 'Festivales',
      'Adventure': 'Aventura',
      'Language': 'Idioma',
      'Meet Nepal Through Its People': 'Conoce Nepal a través de su gente',
      "You don’t come to Nepal to see. You come to feel.": 'No vienes a Nepal solo para ver. Vienes para sentir.',
      "You don't come to Nepal to see. You come to feel.": 'No vienes a Nepal solo para ver. Vienes para sentir.',
      'Why Rigan Roots & Routes?': '¿Por qué Rigan Roots & Routes?',
      'Ready to experience Nepal differently?': '¿Listo para vivir Nepal de una forma diferente?',
      'Start Planning': 'Empezar a planificar',
      'Your Name': 'Tu nombre',
      'Your Email': 'Tu correo',
      'Your Message': 'Tu mensaje',
      'Choose an experience': 'Elige una experiencia',
      'Choose Experience': 'Elegir experiencia',
      'Adults': 'Adultos',
      'Children': 'Niños',
      'Travel Date': 'Fecha de viaje',
      'Estimated Budget': 'Presupuesto estimado',
      'Tell us about your trip': 'Cuéntanos sobre tu viaje'
    }
  };

  const normalize = value => String(value || '').replace(/\s+/g, ' ').trim();
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  let currentLang = 'en';
  let observer;

  function getRequestedLanguage() {
    const urlLang = new URLSearchParams(location.search).get('lang');
    if (urlLang && LANGS[urlLang]) return urlLang;
    const saved = localStorage.getItem('rigan-language');
    if (saved && LANGS[saved]) return saved;
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return LANGS[browser] ? browser : 'en';
  }

  function lookup(text, lang) {
    if (lang === 'en') return null;
    const clean = normalize(text);
    if (!clean) return null;
    return translations[lang]?.[clean] || null;
  }

  function translateTextNode(node, lang) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const clean = normalize(source);
    if (!clean) return;
    const translated = lookup(clean, lang);
    if (lang === 'en') {
      node.nodeValue = source;
    } else if (translated) {
      const leading = source.match(/^\s*/)?.[0] || '';
      const trailing = source.match(/\s*$/)?.[0] || '';
      node.nodeValue = leading + translated + trailing;
    } else {
      node.nodeValue = source;
    }
  }

  function translateAttributes(el, lang) {
    const attrs = ['placeholder', 'aria-label', 'title'];
    if (!originalAttrs.has(el)) originalAttrs.set(el, {});
    const saved = originalAttrs.get(el);
    attrs.forEach(attr => {
      if (!el.hasAttribute(attr) && saved[attr] == null) return;
      if (saved[attr] == null) saved[attr] = el.getAttribute(attr) || '';
      const source = saved[attr];
      const translated = lookup(source, lang);
      el.setAttribute(attr, lang === 'en' || !translated ? source : translated);
    });
  }

  function shouldSkip(node) {
    const parent = node.parentElement;
    if (!parent) return true;
    return ['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA'].includes(parent.tagName) ||
      parent.closest('[data-no-translate], .language-switcher');
  }

  function translateSubtree(root, lang) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      if (!shouldSkip(root)) translateTextNode(root, lang);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root, lang);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (!shouldSkip(node)) translateTextNode(node, lang);
      } else {
        translateAttributes(node, lang);
      }
    }
  }

  function updateUrl(lang) {
    const url = new URL(location.href);
    if (lang === 'en') url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    history.replaceState(null, '', url.pathname + url.search + url.hash);
  }

  function updateSwitcher(lang) {
    const button = document.querySelector('.language-switcher__button');
    if (button) {
      button.querySelector('.language-switcher__code').textContent = lang.toUpperCase();
      button.setAttribute('aria-label', `${translations[lang]?.Language || 'Language'}: ${LANGS[lang].native}`);
    }
    document.querySelectorAll('.language-switcher__option').forEach(option => {
      const active = option.dataset.lang === lang;
      option.classList.toggle('is-active', active);
      option.setAttribute('aria-pressed', String(active));
    });
  }

  function setLanguage(lang, { updateHistory = true, track = true } = {}) {
    if (!LANGS[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('rigan-language', lang);
    document.documentElement.lang = lang;
    if (observer) observer.disconnect();
    translateSubtree(document.body, lang);
    if (observer) observer.observe(document.body, { childList: true, subtree: true });
    updateSwitcher(lang);
    if (updateHistory) updateUrl(lang);
    if (track && typeof window.gtag === 'function') {
      window.gtag('event', 'language_change', { language: lang });
    }
    document.dispatchEvent(new CustomEvent('rigan:languagechange', { detail: { language: lang } }));
  }

  function buildSwitcher() {
    const wrapper = document.createElement('div');
    wrapper.className = 'language-switcher';
    wrapper.setAttribute('data-no-translate', 'true');
    wrapper.innerHTML = `
      <button type="button" class="language-switcher__button" aria-haspopup="true" aria-expanded="false">
        <span aria-hidden="true">🌐</span>
        <span class="language-switcher__code">EN</span>
        <span class="language-switcher__chevron" aria-hidden="true">▾</span>
      </button>
      <div class="language-switcher__menu" role="menu" hidden>
        ${Object.entries(LANGS).map(([code, meta]) => `
          <button type="button" class="language-switcher__option" data-lang="${code}" role="menuitem" aria-pressed="false">
            <span>${meta.native}</span><small>${code.toUpperCase()}</small>
          </button>`).join('')}
      </div>`;
    document.body.appendChild(wrapper);

    const button = wrapper.querySelector('.language-switcher__button');
    const menu = wrapper.querySelector('.language-switcher__menu');
    const close = () => {
      menu.hidden = true;
      button.setAttribute('aria-expanded', 'false');
    };
    button.addEventListener('click', event => {
      event.stopPropagation();
      const willOpen = menu.hidden;
      menu.hidden = !willOpen;
      button.setAttribute('aria-expanded', String(willOpen));
    });
    wrapper.querySelectorAll('.language-switcher__option').forEach(option => {
      option.addEventListener('click', () => {
        setLanguage(option.dataset.lang);
        close();
      });
    });
    document.addEventListener('click', event => {
      if (!wrapper.contains(event.target)) close();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') close();
    });
  }

  function init() {
    buildSwitcher();
    observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach(node => translateSubtree(node, currentLang));
      }
    });
    setLanguage(getRequestedLanguage(), { updateHistory: true, track: false });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.RiganI18n = { setLanguage, getLanguage: () => currentLang, languages: LANGS };
})();
