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

function roundResult(playerSelection, computerSelection){
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


/*
function called playRound that plays a single round of rock paper scissors -
2 parameters - "playerSelection" and "computerSelection" - 
return a string that declares winner: "You lose! Paper beats Rock"
*/

function playRound (playerSelection, computerSelection) {
    let result = roundResult (playerSelection, computerSelection);
    if (result === "tie") {
        return "It's a tie!"
    } else if (result === "you lose") {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (result === "you win") {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return "Something went wrong."
    }

}



let playerSelection = capitalize("sCiSsors");
let computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerSelection);
console.log(roundResult(playerSelection, computerSelection));
console.log(playRound (playerSelection, computerSelection));




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
