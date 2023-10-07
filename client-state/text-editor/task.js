       // Получаем элемент текстового редактора
       const editor = document.getElementById('editor');

       // При загрузке страницы проверяем, есть ли сохраненный текст в локальном хранилище
       const savedText = localStorage.getItem('editorText');
       if (savedText) {
           editor.value = savedText; // Если есть, устанавливаем его в редакторе
       }

       // Слушаем событие ввода текста и сохраняем его в локальное хранилище
       editor.addEventListener('input', function () {
           const text = editor.value;
           localStorage.setItem('editorText', text);
       });