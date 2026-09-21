/* Rigan Roots & Routes — shared runtime bindings.
   Pages can keep their existing markup while global contact/social/booking values
   are sourced from site-config.js. */
(function () {
  function initRiganSiteRuntime() {
    const c = window.riganSiteConfig;
    if (!c) return;

    const digits = String(c.phoneInternational || "").replace(/\D/g, "");
    const tel = "+" + digits;
    const waBase = "https://wa.me/" + digits;

    document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
      a.href = "mailto:" + c.email;
      if (a.textContent.trim().includes("@")) a.textContent = c.email;
    });

    document.querySelectorAll('a[href^="tel:"]').forEach(a => {
      a.href = "tel:" + tel;
      if (/\+?\d[\d\s-]+/.test(a.textContent.trim())) a.textContent = c.phoneDisplay;
    });

    document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
      try {
        const old = new URL(a.href);
        a.href = waBase + (old.search || "");
      } catch (_) {}
    });

    const socialMap = {
      facebook: c.socials && c.socials.facebook,
      instagram: c.socials && c.socials.instagram,
      tiktok: c.socials && c.socials.tiktok
    };
    Object.entries(socialMap).forEach(([name, href]) => {
      if (!href) return;
      document.querySelectorAll('a[href*="' + name + '.com"]').forEach(a => a.href = href);
    });

    document.querySelectorAll("[data-rigan-email]").forEach(el => {
      el.textContent = c.email;
      if (el.tagName === "A") el.href = "mailto:" + c.email;
    });
    document.querySelectorAll("[data-rigan-phone]").forEach(el => {
      el.textContent = c.phoneDisplay;
      if (el.tagName === "A") el.href = "tel:" + tel;
    });
    document.querySelectorAll("[data-rigan-location]").forEach(el => el.textContent = c.location);
    document.querySelectorAll("[data-rigan-brand]").forEach(el => el.textContent = c.brand);
    document.querySelectorAll("[data-rigan-tagline]").forEach(el => el.textContent = c.tagline);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRiganSiteRuntime);
  } else {
    initRiganSiteRuntime();
  }
})();
