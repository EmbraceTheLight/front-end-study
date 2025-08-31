"use strict";

// ------------------------------ constructor and new operator ------------------------------//
// const Person = function (firstName, birthYear) {
//   // console.log(this);
//
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//
//   // Never use method below, it's not a good practice to add methods to the object
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };
//
// const jonas = new Person("Jonas", 1991);
// console.log(jonas);
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {}
//
// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Jack", 1975);
// console.log(matilda, jack);
//
// const jay = "Jay";
// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);
//
// Person.hey = function () {
//   console.log("Hey there 👏");
//   console.log(this);
// };
// Person.hey();

// ------------------------------ prototype ------------------------------//
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
//
// jonas.calcAge();
// matilda.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
//
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
//
// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, matilda.species);
//
// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));
//
// // Object.prototype (top of the prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
//
// console.log(Person.prototype.constructor === Person);
// console.dir(Person.prototype.constructor);
//
// // built-in array object's prototype
// const arr = [3, 6, 6, 4, 5, 6, 9, 3, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
//
// console.log(arr.__proto__.__proto__);
//
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
//
// const h1 = document.querySelector("h1");
// console.dir((x) => x + 1);

// ------------------------------ Coding Challenge #1 ------------------------------//
// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
//
// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h
//
// GOOD LUCK 😀
// */
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
//
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
//
// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);
//
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
//
// mercedes.brake();

// ------------------------------ ES6 Classes ------------------------------//
// // class expression
// // const PersonCl = class{}
//
// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//
//   // Instance methods
//   // These methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//
//   get age() {
//     return 2037 - this.birthYear;
//   }
//
//   // set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//
//   get fullName() {
//     return this._fullName;
//   }
//
//   // static method
//   static hey() {
//     console.log("Hey there 👏");
//     console.log(this);
//   }
// }
// PersonCl.hey();
//
// const jessica = new PersonCl("Jessica Davis", 1996);
// console.log(jessica);
// jessica.calcAge();
//
// console.log(jessica.__proto__ === PersonCl.prototype);
// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();
// console.log(jessica.age);
// // 1. Class are NOT hoisted
// // 2. Class are first-class citizens
// // 3. Classes are executed in strict mode
// const walter = new PersonCl("Walter White", 1965);

// ------------------------------ Setters and Getters ------------------------------//
// const account = {
//   owner: "jonas",
//   movements: [200, 530, 120, 300],
//
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
//
// console.log(account.latest);
//
// account.latest = 50;
// console.log(account.movements);

// ------------------------------ Object.create ------------------------------//
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     return this;
//   },
// };
//
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();
//
// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto).init("Sarah", 1979);
// sarah.calcAge();

// ------------------------------ Coding Challenge #2 ------------------------------//
// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
//
// DATA CAR 1: 'Ford' going at 120 km/h
//
// GOOD LUCK 😀
// */
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
//
// const ford = new CarCl("Ford", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford.speed);
// console.log(ford.speedUS);

// ------------------------------ Inheritance between classes ------------------------------//
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
//
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
//
// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);
//
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };
//
// const mike = new Student("Mike", 2020, "Computer Science");
// console.log(mike);
// mike.introduce();
// mike.calcAge();
//
// console.log(mike.__proto__.__proto__);
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);
//
// console.log(mike);
// console.dir(Student.prototype.constructor);

// ------------------------------ Coding Challenge #3 ------------------------------//
// /*
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
//
// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
//
// GOOD LUCK 😀
// */
//
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
//
// const EV = function (make, speed, charge) {
//   Car.bind(this)(make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`,
//   );
// };
//
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// const tesla = new EV("Tesla", 140, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// ------------------------------ Inheritance between classes ------------------------------//
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//
//   // Instance methods
//   // These methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//
//   get age() {
//     return 2037 - this.birthYear;
//   }
//
//   // set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//
//   get fullName() {
//     return this._fullName;
//   }
//
//   // static method
//   static hey() {
//     console.log("Hey there 👏");
//     console.log(this);
//   }
// }
//
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always need to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}.`);
//   }
//
//   calcAge() {
//     console.log(
//       `I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`,
//     );
//   }
// }
//
// const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
// martha.introduce();
// martha.calcAge();

// ------------------------------ Inheritance between Object.create() ------------------------------//
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
console.log(jay);
jay.introduce();
jay.calcAge();
