/* Keyboard Button Press */
/* Keydown */
document.addEventListener("keydown", function (event) {
  const key = event.key;
  const buttons = document.querySelectorAll(".calculator button");

  buttons.forEach((button) => {
    if (
      button.textContent === key ||
      (key === "Backspace" && button.classList.contains("backspace")) ||
      (key === "c" && button.classList.contains("clear"))
    ) {
      button.classList.add("pressed");
    }
  });
});
/* Keyup */
document.addEventListener("keyup", function (event) {
  const buttons = document.querySelectorAll(".calculator button");
  buttons.forEach((button) => {
    button.classList.remove("pressed");
  });
});
