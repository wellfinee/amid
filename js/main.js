/* js/main.js */

// Переводы для i18n
const translations = {
    ru: {
        title: 'FAYZ DENT | Стоматология международного уровня',
        logo: 'FAYZ DENT',
        menu: 'Меню <i class="fa-solid fa-bars"></i>',
        about: 'О стоматологии',
        services: 'Услуги',
        specialists: 'Специалисты',
        works: 'Наши работы',
        pricing: 'Цены',
        contacts: 'Контакты',
        faq: 'Ответы на вопросы',
        schedule: 'ПН – СБ',
        hours: '9:00 - 19:00',
        heroSubtitle: 'Опытные стоматологи мирового уровня',
        heroTitle: 'Красивая белоснежная улыбка не мечта, а реальность в нашей клинике',
        heroLead: 'Приходи и убедись, что мы лучшие',
        heroCta: 'Записаться на консультацию',
        menuOpen: 'Открыть меню',
        menuClose: 'Закрыть меню',
        adsHint: "Думаете, белоснежная улыбка — это дорого, долго и больно? В FAYZ DENT мы опровергаем все мифы: в короткие сроки, без дискомфорта и по разумной цене вы получите по-настоящему голливудский результат. Радуйтесь жизни, сияя своей идеальной улыбкой и заряжая теплом всех вокруг!",
        aboutText: `
      <strong>FAYZ DENT</strong> — это <strong>современная</strong> стоматологическая клиника, где 
      <strong>профессиональные</strong> стоматологи объединяют <strong>опыт и передовые технологии</strong>. 
      Мы предлагаем полный спектр услуг — от профилактики и гигиены до сложного протезирования и 
      имплантации — <strong>с гарантией безболезненного лечения и максимального комфорта</strong>. 
      В <strong>FAYZ DENT</strong> вы получите не просто лечение, а комплексную заботу о 
      <strong>здоровье</strong> полости рта: от подробной диагностики до долговременного сопровождения. 
      Наша цель — <strong>ваша идеальная улыбка и абсолютная уверенность в качестве оказанной помощи.</strong>
      
      Запишитесь на консультацию и убедитесь, как приятно доверять своё здоровье настоящим 
      профессионалам!
    `,
        'item1.title': 'Лечение зубов',
        'item1.desc': 'Эффективное лечение кариеса, пульпита и других заболеваний.',
        'item2.title': 'Эндодонтия зуба',
        'item2.desc': 'Качественное лечение каналов зуба под микроскопом.',
        'item3.title': 'Художественная реставрация зубов',
        'item3.desc': 'Восстановление формы и цвета зубов с помощью композитных материалов.',
        'item4.title': 'Профессиональная чистка',
        'item4.desc': 'Удаление зубного камня и налета для здоровой улыбки.',
        'item5.title': 'Отбеливание',
        'item5.desc': 'Безопасное отбеливание зубов в кабинете стоматолога.',
        'item6.title': 'Протезирование',
        'item6.desc': 'Изготовление и установка съёмных и несъёмных протезов.',
        'item7.title': 'Виниры, Циркон',
        'item7.desc': 'Тончайшие фарфоровые накладки для идеальной эстетики.',
        'item8.title': 'Металлокерамика',
        'item8.desc': 'Надёжные коронки из металлокерамики для долговечности.'
    },
    en: {
        title: 'FAYZ DENT | International-Level Dentistry',
        logo: 'FAYZ DENT',
        menu: 'Menu <i class="fa-solid fa-bars"></i>',
        about: 'About Us',
        services: 'Services',
        specialists: 'Specialists',
        works: 'Our Work',
        pricing: 'Pricing',
        contacts: 'Contacts',
        faq: 'FAQ',
        schedule: 'Mon – Sat',
        hours: '9:00 AM - 7:00 PM',
        heroSubtitle: 'World-Class Experienced Dentists',
        heroTitle: 'A beautiful, bright smile is not a dream but reality in our clinic',
        heroLead: 'Come and see why we’re the best',
        heroCta: 'Book a Consultation',
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
        adsHint: "Think a bright white smile is expensive, time-consuming, and painful? At FAYZ DENT we bust all myths: fast treatment, painless experience, and affordable prices give you that true Hollywood result. Enjoy life by shining with your perfect smile and warming everyone around!",
        aboutText: `
      <strong>FAYZ DENT</strong> is a <strong>modern</strong> dental clinic where 
      <strong>professional</strong> dentists combine <strong>experience and advanced technologies</strong>. 
      We offer a full range of services—from prevention and hygiene to complex prosthetics and implantology—
      <strong>guaranteeing painless treatment and maximum comfort</strong>. 
      At <strong>FAYZ DENT</strong>, you get not just treatment but <strong>comprehensive oral health care</strong>:
      from detailed diagnostics to long-term support. Our goal is <strong>your perfect smile and complete confidence
      in the quality of care provided</strong>.
      Book a consultation and see how pleasant it is to trust your health to true professionals!
    `,
        'item1.title': 'Dental Treatment',
        'item1.desc': 'Effective treatment of caries, pulpitis, and other conditions.',
        'item2.title': 'Tooth Endodontics',
        'item2.desc': 'High-quality root canal therapy under a microscope.',
        'item3.title': 'Artistic Restoration',
        'item3.desc': 'Restoring tooth shape and color with composite materials.',
        'item4.title': 'Professional Cleaning',
        'item4.desc': 'Removal of tartar and plaque for a healthy smile.',
        'item5.title': 'Whitening',
        'item5.desc': 'Safe in-office teeth whitening.',
        'item6.title': 'Prosthetics',
        'item6.desc': 'Production and fitting of removable and fixed dentures.',
        'item7.title': 'Veneers & Zirconia',
        'item7.desc': 'Ultra-thin porcelain overlays for perfect aesthetics.',
        'item8.title': 'Metal-Ceramics',
        'item8.desc': 'Durable metal-ceramic crowns for longevity.'
    },
    uz: {
        title: 'FAYZ DENT | Xalqaro darajadagi stomatologiya',
        logo: 'FAYZ DENT',
        menu: 'Menyu <i class="fa-solid fa-bars"></i>',
        about: 'Klinika haqida',
        services: 'Xizmatlar',
        specialists: 'Mutaxassislar',
        works: 'Ishlarimiz',
        pricing: 'Narxlar',
        contacts: 'Kontaktlar',
        faq: 'Savollarga javoblar',
        schedule: 'Dushanba – Shanba',
        hours: '9:00 - 19:00',
        heroSubtitle: 'Jahon darajasidagi tajribali stomatologlar',
        heroTitle: 'Go‘zal oppoq tabassum xayol emas, balki klinikamizda haqiqat',
        heroLead: 'Keling va biz eng yaxshi ekanligimizga amin bo‘ling',
        heroCta: 'Konsultatsiyaga yoziling',
        menuOpen: 'Menyuni ochish',
        menuClose: 'Menyuni yopish',
        adsHint: "Oppoq tabassum qimmat, uzoq va og‘riqli deb o‘ylaysizmi? FAYZ DENTda biz barcha afsonalarni rad etamiz: qisqa muddatda, noqulayliklarsiz va maqbul narxda haqiqiy Gollivud natijasiga ega bo‘lasiz. Hayotingizdan zavqlaning, mukammal tabassumingiz bilan porlab, atrofdagilarga iliqlik ulashing!",
        aboutText: `
      <strong>FAYZ DENT</strong> — bu <strong>zamonaviy</strong> stomatologiya klinikasi, 
      professional stomatologlar <strong>tajriba va ilg‘or texnologiyalarni</strong> birlashtiradi. 
      Biz profilaktika va gigiyenadan murakkab protezlashi va implantatsiyagacha bo‘lgan xizmatlarning 
      to‘liq spektrini taklif etamiz — <strong>og‘riqsiz davolash va maksimal qulaylik kafolati</strong> bilan. 
      <strong>FAYZ DENT</strong>da siz faqat davolanishni emas, balki <strong>og‘iz bo‘shlig‘i salomatligiga</strong> 
      kompleks g‘amxo‘rlik olasiz: batafsil diagnostikadan uzoq muddatli qo‘llab-quvvatlashgacha. 
      Bizning maqsadimiz — <strong>sizning mukammal tabassumingiz va ko‘rsatilgan yordam sifatiga to‘liq ishonch</strong>.
      Konsultatsiyaga yoziling va sog‘lig‘ingizni haqiqiy mutaxassislarga ishonish qanchalik yoqimli ekanligini his eting!
    `,
        'item1.title': 'Tishlarni davolash',
        'item1.desc': 'Karies, pulpit va boshqa kasalliklarni samarali davolash.',
        'item2.title': 'Endodontiya',
        'item2.desc': 'Mikroskop ostida kanal davolash.',
        'item3.title': 'Sanʼat restavratsiyasi',
        'item3.desc': 'Kompozit materiallar yordamida shakl va rangni tiklash.',
        'item4.title': 'Professional tozalash',
        'item4.desc': 'Tosh va plakatni olib tashlash. Sogʻlom tabassum.',
        'item5.title': 'Oqartirish',
        'item5.desc': 'Ofisda xavfsiz oqartirish.',
        'item6.title': 'Protezlash',
        'item6.desc': 'Olib yuriladigan va doimiy protezlarni tayyorlash va o‘rnatish.',
        'item7.title': 'Vinerlar va Tsirkon',
        'item7.desc': 'Ideal estetika uchun yupqa porselan qoplamalar.',
        'item8.title': 'Metall-keramika',
        'item8.desc': 'Uzoq muddatli chidamlilik uchun metall-keramik tomlar.'
    }
};

// Элементы для переключения языка
const switcher = document.getElementById('langSwitcher');
const currentBtn = document.getElementById('currentLang');
const currentFlag = document.getElementById('currentFlag');
const currentLbl = document.getElementById('currentLabel');
const optionsList = document.getElementById('langOptions');

// Применение переводов
function applyTranslations(lang, flagUrl, label) {
    document.documentElement.lang = lang;
    document.title = translations[lang].title;
    // кнопка флага
    if (flagUrl) {
        currentFlag.src = flagUrl;
        currentFlag.alt = label;
        currentLbl.textContent = label;
    }
    // все элементы data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    // обновляем кнопку меню
    updateMenuButtonText(lang);
    localStorage.setItem('siteLang', lang);
}

// Обновление текста кнопки меню
function updateMenuButtonText(lang) {
    const btnToggle = document.getElementById('menuToggle');
    const menu = document.querySelector('.header__links');
    if (!btnToggle || !menu) return;
    const isOpen = menu.classList.contains('header__links--open');
    const key = isOpen ? btnToggle.getAttribute('data-i18n-close') : btnToggle.getAttribute('data-i18n-open');
    const text = translations[lang][key];
    if (text) btnToggle.innerHTML = text;
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    currentBtn.addEventListener('click', () => switcher.classList.toggle('open'));
    optionsList.addEventListener('click', e => {
        const li = e.target.closest('li'); if (!li) return;
        const lang = li.getAttribute('data-lang');
        const flagUrl = li.getAttribute('data-flag');
        const label = li.textContent.trim();
        applyTranslations(lang, flagUrl, label);
        switcher.classList.remove('open');
    });
    document.addEventListener('click', e => { if (!switcher.contains(e.target)) switcher.classList.remove('open'); });

    const saved = localStorage.getItem('siteLang') || 'ru';
    const initial = Array.from(optionsList.children).find(li => li.getAttribute('data-lang') === saved);
    if (initial) {
        applyTranslations(saved, initial.getAttribute('data-flag'), initial.textContent.trim());
    }
});
const lenis = new Lenis({
    duration: 2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    direction: 'vertical',
    gestureDirection: 'vertical',
    infinite: false,
});
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)