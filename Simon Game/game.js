var gamePattern = [];
var userClickedPattern = [];

var level = 0;
$("#level-title").html("Press A Key to Start<br /> Level " + level);

var buttonColours = ["red", "blue", "green", "yellow"];

/**
 * randomness generation function which controls
 * the logic of the game and adds new levels
 */
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
  level += 1;
  $("#level-title").html("Press A Key to Start<br /> Level " + level);
  console.log("Level [" + level + "] Game Pattern: " + gamePattern);
}

$(document).one("keypress", nextSequence); // first keypress ONLY

var userChosenColour;
$(".btn").on("click", function () {
  userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(
    "User has clicked " + this.id + " and now we have: " + userClickedPattern
  );
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(level);
});

/**
 * helper method
 * @param {*} name
 */
function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

/**
 * animation function when the user presses a button
 * @param {*} currentColour
 */
function animatePress(currentColour) {
  console.log(currentColour);
  $("#" + currentColour)
    .addClass("pressed")
    .delay(100)
    .queue(function (next) {
      $(this).removeClass("pressed");
      next();
    });
}

/**
 * checks if the last array items match, if yes
 * then onto the next level, if no GAME OVER
 * @param {int} currentLevel
 */
function checkAnswer(currentLevel) {
  console.log("checkAnswer for LEVEL " + currentLevel);
  console.log("userClickedPattern = " + userClickedPattern);
  console.log("gamePattern = " + gamePattern);
  if (
    userClickedPattern[userClickedPattern.length - 1] ===
    gamePattern[userClickedPattern.length - 1]
  ) {
    console.log("Match");
    if (userClickedPattern.length === gamePattern.length) {
      nextSequence();
      userClickedPattern = [];
    }
  } else {
    console.log("FAIL");
    gameOver();
  }
}

function gameOver() {
  $("#level-title")
    .addClass("game-over")
    .delay(2000)
    .queue(function (next) {
      $(this).removeClass("game-over");
      next();
    });
  level = 0;
  $("#level-title").html("Press A Key to Start<br /> Level " + level);
}
