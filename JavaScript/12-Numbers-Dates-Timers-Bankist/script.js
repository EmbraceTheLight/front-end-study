// jshint -W097
"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

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
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username,
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
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

// ------------------------------ Number ------------------------------//
// console.log(23 === 23.0);
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false
//
// console.log(Number("23"));
// console.log(+"23");
//
// console.log(Number.parseInt("30px", 10));
// console.log(Number.parseInt("31px", 5));
// console.log(Number.parseInt("e23", 10));
// console.log(Number.parseInt(" 2.5rem "));
//
// console.log(Number.parseFloat(" 2.5rem "));
//
// // Check if a value is NaN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN("23"));
// console.log(Number.isNaN("abc"));
// console.log(isNaN("abc"));
// console.log(Number.isNaN(+"20X"));
// console.log(Number.isNaN(23 / 0));
//
// // Check if a value is number
// console.log(Number.isFinite(23 / 0));
// console.log(Number.isFinite(20));
// console.log(Number.isFinite("20"));
// console.log(Number.isFinite(+"20X"));
//
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger("23"));
// console.log(Number.isInteger(23 / 0));

// ------------------------------ Math Methods ------------------------------//
// console.log(Math.sqrt(25));
// console.log(Math.sqrt("25"));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));
//
// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, "23", 11, 2));
// console.log(Math.min(5, 18, "23px", 11, 2));
//
// console.log(Math.min(5, 18, 23, 11, 2));
//
// console.log(Math.PI * Number.parseFloat("10px") ** 2);
//
// console.log(Math.trunc(Math.random() * 6) + 1);
//
// // 生成范围 [min, max] 的随机整数
// const randomInt = (min, max) =>
//   Math.trunc(Math.floor(Math.random() * (max - min + 1)) + min);
// // [0, 1) --> [0,max - min + 1) == [0, max - min] --> [0, max - min] + min --> [min, max]
// console.log(randomInt(10, 20));
//
// // round method
// console.log(Math.trunc(23.3));
//
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));
//
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));
//
// console.log(Math.floor(23.3));
// console.log(Math.floor("23.9"));
//
// console.log(Math.floor(-23.3));
//
// // rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

// ------------------------------ Remainder Operator ------------------------------//
// console.log(5 % 2);
// console.log(5 / 2);
// console.log(8 % 3);
// console.log(8 / 3);
//
// console.log(6 % 2);
// console.log(6 / 2);
//
// console.log(7 % 2);
// console.log(7 / 2);
//
// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));
//
// labelBalance.addEventListener("click", function () {
//   [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = "orangeRed";
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = "lightBlue";
//     }
//   });
// });

// ------------------------------ Numeric Separators ------------------------------//
// const diameter = 287_460_000_000;
// console.log(diameter);
//
// const price = 345_99;
// console.log(price);
//
// const transferFee1 = 15_00;
// const transferFee2 = 1_500;
//
// const PI = 3.14_15;
// console.log(PI);
//
// console.log(Number(230_000));
// console.log(Number("230_000"));
// console.log(parseInt("230_000"));
// console.log(Number(transferFee1));

// ------------------------------ bigint ------------------------------ //
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 + 1); // 9007199254740992
console.log(2 ** 53 + 2); // 9007199254740994
console.log(2 ** 53 + 3); // 9007199254740996
console.log(2 ** 53 + 4); // 9007199254740996

console.log(982376829164783124692856728356327853248973284653287392048327n); // 982376829164783124692856728356327853248973284653287392048327n
console.log(
  BigInt(982376829164783124692856728356327853248973284653287392048327), // 982376829164783117757955425451991155605277268279589181849600n
);

// Operations
console.log(10000n + 10000n);
console.log(498371263284672385723485693245625623985673821462n * 100000000n); // 49837126328467238572348569324562562398567382146200000000n
// console.log(Math.sqrt(16n));

const huge = 2319827483742895634879564837564876n;
const num = 23;
console.log(huge * BigInt(num)); // 53356032126086599602229991263992148n

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true

console.log(huge + "is REALLY big!!!");

// divisions
console.log(10n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335
