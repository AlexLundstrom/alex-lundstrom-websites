/**
 * Example Ceiling Solutions - Main JavaScript
 * Features: Mobile Nav, Language Switching (FI/EN), Smooth Scrolling, Form Handling, Scroll Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Copyright Year
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Translations Dictionary ---
    const translations = {
        fi: {
            "nav.services": "Palvelut",
            "nav.about": "Meistä",
            "nav.why_us": "Miksi me?",
            "nav.projects": "Referenssit",
            "nav.process": "Prosessi",
            "nav.area": "Palvelualue",
            "nav.contact": "Ota yhteyttä",
            "nav.cta": "Pyydä tarjous",

            "hero.badge": "Ammattitaitoista rakentamista",
            "hero.title": "Ammattimaiset alakattoasennukset pääkaupunkiseudulla",
            "hero.subtitle": "Luotettavat alakattotyöt, sisäkattoasennukset ja kattoremontit yrityksille, taloyhtiöille ja yksityisasiakkaille Vantaalla, Helsingissä ja Espoossa.",
            "hero.btn_quote": "Pyydä tarjous",
            "hero.btn_call": "Soita meille",
            "hero.feat1": "Ilmainen kartoitus & tarjous",
            "hero.feat2": "Ammattitaitoinen työnjälki",
            "hero.feat3": "Pitävät aikataulu",
            "hero.feat4": "Pääkaupunkiseudun kattavuus",

            "services.tag": "Mitä teemme",
            "services.title": "Kattavat alakattopalvelut",
            "services.desc": "Tarjoamme erikoistuneet alakatto- ja sisäverhousratkaisut kaikenkokoisiin kohteisiin ammattitaidolla ja laadukkailla materiaaleilla.",
            "services.s1_title": "Alakattoasennus",
            "services.s1_desc": "Modulaaristen moduuli- ja akustokattojen asennus toimistoihin, liiketiloihin ja asuinkiinteistöihin. Siisti ja toimiva lopputulos.",
            "services.s1_b1": "Akustiikan ja valaistuksen parannus",
            "services.s1_b2": "Talotekniikan tyylikäs kotelointi",
            "services.s2_title": "Kattoremontti",
            "services.s2_desc": "Vanhojen kattorakenteiden purku, kunnostus ja nykyaikaistaminen. Päivitämme tilasi ilmeen ja akustiikan vastaamaan nykyvaatimuksia.",
            "services.s2_b1": "Kokonaisvaltainen uudistus",
            "services.s2_b2": "Energiatehokkuuden parantaminen",
            "services.s3_title": "Sisäkattoasennus",
            "services.s3_desc": "Kipsilevy-, puu- ja metallipaneelikatot koteihin sekä julkisiin tiloihin mittatilaustyönä ja tarkalla viimeistelyllä.",
            "services.s3_b1": "Kestävät materiaalit",
            "services.s3_b2": "Korkealuokkainen viimeistely",
            "services.s4_title": "Kattojen korjaus ja huolto",
            "services.s4_desc": "Nopeat ja luotettavat korjaustyöt vaurioituneille kattokokonaisuuksille. Vaihdamme rikkoutuneet levyt ja korjaamme rungot.",
            "services.s4_b1": "Nopea reagointiaika",
            "services.s4_b2": "Kustannustehokas täsmäkorjaus",
            "services.s5_title": "Uudisrakentaminen",
            "services.s5_desc": "Mukaan lukien laajat uudiskohteet. Suunnittelemme ja toteutamme uudisrakennusten kattojärjestelmät aina aikataulussa.",
            "services.s5_b1": "Suuriin hankkeisiin mitoitettu",
            "services.s5_b2": "Saumaton yhteistyö urakoitsijoiden kanssa",
            "services.s6_title": "Toimitilaratkaisut",
            "services.s6_desc": "Ammattitaitoiset akustiikka- ja alakattoratkaisut myymälöihin, kouluihin, sairaaloihin ja julkisiin tiloihin.",
            "services.s6_b1": "Paloturvalliset materiaalit",
            "services.s6_b2": "Aktiivisen akustiikan hallinta",

            "about.subtitle": "Tuntemusta ja laatua",
            "about.title": "Example Ceiling Solutions – Luotettava kumppanisi",
            "about.p1": "Olemme Vantaalta käsin toimiva alakattojen sekä sisäverhousten erikoisliike. Palvelemme asiantuntevalla otteella niin yrityksiä, taloyhtiöitä kuin yksityisiä kotitalouksia koko pääkaupunkiseudulla.",
            "about.p2": "Toimintamme perustuu tarkkaan viimeistelyyn, nykyaikaisiin asennusmenetelmiin ja ehdottomaan aikataulujen pitävyyteen. Jokainen projekti toteutetaan alan korkeimpien laatu- ja turvallisuusstandardien mukaisesti.",
            "about.years_experience": "Vuotta kokemusta ala- ja sisäkatoista",
            "about.h1_title": "Tarkka viimeistely",
            "about.h1_desc": "Huolellinen työnjälki takaa pitkäikäisen ja visuaalisesti tyylikkään kattopinnan.",
            "about.h2_title": "Nykyaikaiset menetelmät",
            "about.h2_desc": "Käytämme parhaita asennustekniikoita ja laadukkaita akustiikkamateriaaleja.",

            "why.subtitle": "Valitse varmuus",
            "why.title": "Miksi valita Example Ceiling Solutions?",
            "why.desc": "Panostamme laatuun ja asiakastyytyväisyyteen kaikissa työskentelyvaiheissamme.",
            "why.item1_title": "Kokeneet asentajat",
            "why.item1_desc": "Ammattitaitoinen tiimimme tuntee erilaisten tilojen asennusvaatimukset perusteellisesti.",
            "why.item2_title": "Korkea laatu",
            "why.item2_desc": "Käytämme vain alan luotettavimpien valmistajien sertifioituja materiaaleja.",
            "why.item3_title": "Pitävät aikataulut",
            "why.item3_desc": "Kunnioitamme sopimuksia ja varmistamme, että projekti valmistuu ajallaan.",
            "why.item4_title": "Siisti työmaa",
            "why.item4_desc": "Pidämme työmaat siistinä ja hoidamme purkujätteet asianmukaisesti pois tieltä.",

            "projects.subtitle": "Työnjälkemme",
            "projects.title": "Viimeisimmät projektit",
            "projects.desc": "Tutustu toteuttamiimme alakatto- ja sisäverhouskohteisiin pääkaupunkiseudulla.",
            "projects.p1_tag": "Toimisto",
            "projects.p1_title": "Moduulitoimiston Akustokatto",
            "projects.p1_desc": "Avoimen toimistotilan ääniympäristön parantaminen nykyaikaisilla akustolevyillä ja integroidulla valaistuksella Vantaalla.",
            "projects.p2_tag": "Asuinkiinteistö",
            "projects.p2_title": "Kerrostaloasunnon Sisäkatto",
            "projects.p2_desc": "Tyylikäs puurima-alakatto ja epäsuora LED-valaistuskokonaisuus asuntoremonttikohteessa Helsingissä.",
            "projects.p3_tag": "Liiketila",
            "projects.p3_title": "Kauppakeskuksen Kattojärjestelmä",
            "projects.p3_desc": "Suuren liiketilan metallialakaton ja ilmanvaihtokotelointien laaja-alainen asennustyö Espoossa.",
            "projects.p4_tag": "Omakotitalo",
            "projects.p4_title": "Uudiskohteen Kipsilevykatto",
            "projects.p4_desc": "Korkealuokkaiset kipsilevykatot valaisinkoteloineen ja maalauspintoineen uuteen omakotitaloon Vantaalla.",
            "projects.p5_tag": "Taloyhtiö",
            "projects.p5_title": "Porraskäytävien Akustoinnit",
            "projects.p5_desc": "Kerrostalon yleisten tilojen akustiikkalevytys ja kaapelointien piilotus taloyhtiöremontissa Helsingissä.",
            "projects.p6_tag": "Myymälä",
            "projects.p6_title": "Erikoismyymälän Visual-Katto",
            "projects.p6_desc": "Mustat akustiikkaelementit ja teollisuushenkinen alumiinirunko muotimyymälän tiloissa Espoossa.",

            "process.subtitle": "Miten toimimme",
            "process.title": "Prosessimme 4 helpossa vaiheessa",
            "process.desc": "Takaamme sujuvan ja vaivattoman toteutuksen aina yhteydenotosto lopulliseen luovutukseen.",
            "process.s1_title": "Ota yhteyttä",
            "process.s1_desc": "Täytä yhteydenottolomake tai soita meille. Käymme läpi tarpeesi ja kohteen perustiedot.",
            "process.s2_title": "Ilmainen tarjous",
            "process.s2_desc": "Katselmoimme kohteen tarvittaessa paikan päällä ja laskemme kiinteän ja pitävän tarjouksen.",
            "process.s3_title": "Asennus",
            "process.s3_desc": "Ammattiasentajamme suorittavat työn sopimuksen mukaan, siististi ja aikataulussa.",
            "process.s4_title": "Valmis kohde",
            "process.s4_desc": "Tarkastamme työnjäljen yhdessä asiakkaan kanssa ja luovutamme valmiin, siivotun tilan.",

            "area.subtitle": "Toiminta-alue",
            "area.title": "Palvelemme koko Pääkaupunkiseutua",
            "area.desc": "Kotipaikkamme on Vantaa, mutta urakoimme aktiivisesti ympäri pääkaupunkiseutua ja lähikuntia. Tarjoamme joustavaa palvelua niin pieniin kuin suuriin kohteisiin.",
            "area.other": "Muu Uusimaa",

            "faq.subtitle": "Kysyttävää?",
            "faq.title": "Usein kysytyt kysymykset",
            "faq.q1": "Kuinka kauan alakattoasennus yleensä kestää?",
            "faq.a1": "Kesto riippuu kohteen koosta ja monimutkaisuudesta. Normaali omakotitalon tai pienen toimitilan kattoasennus kestää yleensä 1–3 työpäivää.",
            "faq.q2": "Kuuluuko vanhan katon purku palveluunne?",
            "faq.a2": "Kyllä, tarjoamme täyden avaimet käteen -palvelun. Puramme vanhat rakenteet, toimitamme purkujätteet kierrätykseen ja asennamme uuden alakaton tilalle.",
            "faq.q3": "Mitä alakattoratkaisut maksavat?",
            "faq.a3": "Hinta koostuu neliömäärästä, valituista materiaaleista (esim. akustoelementit, rimoitus, kipsilevy) sekä tilan korkeudesta ja muodosta. Laskemme aina kiinteän ilmaisentarjouksen ennen työn aloittamista.",
            "faq.q4": "Voinko saada kotitalousvähennystä tehdyistä töistä?",
            "faq.a4": "Kyllä. Yksityishenkilönä voit hyödyntää työn osuudesta kotitalousvähennyksen verotuksessasi. Toimitamme laskussa eritellyt tiedot suoraan ilmoitusta varten.",

            "contact.subtitle": "Ota yhteyttä",
            "contact.title": "Pyydä ilmainen tarjous",
            "contact.desc": "Täytä alla oleva lomake tai ota suoraan yhteyttä puhelimitse tai sähköpostitse. Vastaamme nopeasti!",
            "contact.info_title": "Yhteystiedot",
            "contact.location_label": "Toimipiste",
            "contact.phone_label": "Puhelin",
            "contact.email_label": "Sähköposti",
            "contact.hours_label": "Aukioloajat",
            "contact.hours_text": "Ma - Pe: 07:00 - 17:00",
            "contact.f_name": "Nimi *",
            "contact.ph_name": "Matti Meikäläinen",
            "contact.f_email": "Sähköposti *",
            "contact.ph_email": "matti@esimerkki.fi",
            "contact.f_phone": "Puhelinnumero *",
            "contact.ph_phone": "040 123 4567",
            "contact.f_service": "Palvelu",
            "contact.f_opt_other": "Muu asia",
            "contact.f_message": "Viesti / Kohteen kuvaus *",
            "contact.ph_message": "Kerro hieman kohteestasi ja toivotusta aikataulusta...",
            "contact.f_submit": "Lähetä tarjouspyyntö",
            "contact.success_msg": "Kiitos viestistäsi! Olemme sinuun yhteydessä mahdollisimman pian.",
            "contact.error_msg": "Täytäthän kaikki pakolliset kentät oikein.",

            "footer.about": "Ammattitaitoiset ja luotettavat alakatto- ja sisäverhousasennukset Vantaalta koko pääkaupunkiseudun alueelle.",
            "footer.links_title": "Pikalinkit",
            "footer.contact_title": "Yhteystiedot",
            "footer.rights": "Kaikki oikeudet pidätetään."
        },
        en: {
            "nav.services": "Services",
            "nav.about": "About Us",
            "nav.why_us": "Why Us?",
            "nav.projects": "Projects",
            "nav.process": "Process",
            "nav.area": "Service Area",
            "nav.contact": "Contact Us",
            "nav.cta": "Request Quote",

            "hero.badge": "Professional Construction Services",
            "hero.title": "Professional Suspended Ceiling Installation",
            "hero.subtitle": "Reliable ceiling installation and renovation services for companies, housing companies, and private clients in Vantaa, Helsinki, and Espoo.",
            "hero.btn_quote": "Request a Quote",
            "hero.btn_call": "Call Us",
            "hero.feat1": "Free Consultation & Quote",
            "hero.feat2": "Professional Workmanship",
            "hero.feat3": "Reliable Schedules",
            "hero.feat4": "Capital Region Service",

            "services.tag": "What We Do",
            "services.title": "Comprehensive Ceiling Services",
            "services.desc": "We offer specialized suspended ceiling and interior cladding solutions for projects of all sizes with top workmanship and quality materials.",
            "services.s1_title": "Suspended Ceiling Installation",
            "services.s1_desc": "Installation of modular grid and acoustic ceilings for offices, retail, and residential properties. Clean and functional finish.",
            "services.s1_b1": "Improved acoustics and lighting",
            "services.s1_b2": "Stylish enclosure of HVAC systems",
            "services.s2_title": "Ceiling Renovation",
            "services.s2_desc": "Dismantling, repairing, and modernizing old ceiling structures. We update your space's aesthetics and acoustic performance.",
            "services.s2_b1": "Comprehensive transformation",
            "services.s2_b2": "Improved energy efficiency",
            "services.s3_title": "Interior Ceiling Installation",
            "services.s3_desc": "Custom plasterboard, wood panel, and metal ceilings for homes and commercial spaces with precise finishing.",
            "services.s3_b1": "Durable materials",
            "services.s3_b2": "High-grade finishing",
            "services.s4_title": "Ceiling Repair & Maintenance",
            "services.s4_desc": "Fast and dependable repair work for damaged ceiling systems. Replacing damaged tiles and repairing grid frameworks.",
            "services.s4_b1": "Fast response times",
            "services.s4_b2": "Cost-effective spot repairs",
            "services.s5_title": "New Construction",
            "services.s5_desc": "Equipped for large new build projects. We design and install complete ceiling solutions always on schedule.",
            "services.s5_b1": "Scaled for major developments",
            "services.s5_b2": "Seamless cooperation with contractors",
            "services.s6_title": "Commercial Ceiling Solutions",
            "services.s6_desc": "Professional acoustic and ceiling solutions tailored for retail spaces, schools, healthcare facilities, and public buildings.",
            "services.s6_b1": "Fire-rated certified materials",
            "services.s6_b2": "Active acoustic control",

            "about.subtitle": "Experience & Quality",
            "about.title": "Example Ceiling Solutions – Your Trusted Partner",
            "about.p1": "Based in Vantaa, we are specialized contractors in suspended ceilings and interior paneling, serving businesses, housing cooperatives, and homeowners across the entire Capital Region.",
            "about.p2": "Our work is grounded in meticulous attention to detail, modern installation methods, and strict adherence to project schedules. Every project meets the highest quality and safety standards.",
            "about.years_experience": "Years of experience in ceiling solutions",
            "about.h1_title": "Meticulous Finish",
            "about.h1_desc": "Careful craftsmanship ensures a long-lasting, visually impressive ceiling surface.",
            "about.h2_title": "Modern Methods",
            "about.h2_desc": "We employ top-tier installation techniques and state-of-the-art acoustic materials.",

            "why.subtitle": "Choose Reliability",
            "why.title": "Why Choose Example Ceiling Solutions?",
            "why.desc": "We focus on quality and customer satisfaction throughout every stage of the project.",
            "why.item1_title": "Experienced Installers",
            "why.item1_desc": "Our skilled team understands the exact structural requirements of diverse properties.",
            "why.item2_title": "High Quality",
            "why.item2_desc": "We only use certified materials from the industry's most reputable manufacturers.",
            "why.item3_title": "Reliable Schedules",
            "why.item3_desc": "We strictly respect contracts and ensure your project is completed on time.",
            "why.item4_title": "Clean Worksite",
            "why.item4_desc": "We maintain clean worksites and dispose of old materials responsibly.",

            "projects.subtitle": "Our Portfolio",
            "projects.title": "Recent Projects",
            "projects.desc": "Explore our recently completed ceiling installation projects across the Greater Helsinki Area.",
            "projects.p1_tag": "Office",
            "projects.p1_title": "Modular Office Acoustic Ceiling",
            "projects.p1_desc": "Enhancing open-plan office sound environment with modern acoustic tiles and integrated lighting in Vantaa.",
            "projects.p2_tag": "Residential",
            "projects.p2_title": "Apartment Wooden Slat Ceiling",
            "projects.p2_desc": "Elegant timber slat ceiling with indirect LED lighting system in a apartment renovation in Helsinki.",
            "projects.p3_tag": "Commercial",
            "projects.p3_title": "Shopping Mall Ceiling System",
            "projects.p3_desc": "Large-scale installation of metal grid ceiling and HVAC enclosures in Espoo.",
            "projects.p4_tag": "Private Home",
            "projects.p4_title": "New House Plasterboard Ceiling",
            "projects.p4_desc": "High-end plasterboard ceilings with custom light coves and painting in a new home in Vantaa.",
            "projects.p5_tag": "Housing Co-op",
            "projects.p5_title": "Stairwell Acoustic Paneling",
            "projects.p5_desc": "Acoustic tile installation and cable concealment in apartment building common areas in Helsinki.",
            "projects.p6_tag": "Retail",
            "projects.p6_title": "Boutique Visual Ceiling",
            "projects.p6_desc": "Black acoustic elements and industrial aluminum framing for a fashion store in Espoo.",

            "process.subtitle": "How We Work",
            "process.title": "Our Process in 4 Simple Steps",
            "process.desc": "We guarantee a smooth experience from your initial inquiry through to final handover.",
            "process.s1_title": "1. Contact Us",
            "process.s1_desc": "Fill out our form or call us directly. We will review your project requirements and initial scope.",
            "process.s2_title": "2. Free Quotation",
            "process.s2_desc": "We conduct an on-site survey if needed and provide a transparent, fixed quote.",
            "process.s3_title": "3. Installation",
            "process.s3_desc": "Our professional installers complete the job efficiently, cleanly, and on schedule.",
            "process.s4_title": "4. Finished Project",
            "process.s4_desc": "We inspect the final results together with you and hand over a clean, finished space.",

            "area.subtitle": "Service Coverage",
            "area.title": "Serving the Entire Helsinki Metropolitan Area",
            "area.desc": "We are located in Vantaa, but actively work on projects throughout Helsinki, Espoo, and surrounding municipalities.",
            "area.other": "Rest of Uusimaa",

            "faq.subtitle": "Questions?",
            "faq.title": "Frequently Asked Questions",
            "faq.q1": "How long does a typical ceiling installation take?",
            "faq.a1": "Duration depends on size and complexity. A standard single home or small office ceiling usually takes 1–3 working days.",
            "faq.q2": "Do you handle removal of old ceilings?",
            "faq.a2": "Yes, we provide turnkey services. We dismantle old structures, handle waste recycling, and install your new ceiling.",
            "faq.q3": "How much does ceiling installation cost?",
            "faq.a3": "Pricing depends on square meter area, chosen materials (e.g., acoustic tiles, wooden slats, plasterboard), and ceiling height. We provide a clear, free quotation.",
            "faq.q4": "Can private customers apply for tax deductions?",
            "faq.a4": "Yes, private homeowners in Finland can claim the domestic help tax credit ('kotitalousvähennys') for our labor costs.",

            "contact.subtitle": "Get in Touch",
            "contact.title": "Request a Free Quote",
            "contact.desc": "Fill in the form below or reach out via phone or email. We respond promptly!",
            "contact.info_title": "Contact Information",
            "contact.location_label": "Location",
            "contact.phone_label": "Phone",
            "contact.email_label": "Email",
            "contact.hours_label": "Working Hours",
            "contact.hours_text": "Mon - Fri: 07:00 - 17:00",
            "contact.f_name": "Name *",
            "contact.ph_name": "John Doe",
            "contact.f_email": "Email *",
            "contact.ph_email": "john@example.com",
            "contact.f_phone": "Phone *",
            "contact.ph_phone": "+358 40 123 4567",
            "contact.f_service": "Service Required",
            "contact.f_opt_other": "Other Inquiry",
            "contact.f_message": "Message / Project Description *",
            "contact.ph_message": "Tell us briefly about your project and expected timeline...",
            "contact.f_submit": "Send Quote Request",
            "contact.success_msg": "Thank you for your message! We will get back to you shortly.",
            "contact.error_msg": "Please fill in all required fields correctly.",

            "footer.about": "Professional and reliable ceiling and interior installation services from Vantaa across the entire Capital Region.",
            "footer.links_title": "Quick Links",
            "footer.contact_title": "Contact Details",
            "footer.rights": "All rights reserved."
        }
    };

    // --- Language State & Functionality ---
    let currentLang = localStorage.getItem('site_lang') || 'fi';

    const btnFi = document.getElementById('btn-fi');
    const btnEn = document.getElementById('btn-en');

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('site_lang', lang);
        document.documentElement.lang = lang;

        // Active State Buttons
        if (lang === 'fi') {
            btnFi.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnFi.classList.remove('active');
        }

        // Translate Text Content
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Translate Placeholders
        const phElements = document.querySelectorAll('[data-i18n-ph]');
        phElements.forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    }

    if (btnFi && btnEn) {
        btnFi.addEventListener('click', () => setLanguage('fi'));
        btnEn.addEventListener('click', () => setLanguage('en'));
    }

    // Initialize Language
    setLanguage(currentLang);


    // --- Mobile Navigation Menu Toggle ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('active');
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', !isOpen);
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }


    // --- Active Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href*="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);


    // --- Form Handling & Frontend Validation ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('form-name').value.trim();
            const email = document.getElementById('form-email').value.trim();
            const phone = document.getElementById('form-phone').value.trim();
            const message = document.getElementById('form-message').value.trim();

            if (!name || !email || !phone || !message) {
                formStatus.className = 'form-status error';
                formStatus.textContent = translations[currentLang]["contact.error_msg"];
                return;
            }

            // Simple Email Regex Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.className = 'form-status error';
                formStatus.textContent = translations[currentLang]["contact.error_msg"];
                return;
            }

            // Simulate Successful Static Submission
            formStatus.className = 'form-status success';
            formStatus.textContent = translations[currentLang]["contact.success_msg"];
            contactForm.reset();

            // Clear status after 6 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
                formStatus.className = 'form-status';
            }, 6000);
        });
    }


    // --- Minimal Vanilla Scroll Reveal Animation ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

    // Apply reveal styling to cards and section headers
    const elementsToReveal = document.querySelectorAll('.card, .project-card, .why-card, .process-step, .section-header');
    elementsToReveal.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        revealObserver.observe(el);
    });
});
