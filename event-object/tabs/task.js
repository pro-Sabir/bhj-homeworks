// Находим все элементы вкладок и их содержимое
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

// Добавляем обработчики событий для каждой вкладки
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Убираем класс tab_active у всех вкладок
    tabs.forEach((t) => t.classList.remove('tab_active'));
    // Устанавливаем класс tab_active для выбранной вкладки
    tab.classList.add('tab_active');

    // Убираем класс tab__content_active у всех содержимых вкладок
    tabContents.forEach((content) =>
      content.classList.remove('tab__content_active')
    );
    // Устанавливаем класс tab__content_active для соответствующего содержимого
    tabContents[index].classList.add('tab__content_active');
  });
});
