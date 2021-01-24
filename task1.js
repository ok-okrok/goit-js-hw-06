// Получить массив имен всех пользователей (поле name).

import users from "./users.js";

const getUserNames = users => {
  const onlyName = users.map(function(user) {
    return user.name;
  });
  return onlyName;
};

// const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]