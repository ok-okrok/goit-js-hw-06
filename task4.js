// Получить массив только неактивных пользователей (поле isActive).
import users from "./users.js";

const getInactiveUsers = users => users.filter(users => !users.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]