import './css/styles.css';

var debounce = require('lodash.debounce');

import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('input[id="search-box"]');

const callback = event => {

    console.dir(event.target.value);
};

inputEl.addEventListener('input', debounce(callback, 300));

console.log(fetch('https://restcountries.com/v3.1/name/united?fields=name,capital,population,flags,languages').then(response => {
    if (!response.ok) {
        throw new Error(response.status);
        
    }
    return response.json();

}
)
);
