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
*/

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
