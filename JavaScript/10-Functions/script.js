// jshint -W097
"use strict";

// ------------------------------------ Function parameters ------------------------------------ //
// const bookings = [];
// const createBooking = function (
//   flightNumber,
//   numPassengers = 1,
//   price = 199 * numPassengers,
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNumber,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
//
// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);
//
// createBooking("LH123", undefined, 1000);

// ------------------------------------ The way to pass arguments ------------------------------------ //
// const flight = "LH123";
// const ey = {
//   name: "Ey",
//   passport: 510526405602,
// };
//
// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr." + passenger.name;
//
//   if (passenger.passport === 510526405602) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport!");
//   }
// };
//
// checkIn(flight, ey);
// console.log(flight);
// console.log(ey);
//
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000000);
// };
//
// newPassport(ey);
// console.log(ey);
// checkIn(flight, ey);

// ------------------------------------ First-class functions ------------------------------------ //
// const oneWord = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };
//
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };
//
// // 高阶函数
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer("JavaScript is the best", upperFirstWord);
// transformer("JavaScript is the best", oneWord);
//
// // 回调函数的使用
// const high5 = function () {
//   console.log("👋");
// };
//
// document.body.addEventListener("click", high5);
//
// ["Ey", "Emma", "John"].forEach(high5);
// 返回值是函数
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
//
// const greeterHey = greet("Hey");
// greeterHey("zey");
// greeterHey("Steven");
//
// greet("Hello")("zey");
//
// // 是用箭头函数重构greet函数
// const greetArrowFunction = (greeting) => (name) =>
//   console.log(`${greeting} ${name}`);
//
// greetArrowFunction("Hi")("zey");

// ------------------------------------ The call and apply methods ------------------------------------ //
// const lufthansa = {
//   airline: "Lufthansa",
//   iatacode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`,
//     );
//     this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
//   },
// };
//
// lufthansa.book(123, "zey");
// lufthansa.book(635, "John Smith");
// console.log(lufthansa);
//
// const eurowings = {
//   airline: "Eurowings",
//   iatacode: "EW",
//   bookings: [],
// };
//
// const book = lufthansa.book;
//
// // 不会正常工作
// // book(23, "Sarah Williams");
// // console.log(eurowings);
//
// // 函数的call方法
// book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);
//
// book.call(lufthansa, 123, "Mary Cooper");
// console.log(lufthansa);
//
// const swiss = {
//   airline: "Swiss Air Lines",
//   iatacode: "LX",
//   bookings: [],
// };
// book.call(swiss, 583, "Mary Cooper");
// console.log(swiss);
//
// // 函数的Apply方法
// const flightData = [583, "Geroge Cooper"];
// book.apply(swiss, flightData); //  等价于 book.call(swiss, ...flightData);
// console.log(swiss);
//
// book.call(swiss, ...flightData);

// ------------------------------------ The bind method ------------------------------------ //
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
//
// bookEW(23, "Steven Williams");
//
// // partial application: 事先指定好一部分参数
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("ey zh");
// bookEW23("Martha Cooper");
//
// // with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//
//   this.planes++;
//   console.log(this.planes);
// };
//
// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
//
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
//
// const addVAT = addTax.bind(null, 0.23); // 预设 rate 值
// // addVAT = (value) => value + value * 0.23;
//
// console.log(addVAT(100));
// console.log(addVAT(23));
//
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
//
// const addVAT2 = addTaxRate(0.23);
//
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// ------------------------------------ Coding Challenge 1 ------------------------------------ //
// /*
// Let's build a simple poll app!
//
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option.
// This data is stored in the starter object below.
//
// Here are your tasks:
//
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
//
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
//   Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'.
//  If type is 'array', simply display the results array as it is, using console.log(). This should be the default option.
//  If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
//
// HINT: Use many of the tools you learned about in this and the last section 😉
//
// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option.
// Do NOT put the arrays in the poll object!
//  So what should the this keyword look like in this situation?
//
// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
//
// GOOD LUCK 😀
// */
// const poll = {
//   question: "What is your favorite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//
//   // This generates [0, 0, 0, 0].
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     // let promptStr = poll.question;
//     // for (let i = 0; i < poll.options.length; i++) {
//     //   promptStr += `\n${poll.options[i]}`;
//     // }
//     // promptStr += "\n(Write option number)";
//     // const number = Number(prompt(promptStr));
//
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`,
//       ),
//     );
//     if (
//       typeof answer == "number" &&
//       answer >= 0 &&
//       answer < this.answers.length
//     ) {
//       this.answers[answer]++;
//     }
//     this.displayResults2();
//     this.displayResults2("string");
//   },
//
//   displayResults: function (type = "array") {
//     return function (arrays) {
//       if (type === "string") {
//         let str = `Poll results are `;
//         for (let i = 0; i < arrays.length; i++) {
//           str += `${arrays[i]} `;
//         }
//         console.log(str.trimEnd());
//       } else if (type === "array") {
//         console.log(arrays);
//       }
//     };
//   },
//
//   displayResults2: function (type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };
//
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
//
// const testData1 = [5, 2, 3];
// const testData2 = [1, 5, 3, 9, 6, 1];
// poll.displayResults()(poll.answers);
// poll.displayResults()(testData1);
// poll.displayResults("array")(testData1);
// poll.displayResults("string")(testData1);
//
// poll.displayResults()(testData2);
// poll.displayResults("array")(testData2);
// poll.displayResults("string")(testData2);

// ------------------------------------ Immediately Invoked Function Expressions ------------------------------------ //
// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();
//
// // Immediately Invoked Function Expressions
// // 使用圆括号包裹函数定义，使之不是语句而是一个表达式, 后面在加一对圆括号, 表示调用该函数。这个就是匿名函数。
// (function () {
//   console.log("This will never run again");
//   const isPrivate = 23;
// })();
//
// // 无法访问函数内部的常量/变量
// // console.log(isPrivate);
//
// (() => console.log("This will ALSO never run again"))();
//
// // 创建一个局部作用域，无法被外部的全局作用域访问
// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate);
// console.log(notPrivate);

// ------------------------------------ Closures ------------------------------------ //
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
//
// const booker = secureBooking();
//
// booker();
// booker();
// booker();
//
// console.dir(booker);
//
// // Examples of Closures
// // Examples 1
// let f;
//
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
//
// g();
// f();
// console.dir(f);
//
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
//
// // 对 f 重新赋值。
// h();
// f();
// console.dir(f);
//
// // Examples 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   // jshint -W117
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//
//   console.log(`Will start boarding in ${wait} seconds`);
// };
//
// // boardPassengers 中的 setTimeout异步函数内部的 perGroup 变量会覆盖全局的 perGroup 变量。
// // 因为闭包优先于作用域链。
// const perGroup = 1000;
// boardPassengers(180, 3);

// ------------------------------------ Coding Challenge 2 ------------------------------------ //
// /*
// This is more of a thinking challenge than a coding challenge 🤓
//
// Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
//
// And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
//
// GOOD LUCK 😀
// */
//
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//
//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();
