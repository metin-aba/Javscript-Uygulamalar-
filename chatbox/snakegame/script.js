const playBoard = document.querySelector(".play-board");
let foodX, foodY;
let snakeX = 5,
  snakeY = 10;

let velocityX = 0,
  velocityY = 0;

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};
const changeDirection = (e) => {
  if (e === "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
  } else if (e === "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
  } else if (e === "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
  } else if (e === "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
  }
};
const initGame = () => {
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  htmlMarkup += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
  playBoard.innerHTML = htmlMarkup;
};
changeFoodPosition();
initGame();
document.addEventListener("keydown", changeDirection);
