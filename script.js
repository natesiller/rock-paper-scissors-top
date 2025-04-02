let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function getComputerChoice(choice){
    //code needs to set results--0, 1, 2-- to a string--rock, paper, scissors
    let rngChoice = Math.floor(Math.random() * 3);

    if (rngChoice === 0){
        choice= rock;
    }
    else if (rngChoice === 1){
        choice = paper;
    }
    else{
        choice = scissors;
    }
    return choice;
}

function getPlayerChoice(playerChoice){

    if (playerChoice === 0){
        playerChoice= rock;
    }
    else if (rngPlayerChoice === 1){
        playerChoice = paper;
    }
    else{
        playerChoice = scissors;
    }
    return playerChoice;
}

function compareChoices(COMChoice, P1Choice){
    COMChoice = function getComputerChoice(choice){}
    P1Choice = function getPlayerChoice(playerChoice){};

    if (COMChoice === P1Choice){}
}

console.log(compareChoices(COMChoice, rock))