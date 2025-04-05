function compareChoices(){
    let userInput = prompt("Enter your choice of rock, paper, or scissors");
    userInput = userInput.toLowerCase();
    const choices = ["rock", "paper", "scissors"];
    const rng = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[rng];

    if (computerChoice === userInput){
        alert("It's a tie");
    }
    else if (
        (userInput === "rock" && computerChoice === "scissors") ||
        (userInput === "paper" && computerChoice === "rock") ||
        (userInput === "scissors" && computerChoice === "paper")){
        alert("You win!");
    }
    else if(choices.includes(userInput)){
        alert("Computer wins!");
    }
    else{
        alert("Please enter a rock, paper, or scissors");
    }
}
let result = compareChoices();
console.log(result);