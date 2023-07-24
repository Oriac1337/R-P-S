
let playerScore = 0
let computerScore = 0

function playRound(computerSelection, playerSelection){
	playerSelection = playerSelection.toLowerCase();
		switch(playerSelection) {
			case 'rock':
				switch(computerSelection) {
					case 'paper':
						return 'Thou losest! The stone yieldeth to the parchment.';
					case 'scissor':
						return 'Thou winnest! The stone crusheth the shears';
					default:
						return 'Lo, it is a tie! The stone meeteth the stone.';
				}
			case 'paper':
				switch(computerSelection) {
					case 'rock':
						return 'Well done, Thou winnest! The parchment covereth the stone.';
					case 'scissor':
						return 'Fie, Thou losest! The parchment is rent by the shears.';
					default:
						return 'Lo, it is a tie! The parchment matcheth the parchment';
				}
			case 'scissor':
				switch(computerSelection) {
					case 'paper':
						return 'Glory be to thee! Thou winnest! The blade cutteth the parchment.';
					case 'rock':
						return 'Alack, Thou losest! The shears breaketh on the rock.';
					default:
						return 'Behold, it is a tie! The shears clasheth with the shears.';
				}
		}
}


function getComputerChoice() {
const choice = [`rock`, `paper`, `scissors`];
const random = Math.floor(Math.random() * 3);
return choice[random];
}

function game(){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt(`Choose Your Weapon`);
    if (!['rock', 'paper', 'scissor', 'parchment', 'stone', 'shears', 'blade'].includes(playerSelection.toLowerCase())) {
        alert('That is not a weapon! Please choose rock, paper, or scissor.');
        return game();
    }
    let result = playRound(computerSelection, playerSelection);
    if (result.includes(`winnest`)) {
        playerScore++;
    } else if (result.includes(`losest`)) {
        computerScore++;
    }
    alert(result);
    alert(`Player has ${playerScore} point, CPU has ${computerScore} points`)
    if (playerScore == 5){
    alert(`You have Win`)
    } else if (computerScore == 5){
    alert(`You Lose!, Computer Supremacy`)
    }
}
i = 5

document.addEventListener('DOMContentLoaded', () => {
		while (i > playerScore && i > computerScore){
    let play = confirm('Do you want to play?');
    if (play) {
        game();
    }
}
});
