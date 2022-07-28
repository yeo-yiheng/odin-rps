const moves = ["rock", "paper", "scissors"];

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return moves[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const result = decideWin(playerSelection, computerSelection);
    updateScoreboard(result);

    if (pScore == 5) {
        setTimeout(() => {
            alert("Player has won! Resetting game...");
            refresh();
        }, 250);
    } else if (cScore == 5) {
        setTimeout(() => {
            alert("Computer has won! Resetting game...");
            refresh();
        }, 250);
    }

    return result == 0
    ? `Player Wins! Player chose ${playerSelection}, Computer chose ${computerSelection}`
    : result == 1
    ? `Player Loses! Player chose ${playerSelection}, Computer chose ${computerSelection}`
    : `Player Ties! Player chose ${playerSelection}, Computer chose ${computerSelection}`;
}

// If player wins, return 0.
// If player loses, return 1.
// If player ties, return 2.
function decideWin(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = "TIE!"
        return 2;
    }
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            result.textContent = "YOU WIN!"
            return 0;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result.textContent = "YOU WIN!"
            return 0;
        }
    } else {
        if (computerSelection == "paper") {
            result.textContent = "YOU WIN!"
            return 0;
        }
    }
    result.textContent = "YOU LOSE!"
    return 1;
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
let playerSelection;

rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    console.log(playRound(playerSelection, computerPlay()));
});

paperButton.addEventListener('click', () => {
    playerSelection = "paper";
    console.log(playRound(playerSelection, computerPlay()));
});

scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";
    console.log(playRound(playerSelection, computerPlay()));
});

const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const result = document.querySelector(".result");

let pScore = 0;
let cScore = 0;

// If player wins, return 0.
// If player loses, return 1.
// If player ties, return 2.
function updateScoreboard(result) {
    switch(result) {
        case 0:
            pScore++;
            playerScore.textContent = pScore;
            break;
        case 1:
            cScore++;
            computerScore.textContent = cScore;
            break;
        case 2:
            break;
        default:
            console.log("Wonky results!");            
    }
}

function refresh() {
    pScore = 0;
    cScore = 0;
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    result.textContent = "";
}