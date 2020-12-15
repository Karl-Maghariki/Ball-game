//announcing variables
let ball = document.getElementById("ball"); //the ball that user must aim

function startGame() {
  alert("The game will start in 3s")
  setTimeout(function(){ ball.style.animationDuration = "5s"; }, 3000); //3000ms means 3s
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
  counter++; //will add to itself at every win
  document.getElementById("pointsCounter").innerHTML = counter;
}
function changeColor() {
  let inputValue = document.getElementById("userColor").value; //this will take the chosen color 
  ball.style.backgroundColor = inputValue
  document.getElementById("btn_easy").style.backgroundColor = inputValue;
  document.getElementById("btn_medium").style.backgroundColor = inputValue;
  document.getElementById("btn_hard").style.backgroundColor = inputValue;
  document.getElementById("btn_veryHard").style.backgroundColor = inputValue;
  document.getElementById("btn_godMode").style.backgroundColor = inputValue;
  document.getElementById("btn_impossible").style.backgroundColor = inputValue;
  document.getElementById("btn_easy").style.backgroundColor = inputValue;
  document.getElementById("btn_easy").style.backgroundColor = inputValue;
  document.getElementById("btn_easy").style.backgroundColor = inputValue;
  document.getElementById("btn_easy").style.backgroundColor = inputValue;
  document.getElementById("btn_easy").style.backgroundColor = inputValue;
  document.getElementById("btn_easy").style.backgroundColor = inputValue; 
}
