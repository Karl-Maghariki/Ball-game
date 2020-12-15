//announcing variables
let ball = document.getElementById("ball").style; //the ball that user must aim

function startGame() {
  alert("The game will start in 3s")
  setTimeout(function(){ ball.style.animationDuration = "5s"; }, 3000); //3000ms means 3s
}
function stopGame() {
  ball.animationDuration = "0s";
}
function mediumLevel() {
  ball.animationDuration = "3.8s";
}
function hardLevel() {
  ball.animationDuration = "3s";
}
function veryHardLevel() {
  ball.animationDuration = "2s";
}
function godModeLevel() {
  ball.animationDuration = "1s";
}
function impossibleLevel() {
  ball.animationDuration = "0.4s";
}
function smallBall() {
  ball.height = "50px";
  ball.width = "50px";
}
function mediumBall() {
  ball.height = "75px";
  ball.width = "75px";
}
function bigBall() {
  ball.height = "100px";
  ball.width = "100px";
}
function giveUp() {
  alert("Don't worry, you'll do it next time!");
  ball.animationDuration = "0 s";
}
function winGame() { 
  alert("You won !");
  let counter = 0;
  counter++; //will add to itself at every win
  document.getElementById("pointsCounter").innerHTML = counter;
}
function changeColor() {
  let inputValue = document.getElementById("userColor").value; //this will take the chosen color 
  ball.backgroundColor = inputValue
  document.getElementById("btn_easy").style.backgroundColor = inputValue;
  document.getElementById("btn_medium").style.backgroundColor = inputValue;
  document.getElementById("btn_hard").style.backgroundColor = inputValue;
  document.getElementById("btn_veryHard").style.backgroundColor = inputValue;
  document.getElementById("btn_godMode").style.backgroundColor = inputValue;
  document.getElementById("btn_impossible").style.backgroundColor = inputValue;
  document.getElementById("btn_small").style.backgroundColor = inputValue;
  document.getElementById("btn_size").style.backgroundColor = inputValue;
  document.getElementById("btn_big").style.backgroundColor = inputValue;
  document.getElementById("btn_lose").style.backgroundColor = inputValue;
  document.getElementById("btn_start").style.backgroundColor = inputValue;
  document.getElementById("btn_stop").style.backgroundColor = inputValue; 
}
