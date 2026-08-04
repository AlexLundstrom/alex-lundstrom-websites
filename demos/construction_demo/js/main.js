/**
 * EXAMPLE INDUSTRIAL SERVICES - MAIN JAVASCRIPT
 * Includes: Language Switcher, Mobile Navigation, Smooth Scrolling, 
 * Scroll Reveal Animations, FAQ Accordion, Contact Form Validation.
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // --- 1. LANGUAGE SWITCHING & STORAGE ---
    const langToggleBtn = document.getElementById('lang-toggle');
    const fiCode = document.querySelector('.lang-fi');
    const enCode = document.querySelector('.lang-en');
    
    // Default language is Finnish
    let currentLang = localStorage.getItem('example_industrial_lang') || 'fi';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('example_industrial_lang', lang);
        document.documentElement.lang = lang;

        // Toggle button UI
        if (lang === 'fi') {
            fiCode.classList.add('active');
            enCode.classList.remove('active');
        } else {
            enCode.classList.add('active');
            fiCode.classList.remove('active');
        }

        // Update Text Content
        const translatableElements = document.querySelectorAll('[data-fi][data-en]');
        translatableElements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                // If element has only text node or needs HTML replace
                if (el.children.length === 0 || el.classList.contains('nav-link')) {
                    el.textContent = text;
                } else {
                    // For buttons with SVG icons, preserve SVG
                    const svg = el.querySelector('svg');
                    if (svg) {
                        el.childNodes.forEach(node => {
                            if (node.nodeType === Node.TEXT_NODE) {
                                node.textContent = text;
                            }
                        });
                    } else {
                        el.textContent = text;
                    }
                }
            }
        });

        // Update Placeholders
        const placeholderElements = document.querySelectorAll('[data-fi-placeholder][data-en-placeholder]');
        placeholderElements.forEach(el => {
            const placeholderText = el.getAttribute(`data-${lang}-placeholder`);
            if (placeholderText) {
                el.placeholder = placeholderText;
            }
        });
    }

    // Initialize Language
    setLanguage(currentLang);

    // Toggle event listener
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'fi' ? 'en' : 'fi';
            setLanguage(newLang);
        });
    }


    // --- 2. HEADER SCROLL STATE ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });


    // --- 3. MOBILE NAVIGATION ---
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('active');
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', !isOpen);
            document.body.style.overflow = isOpen ? 'aria-expanded' : 'hidden';
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            });
        });
    }


    // --- 4. ACTIVE NAVIGATION HIGHLIGHTING ---
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-list a[href*="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll, { passive: true });


    // --- 5. FAQ ACCORDION ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isOpen = faqItem.classList.contains('active');

            // Close other items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const btn = item.querySelector('.faq-question');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });

            // Toggle current item
            if (!isOpen) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });


    // --- 6. SCROLL REVEAL ANIMATION (VANILLA JS INTERSECTION OBSERVER) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal once
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // --- 7. CONTACT FORM VALIDATION & FRONTEND SUBMIT ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;

            // Fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const messageInput = document.getElementById('message');

            // Validation Helper
            const validateField = (input, condition) => {
                const group = input.parentElement;
                if (!condition) {
                    group.classList.add('error');
                    isValid = false;
                } else {
                    group.classList.remove('error');
                }
            };

            // Email Regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            validateField(nameInput, nameInput.value.trim() !== '');
            validateField(emailInput, emailRegex.test(emailInput.value.trim()));
            validateField(phoneInput, phoneInput.value.trim().length >= 5);
            validateField(messageInput, messageInput.value.trim() !== '');

            if (isValid) {
                // Display success status
                const submitBtn = document.getElementById('form-submit-btn');
                submitBtn.disabled = true;

                const successMsg = currentLang === 'fi' 
                    ? 'Kiitos! Tarjouspyyntösi on lähetetty. Otamme yhteyttä pian.' 
                    : 'Thank you! Your quote request has been sent. We will contact you shortly.';

                formStatus.className = 'form-status success';
                formStatus.textContent = successMsg;

                // Reset form
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.disabled = false;
                }, 3000);
            }
        });

        // Clear error on typing
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.parentElement.classList.remove('error');
            });
        });
    }

    // --- 8. FOOTER YEAR UPDATE ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
