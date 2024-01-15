function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 3);
    
    if (choice == 0) {
        console.log("Rock")
        return choice = "rock"
    } else if (choice == 1) {
        console.log("Paper")
        return choice = "paper"
    } else {
        console.log("Scissors")
        return choice = "scissors"
    }
    console.log(choice)
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie")
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Win")
        ++playerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Win")
        ++playerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Win")
        ++playerScore;
    }
    else {
        console.log("Lose")
        --playerScore;
        ++computerScore;
    }

}

function game() {
    for (let i = 0; i < 6; i++) {
        const playerSelection = prompt("Enter your choice: ");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        if (i === 5) {
            console.log("your score is: " + playerScore + " and computer score is: " + computerScore)
        }
    }
}

var playerScore = 0;
var computerScore = 0;
game();