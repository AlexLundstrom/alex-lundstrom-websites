document.addEventListener('DOMContentLoaded', () => {
    // Translation Data Dictionary
    const translations = {
        fi: {
            nav_home: 'Etusivu',
            nav_services: 'Palvelut',
            nav_area: 'Toiminta-alue',
            nav_about: 'Meistä',
            nav_contact: 'Yhteystiedot',
            hero_title: 'Putkityöt ja lämmityspalvelut',
            hero_sub: 'Putkiasennukset, korjaukset ja lämmitysjärjestelmien työt Ruovedellä, Ikaalisissa, Kangasalla ja lähialueilla.',
            hero_btn_quote: 'Pyydä tarjous',
            hero_btn_contact: 'Ota yhteyttä',
            services_title: 'Palvelut',
            services_intro: 'Tarjoamme putki- ja lämmityspalveluita koteihin ja muihin kiinteistöihin.',
            s1_title: 'Putkityöt',
            s1_desc: 'Putkiasennukset, korjaukset ja muut putkityöt.',
            s2_title: 'Lämminvesivaraajat',
            s2_desc: 'Lämminvesivaraajien asennukset ja vaihdot.',
            s3_title: 'Öljypolttimet ja öljysäiliöt',
            s3_desc: 'Öljypolttimiin ja öljysäiliöihin liittyvät työt.',
            s4_title: 'Puhdistamot',
            s4_desc: 'Puhdistamoihin ja jätevesijärjestelmiin liittyvät työt.',
            s5_title: 'Putkiasentaja',
            s5_desc: 'Putkiasentaja kotiin ja muihin kiinteistöihin.',
            area_title: 'Palvelemme lähialueilla',
            area_text: 'Toimimme Ruoveden, Ikaalisten ja Kangasalan alueilla sekä lähikunnissa.',
            area_ruovesi_sub: 'sekä lähikunnat',
            area_ikaalinen_sub: 'sekä lähikunnat',
            area_kangasala_sub: 'sekä lähikunnat',
            about_title: 'Esimerkki',
            about_p1: 'Esimerkki tarjoaa putki- ja lämmityspalveluita kotitalouksille ja muille asiakkaille.',
            about_p2: 'Palveluihin kuuluvat muun muassa putkityöt, lämminvesivaraajat, öljypolttimet, öljysäiliöt ja puhdistamot.',
            contact_cta_title: 'Tarvitsetko putkiasentajaa?',
            contact_cta_text: 'Ota yhteyttä ja kerro, millaista työtä tarvitset.',
            contact_phone_label: 'Puhelin:',
            contact_email_label: 'Sähköposti:',
            contact_area_label: 'Toimialue:',
            contact_area_val: 'Ruovesi, Ikaalinen, Kangasala ja lähialueet',
            btn_call: 'Soita',
            label_name: 'Nimi',
            label_email: 'Sähköposti',
            label_phone: 'Puhelin',
            label_message: 'Viesti',
            ph_name: 'Matti Meikäläinen',
            ph_email: 'matti@esimerkki.fi',
            ph_phone: '040 123 4567',
            ph_message: 'Kuvaile tarvitsemaasi työtä...',
            btn_send: 'Lähetä viesti',
            form_success: 'Kiitos viestistä! Tämä on esimerkkisivusto, joten viestiä ei oikeasti lähetetä.',
            footer_subtitle: 'Putkityöt ja lämmityspalvelut',
            footer_service_areas: 'Ruovesi · Ikaalinen · Kangasala',
            footer_demo_note: 'Esimerkkisivusto – tiedot eivät ole oikeita.'
        },
        en: {
            nav_home: 'Home',
            nav_services: 'Services',
            nav_area: 'Service Area',
            nav_about: 'About Us',
            nav_contact: 'Contact',
            hero_title: 'Plumbing and Heating Services',
            hero_sub: 'Plumbing installations, repairs, and heating system work in Ruovesi, Ikaalinen, Kangasala, and surrounding areas.',
            hero_btn_quote: 'Request a Quote',
            hero_btn_contact: 'Contact Us',
            services_title: 'Services',
            services_intro: 'We offer plumbing and heating services for homes and other properties.',
            s1_title: 'Plumbing Work',
            s1_desc: 'Plumbing installations, repairs, and other plumbing work.',
            s2_title: 'Hot Water Heaters',
            s2_desc: 'Installations and replacements of hot water heaters.',
            s3_title: 'Oil Burners and Oil Tanks',
            s3_desc: 'Work related to oil burners and oil tanks.',
            s4_title: 'Wastewater Treatment',
            s4_desc: 'Work related to wastewater treatment systems.',
            s5_title: 'Plumber',
            s5_desc: 'Plumber for homes and other properties.',
            area_title: 'We Serve Nearby Areas',
            area_text: 'We operate in Ruovesi, Ikaalinen, and Kangasala, as well as nearby municipalities.',
            area_ruovesi_sub: 'and nearby areas',
            area_ikaalinen_sub: 'and nearby areas',
            area_kangasala_sub: 'and nearby areas',
            about_title: 'Esimerkki',
            about_p1: 'Esimerkki provides plumbing and heating services for households and other clients.',
            about_p2: 'Services include plumbing work, hot water heaters, oil burners, oil tanks, and wastewater systems.',
            contact_cta_title: 'Need a Plumber?',
            contact_cta_text: 'Contact us and let us know what kind of work you need.',
            contact_phone_label: 'Phone:',
            contact_email_label: 'Email:',
            contact_area_label: 'Service Area:',
            contact_area_val: 'Ruovesi, Ikaalinen, Kangasala, and nearby areas',
            btn_call: 'Call Us',
            label_name: 'Name',
            label_email: 'Email',
            label_phone: 'Phone',
            label_message: 'Message',
            ph_name: 'John Doe',
            ph_email: 'john@example.com',
            ph_phone: '+358 40 123 4567',
            ph_message: 'Describe the work you need...',
            btn_send: 'Send Message',
            form_success: 'Thank you for your message! This is a demo website, so the message is not actually sent.',
            footer_subtitle: 'Plumbing and Heating Services',
            footer_service_areas: 'Ruovesi · Ikaalinen · Kangasala',
            footer_demo_note: 'Demo website – information is not real.'
        }
    };

    // State Variables
    let currentLang = localStorage.getItem('esimerkki_lang') || 'fi';

    // DOM Elements
    const langToggleBtn = document.getElementById('lang-toggle');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const header = document.getElementById('header');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const navLinks = document.querySelectorAll('.nav-link');

    // Language Switching Logic
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('esimerkki_lang', lang);
        document.documentElement.lang = lang;

        // Translate Text Elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Translate Placeholders
        document.querySelectorAll('[data-i18n-ph]').forEach(element => {
            const key = element.getAttribute('data-i18n-ph');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Update Language Switcher Display
        const langCurrent = document.getElementById('lang-current');
        const langOther = document.getElementById('lang-other');
        if (lang === 'fi') {
            langCurrent.textContent = 'FI';
            langOther.textContent = 'EN';
        } else {
            langCurrent.textContent = 'EN';
            langOther.textContent = 'FI';
        }
    }

    // Language Button Click Handler
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'fi' ? 'en' : 'fi';
            setLanguage(newLang);
        });
    }

    // Initialize Language
    setLanguage(currentLang);

    // Mobile Navigation Toggle
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.setAttribute('aria-expanded', 'false');
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Sticky Header Shadow on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Navigation Highlighting
        let currentSection = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Contact Form Submission Handler (Vanilla Frontend Simulation)
    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic Frontend Validation
            if (contactForm.checkValidity()) {
                formMessage.textContent = translations[currentLang].form_success;
                formMessage.classList.remove('hidden');
                contactForm.reset();

                // Hide message after 8 seconds
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 8000);
            }
        });
    }

    // Vanilla JS Scroll Reveal Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in-element');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        fadeElements.forEach(el => el.classList.add('visible'));
    }
});
