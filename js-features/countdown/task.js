<!DOCTYPE html>
<html>
<head>
    <title>Таймер обратного отсчёта</title>
</head>
<body>
    <div id="timer"></div>

    <script>
        let seconds = 60;

        function updateTimer() {
            const timerElement = document.getElementById('timer');

            // Проверяем, если время закончилось
            if (seconds <= 0) {
                clearInterval(interval);
                timerElement.textContent = 'Вы победили в конкурсе!';
                if (seconds <= 0) {
                    clearInterval(interval);
                    timerElement.textContent = 'Вы победили в конкурсе!';
                    
                    const downloadLink = document.createElement('a');
                    downloadLink.href = 'URL_файла'; 
                    downloadLink.download = 'имя_файла'; 
                    downloadLink.style.display = 'none';
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                }                
            } else {
                const hours = Math.floor(seconds / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);
                const remainingSeconds = seconds % 60;
                
                // Форматируем оставшееся время в формат hh:mm:ss
                const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
                timerElement.textContent = formattedTime;
                seconds--;
            }
        }
        const interval = setInterval(updateTimer, 1000);
    </script>
</body>
</html>
