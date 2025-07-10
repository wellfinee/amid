
const langSwitcher = document.querySelector('.lang-switcher');
const btnCurrent   = langSwitcher.querySelector('.current');
const optsList     = langSwitcher.querySelector('.options');

// При клике на текущий язык — переключаем класс open
btnCurrent.addEventListener('click', e => {
  e.stopPropagation();        // чтобы не всплывало на document
  langSwitcher.classList.toggle('open');
});

// Закрываем выпадашку при клике вне
document.addEventListener('click', () => {
  langSwitcher.classList.remove('open');
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


ymaps.ready(init);
function init() {
    let myMap = new ymaps.Map("map", {
        center: [41.367300, 69.293846],
        zoom: 18
    });
    let myPlacemark = new ymaps.Placemark([41.367300, 69.293846]);
    myMap.geoObjects.add(myPlacemark);
}
document.querySelectorAll(".header__links a").forEach(el => {
    el.onclick = () => {
        document.querySelector(".header__links").classList.add("header__links--close");
        document.querySelector(".header__links").classList.remove("header__links--open");
    }
}
)
document.querySelectorAll(".faq__item").forEach((item) => {
    const key = item.querySelector(".faq__key");
    const answer = item.querySelector(".faq__answer");

    let open = false;

    item.addEventListener("click", () => {
        open = !open;

        if (open) {
            // раскрытие
            answer.style.height = answer.scrollHeight + "px";
            answer.style.opacity = "1";
            answer.style.transform = "translateY(0)";
            key.textContent = "–";
        } else {
            // скрытие
            answer.style.height = "0";
            answer.style.opacity = "0";
            answer.style.transform = "translateY(-20px)";
            key.textContent = "+";
        }
    });

    // сброс transform по умолчанию
    answer.style.transition = "all 0.6s ease";
    answer.style.transform = "translateY(-20px)";
});