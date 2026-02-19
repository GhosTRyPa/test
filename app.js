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
let computerChoice = getComputerChoice(); // here i got the computer choice

// -------------------------------------------------------------------

function getHumanChoice() {
  let humanInput = prompt("Rock, Paper, Scissors ?");
  return humanInput.toLowerCase();
}
let humanChoice = getHumanChoice(); // here i got the human choice

// -------------------------------------------------------------------

// let humanScore = 0;
// let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Its a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return `you won !, ${humanChoice} beats ${computerChoice}`;
  } else {
    return `the computer won!, ${computerChoice} beats ${humanChoice}`;
  }
}
console.log(playRound(humanChoice, computerChoice));
