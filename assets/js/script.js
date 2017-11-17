// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );


// main variables
//==================================================


var scoreCounter;
var myarr = [];
var playerScore;
var sum=0;
var loses=0;
var wins=0;
var playerTotalScore;
var loses=0;
wins=0;
//random number generators
//===================================================



//functions
//==================================================
function computerGuess(){
scoreCounter = Math.floor(Math.random() * (121 - 19)+19);
return scoreCounter;
};

function crystalValue(){
playerScore = Math.floor(Math.random()* (12 +1));
return playerScore;
};



console.log("player score " + crystalValue());
console.log("computer Guess " + computerGuess());


$( ".im" ).click(function() {
var a = playerTotalScore;
var b = scoreCounter;
if(a>b){
scoreCounter = 0;
scoreCounter = Math.floor(Math.random() * (121 - 19)+19);
$("#randNum").html(scoreCounter);
loses++;
playerTotalScore=0;
myarr=[];
alert("You lost ---Your Total score exceeded the computer Guess")
}
else if(a===b){
wins++;
scoreCounter = 0;
scoreCounter = Math.floor(Math.random() * (121 - 19)+19);
$("#randNum").html(scoreCounter);
myarr=[];
alert("You win --- Your Total score matched the computer Guess") 
}
$(".als").html(crystalValue());
myarr.push(playerScore);
console.log("myArr " + myarr);
playerTotalScore = myarr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;});
console.log("playerTotalScore " + playerTotalScore);


$(".als2").html("Total Score  :  " + playerTotalScore +   " Wins  :  " + wins +   "  Loses  :  " + loses);
});

//DOM
//================================================

$("#randNum").html(scoreCounter);

});

