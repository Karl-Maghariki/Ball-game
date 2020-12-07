function startGame() {
  document.getElementById("ball").style.animationDuration = "5s"
}

function stopGame() {
  document.getElementById("ball").style.animationDuration = "0s"
}

function mediumLevel() {
  document.getElementById("ball").style.animationDuration = "3.8s";
}

function hardLevel() {
  document.getElementById("ball").style.animationDuration = "3s";
}

function veryHardLevel() {
  document.getElementById("ball").style.animationDuration = "2s";
}

function godModeLevel() {
  document.getElementById("ball").style.animationDuration = "1s";
}

function impossibleLevel() {
  document.getElementById("ball").style.animationDuration = "0.4s";
}

function smallBall() {
  document.getElementById("ball").style.height = "50px";
  document.getElementById("ball").style.width = "50px";
}

function mediumBall() {
  document.getElementById("ball").style.height = "75px";
  document.getElementById("ball").style.width = "75px";
}
function bigBall() {
  document.getElementById("ball").style.height = "100px";
  document.getElementById("ball").style.width = "100px";
}

function counter() {
  let counter = 0;
  counter += 1
  displayCounterValue()
}

function displayCounterValue() {
  document.getElementById("pointsCounter").innerText = counter;
}