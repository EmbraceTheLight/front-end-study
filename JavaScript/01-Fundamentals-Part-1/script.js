/*
// ----------------------Variables---------------------- //
let js = "amazing";

// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let PI = 3.14159;

let $function = 27;
let myFirstJob = "programmer";
let myCurrentJob = "teacher";

let age;

console.log(myFirstJob);

// ----------------------Data Types---------------------- //
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// ----------------------const let And var---------------------- //
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";
lastName = "Zhang";
console.log(lastName);

// ----------------------Operators---------------------- //
//Math operators
const now = 2037;
const ageZhang = now - 2003;
const ageSarah = now - 2018;
console.log(ageZhang, ageSarah);

console.log(ageZhang * 2, ageZhang / 10, 2 ** 3);

const firstName = "Ey";
const lastName = "Zhang";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1
x--; // 99
console.log(x);
console.log(x++); //print 99
console.log(++x); //print 101

// Comparison operators
console.log(ageZhang > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageZhang = now - 2003;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageZhang + ageSarah) / 2;
console.log(ageZhang, ageSarah);
console.log(averageAge);

// ----------------------CODE CHALLENGE---------------------- //
let markHigherBMI;
// test 1
let massMark = 78;
let heightMark = 1.69;

let heightJohn = 1.95;
let massJohn = 92;
let BMIMark, BMIJohn;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// test 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/
// ----------------------Strings and template literals---------------------- //
const firstName = "John";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const john =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(john);

const johnNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(johnNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines",
);

console.log(`String
multiple
lines`);
