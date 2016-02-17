$(function() {
  var power = 0;
  // declare global variables
  // hold computer Moves
  var computerMoves = [];
  // hold player moves
  var playerMoves = [];
  //move variable to keep track of user's score and computer position in array
  var move = 1;
  var counter = 0;
  var i = 0;
  //testing variables
  var id;
  var thisId;
  var remove;
  var audio;
  var keepLooping = true;
  var interval;
  var looper;
  //function that picks music sample to play based on move
  var continueGame = true;
  var test;

  function playMusic(id) {
    console.log('huh');
    switch (id) {
      case 0:
        audio0.play();
        break;
      case 1:
        audio1.play();
        break;
      case 2:
        audio2.play();
        break;
      case 3:
        audio2.play();
        break;
    }
  }
  $("[name='power-switch']").bootstrapSwitch();
  var audio0 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

function playerAnimateMove(id){

}

function printMove(){
    $("#count-screen").text(move);
}
function player(){
  $(".gameButton").on("click", function() {
    id = parseInt(event.target.id);
    thisId = "#" + id;
    remove = "active" + id;
    console.log(id);
    counter+=1;
    playerLoop();
    playMusic(id);
    $(thisId).addClass(remove);
    setTimeout(function() {
      $(thisId).removeClass(remove);
    }, 400);
  });

/*  $(".top-left").on("click", function() {
    audio0.play();
    power+=1;

    counter += 1;
    console.log(counter);
    playerLoop();
    $(this).addClass('active0');
    setTimeout(function() {
      $('.top-left').removeClass("active0");
    }, 400);
  });
  $(".top-right").on("click", function() {
    audio1.play();
    $(this).addClass('active1');
    setTimeout(function() {
      $('.top-right').removeClass("active1");
    }, 400);
  });
  $(".bottom-left").on("click", function() {
    audio2.play();
    $(this).addClass('active2');
    setTimeout(function() {
      $('.bottom-left').removeClass("active2");
    }, 400);
  });
  $(".bottom-right").on("click", function() {
    audio3.play();
    $(this).addClass('active3');
    setTimeout(function() {
      $('.bottom-right').removeClass("active3");

    }, 400);

  });*/
}

function playerLoop(){
  if ( counter >= move){
    $(".gameButton").off();
    console.log("counter: " + counter + " and move: " + move);
    counter = 0;
    move+=1;
  computerDemo();
  }

  }




  //function to reset computer moves and player moves
  function resetScores() {
    //reset playerMoves and computerMoves
    playerMoves = [];
    computerMoves = [];
    counter = 0;
    move = 1;
    // assing new computerMoves
    for (var i = 0; i < 20; i++) {
      var x = Math.floor((Math.random() * 4));
      computerMoves.push(x);
    }
  }

  // function to remove active color from played id
  function resetClass() {
    $(thisId).removeClass(remove);
  }
  // function to display computer moves
  function computerMoveDisplay() {
    if (counter < move) {
      printMove();
      thisId = "#" + computerMoves[counter];
      remove = "active" + computerMoves[counter];
      console.log(thisId);
      $(thisId).addClass(remove);
      playMusic(computerMoves[counter]);
      window.setTimeout(resetClass, 1000);
      counter ++;
    } else {
      window.clearInterval(looper);
      console.log("finished baby!");
        console.log(power);
        counter = 0;
        player();
    }

  }
  // main computer move loop
  function computerDemo() {
    looper = window.setInterval(computerMoveDisplay, 2000);
  }

  //power button controls
  $('#power-toggle').on('switchChange.bootstrapSwitch', function(event, state) {
    if ($(this).is(':checked')) {
      $("#count-screen").text("-- ");
      resetScores();
    } else {
      $("#count-screen").text("");
    }
  });

  //start button click - reinitialize computer moves array
  $('#startBtn').on("click", function() {
          computerDemo();
  });
  //computerDemo();

});
