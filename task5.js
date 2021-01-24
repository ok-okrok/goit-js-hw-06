// Получить пользоваля (не массив) по email (поле email, он уникальный).
import users from "./users.js";

// const getUserWithEmail = (user, email) => {
//     const filteredUserName = user.filter(user => user.email === email);
//     const userName = filteredUserName.flatMap(user => user.name);
//     const string = userName.toString();
//     return string;
// };


// const getUserWithEmail = (user, email) => user
//     .filter(user => user.email === email)
//     .flatMap(user => user.name);

const getUserWithEmail = (user, email) => {
    return user.find((user) => user.email === email);
}

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


