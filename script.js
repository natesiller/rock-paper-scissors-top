let userInput = prompt("Enter your choice of rock, paper, or scissors");
userInput = userInput.toLowerCase();

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    const rng = Math.floor(Math.random() * choices.length);
    return choices[rng]
}

function playRound(humanChoice, computerChoice){
    humanChoice = userInput;
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice){
        console.log("It's a tie!")
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;

    }
    else if((computerChoice === "rock" && humanChoice=== "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")){
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else{
        console.log("Please enter a rock, paper, or scissors");
    }
}
// let humanSelection = userInput;
// let compuerSelection = getComputerChoice();

function playGame(){
    for (let i = 1; i < 5; i++){
       playRound();
       let iterationUserInput = prompt("Enter your choice of rock, paper, or scissors");
       userInput = iterationUserInput;
       }
    alert(`Human score = ${humanScore} \nComputer score = ${computerScore}`);
}

console.log(playGame());