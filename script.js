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
    if (sign === null) {
        console.log("OK, maybe next time.");
    }

}
console.log(getHumanChoice());
//write a function that takes both scores, compares them, and
//then increments the winners score and logs a winner announcement
