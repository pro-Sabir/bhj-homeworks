// Находим элементы в DOM
const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

// Отправляем GET-запрос для получения данных о курсе валют
fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => response.json())
  .then(data => {
    // Скрываем анимацию загрузки
    loader.classList.remove('loader_active');

    // Обновляем данные о курсах валют
    const valuteData = data.response.Valute;
    for (const valuteCode in valuteData) {
      if (valuteData.hasOwnProperty(valuteCode)) {
        const valute = valuteData[valuteCode];

        // Создаем элемент для отображения курса валюты
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');

        // Добавляем информацию о курсе валюты
        itemElement.innerHTML = `
          <div class="item__code">${valute.CharCode}</div>
          <div class="item__value">${valute.Value}</div>
          <div class="item__currency">руб.</div>
        `;

        // Добавляем элемент к контейнеру
        itemsContainer.appendChild(itemElement);
      }
    }
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
    // Скрываем анимацию загрузки и выводим сообщение об ошибке
    loader.classList.remove('loader_active');
    itemsContainer.innerHTML = 'Произошла ошибка при загрузке данных';
  });
