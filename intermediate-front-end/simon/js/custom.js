$(function() {
  /* testing display
  var x = 0;
  var y = 0;*/
  // declare global variables
  // hold computer Moves
  var computerMoves = [];
  // hold player moves
  var playerMoves = [];

  $("[name='power-switch']").bootstrapSwitch();
  var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

  $(".top-left").on("click", function() {
    audio1.play();
  });
  $(".top-right").on("click", function() {
    audio2.play();
  });
  $(".bottom-left").on("click", function() {
    audio3.play();
  });
  $(".bottom-right").on("click", function() {
    audio4.play();
  });

  //function to reset computer moves and player moves
  function resetScores() {
    //reset playerMoves and computerMoves
    playerMoves = [];
    computerMoves = [];
    // assing new computerMoves
    for (var i = 0; i < 19; i++) {
      var x = Math.floor((Math.random() * 4));
      computerMoves.push(x);
    }
    console.log(computerMoves);

  }

  //power button controls
  // listens and converts temp to celcius when clicked
  $('#power-toggle').on('switchChange.bootstrapSwitch', function(event, state) {
    if ($(this).is(':checked')) {

      $("#count-screen").text("-- ");
    } else {

      $("#count-screen").text("");
    }
  });

  //start button click - reinitialize computer moves array
  $('#startBtn').on("click", function() {
    resetScores();
  });
});
