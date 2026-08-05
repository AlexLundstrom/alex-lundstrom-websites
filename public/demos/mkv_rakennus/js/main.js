/**
 * Esimerkki - Interactive Functionality
 * Vanilla JavaScript (No External Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Language Toggle & Persistence ---
    const DEFAULT_LANG = 'fi';
    const langFiBtn = document.getElementById('lang-fi-btn');
    const langEnBtn = document.getElementById('lang-en-btn');
    const htmlEl = document.documentElement;

    // Get stored language or default to Finnish
    let currentLang = localStorage.getItem('esimerkki_lang') || DEFAULT_LANG;

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('esimerkki_lang', lang);

        if (lang === 'en') {
            htmlEl.classList.remove('lang-fi');
            htmlEl.classList.add('lang-en');
            htmlEl.setAttribute('lang', 'en');
            
            langFiBtn.classList.remove('active');
            langEnBtn.classList.add('active');
        } else {
            htmlEl.classList.remove('lang-en');
            htmlEl.classList.add('lang-fi');
            htmlEl.setAttribute('lang', 'fi');

            langEnBtn.classList.remove('active');
            langFiBtn.classList.add('active');
        }

        // Update Dynamic Placeholders
        updatePlaceholders(lang);
    }

    function updatePlaceholders(lang) {
        const inputs = document.querySelectorAll('[data-placeholder-fi]');
        inputs.forEach(input => {
            const placeholder = input.getAttribute(`data-placeholder-${lang}`);
            if (placeholder) {
                input.setAttribute('placeholder', placeholder);
            }
        });
    }

    if (langFiBtn && langEnBtn) {
        langFiBtn.addEventListener('click', () => setLanguage('fi'));
        langEnBtn.addEventListener('click', () => setLanguage('en'));
    }

    // Initialize Language
    setLanguage(currentLang);

    // --- 2. Mobile Navigation Toggle ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMobileMenu() {
        const isOpen = navMenu.classList.contains('open');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    function openMobileMenu() {
        navMenu.classList.add('open');
        hamburgerBtn.classList.add('active');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.classList.add('no-scroll');
    }

    function closeMobileMenu() {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu on nav link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // --- 3. Sticky Header Box-Shadow & Active Link Highlighting ---
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');

    function handleScroll() {
        // Sticky Header Shadow
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Highlight Active Section Link
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- 4. FAQ Accordion Functionality ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isOpen = faqItem.classList.contains('active');

            // Close all items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const btn = item.querySelector('.faq-question');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });

            // Open clicked item if it wasn't open
            if (!isOpen) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // --- 5. Contact Form Frontend Behavior ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                showFormStatus(
                    currentLang === 'fi' 
                        ? 'Täytä kaikki pakolliset kentät (*).' 
                        : 'Please fill in all required fields (*).', 
                    'error'
                );
                return;
            }

            // Simulate form submission
            showFormStatus(
                currentLang === 'fi' 
                    ? 'Kiitos! Viestisi on lähetetty onnistuneesti. Otamme yhteyttä pian.' 
                    : 'Thank you! Your message has been sent successfully. We will get back to you soon.', 
                'success'
            );

            contactForm.reset();
        });
    }

    function showFormStatus(text, type) {
        if (!formStatus) return;
        formStatus.textContent = text;
        formStatus.className = `form-status ${type}`;
        
        setTimeout(() => {
            formStatus.className = 'form-status';
            formStatus.textContent = '';
        }, 6000);
    }

    // --- 6. Scroll Animations using IntersectionObserver ---
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animateElements.forEach(el => scrollObserver.observe(el));
    } else {
        // Fallback for older browsers
        animateElements.forEach(el => el.classList.add('in-view'));
    }

    // --- 7. Dynamic Footer Year ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
