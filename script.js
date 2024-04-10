/* Keyboard Button Press */
/* Keydown */
document.addEventListener("keydown", function (event) {
  const key = event.key;
  const buttons = document.querySelectorAll(".calculator button");

  buttons.forEach((button) => {
    if (
      button.textContent === key ||
      (key === "c" && button.classList.contains("clear"))
    ) {
      button.classList.add("pressed");
    }
    else if (
      key === "Backspace" && button.classList.contains("backspace") 
    ) {
      button.classList.add("pressed-delete");
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
      (key === "c" && button.classList.contains("clear"))
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


/* Calculation */
/* Function inserts if key pressed is a number */
function keydownNumber(event) {
  let result = document.getElementById("result");
  let pressedKey = event.key;
  if (!isNaN(pressedKey)) {
    result.value += pressedKey;
  }
}