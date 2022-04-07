/**
 * Declar constants from DOM and choices
 */
const gameBtn = document.getElementsByClassName('buttons');
const playerImage = document.getElementById('player-choice')
const computerImage = document.getElementById('computer-choice')


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