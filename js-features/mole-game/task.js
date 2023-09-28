
function getHole(index) {
    return document.getElementById(`hole${index}`);
  }
  

  let deadCounter = 0;
  let lostCounter = 0;
  

  function onHoleClick(event) {
    const hole = event.target;
    
   
    if (hole.classList.contains('hole_has-mole')) {

      deadCounter++;
      document.getElementById('dead').textContent = deadCounter;
    } else {

      lostCounter++;
      document.getElementById('lost').textContent = lostCounter;
    }
  

    if (deadCounter === 10) {
      alert('Вы выиграли! Поздравляем!');
      resetGame();
    } else if (lostCounter === 5) {
      alert('Игра окончена. Вы проиграли.');
      resetGame();
    }
  }
  

  function resetGame() {
    deadCounter = 0;
    lostCounter = 0;
    document.getElementById('dead').textContent = deadCounter;
    document.getElementById('lost').textContent = lostCounter;
  
  
    for (let i = 1; i <= 9; i++) {
      const hole = getHole(i);
      hole.classList.remove('hole_has-mole');
    }
    
  
    startNewGame();
  }
  
 
  function startNewGame() {
  
    const randomHole = Math.floor(Math.random() * 9) + 1;
    

    const hole = getHole(randomHole);
    hole.classList.add('hole_has-mole');
  }
  

  for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', onHoleClick);
  }
  
  
  startNewGame();
  