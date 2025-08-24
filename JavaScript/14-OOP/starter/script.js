"use strict";

const Person = function (firstName, birthYear) {
  // console.log(this);

  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never use method below, it's not a good practice to add methods to the object
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

const jay = "Jay";
console.log(jonas instanceof Person);
console.log(jay instanceof Person);
