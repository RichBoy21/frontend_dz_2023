// function positiveSum(arr) {
//   const result = arr.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);
//   return result;
// }

// array = [3, 5, -4, 3, -2, 4];
// console.log(positiveSum(array));

// function makeNegative(num) {
//   return -Math.abs(num);
// const result = -num;
// return result;
// Code?
// }
// console.log(makeNegative(6));

// function boolToWord(bool) {
//   return bool ? "yes" : "no";
//...
// }
// console.log(boolToWord(""));

// function solution(str) {
//   return Array.from(arguments).reverse().join("");
// }
// console.log(solution("france"));

// __proto__, Prototype, constructor()
// Export and import
// setTimeout, setInterval
// asynchronous code
// http/s protocol and other protocols
// eventLoop
// Promises (then catch finally)
// fetch()
// Network(devtools)
// Async await
// Try catch
// This
// ООП - Class, Object.create
// Extends
// Static, getters/setters
// Prototyping
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// const arr = [2, 4, "s", "d"];

// const createNewArr = (array) => array.filter((el) => typeof el === "number");
// console.log(createNewArr(arr));

// const str = "bitcoin take over the world maybe who knows perhaps";

// Simple, given a string of words, return the length of the shortest word(s).

// const word = (s) =>
//   s.split(" ").reduce((acc, el) => (acc.length > el.length ? (acc = el) : acc))
//     .length;
// s;
// .split(" ")
// .sort((a, b) => a.length - b.length)
// .at(0).length;

// console.log(word(str));

// function repeatStr(n, s) {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     result += s;
//   }
//   return result;
// }
// console.log(repeatStr("da", "net"));
// let bt_date = new Date("1995-10-20 15:30:00");

// let new_date = new Date();

// let result = new_date - bt_date;

// let finished = Math.floor(result / (1000 * 60 * 60 * 24 * 365));

// console.log(result);

// --------------------
// ДЗ
// Напишите функцию getWeekDay(), которая в зависимости от даты
// (текущего момента времени) в консоль выводит день недели согласно результату

// function getWeekDay(data) {
//   let date = new Date(data);
//   let result = date.getDay();
//   if (result === 5) {
//     console.log("Сегодня понедельник");
//   }
//   return result;
// }
// console.log(getWeekDay("2023-10-12"));

// Задача 3
// Задана дата
// Посчитайте количество пройденных часов с указанной даты, до текущего момента времени
// Полученный ответ округлите по правилам математики

// let date = new Date("2023-10-11 13:00:00 GMT");

// let date = new Date("2022-3-15 13:00:00 GMT");
// let new_date = new Date();
// let result = new_date.getTime() - date.getTime();
// let finished = Math.round(result / (1000 * 60 * 60 * 24 * 7));
// console.log(finished);

// Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

// Предусмотрите вывод 4 пункта (дня, дней)

function isItFridayToday() {
  let week_days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  let data = new Date();
  let day = data.getDay();

  console.log(`Сегодня ${week_days[day]}`);
}
isItFridayToday();
// Решение 2
// function getWeekDay(){
//     let week_days = ['воскресенье', "понедельник","вторник","среда","четверг","пятница","суббота"]
//     let date = new Date()
//     let day = date.getDay()
//     console.log(`Сегодня ${week_days[day]}`)
// }

// getWeekDay()


1 уровень сложности: В рамках БД music:


Опишите документ "комментарий к треку" с произвольными полями

Повторите материал по конспекту
 
Starta Institute 5 – Все (13 окт. 2023 г., 13:24)
mongodb+srv://abab:MOnM0LLj38AEqPIY@telran.2nqjveq.mongodb.net/
 
Starta Institute 5 – Все (13 окт. 2023 г., 13:36)
db.createCollection('comments')

db.comments.insertMany([
    {
        _id: 1,
        user_id: 1,
        track_id: 3,
        message: 'Good track!'
    },
    {
        _id: 2,
        user_id: 1,
        track_id: 2,
        message: 'Good'
    },
    {
        _id: 3,
        user_id: 2,
        track_id: 1,
        message: 'Bad!'
    },
    {
        _id: 4,
        user_id: 2,
        track_id: 1,
        message: 'Not bad'
    },
    {
        _id: 5,
        user_id: 4,
        track_id: 5,
        message: ':('
    },
    {
        _id: 6,
        user_id: 3,
        track_id: 4,
        message: 'AWESOME!!!!'
    },
    {
        _id: 7,
        user_id: 4,
        track_id: 5,
        message: ':)))))))'
    },
])
db.createCollection('products');
db.products.insertMany([
    {_id: 1, title: 'Велосипед', price: 45000, count: 12},
    {_id: 2, title: 'Самокат', price: 1500, count: 10},
    {_id: 3, title: 'Ролики', price: 2000, count: 20},
    {_id: 4, title: 'Лыжи', price: 22000, count: 15},
    {_id: 5, title: 'Скейт', price: 19000, count: 4},
    {_id: 6, title: 'Сноуборд', price: 33000, count: 17},
]);

db.products.updateMany(
    {count: {$lt: 10}},
    {$set: {count: 10}}
);

db.products.updateMany(
    {price: {$lt: 20000}},
    {$inc: {price: 5000}}    
);

db.products.updateMany(
    {},
    {$set: {country: []}}    
);