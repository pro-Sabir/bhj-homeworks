document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.getElementById("signin__form");
    const welcomeBlock = document.getElementById("welcome");
    const userIdSpan = document.getElementById("user_id");
    const signinBlock = document.getElementById("signin");
  
    // Проверяем, есть ли сохраненный ID пользователя в локальном хранилище
    const savedUserId = localStorage.getItem("userId");
  
    // Если есть сохраненный ID пользователя, отображаем блок welcome с ID пользователя
    if (savedUserId) {
      userIdSpan.textContent = savedUserId;
      welcomeBlock.classList.add("welcome_active");
    } else {
      signinBlock.classList.add("signin_active");
    }
  
    // Обработчик отправки формы
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Получаем данные формы
      const formData = new FormData(signinForm);
  
      // Отправляем запрос на сервер
      fetch("https://students.netoservices.ru/nestjs-backend/auth", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Если авторизация успешна, отобразим блок welcome с ID пользователя
            const userId = data.user_id;
            userIdSpan.textContent = userId;
            welcomeBlock.classList.add("welcome_active");
  
            // Сохраняем ID пользователя в локальное хранилище
            localStorage.setItem("userId", userId);
  
            // Скрываем форму авторизации
            signinBlock.classList.remove("signin_active");
          } else {
            // Если авторизация не удалась, выводим сообщение
            alert("Неверный логин/пароль");
          }
        })
        .catch((error) => {
          console.error("Ошибка:", error);
        });
    });
  });