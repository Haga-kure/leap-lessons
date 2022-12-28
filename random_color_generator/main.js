const button = document.querySelector("#btn");
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const bc = document.querySelector("body");

function changeBackgroundColor() {
  const green = getRandomNumber(0, 255);
  const red = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);

  bc.style.backgroundColor = `rgb(${green},${red},${blue})`;
}
function changeButtonColor() {
  const green = getRandomNumber(0, 255);
  const red = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);

  button.style.backgroundColor = `rgb(${green},${red},${blue})`;
}

button.addEventListener("click", changeBackgroundColor);
button.addEventListener("click", changeButtonColor);
