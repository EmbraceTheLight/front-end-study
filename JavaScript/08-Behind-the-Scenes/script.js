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

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(2003); // undefined

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(2003); // <window> object

const Ey = {
  year: 2003,
  calcAge: function () {
    console.log(this); // <Ey> object
    console.log(2037 - this.year);
  },
};
Ey.calcAge(); // <Ey> object

const matilda = {
  year: 2017,
};
matilda.calcAge = Ey.calcAge;
matilda.calcAge();

const f = Ey.calcAge;
f();
console.log(f);
