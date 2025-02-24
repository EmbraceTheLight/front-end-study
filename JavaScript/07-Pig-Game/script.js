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

let scores, currentScore, activePlayer, playing;
const init = function () {
  // 重置游戏状态
  scores = [0, 0];
  currentScore = 0;
  playing = true;
  activePlayer = 0;

  diceEl.classList.add("hidden");

  // 重置分数
  scores[0] = scores[1] = 0;
  currentScore = 0;
  current0El.textContent = "0";
  current1El.textContent = "0";
  score0El.textContent = "0";
  score1El.textContent = "0";

  //移除获胜者样式，并重置当前玩家为第一个玩家
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--active");
  document.querySelector(`.player--0`).classList.add("player--active");
};
init();

// 切换到下一个玩家
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = "0";
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// 掷骰子
btnRoll.addEventListener("click", function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. 为当前玩家添加得分到总分
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = String(
      scores[activePlayer],
    );

    // 2. 检查当前玩家的总得分是否 >=100
    // 如果是，则游戏结束，显示胜利者
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      // 如果不是，则切换到下一个玩家
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
