// Находим элементы управления размером шрифта
const fontSizeControls = document.querySelectorAll('.font-size');

fontSizeControls.forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    // Удаляем активный класс у всех элементов
    fontSizeControls.forEach((fontSizeControl) => {
      fontSizeControl.classList.remove('font-size_active');
    });

    // Устанавливаем активный класс только для текущего элемента
    control.classList.add('font-size_active');

    // Получаем размер шрифта, который должен быть установлен
    const fontSize = control.getAttribute('data-size');

    // Находим элемент книги
    const book = document.getElementById('book');

    // Удаляем все классы, отвечающие за размер шрифта
    book.classList.remove('book_fs-big', 'book_fs-small');

    // Если есть размер шрифта в атрибуте, устанавливаем соответствующий класс
    if (fontSize === 'big') {
      book.classList.add('book_fs-big');
    } else if (fontSize === 'small') {
      book.classList.add('book_fs-small');
    }
  });
});

// Находим элементы управления цветом текста
const textColorControls = document.querySelectorAll('.text_color');

textColorControls.forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    // Удаляем активный класс у всех элементов
    textColorControls.forEach((textColorControl) => {
      textColorControl.classList.remove('color_active');
    });

    // Устанавливаем активный класс только для текущего элемента
    control.classList.add('color_active');

    // Получаем цвет текста, который должен быть установлен
    const textColor = control.getAttribute('data-text-color');

    // Находим элемент книги
    const book = document.getElementById('book');

    // Удаляем все классы, отвечающие за цвет текста
    book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');

    // Если есть цвет текста в атрибуте, устанавливаем соответствующий класс
    if (textColor === 'gray') {
      book.classList.add('book_color-gray');
    } else if (textColor === 'whitesmoke') {
      book.classList.add('book_color-whitesmoke');
    } else if (textColor === 'black') {
      book.classList.add('book_color-black');
    }
  });
});

// Находим элементы управления цветом фона
const bgColorControls = document.querySelectorAll('.bg_color');

bgColorControls.forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    // Удаляем активный класс у всех элементов
    bgColorControls.forEach((bgColorControl) => {
      bgColorControl.classList.remove('color_active');
    });

    // Устанавливаем активный класс только для текущего элемента
    control.classList.add('color_active');

    // Получаем цвет фона, который должен быть установлен
    const bgColor = control.getAttribute('data-bg-color');

    // Находим элемент книги
    const book = document.getElementById('book');

    // Удаляем все классы, отвечающие за цвет фона
    book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');

    // Если есть цвет фона в атрибуте, устанавливаем соответствующий класс
    if (bgColor === 'gray') {
      book.classList.add('book_bg-gray');
    } else if (bgColor === 'black') {
      book.classList.add('book_bg-black');
    } else if (bgColor === 'white') {
      book.classList.add('book_bg-white');
    }
  });
});
