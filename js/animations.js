const header = document.querySelector(".header");
const menu = document.querySelector(".header__links");

if (window.scrollY > window.innerHeight - window.innerWidth * 4 / 100) {
  header.classList.remove("on-top");
}

const toggleMenu = () => {
  const btnToggle = document.getElementById("menuToggle");

  // Переключаем классы меню
  menu.classList.toggle("header__links--close");
  menu.classList.toggle("header__links--open");

  // Стили для header при открытом/закрытом меню
  if (header.classList.contains("on-top") && menu.classList.contains("header__links--open")) {
    header.style.top = "0";
    header.style.paddingTop = "calc(var(--offset) * 2)";
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.padding = "calc(var(--offset) * 0.5) 0";
    if (header.classList.contains("on-top")) {
      header.style.top = "calc(var(--offset) * 2 - var(--offset) * 0.5)";
    }
  }

  // Обновляем текст кнопки меню для i18n
  if (btnToggle) {
    const isOpen = menu.classList.contains("header__links--open");
    const lang = localStorage.getItem("siteLang") || "ru";
    const key = isOpen
      ? btnToggle.getAttribute("data-i18n-close")
      : btnToggle.getAttribute("data-i18n-open");
    const text = translations?.[lang]?.[key];
    if (text) btnToggle.textContent = text;
  }
};


const handleScroll = () => {
  if (window.scrollY > window.innerHeight - window.innerWidth * 4 / 100) {
    header.classList.remove("on-top");
    header.style.top = 0;
  } else {
    header.classList.add("on-top");
    if (menu.classList.contains("header__links--open")) {
      header.style.top = 0;
      header.style.paddingTop = "calc(var(--offset) * 2)";
      header.style.backgroundColor = "white";
    } else {
      header.style.top = "calc(var(--offset) * 2 - var(--offset) * 0.5)";
    }
  }
};

let scrollTick = false;
window.addEventListener(
  "scroll",
  () => {
    if (!scrollTick) {
      scrollTick = true;
      requestAnimationFrame(() => {
        handleScroll();
        scrollTick = false;
      });
    }
  },
  { passive: true }
);
window.addEventListener('load', () => {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" }
  });

  tl
    // 1) фон
    .fromTo(
      ".first-screen__bg",
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.2 }
    )
    // 2) первый h4
    .fromTo(
      ".first-screen__text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.6"        // накладываем на конец предыдущей
    )
    // 3) заголовок h1
    .fromTo(
      ".first-screen__title",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    )
    // 4) второстепенный текст
    .fromTo(
      ".first-screen__secondary-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.5"
    )
    // 5) ссылка
    .fromTo(
      ".first-screen__link",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5 },
      "-=0.4"
    );

  document.querySelectorAll('.about__text').forEach(section => {
    // начальное состояние
    gsap.set(section, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',    // когда верх секции входит в 80% высоты viewport
      end: 'bottom 20%',   // когда низ секции доходит до 20% высоты viewport
      onEnter: () => gsap.to(section, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }),
      onLeave: () => gsap.to(section, { opacity: 0, y: 50, duration: 0.5, ease: 'power3.in' }),
      onEnterBack: () => gsap.to(section, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }),
      onLeaveBack: () => gsap.to(section, { opacity: 0, y: -50, duration: 0.5, ease: 'power3.in' }),
    });
  });

  section = document.querySelector('section.ads')

  gsap.set(section, { opacity: 0, x: 100 });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 80%',
    end: 'bottom 20%',
    onEnter: () => gsap.to(section, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }),
    onLeave: () => gsap.to(section, { opacity: 0, x: 100, duration: 0.5, ease: 'power3.in' }),
    onEnterBack: () => gsap.to(section, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }),
    onLeaveBack: () => gsap.to(section, { opacity: 0, x: -100, duration: 0.5, ease: 'power3.in' }),
  });

        gsap.fromTo(document.querySelectorAll(".services__item"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: document.querySelectorAll(".services__item"),
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );
});

