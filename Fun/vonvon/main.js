let SCORE = 0;
const TILE_COUNT = 9;
const TIMER = 10;
let MILLISECONDS = 0;
let SECONDS = TIMER;
let isGameOver = false;

const scoreTarget = document.querySelector("#scoreTarget");
const parent = document.querySelector("ul");
const timertarget = document.querySelector("h5");
const gameOverScreen = document.querySelectorAll(".game-over-screen")[0];

function gameOver() {
  isGameOver = true;
  gameOverScreen.classList.add("active");
}
function updateTimer() {
  let timerResult = " ";
  if (MILLISECONDS <= 0) {
    SECONDS--;
    MILLISECONDS = 990;
  }
  MILLISECONDS -= 10;
  if (MILLISECONDS <= 0 && SECONDS <= 0) {
    MILLISECONDS = 0;
    clearInterval(countDown);
    gameOver();
  }
  timerResult += SECONDS;
  timerResult += ":";
  if (MILLISECONDS < 100) {
    timerResult += "0";
  }
  if (MILLISECONDS < 10) {
    timerResult += "0";
  }
  timerResult += MILLISECONDS;
  timertarget.innerHTML = timerResult;
}
updateTimer();

function updateScore(point) {
  SCORE += point;
  scoreTarget.innerHTML = SCORE;
}

const countDown = setInterval(updateTimer, 10);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomColor() {
  //RGB
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  return [red, green, blue];
}
const tileCount = 9;

function gerDiffrentColor(colors) {
  const random = getRandomNumber(0, 2);
  const newColors = [...colors];
  let color = newColors[random];
  if (color > 126) {
    color -= 100;
  } else {
    color += 100;
  }
  newColors[random] = color;
  return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
}

function reDraw() {
  parent.innerHTML = "";
  const colors = getRandomColor();

  const randomIndex = getRandomNumber(0, tileCount - 1);

  for (let i = 0; i < tileCount; i++) {
    const li = document.createElement("li");
    const isNormal = i !== randomIndex;
    if (isNormal) {
      li.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    } else {
      li.style.backgroundColor = gerDiffrentColor(colors);
    }
    li.addEventListener("click", function () {
      if (!isNormal) {
        updateScore(1);
        if (SCORE > 5) {
          clearTimeout(timertarget);
        }
        reDraw();
      } else {
        updateScore(-2);
      }
    });
    parent.appendChild(li);
  }
}

reDraw();
console.error("Fuck");
