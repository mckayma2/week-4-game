// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );


// main variables
//==================================================

var playerGuess;
var playerRandomNumber;
var playerTotalScore = 0;
var playerScore;
var score;
var scoreCounter;
var randomNumberMatch;
var myarr = [];
var crystalValue;
var sum=0;
var loses=0;
//random number generators
//===================================================



//functions
//==================================================

crystalValue = function(){
playerScore = Math.floor((Math.random() * 12)+1);
return playerScore;
console.log(playerScore);

}

playerGuess = function (min, max) {
  min = Math.ceil(19);
  max = Math.floor(121);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive


}
console.log("PlayerGuess	:" + playerGuess());

function game(){

console.log(playerScore);
$("#randNum").html("Random Number  :" + playerGuess());

$( ".im" ).click(function() {
	$(".als").html(crystalValue());
	myarr.push(playerScore);
	console.log(myarr);
	playerTotalScore = myarr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;});
	score = playerTotalScore;
	console.log ("playerTotalScore  "+ playerTotalScore)
$(".als2").html("Total Score  :" + playerTotalScore + "   Score  : " + score + "  Loses:  " + loses);


if(playerTotalScore>119){
loses+=1;
score=0;
}
});


}

//DOM
//================================================


	

game();
$("#randNum").html("Random Number  :" + playerGuess());



});