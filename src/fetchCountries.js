'use strict'

const BASE_URL = 'https://restcountries.com/v3.1/name';

const fetchedCountries = name => {
  return fetch(`${BASE_URL}/${name}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};




// const getUsers = names => {
//   const usersData = [];

//   for (let i = 0; i < names.length; i += 1) {
//     usersData.push(fetchedUsers(names[i]));
//   }

//   return Promise.all(usersData);
// };