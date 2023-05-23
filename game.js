// Computer will select a random choice//

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * choices.length);
    return choices[computerSelection];
}
console.log(getComputerChoice()) // check to see if working on page //

// User will select a choice //

function playerSelection(choices) {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors").toUpperCase();
    // alert(playerChoice); Use to check if prompt is working //
}
 console.log(playerSelection())  // check to see if working on page //

// Game will play a single round//

function playRound(playerChoice,computerSelection) {
    if (playerChoice===computerSelection) {
        alert("It's a tie! Both chose" +playerChoice);
    }
}
console.log(playRound())
// Winner/Loser messages will appear //