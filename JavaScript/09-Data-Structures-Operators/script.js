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

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES 6 Enhanced Object Literals
  openingHours,
  // openingHours: {
  //   [weekdays[4]]: {
  //     open: 12,
  //     close: 22,
  //   },
  //   [weekdays[5]]: {
  //     open: 11,
  //     close: 23,
  //   },
  //   [weekdays[6]]: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // 在函数参数中解构对象
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`,
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ------------------------------------ String ------------------------------------ //
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log("B737"[0]); // B

console.log(airline.length); // 16
console.log("B737".length); // 4

console.log(airline.indexOf("r")); // 6
console.log(airline.lastIndexOf("r")); // 10
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B 或 E 是中间座位
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You get the middle seat 😵");
  } else {
    console.log("You get lucky 😎");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(typeof new String("Hello World"));
console.log(typeof new String("Hello World").slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// 将字符串首字母大写，其余小写
const passenger = "eYZH";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// 比较邮箱地址
const email = "hello@world.org";
const loginEmail = " Hello@World.org \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = loginEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

// 字符串替换
const priceGB = "288,97￡";
const priceUS = priceGB.replace("￡", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23, Boarding door 23!";

console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

// 字符串检查的一些方法
const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320"));
console.log(plane1.includes("Boeing"));
console.log(plane1.startsWith("Air"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("part of the NEW airbus family");
}

// 练习
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed ton board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Get some snacks and a gun for protection");

// split 和 join
console.log("a+very+nice+string".split("+"));
console.log("Ey Zh".split(" "));

const [firstName, lastName] = "Ey Zh".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("ey zh");

// 字符串填充
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("ey".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(1234567890));
console.log(maskCreditCard("153215315315312323321465"));

// 重复
const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(3));

const planesInLine = function (n) {
  console.log(`The are ${n} planes in line ${"✈️".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

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
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
//
// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
//
// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
//
// // 4.
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);
//
// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
//
// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);
//
// // 7.
// const t1win = team1 < draw && team1 < team2 && game.team1;
// const t2win = team2 < draw && team2 < team1 && game.team2;
// const winner = t1win || t2win;
//
// console.log(`${winner} is more likely to win.`);

// ------------------------------------ for-of loop ------------------------------------ //
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }
//
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el[1]}`);
// }
//
// // console.log(...menu.entries());

// ------------------------------------ Optional Chaining ------------------------------------ //
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
//
// //Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
//
// //Example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }
//
// //Method
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");
//
// //Array
// // const users = [{ name: "ey", email: "hello@world.org" }];
// const users = [];
//
// console.log(users[0]?.name ?? "user array empty");

// ------------------------------------ Looping Objects ------------------------------------ //
// // Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);
//
// let openStr = `We are open on ${properties.length} days: `;
//
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);
//
// // Property Values
// const values = Object.values(openingHours);
// console.log(values);
//
// // Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);
//
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// ------------------------------------ Code Challenge 2 ------------------------------------ //
/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // 1.
// for (const [numScore, player] of game.scored.entries()) {
//   console.log(`Goal ${numScore + 1}: ${player}`);
// }
//
// // 2.
// let sum = 0;
// const values = Object.values(game.odds);
// for (const odd of values) {
//   sum += odd;
// }
// const average = sum / values.length;
// console.log(`Average odd: ${average}`);
//
// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   if (team !== "x") {
//     console.log(`Odd of victory ${game[team]}: ${odd}`);
//   } else {
//     console.log(`Odd of draw: ${odd}`);
//   }
// }
//
// // Bonus
// const scorers = {};
// for (const scorer of game.scored) {
//   scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
// }
// console.log(scorers);

// ------------------------------------ Code Challenge 3 ------------------------------------ //
/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);
//
// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
//
// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);
//
// // 3.
// const times = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${times / gameEvents.size} minutes`,
// );
//
// // 4.
// const firstOrSecond = new Map([
//   [true, "[FIRST HALF]"],
//   [false, "[SECOND HALF]"],
// ]);
// console.log(firstOrSecond);
//
// for (const [minute, event] of gameEvents) {
//   console.log(`${firstOrSecond.get(minute <= 45)}: ${event}`);
// }

// ------------------------------------ Set ------------------------------------ //
// const orderSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(orderSet);
//
// // 创建集合
// console.log(new Set("ey Zh"));
//
// // 查看集合大小
// console.log(orderSet.size);
//
// // 查看某元素是否在集合中
// console.log(orderSet.has("Pizza"));
// console.log(orderSet.has("Bread"));
//
// // 添加元素到集合
// orderSet.add("Garlic Bread");
// orderSet.add("Garlic Bread");
// console.log(orderSet);
//
// // 从集合中删除元素
// orderSet.delete("Risotto");
// console.log(orderSet);
//
// // 清空集合
// // orderSet.clear();
// // console.log(orderSet);
//
// // 遍历集合
// for (const order of orderSet) {
//   console.log(order);
// }
//
// // 示例：清除数组中的重复元素
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);
// console.log(new Set("aabcdeeff").size);
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

// ------------------------------------ Map Fundamentals ------------------------------------ //
// // 创建映射
// const rest = new Map();
//
// // 添加键值对到映射
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));
//
// // 设置键值对：链式调用
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");
//
// // 通过键获取值
// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));
//
// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
//
// // 获取映射的所有键，返回一个迭代器类型
// rest.keys();
// // 将迭代器转换为数组
// const keysArr = [...rest.keys()];
// console.log(keysArr);
//
// // 获取映射的所有值,返回一个迭代器类型
// rest.values();
// // 将迭代器转换为数组
// const valuesArr = [...rest.values()];
// console.log(valuesArr);
//
// // 判断键是否存在
// console.log(rest.has("categories"));
//
// // 根据键删除某个键值对
// rest.delete(2);
// console.log(rest);
//
// // 获取映射的大小
// console.log(rest.size);
//
// // 清空映射
// // rest.clear();
// // console.log(rest);
// // console.log(rest.size);
//
// // 数组作为映射的键
// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
//
// console.log(rest.get(arr));

// ------------------------------------ Map Iteration ------------------------------------ //
// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct 🎇"],
//   [false, "try again"],
// ]);
// console.log(question);
//
// // 将对象转换为映射
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
//
// // 遍历映射的示例
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// // const answer = Number(prompt("Your answer:"));
// const answer = 3;
// console.log(question.get(answer === Number(question.get("correct"))));
//
// // 将映射转换为数组
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
// // console.log([...question.entries()]);
