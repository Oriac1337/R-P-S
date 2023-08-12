
function getComputerChoice() {
const choice = [`rock`, `paper`, `scissors`];
const random = Math.floor(Math.random() * 3);
return choice[random];
}

let playerScore = 0
let computerScore = 0

function playRound(computerSelection, playerSelection){
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
  const div = document.createElement('div')
  const div2 = document.createElement('div')
  const div3 = document.createElement('div')
	container.appendChild(div);
	container.appendChild(div2);
	container.appendChild(div3);
	
    
const btnR = document.querySelector('#btnR');
btnR.addEventListener('click', () => {
	let computerSelection = getComputerChoice();
	let playerSelection = `rock`
	let result = playRound(computerSelection, playerSelection);
    if (result.includes(`winnest`)) {
        playerScore++;
    } else if (result.includes(`losest`)) {
        computerScore++;
    }
    if (playerScore == 5){
    div3.textContent =`You have Win`
    } else if (computerScore == 5){
    div3.textContent =`You Lose!, Computer Supremacy`
    }
  div.textContent = result
  div2.textContent = `Player has ${playerScore} point, CPU has ${computerScore} points`;
});

const btnP = document.querySelector('#btnP');
btnP.addEventListener('click', () => {
	let computerSelection = getComputerChoice();
	let playerSelection = `paper`
	let result = playRound(computerSelection, playerSelection);
    if (result.includes(`winnest`)) {
        playerScore++;
    } else if (result.includes(`losest`)) {
        computerScore++;
    }
    if (playerScore == 5){
	 	div3.textContent =`You have Win`
    } else if (computerScore == 5){
    div3.textContent =`You Lose!, Computer Supremacy`
    }
  div.textContent = result
  div2.textContent = `Player has ${playerScore} point, CPU has ${computerScore} points`;
});

const btnS = document.querySelector('#btnS');
btnS.addEventListener('click', () => {
	let computerSelection = getComputerChoice();
	let playerSelection = `scissor`;
	let result = playRound(computerSelection, playerSelection);
    if (result.includes(`winnest`)) {
        playerScore++;
    } else if (result.includes(`losest`)) {
        computerScore++;
    }
    if (playerScore == 5){
    div3.textContent =`You have Win`
    } else if (computerScore == 5){
    div3.textContent =`You Lose!, Computer Supremacy`
    }
  div.textContent = result;
  div2.textContent = `Player has ${playerScore} point, CPU has ${computerScore} points`;
});




