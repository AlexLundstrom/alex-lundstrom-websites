/**
 * Pizzeria Turku - Main Vanilla JS Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'pizzeria-lang';
  const COOKIE_NAME = 'pizzeria-lang';

  const normalizeLang = (value) => (value === 'fi' ? 'fi' : 'en');

  const setStoredLanguage = (lang) => {
    const normalizedLang = normalizeLang(lang);
    if (!normalizedLang) return;

    try {
      localStorage.setItem(STORAGE_KEY, normalizedLang);
    } catch {
      // Ignore storage errors and fall back to cookies.
    }

    document.cookie = `${COOKIE_NAME}=${normalizedLang}; path=/; max-age=31536000; SameSite=Lax`;
    return normalizedLang;
  };

  const updateUrlLanguage = (lang) => {
    const normalizedLang = normalizeLang(lang);
    const url = new URL(window.location.href);
    if (normalizedLang === 'en') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', normalizedLang);
    }
    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState({}, '', nextUrl);
  };

  const getStoredLanguage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get('lang');
    if (queryLang === 'en' || queryLang === 'fi') {
      setStoredLanguage(queryLang);
      return normalizeLang(queryLang);
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'fi') {
        return stored;
      }
    } catch {
      // Ignore storage errors and fall back to cookies.
    }

    const cookieMatch = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
    const cookieValue = cookieMatch ? decodeURIComponent(cookieMatch[1]) : '';
    if (cookieValue === 'en' || cookieValue === 'fi') {
      return normalizeLang(cookieValue);
    }

    return 'en';
  };

  const pageKey = (() => {
    const filename = window.location.pathname.split('/').pop() || 'index.html';
    if (filename === 'menu.html') return 'menu';
    if (filename === 'story.html') return 'story';
    if (filename === 'contact.html') return 'contact';
    if (filename === 'testimonials.html') return 'testimonials';
    return 'index';
  })();

  const translations = {
    index: {
      en: {
        'lang.button': 'Suomeksi',
        'lang.aria': 'Switch to Finnish',
        'nav.home': 'Home',
        'nav.story': 'Our Story',
        'nav.menu': 'Menu',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'nav.reserve': 'Reserve Table',
        'nav.brand.aria': 'Pizzeria Turku Homepage',
        'hero.badge': 'Authentic Neapolitan Wood-Fired',
        'hero.title': 'Where Traditional Naples Meets Cozy Turku',
        'hero.slogan': 'Delicious Neapolitan-style pizza baked in a traditional wood-fired stone oven in the heart of Turku.',
        'hero.ctaMenu': 'Explore Our Menu',
        'hero.ctaReserve': 'Reserve a Table',
        'hero.meta.open': 'Open Daily',
        'hero.meta.hours': '12:00 - 22:00',
        'hero.meta.address': 'Eerikinkatu 12',
        'hero.meta.location': 'Turku, Finland',
        'hero.meta.rating': 'Google Rating',
        'hero.meta.ratingValue': '4.9 ★ (420+ reviews)',
        'intro.tagline': 'Welcome',
        'intro.title': 'Authentic Pizza in Turku',
        'intro.desc': 'We make authentic Neapolitan pizzas using fresh ingredients and traditional methods. Stop by our cozy restaurant in Turku or order to go.',
        'intro.link': 'Read Our Story →',
        'features.card1.title': '48-Hour Fermentation',
        'features.card1.desc': 'Our signature dough is cold-fermented for 48 hours for the best taste and texture.',
        'features.card2.title': 'Wood-Fired Oven',
        'features.card2.desc': 'We bake our pizzas in a high-temperature stone oven heated with real birch wood.',
        'features.card3.title': 'Quality Ingredients',
        'features.card3.desc': 'We select only the finest local ingredients and imported Italian tomatoes.',
        'preview.tagline': 'Baked Daily',
        'preview.title': "Chef's Signature Selections",
        'preview.button': 'View Complete Menu',
        'preview.item1.title': 'Margherita Classica',
        'preview.item1.desc': 'San Marzano DOP tomatoes, fresh fior di latte mozzarella, organic basil, extra virgin olive oil.',
        'preview.item2.title': 'Diavola Rustica',
        'preview.item2.desc': 'Spicy Italian salami, nduja, fior di latte mozzarella, organic honey drizzle, fresh chili flakes.',
        'preview.item3.title': 'Nordic Chanterelle',
        'preview.item3.desc': 'Sautéed local chanterelles, wild rosemary, caramelized red onion, cold-pressed pine oil, provola.',
        'preview.item4.title': 'Prosciutto e Burrata',
        'preview.item4.desc': 'San Marzano sauce, fresh Parma ham, whole creamy burrata cheese ball, baby wild arugula, aged balsamic.',
        'sticky.message': 'Hungry? Book a spot or grab a takeaway!',
        'sticky.phone': 'Call us',
        'sticky.reserve': 'Reserve Online',
        'footer.desc': 'Bringing true Neapolitan tradition to the Aurajoki banks. Cozy warmth, honest hospitality, and unparalleled slow-risen dough.',
        'footer.hours': 'Opening Hours',
        'footer.findUs': 'Find Us',
        'footer.hours.monThu': 'Monday - Thursday',
        'footer.hours.friSat': 'Friday - Saturday',
        'footer.hours.sun': 'Sunday',
        'footer.kitchenNote': '* Kitchen closes 30 minutes before final closing times.',
        'footer.copyright': '© 2024 Pizzeria Turku. All Rights Reserved.',
        'footer.credit': 'Artisanally crafted for authentic pizza lovers.',
        'page.title': 'Pizzeria Turku | Authentic Wood-Fired Neapolitan Pizza',
        'meta.desc': 'Experience authentic traditional wood-fired Neapolitan pizza in the heart of Turku. Made with hand-stretched sourdough, imported San Marzano tomatoes, and fresh local ingredients.'
      },
      fi: {
        'lang.button': 'English',
        'lang.aria': 'Vaihda englanniksi',
        'nav.home': 'Koti',
        'nav.story': 'Tarinamme',
        'nav.menu': 'Menu',
        'nav.testimonials': 'Arvostelut',
        'nav.contact': 'Yhteystiedot',
        'nav.reserve': 'Varaa pöytä',
        'nav.brand.aria': 'Pizzeria Turku etusivu',
        'hero.badge': 'Aito napolilainen puu-uuni',
        'hero.title': 'Aitoa napolilaista pizzaa Turussa',
        'hero.slogan': 'Herkullista napolilaistyylistä pizzaa perinteisestä puu-uunista Turun sydämessä.',
        'hero.ctaMenu': 'Selaa ruokalistaa',
        'hero.ctaReserve': 'Varaa pöytä',
        'hero.meta.open': 'Avoinna joka päivä',
        'hero.meta.hours': '12:00 – 22:00',
        'hero.meta.address': 'Eerikinkatu 12',
        'hero.meta.location': 'Turku, Suomi',
        'hero.meta.rating': 'Google-arvio',
        'hero.meta.ratingValue': '4,9 ★ (420+ arvostelua)',
        'intro.tagline': 'Tervetuloa',
        'intro.title': 'Aitoa pizzaa Turussa',
        'intro.desc': 'Valmistamme aitoja napolilaisia pizzoja tuoreista raaka-aineista perinteisin menetelmin. Tule nauttimaan viihtyisään ravintolaamme tai tilaa mukaan.',
        'intro.link': 'Lue tarinamme →',
        'features.card1.title': '48 tunnin kohotus',
        'features.card1.desc': 'Kylmäkohotamme taikinaamme 48 tuntia parhaan maun ja rakenteen saavuttamiseksi.',
        'features.card2.title': 'Puu-uuni',
        'features.card2.desc': 'Paistamme pizzat aidossa kiviuunissa korkeassa lämpötilassa suomalaisella koivulla.',
        'features.card3.title': 'Laatutäytteet',
        'features.card3.desc': 'Käytämme vain parhaita paikallisia raaka-aineita ja italialaisia tomaatteja.',
        'preview.tagline': 'Paistetaan päivittäin',
        'preview.title': 'Pääkokin allekirjoitukset',
        'preview.button': 'Näytä täydellinen menu',
        'preview.item1.title': 'Margherita Classica',
        'preview.item1.desc': 'San Marzano DOP -tomaatit, tuoretta fior di latte -mozzarellaa, orgaanista basilikaa, extra virgin -oliiviöljyä.',
        'preview.item2.title': 'Diavola Rustica',
        'preview.item2.desc': 'Spicy Italian salami, nduja, fior di latte -mozzarella, orgaaninen hunajakuorrute ja tuoreet chilihiutaleet.',
        'preview.item3.title': 'Nordic Chanterelle',
        'preview.item3.desc': 'Paistettua paikallista kanttarellia, villiä rosmariinia, karamellisoitua punasipulia, kylmäpuristettua mäntypihkaöljyä ja provolaa.',
        'preview.item4.title': 'Prosciutto e Burrata',
        'preview.item4.desc': 'San Marzano-kastiketta, tuoretta Parma-hamppua, kokonainen kermaisa burrata-juusto, baby wild arugulaa ja ikääntynyttä balsamicoa.',
        'sticky.message': 'Nälkä? Varaa paikka tai ota take-away!',
        'sticky.phone': 'Soita meille',
        'sticky.reserve': 'Varaa verkossa',
        'footer.desc': 'Tuomme aidon neapolitan perinteen Aurajoen rannoille. Cozy lämpö, rehellinen vieraanvaraisuus ja vertaansa vailla oleva hidasnousuinen taikina.',
        'footer.hours': 'Aukioloajat',
        'footer.findUs': 'Löydä meidät',
        'footer.hours.monThu': 'Maanantai - Torstai',
        'footer.hours.friSat': 'Perjantai - Lauantai',
        'footer.hours.sun': 'Sunnuntai',
        'footer.kitchenNote': '* Keittiö sulkeutuu 30 minuuttia ennen viimeistä sulkemisaikaa.',
        'footer.copyright': '© 2024 Pizzeria Turku. Kaikki oikeudet pidätetään.',
        'footer.credit': 'Käsityönä valmistettu aidon pizzan rakastajille.',
        'page.title': 'Pizzeria Turku | Aito puuhellapizzata',
        'meta.desc': 'Koe aito perinteinen puuhella Neapolitan pizza Turun sydämessä. Tehty käsin venytetyllä sourdough-taikinalla, tuoduilla San Marzano -tomaatteilla ja tuoreilla paikallisilla ainesosilla.'
      }
    },
    menu: {
      en: {
        'lang.button': 'Suomeksi',
        'lang.aria': 'Switch to Finnish',
        'nav.home': 'Home',
        'nav.story': 'Our Story',
        'nav.menu': 'Menu',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'nav.reserve': 'Reserve Table',
        'nav.brand.aria': 'Pizzeria Turku Homepage',
        'page.title': 'Our Menu | Pizzeria Turku',
        'meta.desc': 'View our complete artisan menu. Slow-fermented sourdough pizza, fresh local ingredients, decadent Italian desserts and premium beverages.',
        'subpage.badge': 'Il Menu',
        'subpage.title': 'Our Menu',
        'subpage.subtitle': 'View our selection of classic Neapolitan pizzas, freshly baked desserts, and craft drinks.',
        'menu.tabs.classics': 'Classics',
        'menu.tabs.specials': 'Gourmet & Specials',
        'menu.tabs.dolci': 'Desserts & Drinks',
        'menu.classics.title': 'Classics',
        'menu.classics.subtitle': 'Traditional Neapolitan pizzas made with fresh mozzarella and San Marzano tomatoes.',
        'menu.classics.item1.title': 'Margherita Classica',
        'menu.classics.item1.desc': 'San Marzano DOP tomatoes, fresh fior di latte mozzarella, organic basil leaves, cold-pressed extra virgin olive oil.',
        'menu.classics.item2.title': 'Marinara Tradizionale',
        'menu.classics.item2.desc': 'San Marzano DOP tomatoes, sliced fresh garlic cloves, dried Sicilian oregano, aromatic organic basil oil (no cheese).',
        'menu.classics.item3.title': 'Diavola Saporita',
        'menu.classics.item3.desc': 'San Marzano DOP tomatoes, spicy Ventricina salami, fior di latte mozzarella, spreadable spicy Nduja pork sausage paste, black olives.',
        'menu.classics.item4.title': 'Capricciosa d\'Abruzzo',
        'menu.classics.item4.desc': 'San Marzano DOP tomatoes, Italian cooked ham, quartered artichoke hearts, roasted wild mushrooms, salty black olives, fior di latte.',
        'menu.specials.title': 'Gourmet & Specials',
        'menu.specials.subtitle': 'Masterfully crafted pizzas pairing traditional Italian foundations with rich, rustic local Finnish toppings.',
        'menu.specials.item1.title': 'The Nordic Chanterelle',
        'menu.specials.item1.desc': 'Sautéed local forest chanterelles, fresh wild rosemary sprigs, caramelized balsamic red onion, cold-pressed pine oil, provola.',
        'menu.specials.item2.title': 'Prosciutto e Burrata',
        'menu.specials.item2.desc': 'San Marzano DOP tomatoes, tender cured Parma ham, a whole imported creamy burrata ball, fresh wild arugula, olive oil drizzle.',
        'menu.specials.item3.title': 'Saaristolais-Salmon',
        'menu.specials.item3.desc': 'Creamy white base, cold-smoked salmon flakes from the Finnish archipelago, fresh dill, pickled cucumber ribbons, red onion, capers.',
        'menu.dolci.title': 'Dolci & Bevande',
        'menu.dolci.subtitle': 'Indulge in sweet, house-made traditional desserts and perfectly matched local beers and premium Italian wines.',
        'menu.dolci.item1.title': 'Classico Tiramisù',
        'menu.dolci.item1.desc': 'Savoiardi ladyfingers soaked in dark roasted espresso, layers of creamy sweet mascarpone cheese, dusted with premium cocoa powder.',
        'menu.dolci.item2.title': 'Panna Cotta',
        'menu.dolci.item2.desc': 'Silky vanilla bean panna cotta served with a bitter-sweet berry compote and a crisp almond tuile.',
        'menu.dolci.item3.title': 'Italian Espresso',
        'menu.dolci.item3.desc': 'Double-shot espresso with a velvety crema, served in traditional Italian ceramic cups.',
        'menu.diet.vegetarian': 'Vegetarian',
        'menu.diet.gfa': 'Gluten-Free Option Available',
        'menu.diet.vegan': 'Vegan Friendly',
        'menu.diet.traditional': '100% Traditional',
        'menu.diet.spicy': 'Spicy',
        'menu.diet.local': 'Local Sourced',
        'menu.diet.premium': 'Premium Choice',
        'menu.diet.nordic': 'Nordic Fusion',
        'menu.diet.classic': 'Classic Favorite',
        'menu.alert': 'Dietary Preferences: All our pizzas can be prepared using gluten-free base crust (+2.50€) or topped with vegan cheese substitute upon request. Please notify your server of any allergies before placing your order.',
        'sticky.message': 'Hungry? Book a spot or grab a takeaway!',
        'sticky.reserve': 'Reserve Online',
        'footer.desc': 'Bringing true Neapolitan tradition to the Aurajoki banks. Cozy warmth, honest hospitality, and unparalleled slow-risen dough.',
        'footer.hours': 'Opening Hours',
        'footer.findUs': 'Find Us',
        'footer.copyright': '© 2024 Pizzeria Turku. All Rights Reserved.',
        'footer.credit': 'Artisanally crafted for authentic pizza lovers.'
      },
      fi: {
        'lang.button': 'English',
        'lang.aria': 'Vaihda englanniksi',
        'nav.home': 'Koti',
        'nav.story': 'Tarinamme',
        'nav.menu': 'Menu',
        'nav.testimonials': 'Arvostelut',
        'nav.contact': 'Yhteystiedot',
        'nav.reserve': 'Varaa pöytä',
        'nav.brand.aria': 'Pizzeria Turku etusivu',
        'page.title': 'Menu | Pizzeria Turku',
        'meta.desc': 'Katso täydellinen artisan-menu. Hitaasti fermentoitua sourdough-pizzaa, tuoreita paikallisia ainesosia, hemmottelevaa italialaista jälkiruokaa ja premium-juomia.',
        'subpage.badge': 'Il Menu',
        'subpage.title': 'Menu',
        'subpage.subtitle': 'Katso valikoimamme klassisia pizzoja, tuoreita jälkiruokia ja virkistäviä juomia.',
        'menu.tabs.classics': 'Klassikot',
        'menu.tabs.specials': 'Gourmet & Erikoisuudet',
        'menu.tabs.dolci': 'Jälkiruoat & Juomat',
        'menu.classics.title': 'Klassikot',
        'menu.classics.subtitle': 'Perinteisiä napolilaisia pizzoja, joissa on tuoretta mozzarellaa ja San Marzano -tomaatteja.',
        'menu.classics.item1.title': 'Margherita Classica',
        'menu.classics.item1.desc': 'San Marzano DOP -tomaatit, tuoretta fior di latte -mozzarellaa, luomubasilikaa, kylmäpuristettua extra virgin -oliiviöljyä.',
        'menu.classics.item2.title': 'Marinara Tradizionale',
        'menu.classics.item2.desc': 'San Marzano DOP -tomaatit, viipaloituja tuoreita valkosipulinkynsiä, kuivattua Sisilian oreganoa, aromaattista luomubasilikaöljyä (ei juustoa).',
        'menu.classics.item3.title': 'Diavola Saporita',
        'menu.classics.item3.desc': 'San Marzano DOP -tomaatit, tulista Ventricina-salami, fior di latte -mozzarella, levitettävää tulista Nduja-sianlihapastaa, mustia oliiveja.',
        'menu.classics.item4.title': 'Capricciosa d\'Abruzzo',
        'menu.classics.item4.desc': 'San Marzano DOP -tomaatit, italialaista keitettyä kinkkua, neljäsosaksi leikattuja artisokkia, paahdettua villisientä, suolaisia mustia oliiveja, fior di lattea.',
        'menu.specials.title': 'Gourmet & erikoisjutut',
        'menu.specials.subtitle': 'Mestarin käsin valmistettuja pizzoja, joissa yhdistyvät perinteiset italialaiset perusteet ja rikkaat, rustiikkiset suomalaiset täytteet.',
        'menu.specials.item1.title': 'The Nordic Chanterelle',
        'menu.specials.item1.desc': 'Paistettua kotimaisia metsäkanttarellia, tuoretta villiä rosmariinia, karamellisoitua balsamicoa punasipulia, kylmäpuristettua mäntypihkaöljyä, provolaa.',
        'menu.specials.item2.title': 'Prosciutto e Burrata',
        'menu.specials.item2.desc': 'San Marzano DOP -tomaatit, pehmeää Parma-kinkkua, kokonainen tuotu kermaisa burrata-pallo, tuoretta villiä arugulaa, oliiviöljykuorrute.',
        'menu.specials.item3.title': 'Saaristolais-Salmon',
        'menu.specials.item3.desc': 'Kermainen valkoinen pohja, kylmäsavustettua lohifilettä Suomen saaristosta, tuoretta tilliä, suolakurkkuraitoja, punasipulia ja kapriksia.',
        'menu.dolci.title': 'Dolci & Bevande',
        'menu.dolci.subtitle': 'Hengaile makeissa, talon valmistamissa perinteisissä jälkiruoissa ja täydellisesti yhdistetyissä paikallisissa oluissa sekä premium italialaisissa viineissä.',
        'menu.dolci.item1.title': 'Classico Tiramisù',
        'menu.dolci.item1.desc': 'Savoiardi-keksiä kostutettuna tummaa paahdettua espressossa, kerroksia kermaista makeaa mascarponea, ripoteltuna premium kaakaopulverilla.',
        'menu.dolci.item2.title': 'Panna Cotta',
        'menu.dolci.item2.desc': 'Sileä vaniljatäytteinen panna cotta tarjoiltuna karvas-suklaisella marjakeitoksella ja rapealla mantelituilella.',
        'menu.dolci.item3.title': 'Italialainen espresso',
        'menu.dolci.item3.desc': 'Kaksinkertainen espresso, jossa on velvety-kermainen crema, tarjottuna perinteisissä italialaisissa keramiikkamukeissa.',
        'menu.diet.vegetarian': 'Kasviksia',
        'menu.diet.gfa': 'Gluteeniton vaihtoehto saatavilla',
        'menu.diet.vegan': 'Vegaaninen',
        'menu.diet.traditional': '100 % perinteinen',
        'menu.diet.spicy': 'Tulinen',
        'menu.diet.local': 'Paikallista',
        'menu.diet.premium': 'Premium-valinta',
        'menu.diet.nordic': 'Pohjoismainen fuusio',
        'menu.diet.classic': 'Klassinen suosikki',
        'menu.alert': 'Ruokavaliorajoitteet: Kaikki pizzamme voidaan valmistaa gluteenittomalla pohjalla (+2,50 €) tai vegaanisella juustolla pyynnöstä. Ilmoita allergioista tarjoilijalle ennen tilausta.',
        'sticky.message': 'Nälkä? Varaa paikka tai ota take-away!',
        'sticky.reserve': 'Varaa verkossa',
        'footer.desc': 'Tuomme aidon neapolitan perinteen Aurajoen rannoille. Lämmin tunnelma, rehellinen vieraanvaraisuus ja vertaansa vailla oleva hidasnousuinen taikina.',
        'footer.hours': 'Aukioloajat',
        'footer.findUs': 'Löydä meidät',
        'footer.copyright': '© 2024 Pizzeria Turku. Kaikki oikeudet pidätetään.',
        'footer.credit': 'Käsityönä valmistettu aidon pizzan rakastajille.'
      }
    },
    story: {
      en: {
        'lang.button': 'Suomeksi',
        'lang.aria': 'Switch to Finnish',
        'nav.home': 'Home',
        'nav.story': 'Our Story',
        'nav.menu': 'Menu',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'nav.reserve': 'Reserve Table',
        'nav.brand.aria': 'Pizzeria Turku Homepage',
        'page.title': 'Our Story | Pizzeria Turku',
        'meta.desc': 'Discover how family tradition, premium local ingredients, and a raw passion for custom wood-fired oven baking built Pizzeria Turku.',
        'subpage.badge': 'Il Nostro Cammino',
        'subpage.title': 'Our Story',
        'subpage.subtitle': 'Learn how we brought authentic Neapolitan pizza-making traditions to Turku.',
        'story.origin.tagline': 'Our Roots',
        'story.origin.title': 'Traditional Recipes',
        'story.origin.p1': 'Our restaurant was founded with a simple goal: to serve real Neapolitan pizza in Turku. Our passion for pizza comes from traditional Italian recipes passed down through generations.',
        'story.origin.p2': 'We wanted to create a welcoming space where locals can experience the light, pillowy crust and simple, fresh toppings of an authentic wood-fired pizza.',
        'story.oven.tagline': 'The Heart of Our Kitchen',
        'story.oven.title': 'The Wood-Fired Oven',
        'story.oven.p1': 'The heart of our kitchen is our custom-built stone oven imported directly from Italy. It burns local birch wood to reach the high temperatures needed for the perfect bake.',
        'story.oven.p2': 'At 450°C, pizzas cook in just 90 seconds. This fast bake locks in moisture, leaving the crust incredibly airy, soft inside, and perfectly charred on the outside.',
        'story.philosophy.tagline': 'Our Philosophy',
        'story.philosophy.title': 'No Shortcuts',
        'story.philosophy.p1': 'We never use artificial yeast or shortcuts. Our dough is naturally leavened over 48 hours, creating a light and easily digestible crust with a rich, natural flavor.',
        'story.philosophy.p2': 'We also support local producers, sourcing fresh herbs, seasonal vegetables, and premium meats from Finnish farms, combining them with quality Italian ingredients.',
        'cta.title': 'Taste the Tradition for Yourself',
        'cta.desc': 'Join us tonight for a warm, cozy slice of pure culinary craftsmanship. Tables fill up quickly, especially on weekends!',
        'cta.menu': 'See the Menu',
        'cta.reserve': 'Reserve Your Table',
        'sticky.message': 'Hungry? Book a spot or grab a takeaway!',
        'sticky.reserve': 'Reserve Online',
        'footer.desc': 'Bringing true Neapolitan tradition to the Aurajoki banks. Cozy warmth, honest hospitality, and unparalleled slow-risen dough.',
        'footer.hours': 'Opening Hours',
        'footer.findUs': 'Find Us',
        'footer.copyright': '© 2024 Pizzeria Turku. All Rights Reserved.',
        'footer.credit': 'Artisanally crafted for authentic pizza lovers.'
      },
      fi: {
        'lang.button': 'English',
        'lang.aria': 'Vaihda englanniksi',
        'nav.home': 'Koti',
        'nav.story': 'Tarinamme',
        'nav.menu': 'Menu',
        'nav.testimonials': 'Arvostelut',
        'nav.contact': 'Yhteystiedot',
        'nav.reserve': 'Varaa pöytä',
        'nav.brand.aria': 'Pizzeria Turku etusivu',
        'page.title': 'Tarinamme | Pizzeria Turku',
        'meta.desc': 'Lue kuinka toimme aidon napolilaisen pizzaperinteen Turkuun.',
        'subpage.badge': 'Il Nostro Cammino',
        'subpage.title': 'Tarinamme',
        'subpage.subtitle': 'Lue miten toimme aidon napolilaisen pizzaperinteen Turkuun.',
        'story.origin.tagline': 'Juuriamme',
        'story.origin.title': 'Perinteiset reseptit',
        'story.origin.p1': 'Ravintolamme perustettiin yksinkertaisella tavoitteella: tarjota aitoa napolilaista pizzaa Turussa. Intohimomme ruoanlaittoon kumpuaa perinteisistä italialaisista resepteistä.',
        'story.origin.p2': 'Halusimme luoda viihtyisän paikan, jossa asiakkaat voivat nauttia täydellisen pehmeästä kuoresta ja yksinkertaisen tuoreista täytteistä.',
        'story.oven.tagline': 'Keittiömme sydän',
        'story.oven.title': 'Puu-uuni',
        'story.oven.p1': 'Keittiömme sydän on suoraan Italiasta tuotu kiviuunimme. Poltamme kotimaista koivua saavuttaaksemme täydelliseen paistoon tarvittavan korkean lämpötilan.',
        'story.oven.p2': 'Korkeassa lämpötilassa pizza paistuu vain 90 sekunnissa. Nopea paisto säilyttää kosteuden, tehden kuoresta erittäin ilmavan, sisältä pehmeän ja päältä sopivasti rapean.',
        'story.philosophy.tagline': 'Filosofiamme',
        'story.philosophy.title': 'Ei oikoteitä',
        'story.philosophy.p1': 'Emme käytä teollisia oikoteitä tai lisäaineita. Taikinamme kohoaa luonnollisesti 48 tuntia, mikä tekee kuoresta kevyen, helposti sulavan ja maukkaan.',
        'story.philosophy.p2': 'Tuemme suomalaisia pientuottajia hankkimalla tuoreet kasvikset ja lihat kotimaisilta tiloilta, yhdistäen ne laadukkaisiin italialaisiin tuotteisiin.',
        'cta.title': 'Maista perinnettä itse',
        'cta.desc': 'Tule meille tänään lämpimään, mukavaan palaa puhdasta kulinaarista ammattitaitoa. Pöydät täyttyvät nopeasti, etenkin viikonloppuisin!',
        'cta.menu': 'Katso menu',
        'cta.reserve': 'Varaa pöytäsi',
        'sticky.message': 'Nälkä? Varaa paikka tai ota take-away!',
        'sticky.reserve': 'Varaa verkossa',
        'footer.desc': 'Tuomme aidon neapolitan perinteen Aurajoen rannoille. Lämmin tunnelma, rehellinen vieraanvaraisuus ja vertaansa vailla oleva hidasnousuinen taikina.',
        'footer.hours': 'Aukioloajat',
        'footer.findUs': 'Löydä meidät',
        'footer.copyright': '© 2024 Pizzeria Turku. Kaikki oikeudet pidätetään.',
        'footer.credit': 'Käsityönä valmistettu aidon pizzan rakastajille.'
      }
    },
    contact: {
      en: {
        'lang.button': 'Suomeksi',
        'lang.aria': 'Switch to Finnish',
        'nav.home': 'Home',
        'nav.story': 'Our Story',
        'nav.menu': 'Menu',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'nav.reserve': 'Reserve Table',
        'nav.brand.aria': 'Pizzeria Turku Homepage',
        'page.title': 'Contact & Reservation | Pizzeria Turku',
        'meta.desc': 'Book a table or reach out to us at Pizzeria Turku. Located on Eerikinkatu in Turku. Fast, simple online reservations.',
        'subpage.badge': 'Prenotazione',
        'subpage.title': 'Reserve & Connect',
        'subpage.subtitle': 'Find our opening hours, address, or book a table online.',
        'contact.tagline': 'Visit Us',
        'contact.title': 'Pizzeria Turku',
        'contact.desc': 'We are located in the center of Turku on Eerikinkatu, near the riverbanks. Parking is available nearby.',
        'contact.address.title': 'Address',
        'contact.address.value': 'Eerikinkatu 12, 20100 Turku, Finland',
        'contact.phone.title': 'Phone',
        'contact.email.title': 'Email',
        'reservation.title': 'Book a Table',
        'reservation.subtitle': 'Book your table instantly using the form below.',
        'form.name': 'Full Name',
        'form.name.placeholder': 'E.g. Elias Virtanen',
        'form.email': 'Email Address',
        'form.email.placeholder': 'elias@example.fi',
        'form.phone': 'Phone Number',
        'form.phone.placeholder': '+358 40...',
        'form.guests': 'Guests Count',
        'form.guests.option1': '1 Person',
        'form.guests.option2': '2 People',
        'form.guests.option3': '3 People',
        'form.guests.option4': '4 People',
        'form.guests.option5': '5 People',
        'form.guests.option6': '6 People',
        'form.guests.option7': '7+ (Group)',
        'form.date': 'Preferred Date',
        'form.time': 'Preferred Time',
        'form.notes': 'Special Requests / Dietary Restrictions',
        'form.notes.placeholder': 'E.g. Gluten-free base, wheelchair access, high chair for baby...',
        'form.submit': 'Submit Reservation Request',
        'form.success': 'Grazie! Your table reservation request has been submitted. We will send a confirmation SMS/email to you shortly.',
        'sticky.message': 'Hungry? Book a spot or grab a takeaway!',
        'sticky.reserve': 'Reserve Online',
        'footer.desc': 'Bringing true Neapolitan tradition to the Aurajoki banks. Cozy warmth, honest hospitality, and unparalleled slow-risen dough.',
        'footer.hours': 'Opening Hours',
        'footer.findUs': 'Find Us',
        'footer.copyright': '© 2024 Pizzeria Turku. All Rights Reserved.',
        'footer.credit': 'Artisanally crafted for authentic pizza lovers.'
      },
      fi: {
        'lang.button': 'English',
        'lang.aria': 'Vaihda englanniksi',
        'nav.home': 'Koti',
        'nav.story': 'Tarinamme',
        'nav.menu': 'Menu',
        'nav.testimonials': 'Arvostelut',
        'nav.contact': 'Yhteystiedot',
        'nav.reserve': 'Varaa pöytä',
        'nav.brand.aria': 'Pizzeria Turku etusivu',
        'page.title': 'Yhteystiedot & varaukset | Pizzeria Turku',
        'meta.desc': 'Varaa pöytä tai ota meihin yhteyttä Pizzeria Turkuun. Sijainti Eerikinkatu Turussa. Nopea ja yksinkertainen varaus verkossa.',
        'subpage.badge': 'Prenotazione',
        'subpage.title': 'Varaa & ota yhteyttä',
        'subpage.subtitle': 'Katso aukioloajat, yhteystiedot tai varaa pöytä verkossa.',
        'contact.tagline': 'Yhteystiedot',
        'contact.title': 'Pizzeria Turku',
        'contact.desc': 'Sijaitsemme Turun keskustassa Eerikinkadulla, lähellä Aurajokea. Parkkipaikkoja löytyy ravintolan edustalta.',
        'contact.address.title': 'Osoite',
        'contact.address.value': 'Eerikinkatu 12, 20100 Turku, Suomi',
        'contact.phone.title': 'Puhelin',
        'contact.email.title': 'Sähköposti',
        'reservation.title': 'Varaa pöytä',
        'reservation.subtitle': 'Varaa pöytäsi helposti alla olevalla lomakkeella.',
        'form.name': 'Koko nimi',
        'form.name.placeholder': 'Esim. Elias Virtanen',
        'form.email': 'Sähköpostiosoite',
        'form.email.placeholder': 'elias@example.fi',
        'form.phone': 'Puhelinnumero',
        'form.phone.placeholder': '+358 40...',
        'form.guests': 'Vieraiden määrä',
        'form.guests.option1': '1 henkilö',
        'form.guests.option2': '2 henkilöä',
        'form.guests.option3': '3 henkilöä',
        'form.guests.option4': '4 henkilöä',
        'form.guests.option5': '5 henkilöä',
        'form.guests.option6': '6 henkilöä',
        'form.guests.option7': '7+ (ryhmä)',
        'form.date': 'Toivottu päivä',
        'form.time': 'Toivottu aika',
        'form.notes': 'Erityispyynnöt / ruokavaliorajoitteet',
        'form.notes.placeholder': 'Esim. gluteeniton pohja, pyörätuolipääsy, istuimelle lapselle...',
        'form.submit': 'Lähetä varauspyyntö',
        'form.success': 'Kiitos! Pöytävarauspyyntösi on lähetetty. Lähetämme vahvistusviestin SMS/ sähköpostitse pian.',
        'sticky.message': 'Nälkä? Varaa paikka tai ota take-away!',
        'sticky.reserve': 'Varaa verkossa',
        'footer.desc': 'Tuomme aidon neapolitan perinteen Aurajoen rannoille. Lämmin tunnelma, rehellinen vieraanvaraisuus ja vertaansa vailla oleva hidasnousuinen taikina.',
        'footer.hours': 'Aukioloajat',
        'footer.findUs': 'Löydä meidät',
        'footer.copyright': '© 2024 Pizzeria Turku. Kaikki oikeudet pidätetään.',
        'footer.credit': 'Käsityönä valmistettu aidon pizzan rakastajille.'
      }
    },
    testimonials: {
      en: {
        'lang.button': 'Suomeksi',
        'lang.aria': 'Switch to Finnish',
        'nav.home': 'Home',
        'nav.story': 'Our Story',
        'nav.menu': 'Menu',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'nav.reserve': 'Reserve Table',
        'nav.brand.aria': 'Pizzeria Turku Homepage',
        'page.title': 'Customer Testimonials | Pizzeria Turku',
        'meta.desc': 'Read authentic Google-style reviews from locals in Turku about our cozy atmosphere, wood-fired sourdough crusts and delicious pizza.',
        'subpage.badge': 'Recensioni',
        'subpage.title': 'What Our Guests Say',
        'subpage.subtitle': 'See what our customers have to say about our food and service.',
        'score.title': '4.9 out of 5 Stars',
        'score.count': 'Based on 420+ verified Google & Facebook reviews from Turku',
        'score.button': 'Write a Google Review',
        'review1.title': 'Best sourdough pizza in Turku!',
        'review1.content': 'I\'ve lived in Turku for five years and this is easily the absolute best pizza I\'ve eaten here. The crust has perfect leopard spots and is extremely light. I didn\'t feel bloated at all afterward. Highly recommend the Diavola!',
        'review2.title': 'Incredibly cozy atmosphere',
        'review2.content': 'Loved the warm, wood-paneled rustic design. It feels like stepping into a cozy cabin in Italy. The staff were exceptionally friendly and recommended a great organic white wine to go with my Chanterelle pizza.',
        'review3.title': 'Perfect crust texture',
        'review3.content': 'Real wood-fired Neapolitan pizza is rare around here. They bake it inside a beautiful massive stone oven. 90 seconds and it\'s perfectly done. Sourdough base has wonderful complexity. Will be a regular visitor here!',
        'review4.title': 'Generous high-quality toppings',
        'review4.content': 'The prosciutto was freshly sliced thin, and the burrata ball in the center was incredibly fresh and creamy. They really prioritize ingredients. Clean spacing and outstanding, professional service.',
        'review5.title': 'Stunning Neapolitan style',
        'review5.content': 'As a pizza enthusiast from Southern Europe, I have high standards. Pizzeria Turku fully hits the mark. Soft, thin center with a high, airy, crispy cornicione. Absolutely gorgeous work!',
        'review6.title': 'Fantastic Vegan Options',
        'review6.content': 'Many pizza joints struggle with vegan adjustments, but here they swap with highly premium dairy-free cheese that melts perfectly, and the base dough itself is completely vegan. Fantastic service!',
        'sticky.message': 'Hungry? Book a spot or grab a takeaway!',
        'sticky.reserve': 'Reserve Online',
        'footer.desc': 'Bringing true Neapolitan tradition to the Aurajoki banks. Cozy warmth, honest hospitality, and unparalleled slow-risen dough.',
        'footer.hours': 'Opening Hours',
        'footer.findUs': 'Find Us',
        'footer.copyright': '© 2024 Pizzeria Turku. All Rights Reserved.',
        'footer.credit': 'Artisanally crafted for authentic pizza lovers.'
      },
      fi: {
        'lang.button': 'English',
        'lang.aria': 'Vaihda englanniksi',
        'nav.home': 'Koti',
        'nav.story': 'Tarinamme',
        'nav.menu': 'Menu',
        'nav.testimonials': 'Arvostelut',
        'nav.contact': 'Yhteystiedot',
        'nav.reserve': 'Varaa pöytä',
        'nav.brand.aria': 'Pizzeria Turku etusivu',
        'page.title': 'Asiakkaiden arvostelut | Pizzeria Turku',
        'meta.desc': 'Lue aitoja Google-tyylisiä arviointeja turkulaisilta meidän mukavasta tunnelmasta, puuhellapizzan kuoresta ja herkullisesta pizzasta.',
        'subpage.badge': 'Recensioni',
        'subpage.title': 'Mitä vieraat sanovat',
        'subpage.subtitle': 'Lue asiakkaidemme kokemuksia ruoastamme ja palvelustamme.',
        'score.title': '4,9 / 5 tähteä',
        'score.count': 'Perustuu 420+ varmistettuun Google- ja Facebook-arvosteluun Turusta',
        'score.button': 'Kirjoita Google-arvostelu',
        'review1.title': 'Paras sourdough-pizza Turussa!',
        'review1.content': 'Olen asunut Turussa viisi vuotta, ja tämä on helposti paras pizza, jonka olen täällä syönyt. Kuori on täydellisen leopardinpisteinen ja erittäin kevyt. En tuntenut itseäni turvoksissa jälkeenpäin. Suosittelen lämpimästi Diavolaa!',
        'review2.title': 'Äärimmäisen lämmin tunnelma',
        'review2.content': 'Rakastin lämpimää, puupaneelista rustiikkista sisustusta. Se tuntuu kuin astuisi Italiaan. Henkilökunta oli poikkeuksellisen ystävällistä ja suositteli hyvää luomuvalkoviiniä Chanterelle-pizzan kanssa.',
        'review3.title': 'Täydellinen kuorirakenne',
        'review3.content': 'Aito puuhellassa paistettu neapolitanpitsa on täällä harvinaista. He paistavat sen kauniissa massiivisessa kiviuunissa. 90 sekuntia ja se on täydellisesti kypsä. Sourdough-pohjassa on ihastuttava monimutkaisuus. Tulen olemaan säännöllinen vierailija täällä!',
        'review4.title': 'Runsaat laadukkaat täytteet',
        'review4.content': 'Prosciutto oli juuri leikattu ohuiksi viipaleiksi ja burrata-pallo keskellä oli uskomattoman tuore ja kermaista. He asettavat aineet etusijalle. Siisti tila ja erinomainen ammattimainen palvelu.',
        'review5.title': 'Upea neapolitan tyyli',
        'review5.content': 'Etelä-Euroopasta kotoisin oleva pizza-fani, minulla on korkeat standardit. Pizzeria Turku täyttää ne täysin. Pehmeä, ohut keskusta korkean, ilmavan ja rapean cornicione-kuoren kanssa. Täysin upeaa!',
        'review6.title': 'Mahtavat vegaaniset vaihtoehdot',
        'review6.content': 'Monella pizzapaikalla on vaikeuksia vegaanisten muutosten kanssa, mutta täällä ne vaihtavat erittäin premium-maitotuotteettomaan juustoon, joka sulaa täydellisesti, ja itse pohjataikina on täysin vegaaninen. Mahtava palvelu!',
        'sticky.message': 'Nälkä? Varaa paikka tai ota take-away!',
        'sticky.reserve': 'Varaa verkossa',
        'footer.desc': 'Tuomme aidon neapolitan perinteen Aurajoen rannoille. Lämmin tunnelma, rehellinen vieraanvaraisuus ja vertaansa vailla oleva hidasnousuinen taikina.',
        'footer.hours': 'Aukioloajat',
        'footer.findUs': 'Löydä meidät',
        'footer.copyright': '© 2024 Pizzeria Turku. Kaikki oikeudet pidätetään.',
        'footer.credit': 'Käsityönä valmistettu aidon pizzan rakastajille.'
      }
    }
  };

  const syncInternalLinksWithLanguage = () => {
    const currentLang = getStoredLanguage();

    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
        return;
      }

      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) {
          return;
        }

        url.searchParams.set('lang', currentLang);
        link.setAttribute('href', `${url.pathname}${url.search}${url.hash}`);
      } catch {
        // Ignore invalid URLs.
      }
    });
  };

  const applyTranslations = () => {
    const lang = getStoredLanguage();
    const pageTranslations = translations[pageKey][lang];
    if (!pageTranslations) {
      return;
    }
    const root = document.documentElement;

    root.lang = lang === 'fi' ? 'fi' : 'en';
    document.body.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (pageTranslations[key]) {
        element.textContent = pageTranslations[key];
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
      const config = element.getAttribute('data-i18n-attr');
      if (!config) return;
      const [attrName, key] = config.split(':');
      if (pageTranslations[key]) {
        element.setAttribute(attrName, pageTranslations[key]);
      }
    });

    const titleEl = document.querySelector('title');
    if (titleEl && pageTranslations['page.title']) {
      titleEl.textContent = pageTranslations['page.title'];
    }

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && pageTranslations['meta.desc']) {
      descMeta.setAttribute('content', pageTranslations['meta.desc']);
    }

    const langButton = document.getElementById('lang-toggle');
    if (langButton) {
      langButton.textContent = pageTranslations['lang.button'];
      langButton.setAttribute('aria-label', pageTranslations['lang.aria']);
    }
  };

  const toggleLanguage = () => {
    const current = getStoredLanguage();
    const nextLang = current === 'fi' ? 'en' : 'fi';
    setStoredLanguage(nextLang);
    updateUrlLanguage(nextLang);
    syncInternalLinksWithLanguage();
    applyTranslations();
  };

  // ==========================================================================
  // 1. MOBILE MENU DRAWER CONTROLLERS
  // ==========================================================================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close mobile menu if link clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      });
    });
  }

  const langToggleButton = document.getElementById('lang-toggle');
  if (langToggleButton) {
    langToggleButton.addEventListener('click', toggleLanguage);
  }

  syncInternalLinksWithLanguage();

  // ==========================================================================
  // 2. NAV ACCENT & BACKGROUND CONTROL ON SCROLL
  // ==========================================================================
  const navbar = document.getElementById('navbar');

  const handleNavbarBackground = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarBackground);
  handleNavbarBackground(); // Executed once initially

  // ==========================================================================
  // 3. STICKY CALL-TO-ACTION BAR VISIBILITY CONTROLLER
  // ==========================================================================
  const stickyCta = document.getElementById('sticky-cta');

  if (stickyCta) {
    window.addEventListener('scroll', () => {
      // Appear after user scrolls down 300px
      if (window.scrollY > 300) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }
    });
  }

  // ==========================================================================
  // 4. MENU CATEGORY TAB SELECTION LOGIC
  // ==========================================================================
  const menuTabs = document.getElementById('menu-tabs');

  if (menuTabs) {
    const tabButtons = menuTabs.querySelectorAll('.menu-tab-btn');
    const categoryGroups = document.querySelectorAll('.menu-category-group');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');

        // Deactivate all tab controls and blocks
        tabButtons.forEach(btn => btn.classList.remove('active'));
        categoryGroups.forEach(grp => grp.classList.remove('active'));

        // Activate matching components
        button.classList.add('active');
        const targetCategory = document.getElementById(targetId);
        if (targetCategory) {
          targetCategory.classList.add('active');
        }
      });
    });
  }

  // ==========================================================================
  // 5. RESERVATION FORM CLIENT-SIDE PROCESSOR
  // ==========================================================================
  const resForm = document.getElementById('res-form');
  const successAlert = document.getElementById('form-success');

  if (resForm && successAlert) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Intercept real submit (Mock processing)

      // Retrieve form details
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const phone = document.getElementById('form-phone').value;

      if (name && email && phone) {
        // Execute smooth transitions
        resForm.style.display = 'none';
        successAlert.style.display = 'block';
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Set default minimum date limit on input calendars
  const dateInput = document.getElementById('form-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  applyTranslations();
});
