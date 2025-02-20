/*jshint -W097 */
"use strict";

// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// ------------------------------- Function ------------------------------- //
// function logger() {
//   console.log("My name is Ey");
// }
//
// logger();
// logger();
// logger();
//
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
//
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
//
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
//
// const num = Number("23");

//Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
//
// //Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
//
// console.log(age1, age2);

//Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
//
// //Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);
//
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };
//
// console.log(yearsUntilRetirement(1991, "Ey"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// functions call other function
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
//
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }
//
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
//
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired.`);
//     return -1;
//   }
//   // return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1991, "Ey"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// ------------------------------- CHALLENGE 1 ------------------------------- //
// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };
//
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas) {
//     return avgDolphins >= 2 * avgKoalas
//       ? `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
//       : "No one wins";
//   } else {
//     return avgKoalas >= 2 * avgDolphins
//       ? `koalas win (${avgDolphins} vs. ${avgKoalas})`
//       : "No one wins";
//   }
// };
//
// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
// console.log(checkWinner(scoreDolphins, scoreKoalas));
//
// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// ------------------------------- Arrays ------------------------------- //
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "John";
//
// const friends = ["Michael", "Steven", "John"];
// console.log(friends);
//
// // const years = new Array(1991, 1994, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
//
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
//
// friends[2] = "Jay";
// console.log(friends);
//
// // friends = ["Bob"];
//
// const firstName = "Ey";
// const ey = [firstName, "Zh", 2037 - 2003, "student", friends];
// console.log(ey);
// console.log(ey.length);
//
// // exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
//
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
//
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

const friends = ["Michael", "Steven", "Peter"];

// Add element to array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// remove element from array
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23")); //false
console.log(friends.includes(23)); // true

if (friends.includes("Steven")) {
  console.log("You have a friend called Peter");
}
