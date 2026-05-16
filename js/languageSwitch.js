let translations = {};

async function loadLang(lang) {
  try {
    const res = await fetch(`./locales/${lang}.json`);
    if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
    translations = await res.json();
    localStorage.setItem('lang', lang);
    applyTranslations();
  } catch (err) {
    console.error('Language load failed:', err);
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[key] ?? key;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', translations[key] ?? key);
  });
}

function setLang(lang) {
  loadLang(lang);
}

loadLang(localStorage.getItem('lang') || 'en');
