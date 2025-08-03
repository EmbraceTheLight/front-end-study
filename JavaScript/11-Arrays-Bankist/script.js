// jshint -W097
"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  // 初始将 containerMovements 元素的 HTML 内容清空
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} deposit ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    // afterbegin: 表示在父元素的开头插入新元素, 这里将html文本插入到 movements 元素的开头
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  // 阻止表单数据提交自动刷新页面
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ").at(0)}`;
    containerApp.style.opacity = "100";

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = "";
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername &&
    inputCloseUsername.value === currentAccount.username &&
    inputClosePin &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log("Delete");

    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username,
    );

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = "0";

    labelWelcome.textContent = "Log in to get started";
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ------------------------------------ Array methods: slice, splice, reverse, concat, join ------------------------------------ //
// let arr = ["a", "b", "c", "d", "e"];
//
// // SLICE method
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// let newArr = arr.slice(2);
// newArr[0] = 244;
// console.log("newArr ===> ", newArr);
// console.log("arr ===> ", arr);
//
// // 下面两条语句等价
// console.log(arr.slice());
// console.log([...arr]);
//
// // SPLICE method
// // console.log(arr.splice(2));
// arr.splice(-1); // remove last element
// console.log(arr); // ["a", "b", "c", "d"]
// arr.splice(1, 2); // remove last element
// console.log(arr); // ["a", "b"]
//
// //REVERSE method
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);
//
// // CONCAT method
// const letters = arr.concat(arr2);
//
// // 下面两条语句等价
// console.log(letters);
// console.log([...arr, ...arr2]);
//
// // JOIN method
// console.log(letters.join(" - "));

// ------------------------------------ Array methods: at ------------------------------------ //
// const arr = [23, 11, 64];
// console.log(arr[0]); // 23
// console.log(arr.at(0)); // 23
//
// // getting the last element of an array
// console.log(arr[arr.length - 1]); // 64
// console.log(arr.slice(-1)[0]); // 64
// console.log(arr.at(-1)); // 64
//
// // at method can also be used with strings
// console.log("hunterETL".at(0)); // "h"
// console.log("hunterETL".at(-1)); // "L"

// ------------------------------------ Array methods: forEach ------------------------------------ //
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
//
// console.log("---- FOREACH ----");
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// // 0: function(200)
// // 1: function(450)
// // 1: function(-400)
// // ...
// /* forEach in set and map */
// // map
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);
//
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
//
// // set
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// ------------------------------------ Coding Challenge 1 ------------------------------------ //
// /*
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each).
// For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
//
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
//
// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array,
// and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets
//
// HINT: Use tools from all lectures in this section so far 😉
//
// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
//
// GOOD LUCK 😀
// */
// const testDataJ1 = [3, 5, 2, 12, 7];
// const testDataK1 = [4, 1, 15, 8, 3];
// const testDataJ2 = [9, 16, 6, 8, 3];
// const testDataK2 = [10, 5, 6, 1, 4];
// const checkDogs = function (dogsJulia, dogsKate) {
//   const correctedDogsJulia = dogsJulia.slice();
//   correctedDogsJulia.splice(0, 1);
//   correctedDogsJulia.splice(-2);
//   const allDogs = correctedDogsJulia.concat(dogsKate);
//   console.log(allDogs);
//   allDogs.forEach(function (dogAge, i) {
//     if (dogAge >= 3) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${dogAge} years old`,
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
//
// checkDogs(testDataJ1, testDataK1);
// console.log("================================================================");
// checkDogs(testDataJ2, testDataK2);

// ------------------------------------ Data Transformation Methods ------------------------------------ //
// Map method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUSD = 1.1;
//
// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUSD;
// });
// // const movementsUSD = movements.map((mov) => mov * euroToUSD);
//
// console.log(movements);
// console.log(movementsUSD);
//
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * euroToUSD);
// }
// console.log(movementsUSDfor);
//
// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`,
// );
// console.log(movementsDescriptions);
//
// Filter method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);
//
// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }
// console.log(depositsFor);
//
// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);
// //
// // Filter method
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0);
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);
//
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);
//
// // reduce 寻找最大值
// const maxValue = movements.reduce(function (acc, cur) {
//   return acc < cur ? cur : acc;
// }, movements[0]);
// // const maxValue = movements.reduce((acc, cur) => (acc < cur ? cur : acc), movements[0]);
// console.log(maxValue);

// ------------------------------------ Coding Challenge 2 ------------------------------------ //
/*
Let's go back to Julia and Kate's study about dogs.
This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// const testData2 = [16, 6, 10, 5, 6, 1, 4];
// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(function (age, i) {
//     return age <= 2 ? age * 2 : age * 4 + 16;
//   });
//   console.log(humanAge);
//
//   const adultDogs = humanAge.filter(function (age) {
//     return age >= 18;
//   });
//   console.log(adultDogs);
//
//   // const averageAdultDgoHumanAge =
//   //   adultDogs.reduce((acc, cur) => acc + cur, 0) / adultDogs.length;
//   const averageAdultDgoHumanAge = adultDogs.reduce(
//     (acc, cur, i, arr) => acc + cur / arr.length,
//     0,
//   );
//   return averageAdultDgoHumanAge;
// };
//
// const avg1 = calcAverageHumanAge(testData1);
// console.log(avg1);
// console.log("=====================================");
// const avg2 = calcAverageHumanAge(testData2);
// console.log(avg2);

// ------------------------------------ Chaining Method ------------------------------------ //
// const euroToUSD = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// const totalDepositUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * euroToUSD;
//   })
//   // .map((mov) => mov * euroToUSD)
//   .reduce((acc, mov) => acc + mov, 0);
// // PIPELINE
// console.log(totalDepositUSD);

// ------------------------------------ Coding Challenge 3 ------------------------------------ //
/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// const testData2 = [16, 6, 10, 5, 6, 1, 4];
// const calcAverageHumanAge = (ages) => {
//   return ages
//     .map((age) => (age <= 2 ? age * 2 : age * 4 + 16))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// };
//
// const avg1 = calcAverageHumanAge(testData1);
// console.log(avg1);
// console.log("=====================================");
// const avg2 = calcAverageHumanAge(testData2);
// console.log(avg2);

// ------------------------------------ Find Method ------------------------------------ //
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// // find 返回第一个匹配的元素
// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(firstWithdrawal);
//
// console.log(accounts);
//
// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

// ------------------------------------ Some and Every Method ------------------------------------ //
// //////// some method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// // includes 判断相等逻辑
// console.log(movements.includes(-130));
//
// // some 判断是否有元素满足条件
// console.log(movements.some((mov) => mov === -130));
//
// const anyDeposits = movements.some((mov) => mov > 500);
// console.log(anyDeposits);
//
// //////// every method
// console.log(account4.movements.every((mov) => mov > 0));
//
// // separate callback
// const deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// ------------------------------------ flat and flatMap Method ------------------------------------ //
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
//
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2));
//
// //////// flat
// const overallBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
//
// //////// flatMap
// const overallBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// ------------------------------------ sort Method ------------------------------------ //
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.sort());

// return < 0, A, B
// return > 0, B, A
//// 升序
// movements.sort(function (a, b) {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

//// 降序
// movements.sort(function (a, b) {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
