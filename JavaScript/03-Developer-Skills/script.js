// Remember, we're gonna use strict mode in all scripts now!
/*jshint -W097 */
"use strict";

/* 问题1 */
// 温度传感器将收集到的温度统计到一个数组中。但是传感器可能出现错误，因此会传入一个错误信息。
// 根据温度传感器的数据计算一个温度数组中的温差，温度数组
// const temperatures = ["error", 3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
//
// // 解决过程：将问题分解为子问题
// // 1. 理解问题
// // * 什么是温差？ 温差就是温度最大值和温度最小值的差值
// // * 温度传感器的错误是什么样的？我们需要对它做什么？
//
// // 2. 将问题分解为多个子问题
// // * 寻找数组中的最大值
// // * 寻找数组中的最小值
// // * 计算最大值与最小值的差值
// const calcTempAmplitude = function (temps) {
//   let available = 0;
//   for (
//     ;
//     typeof temps[available] !== "number" && available < temps.length;
//     available++
//   ) {}
//   if (available >= temps.length) {
//     return "There is no valid temperature data";
//   }
//
//   let max = temps[available];
//   let min = temps[available];
//
//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
//
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);
//
// /* 问题2 */
// // 函数应当接收两个数组。
// // 1. 理解问题
// // ? 要接收两个数组，那么应该实现这个功能两遍吗？
// // 显然不需要，只需把两个数组合并即可
//
// // 2. 将问题分解为子问题
// // * 合并两个数组
//
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//
//   let available = 0;
//   for (
//     ;
//     typeof temps[available] !== "number" && available < temps.length;
//     available++
//   ) {}
//   if (available >= temps.length) {
//     return "There is no valid temperature data";
//   }
//   let max = temps[0];
//   let min = temps[0];
//
//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
//
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);
//
// // const array1 = ["a", "b", "c"];
// // const array2 = ["d", "e", "f"];
// // const array3 = array1.concat(array2);
//
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//
//     // C) Fix bug
//     // value: Number(prompt("Degrees celsius: ")),
//     value: 10,
//   };
//
//   // B) Find bug
//   console.table(measurement);
//
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
//
// // A) Identify bug
// console.log(measureKelvin());
//
// // Using a debuger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//
//   let available = 0;
//   for (
//     ;
//     typeof temps[available] !== "number" && available < temps.length;
//     available++
//   ) {}
//   if (available >= temps.length) {
//     return "There is no valid temperature data";
//   }
//   let max = 0;
//   let min = 0;
//
//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//
//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) Identify bug
// console.log(amplitudeBug);

// ------------------------- CHALLENGE 1 ------------------------- //
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
const printForecast = function (arr) {
  let ret = "";
  for (let i = 0; i < arr.length; i++) {
    const tempStr = `... ${arr[i]}℃ in ${i + 1} days  `;
    ret += tempStr;
  }
  return ret + "...";
};

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];
console.log(printForecast(test1));
console.log(printForecast(test2));
