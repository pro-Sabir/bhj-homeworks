const cookie = document.querySelector('.clicker__cookie');
const counter = document.getElementById('clicker__counter');

let clickCount = 0;
let isCookieLarge = true; 

cookie.onclick = () => {
    clickCount++;

    // Обновляем счётчик
    counter.textContent = clickCount;

    // Чередуем уменьшение и увеличение размера печеньки
    if (isCookieLarge) {
        cookie.setAttribute('width', '80');
        cookie.setAttribute('height', '80');
    } else {
        cookie.setAttribute('width', '100');
        cookie.setAttribute('height', '100');
    }

    isCookieLarge = !isCookieLarge;
};
