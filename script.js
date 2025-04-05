function getHumanChoice() {
    let userInput = prompt("Enter your choice of rock, paper, or scissors");
    userInput = userInput.toLowerCase();
    return userInput;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const rng = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[rng];
    return computerChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
}

if (computerChoice === userInput){
    console.log("It's a tie");
}
else if (
    (userInput === "rock" && computerChoice === "scissors") ||
    (userInput === "paper" && computerChoice === "rock") ||
    (userInput === "scissors" && computerChoice === "paper")){
    console.log("You win!");
}
else if(choices.includes(userInput)){
    console.log("Computer wins!");
}
else{
    console.log("Please enter a rock, paper, or scissors");
}
let result = compareChoices();
console.log(result);