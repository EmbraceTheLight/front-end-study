/* jshint -W097 */
"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
//
// document.querySelector(".number").textContent = 13;
// console.log(typeof document.querySelector(".number").textContent);
// document.querySelector(".score").textContent = 10;
//
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// 随机数
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// 初始数字以及最高分
let score = 20;
let highScore = 0;
let isGameOver = false;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  if (!isGameOver) {
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess);

    // 输入为空
    if (!guess) {
      // document.querySelector(".message").textContent = "🚫 No number!";
      displayMessage("🚫 No number!");

      // 玩家猜对数字，胜利
    } else if (guess === secretNumber) {
      // document.querySelector(".message").textContent = "🎇 Correct Number!";
      displayMessage("🎇 Correct Number!");
      document.querySelector(".number").textContent = String(secretNumber);

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      isGameOver = true;

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = String(highScore);
      }

      // 玩家输入数值不等于目标值
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector(".message").textContent =
        //   guess > secretNumber ? "📈 Too high" : "📉 Too low";
        displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
        score--;
        document.querySelector(".score").textContent = String(score);
      } else {
        // document.querySelector(".message").textContent =
        //   "💥 You lost the game!";
        displayMessage("💥 You lost the game!");
        document.querySelector(".score").textContent = String(0);
      }
    }
  }
});

// -------------------------- CODE CHALLENGE 1 -------------------------- //
/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = String(score);
  document.querySelector(".guess").value = "";
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  const number = document.querySelector(".number");
  number.style.width = "15rem";
  number.textContent = "?";
});
