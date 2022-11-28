 
let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)]; // will return 0-2
}

function playRound(playerChoice, computerChoice) {
    if(playerChoice === 'Paper') {
        switch (computerChoice) {
            case 'Rock':
                return `You win! Paper beats Rock`;
            case 'Paper':
                return `Tie! Paper ties paper`;
            case 'Scissors':
                return `You lose! Scissors beats Paper`;
        }
    } else if(playerChoice === 'Rock') {
        switch (computerChoice) {
            case 'Rock':
                return `Tie! Rock ties Rock`;
            case 'Paper':
                return `You lose! Paper beats Rock`;
            case 'Scissors':
                return `You win! Rock beats Scissors`;
        }
    } else if(playerChoice === 'Scissors'){
        switch (computerChoice) {
            case 'Rock':
                return `You lose! Rock beats Scissors`;
            case 'Paper':
                return `You win! Scissors beats Paper`;
            case 'Scissors':
                return `Tie! Scissors ties Scissors`;
        }
    } else {
        return "You enter invalid input";
    }
}

function normalizeInput(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
}

function game() {
    for(let i = 1; i <= 5; i++){
        let playerChoice = prompt("What is your choice? Rock, Paper or Scissors");
        let computerChoice = getComputerChoice();
        playerChoice = normalizeInput(playerChoice);
        console.log(playRound(playerChoice, computerChoice));
    }
}

game();






