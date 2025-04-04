//score log
/*let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    //math.random function
    let result = Math.floor(Math.random() * 3);

    if (result === 0) {
        return "rock";
    }
    else if (result === 1) {
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice() {
    //use prompt to get input
    let sign = prompt("Please enter rock, paper, or scissors");
    if (sign === ""){
        console.log("Enter only rock, paper, or scissors");
    }
    else if(sign === "rock"){
        return sign;
    }
    else if(sign === "paper"){
        return sign;
    }
    else{
        return sign;
    }
}

function playRound(humanChoice, computerChoice) {
    // your code here!
    humanChoice =
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
*/


//write a function that takes both scores, compares them, and
//then increments the winners score and logs a winner announcement


function compareChoices() {
    // Get user input using prompt
    let userInput = prompt("Enter your choice (e.g., rock, paper, scissors):");

    // Handle cases where the user cancels the prompt
    if (userInput === null) {
        return "No input received.";
    }

    userInput = userInput.toLowerCase(); // Convert to lowercase for case-insensitive comparison

    // Generate a random choice for the computer
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    // Compare choices and return a value
    if (userInput === computerChoice) {
        return "It's a tie!";
    } else if (
        (userInput === "rock" && computerChoice === "scissors") ||
        (userInput === "paper" && computerChoice === "rock") ||
        (userInput === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else if (choices.includes(userInput)){
        return "Computer wins!";
    }
    else {
        return "Invalid input. Please enter rock, paper, or scissors.";
    }
}

// Example of calling the function and displaying the result
const result = compareChoices();
console.log(result);