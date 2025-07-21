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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const computerSelection = getComputerChoice();
  const humanSelection = getHumanChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "paper") {
      if (computerChoice == "paper") {
        console.log("Draw, both picks Paper!");
      } else if (computerChoice == "rock") {
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
      } else if (computerChoice == "rock") {
        console.log("Draw, both picks Rock");
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
      } else {
        console.log("Draw, both picks Scissors");
      }
    }

    console.log("Human Selection: " + humanChoice);
    console.log("Computer Selection:" + computerChoice);
  }

  //   for (i = 0; i < 4; i++) {
  playRound(humanSelection, computerSelection);
  // getComputerChoice();
  // getHumanChoice();
  //   }

  console.log("Human score: " + humanScore);
  console.log("Computer score: " + computerScore);
}

playGame();
