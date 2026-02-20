function getComputerChoice() {
  let pcchoice = Math.floor(Math.random() * 3);
  switch (pcchoice) {
    case 0:
      return "paper";
      break;
    case 1:
      return "rock";
      break;
    case 2:
      return "scissors";
      break;
  }
}

// -------------------------------------------------------------------

// Choices will be generated inside the main loop so we don't prompt
// before the game starts.
function getHumanChoice() {
  while (true) {
    const humanInput = prompt("Rock, Paper, Scissors ?");
    if (humanInput === null) return null; // user cancelled
    const normalized = humanInput.trim().toLowerCase();
    if (["rock", "paper", "scissors"].includes(normalized)) return normalized;
    alert("Please enter 'rock', 'paper', or 'scissors'.");
  }
}

let humanScore = 0;
let computerScore = 0;

// DOM elements for displaying scores and results
const humanScoreEl = document.getElementById("human-score");
const computerScoreEl = document.getElementById("computer-score");
const roundResultEl = document.getElementById("round-result");
const finalResultEl = document.getElementById("final-result");

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Its a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `you won !, ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `the computer won!, ${computerChoice} beats ${humanChoice}`;
  }
}
for (let i = 0; i < 5; i++) {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  if (humanChoice === null) {
    const msg = "Game cancelled by user.";
    console.log(msg);
    if (finalResultEl) finalResultEl.textContent = msg;
    break;
  }

  const result = playRound(humanChoice, computerChoice);
  console.log(result);
  if (roundResultEl) roundResultEl.textContent = result;
  if (humanScoreEl) humanScoreEl.textContent = String(humanScore);
  if (computerScoreEl) computerScoreEl.textContent = String(computerScore);
}

// Final winner announcement
if (humanScore > computerScore) {
  console.log(`Final result: You win! ${humanScore} to ${computerScore}`);
} else if (computerScore > humanScore) {
  console.log(`Final result: Computer wins. ${computerScore} to ${humanScore}`);
} else {
  console.log(`Final result: It's a tie. ${humanScore} to ${computerScore}`);
}
