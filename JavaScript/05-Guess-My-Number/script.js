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

// 初始分数
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  // 输入为空
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";

    // 玩家猜对数字，胜利
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎇 Correct Number!";
    document.querySelector(".number").textContent = String(secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // 玩家输入数值大于目标值
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high";
      score--;
      document.querySelector(".score").textContent = String(score);
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = String(0);
    }

    // 玩家输入数值小于目标值
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low";
      score--;
      document.querySelector(".score").textContent = String(score);
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = String(0);
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
  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector("body").style.backgroundColor = "#222";
  const number = document.querySelector(".number");
  number.style.width = "15rem";
  number.textContent = "?";
});
