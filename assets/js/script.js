/**
 * Declar constants from DOM and choices
 */
const gameBtns = document.getElementsByClassName('buttons');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const computerImage = ['rock', 'paper', 'scissors'];
let cScore = 0;
let pScore = 0;

/**
 * Add event listeners to the buttons
 */
for (let gameBtn of gameBtns) {
  gameBtn.addEventListener('click', function() {
    let playerPick = this.getAttribute('data-type');
    playGames(playerPick);
  });
}

/**
 * Function to receive what the player clicks
 */
function playGames(playerPick) {
  if (playerPick === 'rock') {
    playerChoice.className = 'fa-solid fa-hand-back-fist';
  } else if (playerPick === 'scissors') {
    playerChoice.className = 'fa-solid fa-hand-scissors';
  } else {
    playerChoice.className = 'fa-solid fa-hand';
  }

  let computerMath = Math.floor(Math.random() * 3);
  let computerPick = computerImage[computerMath];
  
  if (computerPick === 'rock') {
    computerChoice.className = 'fa-solid fa-hand-back-fist';
  } else if (computerPick === 'scissors') {
    computerChoice.className = 'fa-solid fa-hand-scissors';
  } else {
    computerChoice.className = 'fa-solid fa-hand';
  }
  setTimeout(gameWinner, 10, computerPick, playerPick);
}

// Check who wins
function gameWinner(computerPick, playerPick) {
  let moveWinner = `${playerPick} vs ${computerPick}`;

  //Check for a tie
  if (computerPick === playerPick) {
    alert(`${moveWinner} is a Tie`);
  }

  //Check for Rock
  else if (computerPick === 'rock') {
    if (playerPick === 'paper') {
      alert(`${moveWinner} Player Wins`);
      pScore++;
    } else {
      alert(`${moveWinner} Computer Wins`);
      cScore++;
    }
  }
  
  //Check for paper
  else if (computerPick === 'paper') {
    if (playerPick === 'scissors') {
      alert(`${moveWinner} Player Wins`);
      pScore++;
    } else {
      alert(`${moveWinner} Computer Wins`);
      cScore++;
    }
  }

  //Check for scissors
  else if (computerPick === 'scissors') {
    if (playerPick === 'rock') {
      alert(`${moveWinner} Player Wins`);
      pScore++;
    } else {
      alert(`${moveWinner} Computer Wins`);
      cScore++;
    }
  }
  updateScores();
}

//Check and update the scores
function updateScores() {
  computerScore.textContent = cScore;
  playerScore.textContent = pScore;
  checkWinner();
}

//Check who is the first to 5
function checkWinner() {
  if (pScore === 5 || cScore === 5) {
    if (pScore === 5) {
      alert(`Congratulations you WIN!!!`);
      pScore = 0;
      cScore = 0;
    } else {
      alert(`Unlucky the computer got you this time!`);
      pScore = 0;
      cScore = 0;
    }
  }
  updateScores();
}

// Rules pop-out modal
let modal = document.getElementById("myRules");

let btn = document.getElementById("how-to-play");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};