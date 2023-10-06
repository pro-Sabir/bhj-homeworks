// Находим нужные элементы в DOM
const inputTask = document.querySelector('.tasks__input');
const addButton = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');

// Функция для добавления задачи
function addTask() {
  // Получаем текст из поля ввода
  const taskText = inputTask.value.trim();

  // Проверяем, что текст не пустой
  if (taskText !== '') {
    // Создаем новый элемент задачи - <li>
    const taskItem = document.createElement('li');

    // Создаем элемент для заголовка задачи
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = taskText;

    // Создаем элемент для кнопки удаления задачи
    const removeButton = document.createElement('a');
    removeButton.classList.add('task__remove');
    removeButton.innerHTML = '&times;';

    // Добавляем обработчик события для кнопки удаления
    removeButton.addEventListener('click', function () {
      taskList.removeChild(taskItem);
    });

    // Добавляем заголовок и кнопку удаления к элементу задачи
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(removeButton);

    // Добавляем элемент задачи к списку задач
    taskList.appendChild(taskItem);

    // Очищаем поле ввода
    inputTask.value = '';
  }
}

// Добавляем обработчик события для кнопки "Добавить задачу"
addButton.addEventListener('click', function (event) {
  event.preventDefault(); // Предотвращаем стандартное действие кнопки
  addTask();
});

// Добавляем обработчик события для поля ввода при нажатии Enter
inputTask.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Предотвращаем стандартное действие Enter
    addTask();
  }
});
