// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// addToCart("bread", 5);
// console.log(price, tq);
// console.log("Importing module");
// console.log(shippingCost);

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// import add, { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// console.log(price, tq);

// import add, { cart } from "./shoppingCart.js";
// add("pizza", 2);
// add("bread", 5);
// add("apples", 4);
// console.log(cart);

// console.log("Start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("something");

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// Not very clean
// lastPost.then((last) => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// -------------------------------- Module Pattern -------------------------------- //
// import { cart } from "./shoppingCart.js";
//
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shoppingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart
//     (shopping cost is ${shoppingCost})`);
//   };
//
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier.`);
//   };
//
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();
//
// shoppingCart2.addToCart("apple", 4);
// shoppingCart2.addToCart("pizza", 2);
// console.log(shoppingCart2);
// console.log(shoppingCart2.shoppingCart);

// -------------------------------- CommonJS Module Pattern -------------------------------- //

// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart
    (shopping cost is ${shoppingCost})`
  );
};

// Import
const {addToCart} = require("./shoppingCart")