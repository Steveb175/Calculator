/* Events Bool */
let eventsEnabled = true;

/* Keyboard Button Press */
/* Keydown */
document.addEventListener("keydown", function (event) {
  if (!eventsEnabled) return;
  const key = event.key;
  const buttons = document.querySelectorAll(".calculator button");

  buttons.forEach((button) => {
    if (
      button.textContent === key ||
      (key === "c" && button.classList.contains("clear") || (key === "*" && button.classList.contains("multiplication")))
    ) {
      button.classList.add("pressed");
    }
    else if (
      key === "Backspace" && button.classList.contains("backspace") 
    ) {
      button.classList.add("pressed-delete");
      keydownNumber(event);
    }
  });
});

/* Keyup */
document.addEventListener("keyup", function (event) {
  if (!eventsEnabled) return;
  const key = event.key;
  const buttons = document.querySelectorAll(".calculator button");
  buttons.forEach((button) => {
    if (
      button.textContent === key ||
      (key === "c" && button.classList.contains("clear") || (key === "*" && button.classList.contains("multiplication")))
    ){
      keydownNumber(event);
      button.classList.remove("pressed");
    }
    else if (
      key === "Backspace" && button.classList.contains("backspace") 
    ) {
      button.classList.remove("pressed-delete");
    } 
  });
});

/* Click Event */
document.querySelectorAll(".calculator button").forEach(function(button) {
  button.addEventListener("click", function() {
    if (!eventsEnabled) return;
    const key = this.textContent;
    if (key === "c" || button.classList.contains("clear")) {
      keydownNumber ({ key: "c" });
    } else if(key === "Backspace" || button.classList.contains("backspace")) {
      keydownNumber ({ key: "Backspace" });
    } else if (key === "*" && button.classList.contains("multiplication")) {
      keydownNumber ({ key: key });
    } else {
      keydownNumber ({ key: key });
    }
  });
});


/* Calculation */
/* Function inserts key pressed/clicked*/
function keydownNumber(event) {
  let result = document.getElementById("result");
  let pressedKey = event.key;
  if (result.value.length >= 8) {
    disableAll();
    error();
    setTimeout(clear, 250);
    setTimeout(error, 500);
    setTimeout(clear, 750);
    setTimeout(error, 1000);
    setTimeout(clear, 1250);
    setTimeout(error, 1500);
    setTimeout(clear, 1750);
    setTimeout (enableAll, 1751);
  } else if (!isNaN(pressedKey) || pressedKey === ".") {
    result.value += pressedKey;
  } else if (pressedKey === "+" || pressedKey === "-" || pressedKey === "/" || pressedKey === "*") {
    result.value += " " + pressedKey + " ";
  } else if (pressedKey === "x") {
    result.value += " " + "*" + " ";
  } else if (pressedKey === "c") {
    result.value = "";
  } else if (pressedKey === "Backspace") {
    result.value = result.value.slice(0, -1);
  } else if (pressedKey === "=") {
    result.value = eval(result.value);
  }
}

/* Error */
function error() {
  let result = document.getElementById("result");
  result.value = "Error";
}

/* Clear Value */
function clear() {
  let result = document.getElementById("result");
  result.value = "";
}

/* Disable */
function disableAll() {
eventsEnabled = false;
}

/* Enable */
function enableAll() {
eventsEnabled = true;
}