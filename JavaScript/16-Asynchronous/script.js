'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // 取得第一条 currency 的 value
    const currency = firstKeyVal(data.currencies)[0][0];
    const html = `
  <article class="country">
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
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData("People's Republic of China");
getCountryData('Germany');
