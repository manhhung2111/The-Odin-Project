 
let choices = ['Rock', 'Paper', 'Scissors'];

let resultEl = document.querySelector('.weapon');
let ruleEl = document.querySelector('.rule');
let playerChoiceEl = document.querySelector('.player-choice');
let playerScoreEl = document.querySelector('#player-score');
let computerChoiceEl = document.querySelector('.computer-choice');
let computerScoreEl = document.querySelector('#computer-score');
let rockChoosenEl = document.querySelector('#Rock');
let paperChoosenEl = document.querySelector('#Paper');
let scissorsChoosenEl = document.querySelector('#Scissors');

let userChoice = "";
let playerScore = 0;
let computerScore = 0;


rockChoosenEl.addEventListener("click", function() {
    userChoice = "rock";
    let computerChoice = getComputerChoice();
    userChoice = normalizeInput(userChoice);
    game(userChoice, computerChoice);

})

scissorsChoosenEl.addEventListener("click", function() {
    userChoice = "scissors";
    let computerChoice = getComputerChoice();
    userChoice = normalizeInput(userChoice);
    game(userChoice, computerChoice);
})

paperChoosenEl.addEventListener("click", function() {
    userChoice = "paper";
    let computerChoice = getComputerChoice();
    userChoice = normalizeInput(userChoice);
    game(userChoice, computerChoice);
})


function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)]; // will return 0-2
}

function result(playerChoice, computerChoice) {
    if(playerChoice === 'Paper') {
        switch (computerChoice) {
            case 'Rock':
                playerScore++;
                return ['You win!', 'Paper beats Rock'];
            case 'Paper':
                return [`Tie!`,  `Paper ties paper`];
            case 'Scissors':
                computerScore++;
                return [`You lose!`, `Scissors beats Paper`];
        }
    } else if(playerChoice === 'Rock') {
        switch (computerChoice) {
            case 'Rock':
                return [`Tie!`, `Rock ties Rock`];
            case 'Paper':
                computerScore++;
                return [`You lose!`, `Paper beats Rock`];
            case 'Scissors':
                playerScore++;
                return [`You win!`, `Rock beats Scissors`];
        }
    } else if(playerChoice === 'Scissors'){
        switch (computerChoice) {
            case 'Rock':
                computerScore++;
                return [`You lose!`, `Rock beats Scissors`];
            case 'Paper':
                playerScore++;
                return [`You win!`, `Scissors beats Paper`];
            case 'Scissors':
                return [`Tie!`, `Scissors ties Scissors`];
        }
    } else {
        return "You enter invalid input";
    }
}

function normalizeInput(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
}

function renderComputerChoice(choice) {
    if(choice === 'Paper') {
        computerChoiceEl.textContent = '🖐🏼';
    } else if(choice === 'Rock') {
        computerChoiceEl.textContent = '✊🏼';
    } else {
        computerChoiceEl.textContent = '✌🏼';
    }
}

function renderPlayerChoice(choice) {
    if(choice === 'Paper') {
        playerChoiceEl.textContent = '🖐🏼';
    } else if(choice === 'Rock') {
        playerChoiceEl.textContent = '✊🏼';
    } else {
        playerChoiceEl.textContent = '✌🏼';
    }
}


function game(playerChoice, computerChoice) {
    if(playerScore === 5 || computerScore === 5) {
        reset();
        return;
    }
    let arrayAnswer = result(playerChoice, computerChoice);
    resultEl.textContent = arrayAnswer[0];
    ruleEl.textContent = arrayAnswer[1];
    renderPlayerChoice(playerChoice);
    renderComputerChoice(computerChoice);
    playerScoreEl.textContent = `Player: ${playerScore}`;
    computerScoreEl.textContent = `Computer: ${computerScore}`;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerChoiceEl.textContent = '?';
    computerChoiceEl.textContent = '?';
    resultEl.textContent = 'Choose your weapon';
    ruleEl.textContent = 'First to score 5 points wins the game';
    playerScoreEl.textContent = `Player: ${playerScore}`;
    computerScoreEl.textContent = `Computer: ${computerScore}`;
}

console.log(userChoice);
// game();






