


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
function capitalize(playerInput) {

    if (playerInput === null) {
        return null
    }

    let part1 = playerInput.slice(0,1);
    let part2 = playerInput.slice(1);
    return `${part1.toUpperCase()}${part2.toLowerCase()}`;
}
*/

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection===computerSelection) {
        console.log("it's a tie!");
        result= "tie";
    }

    if ((playerSelection === "Rock") && (computerSelection === "Paper")
        ||(playerSelection === "Paper") && (computerSelection === "Scissors")
        ||(playerSelection ==="Scissors") && (computerSelection === "Rock"))
    {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        result= "lose";

    } else if ((computerSelection === "Rock") && (playerSelection === "Paper")
    ||(computerSelection === "Paper") && (playerSelection === "Scissors")
    ||(computerSelection ==="Scissors") && (playerSelection === "Rock"))
    {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        result= "win";
}
};

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', function() {
    playRound("Rock", getComputerChoice());
});
btnRock.addEventListener('click', function() {
    console.log(game(result));
});
btnRock.addEventListener('click', function() {
    console.log(outcome());
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', function() {
    playRound("Paper", getComputerChoice());
});
btnPaper.addEventListener('click', function() {
    console.log(game(result));
});
btnPaper.addEventListener('click', function() {
    console.log(outcome());
});


const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', function() {
    playRound("Scissors", getComputerChoice());
});
btnScissors.addEventListener('click', function() {
    console.log(game(result));
});
btnScissors.addEventListener('click', function() {
    console.log(outcome());
});





function game(result) {
    if (result==="lose") {
            computerScore += 1;
            return(`computer: ${computerScore}, player: ${playerScore}`);
        } else if (result==="win") {
            playerScore += 1;
            return(`computer: ${computerScore}, player: ${playerScore}`);

        } else if (result==="tie"){
        return(`computer: ${computerScore}, player: ${playerScore}`);
        }

    };

function outcome() {
    if (computerScore === 5) {
        console.log("YOU LOSE!!!");
    } else if (playerScore === 5) {
        console.log("YOU WIN!!!");
    } else return;
}



/*while (computerScore <= 5 || playerScore <= 5) {
    if (computerScore < playerScore) {
        console.log("You lose the game.");
    } else if (playerScore > computerScore) {
        console.log("You win the game.");}
 };
*/