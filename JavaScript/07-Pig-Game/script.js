/* jshint -W097 */
"use strict";

// 选择元素
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

// 初始状态
score0El.textContent = "0";
score1El.textContent = "0";
diceEl.classList.add("hidden");
