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
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors!")
    }

}

const playerSelection = "rock"; //parseInt(prompt("Enter your choice: "))
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));