// Находим все элементы с классом "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// Обходим все найденные элементы
dropdowns.forEach((dropdown) => {
    // Находим внутри каждого элемента кнопку и список
    const button = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');

    // Добавляем обработчик события на кнопку для открытия/закрытия списка
    button.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active');
    });

    // Находим все пункты списка
    const items = dropdown.querySelectorAll('.dropdown__item');

    // Добавляем обработчик события на каждый пункт списка
    items.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Предотвращаем переход по ссылке

            // Получаем текст из выбранного пункта и устанавливаем его в кнопку
            const selectedItemText = item.querySelector('.dropdown__link').textContent;
            button.textContent = selectedItemText;

            // Закрываем список
            list.classList.remove('dropdown__list_active');
        });
    });
});