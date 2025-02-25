/* jshint -W097 */
"use strict";

// ---------------------------- Scoping ---------------------------- //
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//
//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);
//
//     if (birthYear >= 1981 && birthYear <= 2005) {
//       var millennial = true;
//
//       //创建一个新的与外部作用域名称相同的变量 firstName
//       const firstName = "Steven";
//
//       // 重新分配外部作用域的 output 变量
//       output = `NEW OUTPUT`;
//
//       const str = `Oh, and you are a millennial, ${firstName}!`;
//       console.log(str);
//
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millennial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }
//
// const firstName = "Ey";
// calcAge(2003);

// ---------------------------- TDZ ---------------------------- //
// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);
//
// var me = "Ey";
// let job = "student";
// const year = 2003;
//
// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));
//
// function addDecl(a, b) {
//   return a + b;
// }
//
// const addExpr = function (a, b) {
//   return a + b;
// };
//
// var addArrow = (a, b) => a + b;
//
// // Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();
//
// var numProducts = 10;
//
// function deleteShoppingCart() {
//   console.log("All products deleted");
// }
//
// var x = 1;
// let y = 2;
// const z = 3;
//
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// ---------------------------- this keyword ---------------------------- //
// console.log(this); // <window> object
//
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAge(2003); // undefined
//
// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAgeArrow(2003); // <window> object
//
// const Ey = {
//   year: 2003,
//   calcAge: function () {
//     console.log(this); // <Ey> object
//     console.log(2037 - this.year);
//   },
// };
// Ey.calcAge(); // <Ey> object
//
// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = Ey.calcAge;
// matilda.calcAge();
//
// const f = Ey.calcAge;
// f();
// console.log(f);
//
// var firstName = "Matilda";
//
// const Ey = {
//   firstName: "Ey",
//   year: 2003,
//   calcAge: function () {
//     // console.log(this); // <Ey> object
//     console.log(2037 - this.year);
//
//     // Solution 1
//     // const self = this;
//     // const isMillennial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 2005);
//     // };
//
//     // Solution 2
//     const isMillennial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 2005);
//     };
//     isMillennial();
//   },
//
//   greet: () => {
//     console.log(this); // <window> object
//     console.log(`Hey ${this.firstName}`); // Hey undefined
//   },
// };
// Ey.greet(); // Hey undefined
// Ey.calcAge();
//
// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);
//
// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// ---------------------------- Primitive Types and Reference Types ---------------------------- //
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);
//
// const me = {
//   name: "Ey",
//   age: 20,
// };
// const friend = me;
// friend.age = 27;
// console.log("Friend:", friend);
// console.log("Me:", me);

// Primitive Types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

// Reference Types
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// marriedJessica = {};

// Coping Objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
