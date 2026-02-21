const readline = require('readline');

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function playRound(round, callback) {
  rl.question(`Round ${round}/5 - Enter rock, paper, or scissors: `, (playerChoice) => {
    playerChoice = playerChoice.toLowerCase().trim();
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (!choices.includes(playerChoice)) {
      console.log('Invalid choice, try again.');
      playRound(round, callback);
      return;
    }

    console.log(`You: ${playerChoice} | Computer: ${computerChoice}`);

    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      playerScore++;
      console.log('You win this round!');
    } else if (playerChoice === computerChoice) {
      console.log('Tie!');
    } else {
      computerScore++;
      console.log('Computer wins this round!');
    }

    callback();
  });
}

function startGame(round = 1) {
  if (round > 5) {
    console.log(`\nFinal Score - You: ${playerScore} | Computer: ${computerScore}`);
    
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } else if (computerScore > playerScore) {
      console.log('Computer wins the game!');
    } else {
      console.log("It's a tie game!");
    }
    rl.close();
    return;
  }

  playRound(round, () => {
    startGame(round + 1);
  });
}

startGame();
