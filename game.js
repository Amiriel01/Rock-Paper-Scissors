let playerScore = 0;
let computerScore = 0;
let playerChoice;
let playerWins = 0;
let playerLosses = 0;
let playerTies = 0;

// Computer will select a random choice//

const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * choices.length);
    return choices[computerSelection];
}

// User will select a choice //

//function playerSelection() {
//return prompt("Choose Rock, Paper, or Scissors").toUpperCase();//

// alert(playerChoice); //Use to check if prompt is working //
//}

// Game will play a single round//
// Winner/Loser messages will appear //

let buttons = document.querySelectorAll(".action-button");
let score = document.querySelector("#scores");
//console.log(buttons);
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let userValue = button.getAttribute("value");
        let result = playRound(userValue, getComputerChoice());
        if (result.toLowerCase().includes("you win")) {
            playerWins++;
        }
        else if (result.toLowerCase().includes("you lose")) {
            playerLosses++;
        }
        else {
            playerTies++;
        }

        updateUI(result);
        //console.log(result);
        //console.log(button.getAttribute("value"));
    })
});


let result="scores"
function updateUI(scores) {
    document.getElementById("return").innerHTML = scores;
    if (win) {
        win++;
    }
    else if (lose) {
        lose++;
    }
    else {

    }
    updateUI(scores);
}


function playRound(playerChoice, computerSelection) {
    /*console.log(playerChoice);
    console.log(computerSelection);*/

    if (playerChoice === computerSelection) {
        return ("It's a tie!");
    }

    else if (playerChoice === "ROCK") {
        if (computerSelection === "SCISSORS") {

            return ("You Win! Rock beats scissors everytime!")
        }
        if (computerSelection === "PAPER") {
            return ("You Lose! Paper beats Rock everytime!")
        }
    }

    else if (playerChoice === "SCISSORS") {
        if (computerSelection === "PAPER") {
            return ("You Win! Scissors beat Paper everytime!")
        }

        if (computerSelection === "ROCK") {
            return ("You Lose! Rock beats Scissors everytime!")
        }
    }

    else if (playerChoice === "PAPER") {
        if (computerSelection === "SCISSORS") {
            return ("You Lose! Scissors beat Paper everytime!")
        }
        if (computerSelection === "ROCK") {
            return ("You Win! Paper beats Rock everytime!")
        }
    }
}


//}

document.getElementById('return');


//let currentPlayerChoice="ROCK";
//let currentPlayerChoice = playerChoice();
//let currentComputerChoice = computerSelection();
//playRound(playerChoice, getComputerChoice);

//console.log(playRound());//


/*Game will play 4 more rounds//
function game() {
    playRound(playerChoice(), getComputerChoice());
    playRound(playerChoice(), getComputerChoice());
    playRound(playerChoice(), getComputerChoice());
    playRound(playerChoice(), getComputerChoice());
}

game();*/