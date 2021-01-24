// Получить массив имен пользователей по полу (поле gender).

import users from "./users.js";

const getUsersWithGender = (users, gender) => users
    .filter(users => users.gender === gender)
    .map((user) => user.name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

