console.log('Hello');
var gameRound = function(){
 var userChoice = prompt("Choose Rock, Paper, or Scisssors by typing 'R', 'P', or 'S'.");
 var rng = Math.random();
 var computerChoice = "R";

if(rng > 0.66) {
  computerChoice = "P";
} else if (rng > 0.33) {
  computerChoice = "S";
}
var userWins = "You win!";
var computerWins = "The computer wins!";
var roundCounter = 0;


if(computerChoice !== userChoice){
  if (computerChoice === "R"){
    if (userChoice === "S") {
      alert(computerWins);
    } else {
      alert(userWins);
    }
  } else if (computerChoice === "P") {
    if( userChoice === "R") {
      alert(computerWins);
    } else {
      alert(userWins);
    }
  } else {
    if( userChoice === "P") {
      alert(computerWins);
    } else {
      alert(userWins);
    }
  }
} else {
   alert('Tie!');
 }
};

while (roundCounter < 5) {
  gameRound();
  roundCounter++;
}



$('li').on('mouseover', () => {
  $('li').addClass('highlighted')
})
$('li').on('mouseleave', () => {
  $('li').removeClass('highlighted')
})
$('#profile-pic').on('click', () => {
  $('#hidden-blurb').slideDown(); // only works if #hidden-blurb has display:none; in its CSS
});
