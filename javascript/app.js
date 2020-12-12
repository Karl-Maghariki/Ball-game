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
  alert("You won !");
  let counter = 0;
  counter++;
  document.getElementById("pointsCounter").innerHTML = counter;
}
function changeColor() {
  let inputValue = document.getElementById("userColor").value;
  ball.style.backgroundColor = inputValue
  document.getElementById("color1").style.backgroundColor = inputValue;
  document.getElementById("color2").style.backgroundColor = inputValue;
  document.getElementById("color3").style.backgroundColor = inputValue;
  document.getElementById("color4").style.backgroundColor = inputValue;
  document.getElementById("color5").style.backgroundColor = inputValue;
  document.getElementById("color6").style.backgroundColor = inputValue;
  document.getElementById("color7").style.backgroundColor = inputValue;
  document.getElementById("color8").style.backgroundColor = inputValue;
  document.getElementById("color9").style.backgroundColor = inputValue;
  document.getElementById("color11").style.backgroundColor = inputValue;
  document.getElementById("color12").style.backgroundColor = inputValue;
  document.getElementById("color13").style.backgroundColor = inputValue; 
}
