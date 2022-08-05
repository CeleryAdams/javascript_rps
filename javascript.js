


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


function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    let result;

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
console.log(game(result));

};

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', function() {
    playRound("Rock", getComputerChoice());
});
btnRock.addEventListener('click', game);

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', function() {
    playRound("Paper", getComputerChoice());
});

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', function() {
    playRound("Scissors", getComputerChoice());
});



function game(result) {
    let computerScore = 0;
    let playerScore = 0;

    if (result==="lose") {
            computerScore++;
        } else if (result==="win") {
            playerScore++;
        } else if (result==="tie"){
            return;
        }

return(`computer: ${computerScore}, player: ${playerScore}`);
    /*    
    if (computerScore === 5) {
        console.log("You lose the game.");
    } else if (playerScore === 5) {
        console.log("You win the game.");
}*/
};