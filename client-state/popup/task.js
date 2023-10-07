document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("subscribe-modal");
  
    // Проверяем, было ли окно уже закрыто, с учетом cookies
    const isClosed = getCookie("modalClosed");
  
    // Если окно еще не было закрыто, показываем его
    if (!isClosed) {
      modal.classList.add("modal_active");
    }
  
    // Закрытие окна
    const closeButton = modal.querySelector(".modal__close");
    closeButton.addEventListener("click", function () {
      modal.classList.remove("modal_active");
      // Записываем в cookies информацию о закрытии окна
      setCookie("modalClosed", "true");
    });
  
    // Функция для установки cookies
    function setCookie(name, value) {
      document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
    }
  
    // Функция для получения cookies
    function getCookie(name) {
      const cookies = document.cookie.split("; ");
      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
          return cookieValue;
        }
      }
      return null;
    }
  });
  