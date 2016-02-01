$(function() {
  var player;
  var computer;
  var computerCounter = 0;
  var computerArray = [[0], []];
  var counter = 0;
  var move = "";
  var computerMoves = [];
  var playerMoves = [];
  var gameOver = false;
  var moveNumber;
  var winner = 0;
  var winningMoves;
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // upon intial load - user is prompted to choose side
  // after selecting, game board is displayed
  function selectSide() {
    $(".pickerButton").click(function() {
      if ($(this).is('#pickX')) {
        //counter = 0;
        player = "X";
        computer = "O";

      } else if ($(this).is('#pickO')) {
        //counter = 1;
        player = "O";
        computer = "X";
      }
      $('#pickerButtons').hide();
      $('#gameboard').show();
    });
  }



  function checkMoves(moves, moveNumber) {
    moves.push(moveNumber);
    //console.log(moves);
    for (var i = 0; i < winningCombinations.length; i++) {
      winner = 0;
      for (var j = 0; j < winningCombinations[i].length; j++) {
        if (moves.indexOf(winningCombinations[i][j]) >= 0) {
          winner += 1;
          //console.log(winningCombinations[i]);
          //console.log("winner:" + winner);
          console.log("moves:" + moves);

        }
      }
      if (winner === 3) {
        //console.log("we have a winner");
        //console.log(winningCombinations[i]);
        winningMoves = winningCombinations[i];
        gameOver = true;
      }
    }

  }

  function newGame() {
    $('#pickerButtons').show();
    $('#gameboard').hide();
    for (var i = 0; i < 9; i++) {
      var boardID = "#" + i;
      $(boardID).css("background-color", "blue");
    }
    $(".square h3").text('');
    $(".square").removeClass("played");
    xMoves = [];
    yMoves = [];
    gameOver = false;
    moveNumber = "";
    selectSide();
  }

  function checkWinner(move) {
    if (gameOver) {
      for (var i = 0; i < winningMoves.length; i++) {
        var winningID = "#" + winningMoves[i];
        console.log(winningID);
        $(winningID).css("background-color", "red");

      }
      if (move === "O") {
        alert("O wins");
      } else if (move === "X") {
        alert("X wins");
      }
      newGame();

    }
  }

function computerMove(counter){
  if (counter === 0){
    moveNumber = 0;
    move = computer;
    checkMoves(computerMoves, moveNumber);
  } else if (counter === 2){
    if (playerMoves[0] === 8){
      moveNumber = 6;
    } else {
      moveNumber = 8;
    }
  } else if (counter === 4) {
    if (computerMoves[1] === 8){
      // play 6 empty play there if not play 2
    } else if (computerMoves[1] === 6){
      //if 3 empty move there if not play 2
    }
  }
  move = computer;
  checkMoves(computerMoves, moveNumber);
}

  // main game function
  newGame();
  $(".square").click(function() {
    //check to see if square has been played yet

    if (!$(this).hasClass("played")) {

      if (counter % 2 == 1) {
        move = "X";
        moveNumber = parseInt(($(this).attr("id")));
        checkMoves(xMoves, moveNumber);
        /*  moveNumber = ($(this).attr("id"));
          xMoves.push(moveNumber);
          console.log(xMoves);*/
      } else {
        move = "O";
        moveNumber = parseInt(($(this).attr("id")));
        checkMoves(yMoves, moveNumber);
      }
      $(this).find('h3').append(move);
      $(this).addClass("played");
      checkWinner(move);
      counter += 1;
    }

    console.log(move);

  });

});