const circle_class = 'playerO';
const x_class = 'playerX';
let y;
/* Retrieves all the div tag */

const squares = document.querySelectorAll('.grid-container div');

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
  /* Here we are displaying the person who made the move */
  const playerDisplay = document.querySelector('#player');

  let currentPlayer = 'playerX';

/* Here forEach method Iterates through all the nine div tags with parent class grid-container */
/* array.forEach method accepts three arguments (value,index,arr) */

  squares.forEach(square => {
    square.addEventListener('click', clickOutcome);
  })

  function clickOutcome(e) {
    /* converting into Array and storing it in squareArray */
    const squareArray = Array.from(squares);
    const index = squareArray.indexOf(e.target);

    playerDisplay.innerHTML = currentPlayer;
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
      currentPlayer = 'playerO';
    }
    else
    {
      y= circle_class;
      currentPlayer = 'playerX';

    }
    if(checkWin(y))
    {
      console.log('winner');
    }
  }
})

//element.classList.contains("active");
