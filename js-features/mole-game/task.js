
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
