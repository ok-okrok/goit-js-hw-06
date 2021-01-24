// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

import users from "./users.js";

// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

const getUsersWithEyeColor = (users, color) => {
  const findEyeColor = users.filter(function(user) {
      return user.eyeColor === color;
  });
  return findEyeColor;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]