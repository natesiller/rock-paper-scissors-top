//score log
let humanScore = 0;
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

function playRound(humanChoice, computerChoice){
    //need to pull the answers from the previous functions
    //after pulling them, compare by string only to see who wins
    //write it so it displays which one won ("Paper beats rock!")
    if (humanChoice === computerChoice){
        return "You tied!"
    }
    else if (){}
}
const humanSelection = getHumanChoice();
const computerChoice = getComputerChoice();
//write a function that takes both scores, compares them, and
//then increments the winners score and logs a winner announcement
