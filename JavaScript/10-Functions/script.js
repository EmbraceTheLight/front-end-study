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
