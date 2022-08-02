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


function capitalize(playerInput) {

    if (playerInput === null) {
        return null
    }

    let part1 = playerInput.slice(0,1);
    let part2 = playerInput.slice(1);
    return `${part1.toUpperCase()}${part2.toLowerCase()}`;
}

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

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let roundNumber = 0;
    for (let i = 0; i < 5; i++) {
    roundNumber++
    let computerSelection = getComputerChoice();
    let playerInput = prompt(`Round ${roundNumber}`);
    let playerSelection = capitalize(playerInput);

    if (playRound(playerSelection, computerSelection) === "tie") {
            console.log("It's a tie!")
            console.log(`The score is Computer ${computerScore}, Player ${playerScore}.`);
        } else if (playRound(playerSelection, computerSelection) === "lose") {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            console.log(`The score is Computer ${computerScore}, Player ${playerScore}.`);
        } else if (playRound(playerSelection, computerSelection) === "win") {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            console.log(`The score is Computer ${computerScore}, Player ${playerScore}.`);
        } else if (playerSelection === null) { 
            alert("Game over.");
            break;
        } else {
            console.log("Something went wrong.")
        }
    }
    
    if (computerScore > playerScore) {
        console.log("You lose the game.");
    } else if (playerScore > computerScore) {
        console.log("You win the game.");
    } else {
        console.log("It's a tie.");
    }
}

console.log(game());