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

/*
playerSelection parameter should be case-insensitive
*/
function capitalize(playerInput) {
    let part1 = playerInput.slice(0,1);
    let part2 = playerInput.slice(1);
    return `${part1.toUpperCase()}${part2.toLowerCase()}`;
  }

function roundResult (playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "tie"

    } else if ((playerSelection === "Rock") && (computerSelection === "Paper")
        ||(playerSelection === "Paper") && (computerSelection === "Scissors")
        ||(playerSelection ==="Scissors") && (computerSelection === "Rock"))
    {
        return "you lose"

    } else if ((computerSelection === "Rock") && (playerSelection === "Paper")
    ||(computerSelection === "Paper") && (playerSelection === "Scissors")
    ||(computerSelection ==="Scissors") && (playerSelection === "Rock"))
    {
        return "you win"
    }
    else {
        return "error"
    }
}

const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerSelection);
console.log(roundResult(playerSelection, computerSelection));

/*
function called playRound that plays a single round of rock paper scissors -
2 parameters - "playerSelection" and "computerSelection" - 
return a string that declares winner: "You lose! Paper beats Rock"
*/

function playRound (playerSelection, computerSelection) {
//Display text:
    //if result is "tie": "It's a tie!"
    //if result is "you lose": "You lose! (computer selection) beats (player selection)."
    //if result is "you win": "You win! (player selection) beats (computer selection)."
    //else "something went wrong"

}






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
