// main.js
const toggleMenu = () => {
  const menu = document.querySelector(".header__links");
  const header = document.querySelector(".header");
  const btnToggle = document.getElementById("menuToggle");
  const lang = document.documentElement.lang || 'ru';

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
  const lang = document.documentElement.lang || 'ru';
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

    document.querySelectorAll(".ba-container").forEach((container) => {
        const slider = container.querySelector(".ba-slider");
        const resize = container.querySelector(".ba-resize");

        const setPosition = (x) => {
            const rect = container.getBoundingClientRect();
            let pos = x - rect.left;
            pos = Math.max(0, Math.min(pos, rect.width));
            resize.style.width = `${pos}px`;
            slider.style.left = `${pos}px`;
        };

        const startDrag = (e) => {
            e.preventDefault();
            const move = (e) => {
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                setPosition(clientX);
            };
            const stop = () => {
                window.removeEventListener("mousemove", move);
                window.removeEventListener("mouseup", stop);
                window.removeEventListener("touchmove", move);
                window.removeEventListener("touchend", stop);
            };

            window.addEventListener("mousemove", move);
            window.addEventListener("mouseup", stop);
            window.addEventListener("touchmove", move);
            window.addEventListener("touchend", stop);
        };

        slider.addEventListener("mousedown", startDrag);
        slider.addEventListener("touchstart", startDrag);
    });