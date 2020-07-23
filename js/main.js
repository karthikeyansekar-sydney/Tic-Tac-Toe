const circle_class = 'playerO';
const x_class = 'playerX';
let y;
/* Retrieves all the div tag */
const restartButton = document.getElementById('restartButton')

const squ = document.getElementById('grid-container');
const winningMessageTextElement = document.getElementById('winningMessageText');
const winningMessageElement = document.getElementById('winningMessage');
const squares = document.querySelectorAll('.grid-container div');
const squareArray = Array.from(squares);


const resetGame = () => {
  squares.forEach(square => {
  square.classList.remove(x_class);
  square.classList.remove(circle_class);
  square.classList.add('playCards');
    //cell.removeEventListener('click', handleClick)
    //cell.addEventListener('click', handleClick, { once: true })
  })
  winningMessageElement.classList.remove('show')
};

restartButton.addEventListener('click', resetGame);


const endGame = (draw, currentPlayer) => {
  if(draw){
winningMessageTextElement.innerText = "Draw";
 } else {
   winningMessageTextElement.innerText = `${currentPlayer}  Wins`;
 }
 winningMessageElement.classList.add('show');
};

const isDraw = () => {
  return squareArray.every(cell => {
    return cell.classList.contains(x_class) ||
  cell.classList.contains(circle_class)
  })
};

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWin(currentClass){
  /* array.some returns true if any of the values in the loop is true */
  return winningCombinations.some(combination => {
    /* array.every method To check if the every element have same class */
    return combination.every(index => {
      return squares[index].classList.contains(currentClass);
    })
  })
}
document.addEventListener('DOMContentLoaded', () => {
  let currentPlayer = 'playerX';
  /* Here we are displaying the person who made the move */
  const playerDisplay = document.querySelector('#player');
  playerDisplay.innerHTML = currentPlayer;

/* Here forEach method Iterates through all the nine div tags with parent class grid-container */
/* array.forEach method accepts three arguments (value,index,arr) */

  squares.forEach(square => {
    square.addEventListener('click', clickOutcome);
  })

  function clickOutcome(e) {
    /* converting into Array and storing it in squareArray */
    const index = squareArray.indexOf(e.target);

    var element = e.target;
  element.classList.remove("playCards");

    if(currentPlayer === 'playerX') {
      squares[index].classList.add('playerX');
      //const currentClass = circleTurn ? circleClass : x_class;

    //  currentPlayer = 'playerO';
    } else {
      squares[index].classList.add('playerO');
    //  currentPlayer = 'playerX';
    }
    if (squareArray[index].classList.contains(x_class)) /*It returns false */
    {
      y = x_class;
      if(checkWin(y))
      {
        endGame(false,currentPlayer);
      }
      else if (isDraw()) {
    endGame(true)
  }
      currentPlayer = 'playerO';
    }
    else
    {
      y= circle_class;
      if(checkWin(y))
      {
        endGame(false,currentPlayer);
      }
      else if (isDraw()) {
    endGame(true)
  }
      currentPlayer = 'playerX';

    }

  }
})
