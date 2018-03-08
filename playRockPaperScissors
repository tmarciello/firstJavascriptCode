// Making sure the user input will be: rock, paper or scissors
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("Invalid input. Please choose between: rock, paper or scissors");
  }
};

// Letting the computer pick: rock, paper or scissors randomally
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
    	return 'rock';
      break;
   	case 1:
    	return 'paper';
      break;
    case 2:
    	return 'scissors';
      break;
    default:
      console.log('An error occured');
  }
};

// Determine a winner considering the outcomes for: rock, paper or scissors respectively
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  } 
  
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You won!';
    } else {
      return 'The computer won!';
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You won!';
    } else {
      return 'The computer won!';
    }
  }
 
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You won!';
    } else {
      return 'The computer won!';
    }
  }
 
  if (userChoice === 'bomb') {
    return 'You are unbeatable!'
  }
  
};

// Starts the game, choose your input: rock, paper or scissors
const playGame = () => {
  let userChoice = getUserChoice('paper');
  console.log(`You chose: ${userChoice}`);
  
  let computerChoice = getComputerChoice();
  console.log(`The computer chose: ${computerChoice}`);
  
  console.log(determineWinner(userChoice, computerChoice));
};

// Runs the playGame function :D
playGame();

/*
POSSIBLE OUTCOMES PER CODE BLOCK

Rock + scissors = Rock wins
Rock + paper = Rock loses

Paper + rock = Paper wins
Paper + scissors = Paper loses

Scissors + paper = Scisors wins
Scissors + rock = Scissors loses

*/
