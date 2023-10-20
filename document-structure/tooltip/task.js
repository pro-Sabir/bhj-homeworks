// Находим все элементы с классом has-tooltip
const tooltipTriggers = document.querySelectorAll('.has-tooltip');

// Создаем функцию для отображения подсказки
function showTooltip(event) {
  event.preventDefault(); // Отменяем стандартное действие ссылки
  const tooltipText = this.getAttribute('title'); // Получаем текст подсказки из атрибута title
  let tooltip = this.nextElementSibling; // Ищем следующий элемент (может быть div.tooltip)

  // Если элемент подсказки не существует, создаем его
  if (!tooltip || !tooltip.classList.contains('tooltip')) {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  // Устанавливаем текст подсказки
  tooltip.textContent = tooltipText;

  // Показываем подсказку
  tooltip.classList.add('tooltip_active');

  // Устанавливаем позицию подсказки (над элементом)
  const rect = this.getBoundingClientRect();
  tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
  tooltip.style.left = rect.left + (rect.width - tooltip.offsetWidth) / 2 + 'px';
}

// Добавляем обработчик клика на каждый элемент с классом has-tooltip
tooltipTriggers.forEach((trigger) => {
  trigger.addEventListener('click', showTooltip);
});

// Добавляем обработчик клика на документе для закрытия подсказки
document.addEventListener('click', function closeTooltip(event) {
  const tooltip = document.querySelector('.tooltip'); // Находим элемент подсказки
  if (tooltip && !event.target.classList.contains('has-tooltip')) {
    tooltip.classList.remove('tooltip_active'); // Скрываем подсказку, если клик был не по элементу с подсказкой
  }
});

// Останавливаем всплытие события клика на элементе подсказки
const tooltipElement = document.querySelector('.tooltip');
if (tooltipElement) {
  tooltipElement.addEventListener('click', function (event) {
    event.stopPropagation();
  });
}