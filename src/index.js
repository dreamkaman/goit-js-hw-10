import './css/styles.css';

var debounce = require('lodash.debounce');

import Notiflix from 'notiflix';

import { fetchedCountries } from "./fetchCountries";

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('input[id="search-box"]');

const ulEl = document.querySelector('.country-list');

const divEl = document.querySelector('.country-info');

//console.log(ulEl);

const onInputCountryName = event => {
    
    let countryName = event.target.value.trim();
    
    ulEl.innerHTML = '';

    divEl.innerHTML = '';

    if (countryName !== '') {

        fetchedCountries(countryName).then(data => {

            if (data.length > 10) {

                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');

            } else if (data.length > 1) {

                const markUp = data.map(country => {

                    const { flags: { svg }, name: { official } } = country;
                    
                    return `<li>
                    <img src = "${svg}" alt = "flag" width = "60px">
                    <p>${official}</p>
                    </li>`;
                
                }).join('');

                ulEl.innerHTML = markUp;

            } else {

                const markUp = data.map(country => {

                    const { capital, flags: { svg }, name: { official }, languages, population } = country;
                    
                    return `<h1>${official}</h1>
                    <p><span>Capital: </span>${capital}</p>
                    <p><span>Population: </span>${population}</p>
                    <p><span>Languages: </span>${Object.values(languages).join(', ')}</p>
                    `;
                
                }).join('');

                divEl.innerHTML = markUp;
            }
        }
        );


    };
};

inputEl.addEventListener('input', debounce(onInputCountryName, DEBOUNCE_DELAY ));

