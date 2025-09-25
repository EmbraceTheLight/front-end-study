'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  // 取得第一条 currency 的 value
  const html = `
  <article class="country ${className}" >
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${getLanguageName(data)}</p>
            <p class="country__row"><span>💰</span>${getCurrencyName(data)}</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = '1';
};

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// ------------------------------ XMLHttpRequest ------------------------------ //
const firstKeyVal = function (object) {
  return Object.entries(object);
};

const getLanguageName = function (countryInfo) {
  const languages = firstKeyVal(countryInfo.languages)[0];
  return languages[1];
};
const getCurrencyName = function (countryInfo) {
  const currencies = firstKeyVal(countryInfo.currencies)[0];
  return currencies[0];
};
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//
//     // 取得第一条 currency 的 value
//     const currency = firstKeyVal(data.currencies)[0][0];
//     const html = `
//   <article class="country">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${getLanguageName(data)}</p>
//             <p class="country__row"><span>💰</span>${getCurrencyName(data)}</p>
//           </div>
//         </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = '1';
//   });
// };
//
// getCountryData('portugal');
// getCountryData('usa');
// getCountryData("People's Republic of China");
// getCountryData('Germany');

// ------------------------------ call back hell ------------------------------ //
//
// const getCountryAndNeighbor = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//
//     // Render country 1
//     renderCountry(data);
//
//     // get neighbor country(2)
//     const [neighbor] = data.borders;
//
//     if (!neighbor) return;
//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('usa');

// ------------------------------Promise and Fetch API ------------------------------ //
// Old method to get data using XMLHttpRequest:
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// Use fetch API to get data:
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);
//
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       response => {
//         console.log(response);
//
//         if (!response.ok) {
//           throw new Error(`Country not found (${response.status})`);
//         }
//
//         return response.json();
//       },
//       // err => alert(err),
//     )
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbor = data[0].borders[0];
//       const neighbor = 'fdsgsd';
//
//       if (!neighbor) return;
//
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(
//       response => response.json(),
//       // err => alert(err),
//     )
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     });
// };
//
// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.com/v3.1/alpha/${country}`,
//     'Country not found',
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data[0]);
//       if (!data[0].hasOwnProperty('borders'))
//         throw new Error('No neighbour found');
//
//       const neighbor = data[0].borders[0];
//
//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbor}`,
//         'Country not found',
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     });
// };
//
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });
//
// getCountryData('Australia');

// ------------------------------ Coding Challenge #1 ------------------------------ //
// /*
// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
//
// Here are your tasks:
//
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
// The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
//
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
//
// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474
//
// GOOD LUCK 😀
// */
// const getJSONv2 = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(function (response) {
//     if (!response.ok) {
//       if (response.status === 403) {
//         throw new Error(
//           `You have exceeded the request limit. Please try again later. (${response.status})`,
//         );
//       }
//       throw new Error(`${errorMsg}. (${response.status})`);
//     }
//     return response.json();
//   });
// };
// const whereAmI = function (lat, lng) {
//   getJSONv2(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//   )
//     .then(function (data) {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryName}!`);
//       return getJSONv2(
//         `https://restcountries.com/v3.1/alpha/${data.countryCode}`,
//       );
//     })
//     .then(function (data) {
//       // Country 1
//       renderCountry(data[0]);
//
//       if (!data[0].hasOwnProperty('borders'))
//         throw new Error('No neighbour found');
//
//       const neighbor = data[0].borders[0];
//
//       // Country 2
//       return getJSONv2(
//         `https://restcountries.com/v3.1/alpha/${neighbor}`,
//         'Country not found',
//       );
//     })
//     // .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     });
// };
//
// whereAmI(52.508, 13.381);
// whereAmI(52.508, 13.381);
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// ------------------------------ Event Loop ------------------------------ //
// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved Promise 1').then(res => console.log(res));
// Promise.resolve('Resolved Promise 2').then(res => {
//   for (let i = 0; i < 100000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

// ------------------------------ Building a Promise ------------------------------ //
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery started');
//
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('you WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });
//
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
//
// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
//
// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 1 second');
//   });
//
// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 seconds passed');
// //     setTimeout(() => {
// //       console.log('3 seconds passed');
// //       setTimeout(() => {
// //         console.log('4 seconds passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);
// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 seconds passed');
//   });
//
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err),
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
//
// // getPosition().then(pos => console.log(pos));
//
// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//
//       return fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//       );
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Problem with geocoding ${res.status}`);
//       }
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryName}!`);
//       return fetch(`https://restcountries.com/v3.1/alpha/${data.countryCode}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Problem with geocoding ${res.status}`);
//       }
//       return response.json();
//     })
//     .then(function (data) {
//       // Country 1
//       renderCountry(data[0]);
//
//       if (!data[0].hasOwnProperty('borders'))
//         throw new Error('No neighbour found');
//
//       const neighbor = data[0].borders[0];
//
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Problem with geocoding ${res.status}`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     });
// };
//
// btn.addEventListener('click', whereAmI);

// ------------------------------ Coding Challenge #2 ------------------------------ //
/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input.
This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path.
When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise.
The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image
 (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder.
Test the error handler by passing a wrong image path.
Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
// const imageContainer = document.querySelector('.images');
// let currentImg;
//
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const imgElement = document.createElement('img');
//     imgElement.src = imgPath;
//     imgElement.addEventListener('error', function (e) {
//       reject(new Error(`Error loading image ${imgPath}`));
//     });
//     imgElement.addEventListener('load', function (e) {
//       imageContainer.append(imgElement);
//       resolve(imgElement);
//     });
//   });
// };
//
// const loadImages = function (imgPath1, imgPath2) {
//   createImage(imgPath1)
//     .then(imgEl => {
//       console.log('Image 1 loaded');
//       currentImg = imgEl;
//       return wait(2);
//     })
//     .then(() => {
//       currentImg.style.display = 'none';
//       return createImage(imgPath2);
//     })
//     .then(imgEl => {
//       console.log('Image 2 loaded');
//       currentImg = imgEl;
//       return wait(2);
//     })
//     .then(() => {
//       currentImg.style.display = 'none';
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };
//
// loadImages('./img/img-1.jpg', './img/img-2.jpg');

// ------------------------------ Async await ------------------------------ //
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
//
// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//
//     // reverse geocoding
//     const resGeo = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//     );
//     if (!resGeo.ok) throw new Error(`Problem getting location data`);
//     const dataGeo = await resGeo.json();
//
//     // Country data
//     // Syntax sugar: await
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.countryNamedsadas}`,
//     );
//     if (!res.ok) throw new Error(`Problem getting country`);
//
//     const data = await res.json();
//
//     renderCountry(data[1]);
//
//     return `You are in ${dataGeo.city},${dataGeo.countryName}`;
//   } catch (err) {
//     console.error(err.message);
//     renderError(`Something went wrong 💥💥 ${err.message}`);
//
//     // Reject promise returned from async function
//     throw err;
//   }
// };
//
// console.log(`1: will get location`);
// // const city = whereAmI();
// // console.log(city);
// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message} 💥`))
// //   .finally(() => console.log(`3: will Finished getting location`));
//
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(err.message);
//   } finally {
//     console.log(`3: will Finished getting location`);
//   }
// })();

// ------------------------------ Parallel Promise ------------------------------ //
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data);
//     console.log(data.map(d => d[0].capital).flat());
//   } catch (err) {
//     console.error(err);
//   }
// };
//
// get3Countries('portugal', 'canada', 'tanzania');

// ------------------------------ Other Promise Combinators ------------------------------ //
// // Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();
//
// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };
//
// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/tanzania`),
//   timeout(0.6),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err.message));
//
// // Promise.allSettled (ES 2020)
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ]).then(res => console.log(res));
//
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
//
// // Promise.any (ES2021)
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// ------------------------------ Coding Challenge #3 ------------------------------ //
/*
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2,
this time using async/await (only the part where the promise is consumed).
Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'parallel' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
const imageContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgElement = document.createElement('img');
    imgElement.src = imgPath;
    imgElement.addEventListener('error', function (e) {
      reject(new Error(`Error loading image ${imgPath}`));
    });
    imgElement.addEventListener('load', function (e) {
      imageContainer.append(imgElement);
      resolve(imgElement);
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const loadNPause = async function (imgPath1, imgPath2) {
  try {
    const img1Element = await createImage(imgPath1);
    await wait(2);
    img1Element.style.display = 'none';
    const img2Element = await createImage(imgPath2);
    await wait(2);
    img2Element.style.display = 'none';
  } catch (err) {
    console.error(err);
    throw err;
  }
};
//
// try {
//   loadNPause('./img/img-1.jpg', './img/img-2d.jpg');
// } catch (err) {
//   console.error(err);
// }

const loadAll = async function (imgArr) {
  try {
    const imgs = await Promise.all(
      imgArr.map(function (imgPath) {
        return createImage(imgPath);
      }),
    );
    console.log(imgs);
    imgs.forEach(function (img) {
      img.classList.add('parallel');
    });
  } catch (err) {
    throw err;
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']).catch(err =>
  console.error(err),
);

// const loadImages = function (imgPath1, imgPath2) {
//   createImage(imgPath1)
//     .then(imgEl => {
//       console.log('Image 1 loaded');
//       currentImg = imgEl;
//       return wait(2);
//     })
//     .then(() => {
//       currentImg.style.display = 'none';
//       return createImage(imgPath2);
//     })
//     .then(imgEl => {
//       console.log('Image 2 loaded');
//       currentImg = imgEl;
//       return wait(2);
//     })
//     .then(() => {
//       currentImg.style.display = 'none';
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };
