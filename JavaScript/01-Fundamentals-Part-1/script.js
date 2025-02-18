/*
// ---------------------- Variables ---------------------- //
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

// ---------------------- Data Types ---------------------- //
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

// ---------------------- const let And var ---------------------- //
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";
lastName = "Zhang";
console.log(lastName);

// ---------------------- Operators ---------------------- //
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

// ---------------------- CODE CHALLENGE 1 ---------------------- //
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

// ---------------------- Strings and template literals ---------------------- //
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

// ---------------------- IF / ELSE Statements ---------------------- //
const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving license. 🚗 ");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// ---------------------- CODE CHALLENGE 2 ---------------------- //
//test data 1
// const massMark = 78;
// const heightMark = 1.69;
//
// const heightJohn = 1.95;
// const massJohn = 92;

//test data 2
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark\'s BMI is higher than John\'s!");
} else {
  console.log("John\'s BMI is higher than Mark\'s!");
}

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John\'s BMI (${BMIJohn}) is higher than Mark\'s (${BMIMark})!`);
}

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; //11
n = n - 1; //10
console.log(n);

// ---------------------- Truthy and Falsy values ---------------------- //
// 5个假值： null, undefined, 0, NaN, ""
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YeY! height is defined!");
} else {
  console.log("height is UNDEFINED!");
}

// ---------------------- == and ===  ---------------------- //
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number!");
} else if (favorite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 23 or 7 or 9!");
}

if (favorite !== 23) console.log("Wht not 23?");
*/
// ---------------------- Boolean logic ---------------------- //
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
