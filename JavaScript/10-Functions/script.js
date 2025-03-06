// jshint -W097
"use strict";

// ------------------------------------ Function parameters ------------------------------------ //
const bookings = [];
const createBooking = function (
  flightNumber,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
