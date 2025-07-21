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

//CREATE function playGame
//MOVE the playRound function inside the playGame
//MOVE the humanScore and Computer score inside the playGame

//CALL playRound five times.

//Need to prompt five times for the user to enter.

// We need to call choices again for a fresh picks
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("Draw, both player picks " + humanChoice);
    } else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        humanScore += 1;
        console.log("You Win, Paper beats rock");
      } else {
        computerScore += 1;
        console.log("You lose, Scissors beats Paper");
      }
    } else if (humanChoice == "rock") {
      if (computerChoice == "paper") {
        computerScore += 1;
        console.log("You lose, Paper beats Rock!");
      } else {
        humanScore += 1;
        console.log("You Win, Rock beats Scissors");
      }
    } else if (humanChoice == "scissors") {
      if (computerChoice == "paper") {
        humanScore += 1;
        console.log("You Win, Scissors beats Paper");
      } else if (computerChoice == "rock") {
        computerScore += 1;
        console.log("You Lose, Rock beats Scissors");
      }
    }

    console.log("Human Selection: " + humanChoice);
    console.log("Computer Selection:" + computerChoice);
  }

  for (x = 0; x < 5; x++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);

    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
  }

  if (humanScore == computerScore) {
    console.log("Draw, Play another game");
  } else if (humanScore > computerScore) {
    console.log("Congratulations! You win!");
  } else {
    console.log("You Lose! Better luck next time.");
  }
}

playGame();
