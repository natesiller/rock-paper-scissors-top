let rock = "rock";
let paper = "paper";
let scissors = "scissors";
const rngChoice = Math.floor(Math.random() * 3);
function getComputerChoice(rngChoice){
    //code needs to set results--0, 1, 2-- to a string--rock, paper, scissors


    if (rngChoice === 0){
        rngChoice= rock;
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

    if (playerChoice === rock){
        playerChoice= 0;
    }
    else if (playerChoice === paper){
        playerChoice = 1;
    }
    else{
        playerChoice = 2;
    }
    return playerChoice;
}

function compareChoices(COMChoice, P1Choice){
    COMChoice = function getComputerChoice(choice){}
    P1Choice = function getPlayerChoice(playerChoice){};

    if

    else if{

    }
    else{
        prompt("Draw! Play again"a);
    }
}

console.log(getComputerChoice(1))