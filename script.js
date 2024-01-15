function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 3);
    
    if (choice == 0) {
        console.log("Computer choice: Rock")
        return choice = "rock"
    } else if (choice == 1) {
        console.log("Computer choice: Paper")
        return choice = "paper"
    } else {
        console.log("Computer choice: Scissors")
        return choice = "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie / REPEAT ROUND")
        return tie = 1
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Win / +1 SCORE TO PLAYER")
        ++playerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Win / +1 SCORE TO PLAYER")
        ++playerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Win / +1 SCORE TO PLAYER")
        ++playerScore;
    }
    else {
        console.log("Lose / -1 SCORE TO PLAYER / +1 SCORE TO COMPUTER")
        --playerScore;
        ++computerScore;
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: ").toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        if (tie === 1) {
            --i;
            tie = 0;
        }
        if (i <= 5) {
            console.log("your score is: " + playerScore + " and computer score is: " + computerScore)
        }
    }
}

var tie = 0;
var playerScore = 0;
var computerScore = 0;
game();

if (playerScore > computerScore) {
    console.log("You win! With a score of: " + playerScore + " vs " + computerScore + ".")
} else {
    console.log("You lost! With a score of: " + playerScore + " vs " + computerScore + ".")
}
