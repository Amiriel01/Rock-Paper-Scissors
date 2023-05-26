// Computer will select a random choice//

const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * choices.length);
    return choices[computerSelection];
}
//console.log(getComputerChoice()) // check to see if working on page //

// User will select a choice //

function playerSelection() {

    
    
    
    //return prompt("Choose Rock, Paper, or Scissors").toUpperCase();//


    //alert(playerChoice); Use to check if prompt is working //
}
//console.log(playerSelection())  // check to see if working on page //

// Game will play a single round//
// Winner/Loser messages will appear //

function playRound(playerChoice, computerSelection) {
    console.log(playerChoice);
    console.log(computerSelection);
    if (playerChoice === computerSelection) {
        alert("It's a tie!");
    }

    else if (playerChoice === "ROCK") {
        if (computerSelection === "SCISSORS") {
            alert("You Win! Rock beats scissors everytime!")
        }
        if (computerSelection === "PAPER") {
            alert("You Lose! Paper beats Rock everytime!")
        }
    }

    else if (playerChoice === "SCISSORS") {
        if (computerSelection === "PAPER") {
            alert("You Win! Scissors beat Paper everytime!")
        }

        if (computerSelection === "ROCK") {
            alert("You Lose! Rock beats Scissors everytime!")
        }
    }

    else if (playerChoice === "PAPER") {
        if (computerSelection === "SCISSORS") {
            alert("You Lose! Scissors beat Paper everytime!")
        }

        if (computerSelection === "ROCK") {
            alert("You Win! Paper beats Rock everytime!")
        }
    }

    /*else {
        alert("Check your spelling!")
    }*/
}

//console.log(playRound());//
let currentPlayerChoice = playerSelection();
let currentComputerChoice = getComputerChoice();
playRound(currentPlayerChoice, currentComputerChoice);

//Game will play 4 more rounds//
/*function game() {
    playRound(playerSelection(), getComputerChoice());
    playRound(playerSelection(), getComputerChoice());
    playRound(playerSelection(), getComputerChoice());
    playRound(playerSelection(), getComputerChoice());
}

game();*/