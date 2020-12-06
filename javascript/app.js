function winEasy() {
  alert("You won !");
  let answer = prompt("Did you enjoy the easy level ?")
  answer = answer.trim().toLowerCase();   
  if (answer === "yes") {
    alert("then try the medium level!")
  } else if (answer === "no") {
    alert("Oh! Anyway, have a nice day")
  } else {
    return alert("please, choose between yes or no.")
  }
}

function winMedium() {
  alert("You won !");
  let answer = prompt("Did you enjoy the medium level ?")
  answer = answer.trim().toLowerCase();   
  if (answer === "yes") {
    alert("then try the hard level!")
  } else if (answer === "no") {
    alert("Oh! Anyway, have a nice day")
  } else {
    return alert("please, choose between yes or no.")
  }
}

function winHard() {
  alert("You won !");
  let answer = prompt("Did you enjoy the hard level ?")
  answer = answer.trim().toLowerCase();   
  if (answer === "yes") {
    alert("You're a beast!")
  } else if (answer === "no") {
    alert("Oh! Anyway, have a nice day")
  } else {
    return alert("please, choose between yes or no.")
  }
}