// Находим элементы в DOM
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

// Отправляем GET-запрос для получения данных опроса
fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    // Отображаем заголовок опроса
    pollTitle.textContent = data.data.title;

    // Отображаем варианты ответов
    data.data.answers.forEach(answer => {
      const answerButton = document.createElement('button');
      answerButton.classList.add('poll__answer');
      answerButton.textContent = answer;
      pollAnswers.appendChild(answerButton);

      // Добавляем обработчик клика на кнопку ответа
      answerButton.addEventListener('click', () => {
        // Здесь вы можете отправить POST-запрос для записи ответа на сервере,
        // но в данном задании мы просто выводим сообщение о том, что голос засчитан.
        alert('Спасибо, ваш голос засчитан!');
      });
    });
  })
  .catch(error => {
    console.error('Ошибка при загрузке опроса:', error);
    pollTitle.textContent = 'Произошла ошибка при загрузке опроса';
  });
