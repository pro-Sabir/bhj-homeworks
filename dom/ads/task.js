// Получаем все элементы с классом "rotator"
const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
  const cases = rotator.querySelectorAll('.rotator__case');
  let currentCaseIndex = 0;

  // Функция для смены активного элемента в ротаторе
  function rotateCases() {
    const currentCase = cases[currentCaseIndex];
    const nextCaseIndex = (currentCaseIndex + 1) % cases.length;
    const nextCase = cases[nextCaseIndex];

    currentCase.classList.remove('rotator__case_active');
    nextCase.classList.add('rotator__case_active');

    // Задаем интервал смены элементов (1000 мс = 1 секунда)
    const dataSpeed = currentCase.getAttribute('data-speed');
    setTimeout(rotateCases, dataSpeed || 1000);

    // Изменение цвета текста
    const dataColor = nextCase.getAttribute('data-color');
    if (dataColor) {
      rotator.style.color = dataColor;
    }

    currentCaseIndex = nextCaseIndex;
  }

  // Запускаем первую смену элементов
  rotateCases();
});
