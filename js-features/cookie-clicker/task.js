<!DOCTYPE html>
<html>
<head>
    <title>Игра-кликер</title>
    <style>
        #cookie {
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Кликни на печеньку!</h1>
    <img id="cookie" src="cookie.png" width="100" height="100" alt="Печенька">
    <p>Счётчик: <span id="counter">0</span></p>

    <script>
        const cookie = document.getElementById('cookie');
        const counter = document.getElementById('counter');

        let clickCount = 0;
        let isCookieLarge = true; 

        cookie.onclick = () => {
            clickCount++;

            // Обновляем счётчик
            counter.textContent = clickCount;

            // Чередуем уменьшение и увеличение размера печеньки
            if (isCookieLarge) {
                cookie.setAttribute('width', '80');
                cookie.setAttribute('height', '80');
            } else {
                cookie.setAttribute('width', '100');
                cookie.setAttribute('height', '100');
            }

            isCookieLarge = !isCookieLarge;
        };
    </script>
</body>
</html>
