/* jshint -W097 */
"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // 在函数参数中解构对象
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`,
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ------------------------------------ Code Challenge 1 ------------------------------------ //
/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// 7.
const t1win = team1 < draw && team1 < team2 && game.team1;
const t2win = team2 < draw && team2 < team1 && game.team2;
const winner = t1win || t2win;

console.log(`${winner} is more likely to win.`);

// ------------------------------------ Array Destructuring ------------------------------------ //
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//
// const [x, y, z] = arr;
// console.log(x, y, z);
//
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
//
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);
//
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
//
// // 接收一个函数的两个返回值
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
//
// // 嵌套解构
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
//
// // 默认值
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// ------------------------------------ Object Destructuring ------------------------------------ //
// // 在函数参数中解构对象
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "somewhere in the city",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({ address: "Via del Sole 21", starterIndex: 1 });
//
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
//
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
//
// // 默认值
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
//
// // 变量转换
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
//
// //  嵌套对象解构
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// ------------------------------------ Spread Operator ------------------------------------ //
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); // [1, 2, 7, 8, 9]
//
// const newArr = [1, 2, ...arr];
// console.log(newArr); // [1, 2, 7, 8, 9]
//
// //  在函数中使用扩展运算符
// console.log(...newArr); // 1 2 7 8 9
// console.log(1, 2, 7, 8, 9);
//
// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);
//
// // 复制数组 -- 浅拷贝
// const mainMenuCopy = [...restaurant.mainMenu];
//
// // 连接数组
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
//
// // 可迭代对象包括字符串、数组、Map、Set等，但不包含对象
// const str = "Ey Zh";
// const letters = [...str, "", "S."];
// console.log(letters);
// console.log(...str);
//
// // 真实世界样例
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt("Ingredient 2?"),
//   // prompt("Ingredient 3?"),
// ];
// console.log(ingredients);
//
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
//
// // 对象
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: "Ey Zh",
// };
// console.log(newRestaurant);
//
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// ------------------------------------ Rest Pattern and Rest Parameters ------------------------------------ //
// // 1) Rest 用于解构
// // 扩展运算符，因为 ... 在 赋值运算符= 右侧
// const arr = [1, 2, ...[3, 4]];
//
// // 剩余（Rest）参数，它存在于 赋值运算符= 左侧
// const [a, , b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
//
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
//
// // 在对象中应用 Rest 语法
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
//
// // 2) Rest 用于函数
// const add = function (...numbers,a) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
//   return sum;
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(5, 3, 9, 8, 7, 6, 5, 4, 3, 2, 1);
//
// const x = [23, 5, 7];
// add(...x);
//
// restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");
// restaurant.orderPizza("mushrooms");

// ------------------------------------ Short Circuit Evaluation ------------------------------------ //
// console.log("---- OR ----");
// console.log(3 || "Ey"); // 3
// console.log("" || "Ey"); // "Ey"
// console.log(true || 0); // true
// console.log(undefined || null); // null
//
// console.log(undefined || 0 || "" || "Hello" || 23 || null); // "Hello"
//
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
//
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
//
// console.log("---- AND ----");
// console.log(0 && "Ey"); // 0
// console.log(7 && "Ey"); // "Ey"
// console.log("Hello" && 23 && null && "Ey"); //null
//
// // AND 运算符对比示例
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }
//
// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// ------------------------------------ Nullish Coalescing Operator ------------------------------------ //
// restaurant.numGuests = 0;
//
// const guests = restaurant.numGuests || 10;
// console.log(guests);
//
// // Nullish: null and undefined (NOT include 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// ------------------------------------ Logic Assignment Operators ------------------------------------ //
// const rest1 = {
//   name: "Capri",
//   // numGuests: 20,
//   numGuests: 0,
// };
//
// const rest2 = {
//   name: "La piazza",
//   owner: "Giovanni Rossi",
// };
//
// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10; // jshint ignore:line
// // rest2.numGuests ||= 10; // jshint ignore:line
//
// // nullish assignment operator
// rest1.numGuests ??= 10; // jshint ignore:line
// rest2.numGuests ??= 10; // jshint ignore:line
//
// // AND assignment operator
// // rest1.owner = rest1.owner && "<ANONYMOUS>"; // undefined
// // rest2.owner = rest2.owner && "<ANONYMOUS>"; // <ANONYMOUS>
// rest1.owner &&= "<ANONYMOUS>"; // jshint ignore:line
// rest2.owner &&= "<ANONYMOUS>"; // jshint ignore:line
// console.log(rest1);
// console.log(rest2);
