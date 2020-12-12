//announcing variables
let ball = document.getElementById("ball");
function startGame() {
  ball.style.animationDuration = "5s";
}
function stopGame() {
  ball.style.animationDuration = "0s";
}
function mediumLevel() {
  ball.style.animationDuration = "3.8s";
}
function hardLevel() {
  ball.style.animationDuration = "3s";
}
function veryHardLevel() {
  ball.style.animationDuration = "2s";
}
function godModeLevel() {
  ball.style.animationDuration = "1s";
}
function impossibleLevel() {
  ball.style.animationDuration = "0.4s";
}
function smallBall() {
  ball.style.height = "50px";
  ball.style.width = "50px";
}
function mediumBall() {
  ball.style.height = "75px";
  ball.style.width = "75px";
}
function bigBall() {
  ball.style.height = "100px";
  ball.style.width = "100px";
}
function giveUp() {
  alert("Don't worry, you'll do it next time!");
  ball.style.animationDuration = "0 s";
}
function winGame() { 
  if (ball.style.animationDuration = "0 s") {
    alert("cheater !")
  } else {
    alert("You won!") 
  }
  let counter = 0;
  counter++;
  document.getElementById("pointsCounter").innerHTML = counter;
}
