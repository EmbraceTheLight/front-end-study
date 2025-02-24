/* jshint -W097 */
"use strict";

// 选择元素
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// 初始状态
score0El.textContent = "0";
score1El.textContent = "0";
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// 掷骰子
btnRoll.addEventListener("click", function () {
  // 1. 随机掷骰子
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. 显示骰子
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // 3. 检查骰子点数是否为1
  if (dice !== 1) {
    // 将点数添加到当前得分
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // 切换到下一个玩家
    document.getElementById(`current--${activePlayer}`).textContent = "0";
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
