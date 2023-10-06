// Находим элементы в DOM
const progress = document.getElementById('progress');
const fileInput = document.getElementById('file');
const form = document.getElementById('upload-form');
const label = document.querySelector('label');

// Добавляем обработчик события выбора файла
fileInput.addEventListener('change', () => {
  // Получаем выбранный файл
  const selectedFile = fileInput.files[0];

  // Если файл выбран, отправляем его на сервер
  if (selectedFile) {
    const formData = new FormData();
    formData.append('file', selectedFile);

    // Создаем и отправляем AJAX-запрос
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

    // Отслеживаем событие изменения прогресса загрузки
    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        progress.value = percentComplete;
      }
    });

    // Отслеживаем событие успешного завершения загрузки
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // Успешно загружено, добавьте здесь логику для обработки ответа сервера
        console.log('Файл успешно загружен.');
      } else {
        console.error('Произошла ошибка при загрузке файла.');
      }
    });

    // Отслеживаем событие ошибки
    xhr.addEventListener('error', () => {
      console.error('Произошла ошибка при отправке запроса.');
    });

    // Отправляем форму с файлом
    xhr.send(formData);
  }
});

// Отслеживаем событие фокуса на элементе input
fileInput.addEventListener('focus', () => {
  label.style.border = '1px solid #e2e2e2';
});

// Отслеживаем событие потери фокуса на элементе input
fileInput.addEventListener('blur', () => {
  label.style.border = '';
});
