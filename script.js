function getComputerChoice(choice){
    //code needs to set results--0, 1, 2-- to a string--rock, paper, scissors
    let rngChoice = Math.floor(Math.random() * 3);

    if (rngChoice === 0){
        choice= "scissors";
    }
    else if (rngChoice === 1){
        choice = "paper";
    }
    else{
        choice = "rock";
    }

    return choice;
}

function getPlayerChoice(choice){
    let rngPlayerChoice = Math.floor(Math.random() * 3);

    if (rngPlayerChoice === 0){
        choice= "scissors";
    }
    else if (rngPlayerChoice === 1){
        choice = "paper";
    }
    else{
        choice = "rock";
    }

    return choice;
}