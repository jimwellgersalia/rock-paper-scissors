function getComputerChoice() {
  let computerChoice = Math.random();

  if (computerChoice < 0.33) {
    return "paper";
  } else if (computerChoice > 0.66) {
    return "scissors";
  } else {
    return "rock";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice").toLowerCase();
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound(computerSelection, humanSelection) {
  if (computerSelection == "paper") {
    if (humanSelection == "paper") {
      console.log("Draw, both picks Paper!");
    } else if (humanSelection == "rock") {
      computerScore += 1;
      console.log("You lose, Paper beats rock");
    } else {
      humanScore += 1;
      console.log("You win, Scissors beats Paper");
    }
  } else if (computerSelection == "rock") {
    if (humanSelection == "paper") {
      humanScore += 1;
      console.log("You win, Paper beats Rock!");
    } else if (humanSelection == "rock") {
      console.log("Draw, both picks Rock");
    } else {
      computerScore += 1;
      console.log("You lose, Rock beats Scissors");
    }
  } else if (computerSelection == "scissors") {
    if (humanSelection == "paper") {
      computerScore += 1;
      console.log("You lose, Scissors beats Paper");
    } else if (humanSelection == "rock") {
      humanScore += 1;
      console.log("You win, Rock beats Scissors");
    } else {
      console.log("Draw, both picks Scissors");
    }
  }
  console.log();
}

playRound(computerSelection, humanSelection);
console.log("Computer Selection: " + computerSelection);
console.log("Human Selection:" + humanSelection);
console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);
