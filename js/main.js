document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMobileNav();
  initScrollSpy();
  initContactForm();
  setCurrentYear();
});

// Global Language Controller
const LANGUAGE_STORAGE_KEY = 'alex_lundstrom_lang';

function initLanguage() {
  const toggleBtn = document.getElementById('langToggle');
  const initialLang = getStoredLanguage();

  applyLanguage(initialLang, false);
  bindLanguageAwareLinks();

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const nextLang = document.body.classList.contains('lang-fi') ? 'en' : 'fi';
    applyLanguage(nextLang, true);
  });
}

function applyLanguage(lang, persist = true) {
  const normalizedLang = lang === 'fi' ? 'fi' : 'en';
  setLanguageClass(normalizedLang);

  if (persist) {
    persistLanguage(normalizedLang);
  }
}

function getStoredLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'fi' || urlLang === 'en') {
    return urlLang;
  }

  try {
    const storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLang === 'fi' || storedLang === 'en') {
      return storedLang;
    }
  } catch (error) {
    console.warn('Language storage unavailable:', error);
  }

  return 'en';
}

function persistLanguage(lang) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    console.warn('Failed to save language preference:', error);
  }

  const url = new URL(window.location.href);
  if (url.searchParams.get('lang') !== lang) {
    url.searchParams.set('lang', lang);
    history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }
}

function setLanguageClass(lang) {
  const normalizedLang = lang === 'fi' ? 'fi' : 'en';

  document.body.classList.remove('lang-en', 'lang-fi');
  document.body.classList.add(`lang-${normalizedLang}`);
  document.documentElement.lang = normalizedLang;
}

function bindLanguageAwareLinks() {
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) {
      return;
    }

    link.addEventListener('click', (event) => {
      const currentLang = getStoredLanguage();
      if (url.searchParams.get('lang') !== currentLang) {
        event.preventDefault();
        url.searchParams.set('lang', currentLang);
        window.location.href = url.toString();
      }
    });
  });
}

// Mobile Navigation Actions
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  });

  // Close when clicking outside or selecting links
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      toggleBtn.classList.remove('active');
    }
  });

  // Close when selecting links in mobile navigation
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggleBtn.classList.remove('active');
    });
  });
}

// Placeholder for contact form
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successBox = document.getElementById('formSuccess');

  if (!form || !successBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Smooth transition between form visual state
    form.classList.add('hidden');
    successBox.classList.remove('hidden');
  });
}

// Set footer year info
function setCurrentYear() {
  const element = document.getElementById('currentYear');
  if (element) {
    element.textContent = new Date().getFullYear();
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  if (navLinks.length === 0) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120; // offset for sticky navbar

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
