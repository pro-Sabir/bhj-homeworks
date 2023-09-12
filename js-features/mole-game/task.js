<!DOCTYPE html>
<html>
<head>
    <title>Игра "Убей кротов"</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="hole-game">
        <div class="hole hole_has-mole" id="hole1"></div>
        <div class="hole" id="hole2"></div>
        <div class="hole" id="hole3"></div>
        <div class="hole" id="hole4"></div>
        <div class="hole" id="hole5"></div>
        <div class="hole" id="hole6"></div>
        <div class="hole" id="hole7"></div>
        <div class="hole" id="hole8"></div>
        <div class="hole" id="hole9"></div>
    </div>
    <p>Счет: <span class="score">0</span></p>
    <p>Попытки: <span class="attempts">5</span></p>

    <script src="script.js"></script>
</body>
</html>

.hole-game {
    display: flex;
    flex-wrap: wrap;
    max-width: 300px;
    margin: 0 auto;
}

.hole {
    width: 100px;
    height: 100px;
    background-color: #8b4513;
    border: 2px solid #654321;
    cursor: pointer;
    position: relative;
}

.hole_has-mole {
    background-image: url('mole.png'); 
    background-size: cover;
}

.up {
    transform: translateY(-50px);
}

.whacked {
    background-color: #8b4513;
    background-image: none;
}

const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.querySelector('.score');
const attemptsDisplay = document.querySelector('.attempts');

let score = 0;
let attempts = 5;
let moleInterval;

function getRandomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    return hole;
}

function peep() {
    const time = getRandomTime(200, 1000);
    const hole = getRandomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!hole.classList.contains('whacked')) {
            attempts--;
            attemptsDisplay.textContent = attempts;
            if (attempts === 0) {
                alert('Игра окончена. Вы проиграли.');
                resetGame();
            }
        }

        updateScore();
    }, time);
}

function updateScore() {
    score++;
    scoreDisplay.textContent = score;
    if (score === 10) {
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
    }
}

function startGame() {
    score = 0;
    attempts = 5;
    attemptsDisplay.textContent = attempts;
    scoreDisplay.textContent = score;
    moleInterval = setInterval(peep, 1000);
}

function resetGame() {
    clearInterval(moleInterval);
    attempts = 5;
    attemptsDisplay.textContent = attempts;
    score = 0;
    scoreDisplay.textContent = score;
}

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('up')) {
            hole.classList.remove('up');
            hole.classList.add('whacked');

            updateScore();
        }
    });
});

startGame();
