// Получаем список всех элементов с классом "reveal"
const revealElements = document.querySelectorAll('.reveal');

// Функция для проверки видимости элементов и добавления/удаления класса "reveal_active"
function checkReveal() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    if (elementTop < viewportHeight && elementBottom >= 0 && !element.classList.contains('reveal_active')) {
      element.classList.add('reveal_active');
    } else if ((elementTop >= viewportHeight || elementBottom < 0) && element.classList.contains('reveal_active')) {
      element.classList.remove('reveal_active');
    }
  });
}

// Добавляем обработчик события "scroll" для отслеживания изменения прокрутки окна
window.addEventListener('scroll', checkReveal);

// Вызываем функцию checkReveal() для проверки видимости элементов при загрузке страницы
checkReveal();
