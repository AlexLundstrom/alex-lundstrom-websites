/**
 * Example Waffle Café - JavaScript Functionality
 * Includes: i18n Language Toggle, Mobile Nav, Scroll Animations, Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Internationalization (i18n) Translations --- */
    const translations = {
        fi: {
            "seo.title": "Vohvelikahvila | Makeita ja suolaisia vohveleita Tampereella",
            "seo.description": "Kodikas vohvelikahvila Tampereella. Tarjolla makeita ja suolaisia vohveleita sekä kahvia.",
            "nav.about": "Meistä",
            "nav.signature": "Suositut annokset",
            "nav.menu": "Menu",
            "nav.gallery": "Galleria",
            "nav.reviews": "Arvostelut",
            "nav.visit": "Yhteystiedot",
            "nav.contact": "Yhteydenotto",
            "hero.badge": "Vohveleita joka päivä",
            "hero.title": "Tuoreita vohveleita ja hyvää kahvia",
            "hero.subtitle": "Tarjolla makeita ja suolaisia vohveleita sekä kahvia viihtyisässä kahvilassa.",
            "hero.btnMenu": "Katso menu",
            "hero.btnVisit": "Aukioloajat",
            "about.badgeText": "Paistetaan tuoreena",
            "about.subtitle": "Meistä",
            "about.title": "Tuoreita vohveleita joka päivä",
            "about.p1": "Kahvilassamme tarjoillaan tuoreita vohveleita ja hyvää kahvia rennossa ympäristössä.",
            "about.p2": "Vohvelit paistetaan tilauksesta ja tarjolla on makeita ja suolaisia vaihtoehtoja.",
            "about.f1Title": "Tuoreet vohvelit",
            "about.f1Desc": "Jokainen vohveli paistetaan tilauksesta.",
            "about.f2Title": "Laadukkaat raaka-aineet",
            "about.f2Desc": "Käytämme laadukkaita raaka-aineita päivittäin.",
            "signature.subtitle": "Suosituimmat annokset",
            "signature.title": "Suositut vohvelit",
            "signature.desc": "Muutamia asiakkaiden suosikkeja.",
            "signature.tagSweet": "Makea",
            "signature.tagSavory": "Suolainen",
            "signature.tagDessert": "Jälkiruoka",
            "sig1.title": "Makea",
            "sig1.desc": "Tuoreita metsävadelmia, luomukermavaahtoa, käsintehtyä vaniljakastiketta ja paahdettuja mantelilastuja.",
            "sig2.title": "Suolainen",
            "sig2.desc": "Kylmäsavulohta, ruohosipuli-tuorejuustoa, marinoitua punasipulia, tilliä ja kapriksia rukiisella vohvelipohjalla.",
            "sig3.title": "Suolakinuski & Tumma Suklaa",
            "sig3.desc": "Talon omaa lämmintä suolakinuskikastiketta, artesaanisuklaajäätelöä, tummasuklaahippuja ja tuoreita mansikoita.",
            "menu.subtitle": "Menu",
            "menu.title": "Tutustu menuun",
            "menu.desc": "Kaikki annokset valmistetaan tilauksesta.",
            "menu.tabSweet": "Makeat",
            "menu.tabSavory": "Suolaiset",
            "menu.tabDrinks": "Juomat",
            "mSweet1.title": "Mansikka & kuohukerma",
            "mSweet1.desc": "Aitoa kotimaista mansikkahilloa, tuoreita mansikoita ja vatkattua kuohukermaa.",
            "mSweet2.title": "Omena-Kaneli",
            "mSweet2.desc": "Lämpimiä karamellisoituja omenaviipaleita, kanelia, kauramuru-toppia ja vaniljajäätelöä.",
            "mSweet3.title": "Nutella & Banaani",
            "mSweet3.desc": "Runsaasti täyteläistä Nutellaa, tuoretta banaania ja paahdettuja hasselpähkinöitä.",
            "mSweet4.title": "Mustikka & Valkosuklaa",
            "mSweet4.desc": "Tuoreita metsämustikoita, valkosuklaakastiketta ja kardemummalla maustettua rahkaa.",
            "mSav1.title": "Avokado & kananmuna",
            "mSav1.desc": "Murskattua avokadoa, kananmunaa, chilihiutaleita, rucolaa ja feta-juustoa.",
            "mSav2.title": "Vuohenjuusto & Viikuna",
            "mSav2.desc": "Lämmintä vuohenjuustoa, viikunahilloa, pähkinöitä, pinjansiemeniä ja hunajasiirappia.",
            "mSav3.title": "Nyhtökaura & Pestokastike",
            "mSav3.desc": "Yrttimarinoitua nyhtökauraa, aurinkokuivattua tomaattia, vegaanista pestoa ja versoja.",
            "mSav4.title": "Savuporo & Puolukka",
            "mSav4.desc": "Lapin savupororouhetta, pehmeää puolukkakreemiä, suolakurkkua ja paahdettua sipulia.",
            "mDrink1.title": "Latte",
            "mDrink1.desc": "Paikallisen pienpaahtimon espressoon pohjautuva pehmeä maitokahvi.",
            "mDrink2.title": "Kaakao Vaahterasiirapilla",
            "mDrink2.desc": "Tummasta suklaasta sulatettu kaakao, kermavaahtoa ja aitoa vaahterasiirappia.",
            "mDrink3.title": "Luomutee",
            "mDrink3.desc": "Laaja valikoima irtoteetä, kotimaista hunajaa ja tuoretta sitruunaa.",
            "mDrink4.title": "Karpalo-Omena Limonadi",
            "mDrink4.desc": "Talon oma virkistävä marjalimonadi.",
            "gallery.subtitle": "Kuvia kahvilasta",
            "gallery.title": "Galleria",
            "gallery.desc": "Muutamia kuvia kahvilasta ja annoksista.",
            "gallery.img1": "Kahvilassa",
            "gallery.img2": "Kahvit",
            "gallery.img3": "Sisätilat",
            "gallery.img4": "Vohveliannoksia",
            "reviews.subtitle": "Asiakaspalautteita",
            "reviews.title": "Mitä asiakkaat sanovat",
            "rev1.text": "\"Hyvät vohvelit ja mukava tunnelma. Tulemme varmasti uudelleen.\"",
            "rev1.loc": "Tampere",
            "rev2.text": "\"Mukava kahvila ja hyvä palvelu. Suolainen vohveli oli todella maukas.\"",
            "rev2.loc": "Helsinki",
            "rev3.text": "\"Viihtyisä paikka ja hyvät vohvelit. Käymme varmasti uudelleen.\"",
            "rev3.loc": "Jyväskylä",
            "visit.subtitle": "Yhteystiedot",
            "visit.title": "Tervetuloa",
            "visit.text": "Kahvilamme sijaitsee Tampereella. Tule kahville tai vohveleille ystävien kanssa.",
            "visit.addrTitle": "Osoite",
            "visit.hoursTitle": "Yhteystiedot",
            "visit.hoursWeek": "Ma – Pe: 09:00 – 19:00",
            "visit.hoursSat": "La: 10:00 – 18:00",
            "visit.hoursSun": "Su: 11:00 – 17:00",
            "visit.phoneTitle": "Yhteystiedot",
            "contact.subtitle": "Yhteydenotto",
            "contact.title": "Lähetä viesti",
            "contact.desc": "Voit lähettää meille viestin tällä lomakkeella.",
            "form.nameLabel": "Nimi *",
            "form.namePlaceholder": "Etunimi Sukunimi",
            "form.emailLabel": "Sähköposti *",
            "form.emailPlaceholder": "sähköposti@esimerkki.fi",
            "form.subjectLabel": "Aihe",
            "form.subjectPlaceholder": "Aihe",
            "form.msgLabel": "Viesti *",
            "form.msgPlaceholder": "Kirjoita viesti...",
            "form.submitBtn": "Lähetä Viesti",
            "form.errName": "Kirjoita nimesi.",
            "form.errEmail": "Anna voimassa oleva sähköpostiosoite.",
            "form.errMsg": "Kirjoita viesti.",
            "form.successMsg": "Kiitos viestistäsi! Otamme sinuun yhteyttä mahdollisimman pian.",
            "footer.desc": "Kodikas vohvelikahvila Tampereella. Tarjolla makeita ja suolaisia vohveleita sekä kahvia.",
            "footer.quickLinks": "Linkit",
            "footer.social": "Seuraa",
            "footer.rights": "Esimerkkisivusto."
        },

        en: {
            "seo.title": "Waffle Café | Sweet and Savory Waffles in Tampere",
            "seo.description": "A cozy waffle café in Tampere. Serving sweet and savory waffles and coffee.",
            "nav.about": "About",
            "nav.signature": "Popular Dishes",
            "nav.menu": "Menu",
            "nav.gallery": "Gallery",
            "nav.reviews": "Reviews",
            "nav.visit": "Contact",
            "nav.contact": "Contact",
            "hero.badge": "Waffles Every Day",
            "hero.title": "Fresh waffles and great coffee",
            "hero.subtitle": "Sweet and savory waffles and coffee in a cozy café.",
            "hero.btnMenu": "See menu",
            "hero.btnVisit": "Hours",
            "about.badgeText": "Freshly baked",
            "about.subtitle": "About",
            "about.title": "Waffles every day",
            "about.p1": "We serve fresh waffles and great coffee in a relaxed setting.",
            "about.p2": "Waffles are cooked to order with sweet and savory options.",
            "about.f1Title": "Fresh waffles",
            "about.f1Desc": "Each waffle is made to order.",
            "about.f2Title": "Quality ingredients",
            "about.f2Desc": "We use quality ingredients every day.",
            "signature.subtitle": "Popular dishes",
            "signature.title": "Popular waffles",
            "signature.desc": "Some guest favorites.",
            "signature.tagSweet": "Sweet",
            "signature.tagSavory": "Savory",
            "signature.tagDessert": "Dessert",
            "sig1.title": "Nordic Dream",
            "sig1.desc": "Fresh wild raspberries, organic whipped cream, house-made vanilla sauce, and toasted almond flakes.",
            "sig2.title": "Tampere Archipelago",
            "sig2.desc": "Cold-smoked salmon, chive cream cheese, pickled red onions, fresh dill, and capers on a rye waffle base.",
            "sig3.title": "Salted Caramel & Dark Chocolate",
            "sig3.desc": "Warm salted caramel sauce, artisan chocolate ice cream, dark chocolate chips, and fresh strawberries.",
            "menu.subtitle": "Menu",
            "menu.title": "Browse the menu",
            "menu.desc": "All dishes are made to order.",
            "menu.tabSweet": "Sweet",
            "menu.tabSavory": "Savory",
            "menu.tabDrinks": "Drinks",
            "mSweet1.title": "Classic Strawberry & Cream",
            "mSweet1.desc": "Authentic Finnish strawberry jam, fresh strawberries, and fluffy whipped cream.",
            "mSweet2.title": "Apple Cinnamon Delight",
            "mSweet2.desc": "Warm caramelized apple slices, cinnamon, oat crumble topping, and vanilla ice cream.",
            "mSweet3.title": "Nutella & Sliced Banana",
            "mSweet3.desc": "Generous spread of creamy Nutella, fresh banana slices, and roasted hazelnuts.",
            "mSweet4.title": "Blueberry & White Chocolate",
            "mSweet4.desc": "Fresh wild blueberries, white chocolate drizzle, and cardamom-infused quark cream.",
            "mSav1.title": "Avocado & Poached Egg",
            "mSav1.desc": "Smashed avocado, free-range poached egg, chili flakes, fresh arugula, and crumbled feta cheese.",
            "mSav2.title": "Warm Goat Cheese & Fig",
            "mSav2.desc": "Warm goat cheese, fig preserve, walnuts, pine nuts, and a drizzle of honey.",
            "mSav3.title": "Pulled Oats & Pesto",
            "mSav3.desc": "Herb-marinated pulled oats, sun-dried tomatoes, vegan pesto, and fresh microgreens.",
            "mSav4.title": "Smoked Reindeer & Lingonberry",
            "mSav4.desc": "Lapland smoked reindeer flakes, soft lingonberry cream, dill pickles, and crispy onions.",
            "mDrink1.title": "Specialty Coffee (Cappuccino / Latte)",
            "mDrink1.desc": "Smooth milk coffee crafted with fresh espresso from a local micro-roastery.",
            "mDrink2.title": "Artisan Hot Chocolate",
            "mDrink2.desc": "Melted dark chocolate cocoa topped with whipped cream and pure maple syrup.",
            "mDrink3.title": "Organic Brewed Tea",
            "mDrink3.desc": "Wide selection of loose leaf teas served with local honey and fresh lemon.",
            "mDrink4.title": "Fresh Cranberry Apple Lemonade",
            "mDrink4.desc": "Our signature refreshing berry lemonade made without added refined sugar.",
            "gallery.subtitle": "Café photos",
            "gallery.title": "Gallery",
            "gallery.desc": "Some photos of the café and dishes.",
            "gallery.img1": "At the café",
            "gallery.img2": "Coffee",
            "gallery.img3": "Indoors",
            "gallery.img4": "Waffle dishes",
            "reviews.subtitle": "Customer reviews",
            "reviews.title": "What customers say",
            "rev1.text": "\"Great waffles and a nice atmosphere. We'll definitely return.\"",
            "rev2.text": "\"Nice café and good service. The savory waffle was really tasty.\"",
            "rev3.text": "\"Cozy spot and good waffles. We'll come back for sure.\"",
            "visit.subtitle": "Contact",
            "visit.title": "Welcome",
            "visit.text": "Our café is located in Tampere. Come for coffee or waffles with friends.",
            "visit.addrTitle": "Address",
            "visit.hoursTitle": "Hours",
            "visit.hoursWeek": "Mon – Fri: 09:00 – 19:00",
            "visit.hoursSat": "Sat: 10:00 – 18:00",
            "visit.hoursSun": "Sun: 11:00 – 17:00",
            "visit.phoneTitle": "Contact",
            "contact.subtitle": "Contact",
            "contact.title": "Send a message",
            "contact.desc": "You can send us a message using this form.",
            "form.nameLabel": "Name *",
            "form.namePlaceholder": "First and Last Name",
            "form.emailLabel": "Email *",
            "form.emailPlaceholder": "email@example.com",
            "form.subjectLabel": "Subject",
            "form.subjectPlaceholder": "Subject",
            "form.msgLabel": "Message *",
            "form.msgPlaceholder": "Write your message...",
            "form.submitBtn": "Send Message",
            "form.errName": "Please enter your name.",
            "form.errEmail": "Please enter a valid email address.",
            "form.errMsg": "Please enter your message.",
            "form.successMsg": "Thank you for your message! We will get back to you shortly.",
            "footer.desc": "A cozy waffle café in Tampere. Serving sweet and savory waffles and coffee.",
            "footer.quickLinks": "Links",
            "footer.social": "Follow",
            "footer.rights": "Example website."
        }
    };

    let currentLang = localStorage.getItem('cafe_lang') || 'fi';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('cafe_lang', lang);
        document.documentElement.lang = lang;

        // Update Text Elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update Attributes (Placeholders, etc.)
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const attrData = el.getAttribute('data-i18n-attr').split(':');
            const attrName = attrData[0];
            const key = attrData[1];
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute(attrName, translations[lang][key]);
            }
        });

        // Update Lang Label Button
        const langLabel = document.getElementById('currentLangLabel');
        if (langLabel) {
            langLabel.textContent = lang.toUpperCase();
        }
    }

    // Initialize Language
    setLanguage(currentLang);

    // Lang Switcher Dropdown Toggle
    const langToggleBtn = document.getElementById('langToggle');
    const langMenu = document.getElementById('langMenu');

    if (langToggleBtn && langMenu) {
        langToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = langMenu.classList.contains('active');
            langMenu.classList.toggle('active');
            langToggleBtn.setAttribute('aria-expanded', !isOpen);
        });

        document.querySelectorAll('.lang-opt').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedLang = e.target.getAttribute('data-lang');
                setLanguage(selectedLang);
                langMenu.classList.remove('active');
                langToggleBtn.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', () => {
            langMenu.classList.remove('active');
            langToggleBtn.setAttribute('aria-expanded', 'false');
        });
    }

    /* --- Mobile Navigation Hamburger Menu --- */
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainNav = document.getElementById('mainNav');

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = mainNav.classList.contains('active');
            mainNav.classList.toggle('active');
            hamburgerBtn.setAttribute('aria-expanded', !isOpen);
        });

        // Close nav when link clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* --- Sticky Header on Scroll --- */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- Menu Tabs Switcher --- */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuPanels = document.querySelectorAll('.menu-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            menuPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.hidden = true;
            });

            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            const targetTab = btn.getAttribute('data-tab');
            const activePanel = document.getElementById(`panel-${targetTab}`);
            if (activePanel) {
                activePanel.classList.add('active');
                activePanel.hidden = false;
            }
        });
    });

    /* --- Scroll Animation Observer --- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in animation to sections and cards
    const animElements = document.querySelectorAll('.card, .about-text-content, .about-image-stack, .menu-item, .gallery-item, .review-card, .contact-wrapper');
    animElements.forEach(el => {
        el.classList.add('fade-in-element');
        scrollObserver.observe(el);
    });

    /* --- Contact Form Validation & Submission --- */
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Simple Email Regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Name check
            if (!nameInput.value.trim()) {
                nameInput.parentElement.classList.add('invalid');
                isValid = false;
            } else {
                nameInput.parentElement.classList.remove('invalid');
            }

            // Email check
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.parentElement.classList.add('invalid');
                isValid = false;
            } else {
                emailInput.parentElement.classList.remove('invalid');
            }

            // Message check
            if (!messageInput.value.trim()) {
                messageInput.parentElement.classList.add('invalid');
                isValid = false;
            } else {
                messageInput.parentElement.classList.remove('invalid');
            }

            if (isValid) {
                // Show Success Message
                const successMsg = translations[currentLang]["form.successMsg"] || "Kiitos viestistäsi!";
                formStatus.textContent = successMsg;
                formStatus.className = 'form-status success';
                
                contactForm.reset();

                setTimeout(() => {
                    formStatus.style.display = 'none';
                    formStatus.className = 'form-status';
                }, 5000);
            }
        });
    }

    /* --- Set Current Dynamic Year in Footer --- */
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
