var gamePattern = [];
gamePattern.push(randomChosenColour);

var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColours[nextSequence()];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  return randomNumber;
}

$("#" + randomChosenColour).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
