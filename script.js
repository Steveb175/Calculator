/* Keyboard Button Press */
/* Keydown */
document.addEventListener("keydown", function (event) {
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
  if (!isNaN(pressedKey) || pressedKey === ".") {
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