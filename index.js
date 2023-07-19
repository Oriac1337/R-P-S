
function game() {

function getComputerChoice() {
	let index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

let playerSelection = prompt(`Make thy choice`);

const choices = [`rock`, `paper`, `scissor`];

const computerSelection = getComputerChoice();

	function playRound(playerSelection, computerSelection) {
  	switch (playerSelection) {
    	case 'rock':
      	switch (computerSelection) {
        	case 'paper':
          	return 'Thou losest! The stone yieldeth to the parchment.';
        	case 'scissor':
          	return 'Thou winnest! The stone crusheth the shears';
        	default:
          	return 'Lo, it is a tie! The stone meeteth the stone.';
      	}
    	case 'paper':
      	switch (computerSelection) {
        	case 'rock':
          	return 'Well done, thou winnest! The parchment covereth the stone.';
        	case 'scissor':
          	return 'Fie, thou losest! The parchment is rent by the shears.';
        	default:
          	return 'Lo, it is a tie! The parchment matcheth the parchment';
      	}
    	case 'scissor':
      	switch (computerSelection) {
        	case 'paper':
          	return 'Glory be to thee! Thou winnest! The blade cutteth the parchment.';
        	case 'rock':
          	return 'Alack, thou losest! The shears breaketh on the rock.';
        	default:
          	return 'Behold, it is a tie! The shears clasheth with the shears.';
      	}
  	}
	}
	 return playRound(playerSelection, computerSelection);
}




if (confirm(`Do you want to play a game?`))
	 for (let i = 1 ; i <= 5 ; i++ ) {
	 alert(game())
	} else {
	alert(`you coward`)
}
