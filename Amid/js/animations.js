if (window.scrollY > window.innerHeight - window.innerWidth * 4 / 100) {
  document.querySelector(".header").classList.remove("on-top")
}

// main.js
const toggleMenu = () => {
  const menu = document.querySelector(".header__links");
  const header = document.querySelector(".header");
  const btnToggle = document.getElementById("menuToggle");
  const lang = document.documentElement.lang;

  const translations = {
    openMenu: {
      ru: 'Открыть меню',
      uz: 'Menyuni ochish',
      en: 'Open menu'
    },
    closeMenu: {
      ru: 'Закрыть меню',
      uz: 'Menyuni yopish',
      en: 'Close menu'
    }
  };

  const tOpen = translations.openMenu[lang] || translations.openMenu.ru;
  const tClose = translations.closeMenu[lang] || translations.closeMenu.ru;

  // Toggle menu classes
  menu.classList.toggle("header__links--close");
  menu.classList.toggle("header__links--open");

  // Header styles when menu open/closed
  if (header.classList.contains("on-top") && menu.classList.contains("header__links--open")) {
    header.style.top = "0";
    header.style.paddingTop = "calc(var(--offset) * 2)";
    header.style.backgroundColor = "rgb(236, 252, 255)";
  } else {
    header.style.padding = "calc(var(--offset) * 0.5) 0";
    if (header.classList.contains("on-top")) {
      header.style.top = "calc(var(--offset) * 2 - var(--offset) * 0.5)";
      header.style.backgroundColor = "transparent";
    }
  }

  // Update button text
  if (btnToggle) {
    const isOpen = menu.classList.contains("header__links--open");
    btnToggle.textContent = isOpen ? tClose : tOpen;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const btnToggle = document.getElementById('menuToggle');
  const lang = document.documentElement.lang;
  const translations = {
    openMenu: {
      ru: 'Открыть меню',
      uz: 'Menyuni ochish',
      en: 'Open menu'
    }
  };
  const tOpen = translations.openMenu[lang] || translations.openMenu.ru;
  if (btnToggle) btnToggle.textContent = tOpen;
});


window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  const menu = document.querySelector(".header__links")
  if (window.scrollY > window.innerHeight - window.innerWidth * 4 / 100) {
    header.classList.remove("on-top")
    header.style.top = 0
  }
  else {
    header.classList.add("on-top")

    if (menu.classList.contains("header__links--open")) {
      header.style.top = 0
      header.style.paddingTop = "calc(var(--offset) * 2)"
      header.style.backgroundColor = "white"
    }
    else {
      header.style.top = "calc(var(--offset) * 2 - var(--offset) * 0.5)"
    }
  }
})
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

  gsap.set(section, { opacity: 0, y: 100 });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 80%',
    end: 'bottom 20%',
    onEnter: () => gsap.to(section, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }),
    onLeave: () => gsap.to(section, { opacity: 0, y: 100, duration: 0.5, ease: 'power3.in' }),
    onEnterBack: () => gsap.to(section, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }),
    onLeaveBack: () => gsap.to(section, { opacity: 0, y: -100, duration: 0.5, ease: 'power3.in' }),
  });


  document.querySelectorAll(".services__item").forEach(el => {
    gsap.fromTo(el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );
  });


})