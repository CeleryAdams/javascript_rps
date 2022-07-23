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

  /*
function called playRound that plays a single round of rock paper scissors -
2 parameters - "playerSelection" and "computerSelection" - 
return a string that declares winner: "You lose! Paper beats Rock"
*/

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "tie"

    } else if ((playerSelection === "Rock") && (computerSelection === "Paper")
        ||(playerSelection === "Paper") && (computerSelection === "Scissors")
        ||(playerSelection ==="Scissors") && (computerSelection === "Rock"))
    {
        return "lose"

    } else if ((computerSelection === "Rock") && (playerSelection === "Paper")
    ||(computerSelection === "Paper") && (playerSelection === "Scissors")
    ||(computerSelection ==="Scissors") && (playerSelection === "Rock"))
    {
        return "win"
    }
    else {
        return "error"
    }
}




/*function playRound (playerSelection, computerSelection) {
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
*/

function game() {

    let result = playRound(playerSelection, computerSelection);
    let computerScore = 0;
    let playerScore = 0;
    if (result === "tie") {
        console.log("It's a tie!")
        console.log(`The score is Computer ${computerScore}, Player ${playerScore}.`);
    } else if (result === "lose") {
        computerScore++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        console.log(`The score is Computer ${computerScore}, Player ${playerScore}.`);
    } else if (result === "win") {
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        console.log(`The score is Computer ${computerScore}, Player ${playerScore}.`);
    } else {
        console.log("Something went wrong.")
    }
}

let playerSelection = capitalize("rOck");
let computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerSelection);
console.log(playRound (playerSelection, computerSelection));
console.log(game());

//computerScore, playerScore
//rounds 1-5
//if computerScore>playerScore, You lose the game.
//if playerScore>computerScore, You win the game.
//if playerScore=computerScore, It's a tie.

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
