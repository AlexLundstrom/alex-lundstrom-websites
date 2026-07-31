/**
 * Pizzeria Turku - Main JavaScript File
 * Vanilla JS, Clean Architecture & Modern UX Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. Language Translations Dictionary --- */
    const translations = {
        fi: {
            portfolio_back: "← Takaisin Portfolioon",
            meta_title: "Pizzeria Turku | Aito Napolilainen Pizzeria Turussa",
            meta_desc: "Perinteinen napolilainen pizzeria Turussa. Nauti aidosta pizzasta tuoreista raaka-aineista valmistettuna.",
            nav_home: "Etusivu",
            nav_story: "Tarina",
            nav_menu: "Menu",
            nav_reviews: "Arvostelut",
            nav_contact: "Yhteystiedot",
            btn_reserve_header: "Varaa Pöytä",
            hero_rating: "4.9 / 5 Google-arvosteluissa",
            hero_title: "Aitoa napolilaista pizzaa Turun sydämessä",
            hero_subtitle: "Rakkautta, perinteitä ja aitoja makuja. Hitaasti kohotettu taikina ja paistettu 485-asteisessa puu-uunissa.",
            btn_view_menu: "Katso Menu",
            btn_reserve: "Varaa Pöytä",
            hero_badge_title: "Avoinna tänään",
            hero_badge_hours: "11:00 - 22:00",
            hero_tag: "Laadukkaat raaka-aineet",
            story_subtitle: "Meidän Tarinamme",
            story_title: "Intohimona täydellinen napolilainen pizza",
            story_p1: "Pizzeria Turku syntyi rakkaudesta aitoon napolilaiseen ruokakulttuuriin. Haluamme tuoda Napolin tunnelman suoraan Turkuun.",
            story_p2: "Taikinamme kohotetaan vähintään 48 tuntia, mikä tekee pizzapohjasta ilmavan ja pehmeän. Käytämme vain parhaita raaka-aineita.",
            story_exp: "Vuotta kokemusta",
            story_feat1: "Aina tuoreet raaka-aineet",
            story_feat2: "Aito puukäyttöinen uuni",
            story_feat3: "Perinteiset reseptit",
            menu_subtitle: "Suosituimmat Herkut",
            menu_title: "Mestariteoksemme Uunista",
            menu_desc: "Jokainen pizza valmistetaan käsin tilauksesta perinteisellä ammattitaidolla.",
            badge_veg: "Kasvis",
            badge_vegan: "Vegaani",
            pizza_1_desc: "tomaattikastike, mozzarella, tuore basilika, oliiviöljy.",
            pizza_2_desc: "tomaatti, tulinen salami, tuore chili, basilika.",
            pizza_3_desc: "tomaatti, parmankinkku, tuore burrata-juusto, rucola, kirsikkatomaatti.",
            pizza_4_desc: "Valkoinen pohja, pecorino romano, parmigiano reggiano, hunaja.",
            pizza_5_desc: "Mascarpone-pohja, tatteja, tryffeliöljy, tuore rucola, parmesaanilastut.",
            pizza_6_desc: "tomaatti, valkosipuli, oregano, kirsikkatomaatti, tuore basilika, oliiviöljy.",
            btn_full_menu: "Katso Koko Menu (PDF)",
            rev_subtitle: "Asiakkailtamme",
            rev_title: "Mitä Meistä Sanotaan",
            rev_1_text: "\"Turun paras napolilainen pizza ilman epäilystäkään! Pohja on täydellisen kuohkea ja täytteet erittäin laadukkaita.\"",
            rev_2_text: "\"Tunnelma oli kuin Italiassa. Ilmoittivat, että taikinaa kohotetaan 48h ja sen kyllä maistaa. Ehdoton suositus Parma & Burratallle!\"",
            rev_3_text: "\"Ystävällinen palvelu ja upeat viinit pizzan kaveriksi. Varaa pöytä etukäteen, paikka on ansaitusti suosittu.\"",
            cta_title: "Tule kokemaan aito napolilainen elämys",
            cta_desc: "Varmista paikkasi suositussa ravintolassamme tai tilaa noudettavaksi.",
            contact_subtitle: "Tervetuloa Kylään",
            contact_title: "Yhteystiedot & Aukiolo",
            info_address_title: "Osoite",
            info_hours_title: "Aukioloajat",
            info_hours_week: "Ma - To: 11:00 - 21:00",
            info_hours_fri_sat: "Pe - La: 11:00 - 23:00",
            info_hours_sun: "Su: 12:00 - 21:00",
            info_contact_title: "Ota Yhteyttä",
            footer_copy: "© 2025 Pizzeria Turku. Kaikki oikeudet pidätetään.",
            modal_title: "Varaa Pöytä",
            modal_subtitle: "Täytä tiedot ja vahvistamme varauksen sähköpostitse.",
            form_name: "Nimi *",
            form_email: "Sähköposti *",
            form_phone: "Puhelin *",
            form_date: "Päivämäärä *",
            form_time: "Aika *",
            form_guests: "Henkilömäärä *",
            form_notes: "Erityistoiveet / Allergiat",
            btn_submit_reservation: "Vahvista Varaus",
            success_title: "Kiitos varauksestasi!",
            success_desc: "Olemme vastaanottaneet pöytävarauksesi ja lähetämme vahvistuksen sähköpostiisi pian.",
            btn_close: "Sulje"
        },
        en: {
            portfolio_back: "← Back to Portfolio",
            meta_title: "Pizzeria Turku | Authentic Neapolitan Pizzeria in Turku",
            meta_desc: "Traditional Neapolitan pizzeria in Turku. Enjoy authentic wood-fired pizza crafted from fresh ingredients.",
            nav_home: "Home",
            nav_story: "Story",
            nav_menu: "Menu",
            nav_reviews: "Reviews",
            nav_contact: "Contact",
            btn_reserve_header: "Book Table",
            hero_rating: "4.9 / 5 on Google Reviews",
            hero_title: "Authentic Neapolitan Pizza in the Heart of Turku",
            hero_subtitle: "Passion, tradition, and genuine Italian flavors. Slowly proofed dough baked in a 485°C wood-fired oven.",
            btn_view_menu: "View Menu",
            btn_reserve: "Book a Table",
            hero_badge_title: "Open Today",
            hero_badge_hours: "11:00 - 22:00",
            hero_tag: "Italian Ingredients",
            story_subtitle: "Our Story",
            story_title: "Passionate About the Perfect Neapolitan Crust",
            story_p1: "Pizzeria Turku was born out of love for authentic Neapolitan food culture. We bring the rich aromas and cozy atmosphere of Naples directly to Turku.",
            story_p2: "Our dough is proofed for at least 48 hours, making the crust light, airy, and digestible. We use only premium ingredients.",
            story_exp: "Years of Experience",
            story_feat1: "Always Fresh Ingredients",
            story_feat2: "Authentic Wood-Fired Oven",
            story_feat3: "Traditional Recipe",
            menu_subtitle: "Customer Favorites",
            menu_title: "Our Wood-Fired Masterpieces",
            menu_desc: "Every pizza is handcrafted to order with traditional artisanal passion.",
            badge_veg: "Vegetarian",
            badge_vegan: "Vegan",
            pizza_1_desc: "tomato sauce, mozzarella, fresh basil, extra virgin olive oil.",
            pizza_2_desc: "tomato sauce, fior di latte, spicy spianata calabrese salami, fresh chili, basil.",
            pizza_3_desc: "tomato sauce,Parma ham, fresh burrata, arugula, cherry tomatoes.",
            pizza_4_desc: "White base, pecorino romano, parmigiano reggiano, honey.",
            pizza_5_desc: "Mascarpone base, mushrooms, truffle oil, fresh arugula, parmesan.",
            pizza_6_desc: "tomato sauce, garlic, oregano, cherry tomatoes, fresh basil, extra virgin olive oil.",
            btn_full_menu: "View Full Menu (PDF)",
            rev_subtitle: "Testimonials",
            rev_title: "What Our Guests Say",
            rev_1_text: "\"Hands down the best Neapolitan pizza in Turku! The crust is so airy and ingredients are top quality.\"",
            rev_2_text: "\"Felt like stepping into Italy. Knowing the dough is proofed for 48h makes all the difference. Highly recommend Parma & Burrata!\"",
            rev_3_text: "\"Warm friendly service and excelente wine pairings. Make sure to reserve in advance as it fills up fast!\"",
            cta_title: "Come Experience Authentic Neapolitan Pizza",
            cta_desc: "Reserve your table in our cozy restaurant or place an order for takeaway.",
            contact_subtitle: "Visit Us",
            contact_title: "Contact & Opening Hours",
            info_address_title: "Address",
            info_hours_title: "Opening Hours",
            info_hours_week: "Mon - Thu: 11:00 - 21:00",
            info_hours_fri_sat: "Fri - Sat: 11:00 - 23:00",
            info_hours_sun: "Sun: 12:00 - 21:00",
            info_contact_title: "Contact Us",
            footer_copy: "© 2025 Pizzeria Turku. All rights reserved.",
            modal_title: "Book a Table",
            modal_subtitle: "Fill in the details and we will confirm your booking via email.",
            form_name: "Name *",
            form_email: "Email *",
            form_phone: "Phone *",
            form_date: "Date *",
            form_time: "Time *",
            form_guests: "Guests *",
            form_notes: "Special Requests / Allergies",
            btn_submit_reservation: "Confirm Reservation",
            success_title: "Thank you for your reservation!",
            success_desc: "We have received your table booking and will send a confirmation to your email shortly.",
            btn_close: "Close"
        }
    };

    /* --- 2. State & Language Controller --- */
    let currentLang = localStorage.getItem('pizzeria_turku_lang') || 'fi';
    const langBtn = document.getElementById('lang-btn');
    const langFiOpt = langBtn.querySelector('.lang-fi');
    const langEnOpt = langBtn.querySelector('.lang-en');

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('pizzeria_turku_lang', lang);
        document.documentElement.lang = lang;

        // Toggle Active Indicator
        if (lang === 'fi') {
            langFiOpt.classList.add('active');
            langEnOpt.classList.remove('active');
        } else {
            langEnOpt.classList.add('active');
            langFiOpt.classList.remove('active');
        }

        // Translate DOM Elements
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else if (el.tagName === 'META') {
                    el.setAttribute('content', translations[lang][key]);
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    // Language Toggle Click Event
    langBtn.addEventListener('click', () => {
        const newLang = currentLang === 'fi' ? 'en' : 'fi';
        updateLanguage(newLang);
    });

    // Initialize Language
    updateLanguage(currentLang);


    /* --- 3. Mobile Navigation Menu --- */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    }

    hamburgerBtn.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });


    /* --- 4. Sticky Header & Scroll Active Link --- */
    const header = document.getElementById('site-header');
    const sections = document.querySelectorAll('section, footer');

    window.addEventListener('scroll', () => {
        // Sticky Header shadow
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Navigation Highlight on Scroll
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });


    /* --- 5. Scroll Fade-in Animations (IntersectionObserver) --- */
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));


    /* --- 6. Reservation Modal & Form Behaviour --- */
    const modal = document.getElementById('reservation-modal');
    const reserveTriggers = document.querySelectorAll('.reserve-trigger, #header-reserve-btn');
    const closeModalBtns = document.querySelectorAll('[data-close-modal]');
    const reservationForm = document.getElementById('reservation-form');
    const successMsg = document.getElementById('form-success-message');

    function openModal() {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Set minimum date to today
        const dateInput = document.getElementById('res-date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
            if (!dateInput.value) dateInput.value = today;
        }
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        
        // Reset form state after close
        setTimeout(() => {
            reservationForm.classList.remove('hidden');
            successMsg.classList.add('hidden');
            reservationForm.reset();
        }, 300);
    }

    reserveTriggers.forEach(btn => btn.addEventListener('click', openModal));
    closeModalBtns.forEach(btn => btn.addEventListener('click', closeModal));

    // Handle ESC key to close modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Form Submit Handler
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulating API request submit
            const submitBtn = reservationForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                reservationForm.classList.add('hidden');
                successMsg.classList.remove('hidden');
            }, 600);
        });
    }

    /* --- 7. Full Menu Trigger Placeholder --- */
    const fullMenuBtn = document.getElementById('full-menu-btn');
    if (fullMenuBtn) {
        fullMenuBtn.addEventListener('click', () => {
            const alertText = currentLang === 'fi' 
                ? 'Koko menu PDF avautuu tästä.' 
                : 'Full menu PDF will open from here.';
            alert(alertText);
        });
    }
});
