/*
function named getComputerChoice - randomly returns 
"rock", "paper", "scissors"
*/


function getComputerChoice(){
    let x = Math.random();
    if (x >= 0 && x < 0.33 ) {
        return "Rock";
    } else if (x >= 0.33 && x < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());
/*
function called playRound that plays a single round of rock paper scissors -
2 parameters - "playerSelection" and "computerSelection" - 
return a string that declares winner: "You lose! Paper beats Rock"
*/

/*
playerSelection parameter should be case-insensitive
*/

/*
function called game() that calls the playRound function
to play a 5-round game that keeps score and reports a 
winner or loser at the end - use a loop

for (let i = 0; i < 5; i++) { code }
*/

/*
display results with console.log()
*/

/*
use prompt() to get input from user
*/
