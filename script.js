//CREATE getComputerChoice
//inside getComputerChoice Call Math.random to generate random number between 0 - 1
//IF value equals 0 THEN return rock
//IF value greater than 0.5 THEN return paper
//IF value less than 0.5 THEN return scissor

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

//CREATE getHumanChoice
//OBTAIN the choice by prompting user.
//return the Choice
//use console.log() to test if its returning choice

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice").toLowerCase();
  return humanChoice;
}

humanScore = 0;
computerScore = 0;

//Tracking score
//INIT humanScore equals to 0
//INIT computerScore eqauls to 0

//Playing Single Round
//CREATE playRound
//ASSIGN the getComputerChoice and getHumanChoice to a variable for the parameter
//Human Choice must be converted to lowercase incase the user typed different cases
//IF compChoice is paper THEN create another condition inside
//IF humanChoice equals Rock THEN
//DISPLAY you lose Paper beats Rock
//ADD + 1 to computerScore
//IF humanChoice equals Paper THEN
//DISPLAY Draw both pick paper
//IF humanChoice equals to Scissor THEN
//DISPLAY you Win Scissor beats paper

// getHumanChoice();

console.log(getComputerChoice());
console.log(getHumanChoice());

//Repeat the Conditions on Rock and Scissor

// CREATE a New Function
