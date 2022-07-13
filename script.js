const moves = ["rock", "paper", "scissors"];

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return moves[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const result = decideWin(playerSelection, computerSelection);
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
    if (playerSelection === computerSelection) return 2;
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return 0;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "stone") {
            return 0;
        }
    } else {
        if (computerSelection == "paper") {
            return 0;
        }
    }
    return 1;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection;
        let isValid = false;
        while (!isValid) {
            playerSelection = prompt("Rock, Paper, or Scissors?");
            if (moves.includes(playerSelection.toLowerCase()) == true) {
                isValid = true;
            } else {
                isValid = false;
            }
        }
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();