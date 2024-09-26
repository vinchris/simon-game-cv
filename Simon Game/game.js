var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(200)
    .fadeIn(200)
    .fadeOut(200)
    .fadeIn(200);

  var audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
