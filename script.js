function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * Math.floor(2))];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerPlay == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection == computerSelection) {
    console.log(`It's a draw`);
  } else {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
}
