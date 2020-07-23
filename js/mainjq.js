$(document).ready(function() {
const circle_class = 'playerO';
const x_class = 'playerX';
let currentPlayer = 'playerX';
/* Retrieves all the div tag */
const squares = $('.playCards');
/* converting into Array and storing it in squareArray */
const squareArray = Array.from(squares);

const resetGame = () => {
  squareArray.forEach(square => {
  $(square).removeClass(x_class);
  $(square).removeClass(circle_class);
  $(square).addClass('playCards');
  currentPlayer = 'playerX';
  })
  $('#winningMessage').removeClass('show');
};

$('#restartButton').on('click', resetGame);
$('#restartBtn').on('click', resetGame);

const endGame = (draw, currentPlayer) => {
  if(draw){
$('#winningMessageText').text("Draw");
 } else {
   $('#winningMessageText').text(`${currentPlayer}  Wins`);
 }
 $('#winningMessage').addClass('show');
};

const isDraw = () => {
  return squareArray.every(cell => {
    return $(cell).hasClass(x_class) ||
     $(cell).hasClass(circle_class)

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

const checkWin = (currentClass) =>{
  /* array.some returns true if any of the values in the loop is true */
  return winningCombinations.some(combination => {
    /* array.every method To check if the every element have same class */
    return combination.every(index => {
      return $(squares[index]).hasClass(currentClass);
    })
  })
};

/* Here forEach method Iterates through all the nine div tags with parent class grid-container */
/* array.forEach method accepts three arguments (value,index,arr) */

  squareArray.forEach(square => {
    $(square).on('click', clickOutcome);
  })

  function clickOutcome(e) {
    const index = squareArray.indexOf(e.target);

    var element = e.target;
  $(element).removeClass("playCards");

    if(currentPlayer === 'playerX') {
      $(squares[index]).addClass('playerX');
    } else {
      $(squares[index]).addClass('playerO');
    }

      let current_class =  $(squareArray[index]).hasClass(x_class) ? x_class : circle_class ;
      if(checkWin(current_class))
      {
        endGame(false,currentPlayer);
      }
      else if (isDraw()) {
    endGame(true)
  }
  currentPlayer = (current_class === x_class ? circle_class : x_class);
  /* Here we are displaying the person who is about to make next move */
  $('#player').text(`${currentPlayer}'s turn`);
    }
});
