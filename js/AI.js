$(document).ready(function() {
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
let currentPlayer;
let play;
  let humanMoves = ['','','','','','','','',''];
  let compMoves = ['','','','','','','','',''];
  let current_class;
  const compMove = () => {
    if (compMoves[0]=="" && humanMoves[0] == "" && ((humanMoves[2] == "x" && humanMoves[1] == "x") || (humanMoves[8] == "x" && humanMoves[4] == "x") || (humanMoves[6] == "x" && humanMoves[3] == "x"))) {
      $(squares[0]).removeClass("playCards");
         compMoves[0] = "o";
        $(squares[0]).addClass('playerO');
    } else {
      if (compMoves[2]=="" && humanMoves[2] == "" && ((humanMoves[1] == "x" && humanMoves[3] == "x") || (humanMoves[2] == "x" && humanMoves[4] == "x"))) {
        $(squares[2]).removeClass('playCards');
        compMoves[2] = "o";

        $(squares[2]).addClass('playerO');
        }
        else{
        if (compMoves[2]=="" && humanMoves[2] == "" && ((humanMoves[0] == "x" && humanMoves[1] == "x") || (humanMoves[6] == "x" && humanMoves[4] == "x") || (humanMoves[8] == "x" && humanMoves[5] == "x"))) {
          $(squares[2]).removeClass("playCards");
          compMoves[2] = "o";

          $(squares[2]).addClass('playerO');
        }
            else{
            if (compMoves[8]=="" && humanMoves[8] == "" && ((humanMoves[6] == "x" && humanMoves[7] == "x") || (humanMoves[0] == "x" && humanMoves[4] == "x") || (humanMoves[2] == "x" && humanMoves[5] == "x"))) {
              $(squares[8]).removeClass("playCards");
              compMoves[8] = "o";

              $(squares[8]).addClass('playerO');
        }
                else{
                if (compMoves[6]=="" && humanMoves[6] == "" && ((humanMoves[8] == "x" && humanMoves[7] == "x") || (humanMoves[2] == "x" && humanMoves[4] == "x") || (humanMoves[0] == "x" && humanMoves[3] == "x"))) {
                  $(squares[6]).removeClass("playCards");
                  compMoves[6] = "o";

                  $(squares[6]).addClass('playerO');
        }
                    else{
                    if (compMoves[7]=="" && humanMoves[7] == "" && ((humanMoves[8] == "x" && humanMoves[6] == "x") || (humanMoves[1] == "x" && humanMoves[4] == "x"))) {

                      $(squares[7]).removeClass("playCards");
                      compMoves[7] = "o";

                      $(squares[7]).addClass('playerO');
        }
                        else{
                        if (compMoves[3]=="" && humanMoves[3] == "" && ((humanMoves[5] == "x" && humanMoves[4] == "x") || (humanMoves[1] == "x" && humanMoves[6] == "x"))) {

                          $(squares[3]).removeClass("playCards");
                          compMoves[3] = "o";

                          $(squares[3]).addClass('playerO');
        }
                            else{
                            if (compMoves[5]=="" && humanMoves[5] == "" && ((humanMoves[2] == "x" && humanMoves[8] == "x") || (humanMoves[4] == "x" && humanMoves[3] == "x"))) {
                              $(squares[5]).removeClass("playCards");
                              compMoves[5] = "o";

                              $(squares[5]).addClass('playerO');

        }
                                else{
                                if (compMoves[4]=="" && humanMoves[4] == "" && ((humanMoves[2] == "x" && humanMoves[6] == "x") || (humanMoves[8] == "x" && humanMoves[0] == "x") || (humanMoves[5] == "x" && humanMoves[3] == "x") || (humanMoves[7] == "x" && humanMoves[1] == "x"))) {
                                  $(squares[4]).removeClass("playCards");
                                  compMoves[4] = "o";

                                  $(squares[4]).addClass('playerO');

        }
                                   else{ // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
                                    if (compMoves[4]=="" && humanMoves[4] == "") {
                                      $(squares[4]).removeClass("playCards");
                                      compMoves[4] = "o";

                                      $(squares[4]).addClass('playerO');


                                    }
                                        else{
                                        if (compMoves[0]=="" && humanMoves[0] == "") {
                                          $(squares[0]).removeClass("playCards");
                                          compMoves[0] = "o";

                                          $(squares[0]).addClass('playerO');


                                    }
                                            else{
                                            if (compMoves[8]=="" &&humanMoves[8] == "") {
                                              $(squares[8]).removeClass("playCards");
                                              compMoves[8] = "o";

                                              $(squares[8]).addClass('playerO');


                                    }
                                                else {
                                                if (compMoves[7]=="" && humanMoves[7] == "") {
                                                  $(squares[7]).removeClass("playCards");

                                                  $(squares[7]).addClass('playerO');


                                    }
                                                    else{
                                                    if (compMoves[3]=="" && humanMoves[3] == "") {
                                                      $(squares[3]).removeClass("playCards");
                                                      compMoves[3] = "o";

                                                      $(squares[3]).addClass('playerO');


                                    }
                                                    }
                                                }
                                            }


                                        }
                                   }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
const circle_class = 'playerO';
const x_class = 'playerX';
/* Retrieves all the div tag */
const squares = $('.playCards');
/* converting into Array and storing it in squareArray */
const squareArray = Array.from(squares);



$('#playerBtn').click(function(){
  play = 'human';
  console.log('click');

  currentPlayer = 'playerX';

  squareArray.forEach(square => {

    $(square).on('click', clickOutcome);
  });
});
$('#compBtn').click(function(){
  console.log('clicked');
  //currentPlayer = 'Human';
  play = 'comp';

  squareArray.forEach(square => {
    $(square).on('click', clickOutcomeAi);
  });
});

const resetGame = () => {
  squareArray.forEach(square => {
  $(square).removeClass(x_class);
  $(square).removeClass(circle_class);
  $(square).addClass('playCards');
});
  if (play == 'comp')
  {
  humanMoves = ['','','','','','','','',''];
  compMoves = ['','','','','','','','',''];
  currentPlayer = 'Human';
}
else {
  currentPlayer = 'playerX';
}

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

const winCon = () => {
  if(checkWin(current_class)) {
  endGame(false,currentPlayer);
}
else if (isDraw()) {
  endGame(true)
}
};

const isDraw = () => {
  return squareArray.every(cell => {
    return $(cell).hasClass(x_class) ||
     $(cell).hasClass(circle_class)

  })
};

const checkWin = (currentClass) => {
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
  if(checkWin(current_class)) {
    endGame(false,currentPlayer);
  }
  else if (isDraw()) {
    endGame(true)
  }
  currentPlayer = (current_class === x_class ? circle_class : x_class);
  /* Here we are displaying the person who is about to make next move */
  $('#player').text(`${currentPlayer}'s turn`);
};

  function clickOutcomeAi(e) {
    currentPlayer = 'Human';
    const index = squareArray.indexOf(e.target);
/* Removing the default joker card */
    var element = e.target;
  $(element).removeClass("playCards");
  if(currentPlayer === 'Human') {
    $(squares[index]).removeClass('playero');

      $(squares[index]).addClass('playerX');
    };
      humanMoves[index] = "x";
      current_class =  $(squareArray[index]).hasClass(x_class) ? x_class : circle_class ;
      currentPlayer = 'Human';

      winCon();

     compMove();
      current_class = circle_class ;
      currentPlayer = 'Computer';

     winCon();
    }
});
