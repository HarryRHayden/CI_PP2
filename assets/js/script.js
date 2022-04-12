/**
 * Declar constants from DOM and choices
 */
const gameBtns = document.getElementsByClassName('buttons');
const playerChoice = document.getElementById('player-choice')
const computerChoice = document.getElementById('computer-choice')
const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')

/**
 * Add event listeners to the buttons
 */
for (let gameBtn of gameBtns) {
  gameBtn.addEventListener('click', function() {
    let playerPick = this.getAttribute('data-type');
    
  })
}

/**
 * Function to receive what the player clicks
 */
//function playerChoice();

// Rules pop-out modal
let modal = document.getElementById("myRules");

let btn = document.getElementById("how-to-play");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}