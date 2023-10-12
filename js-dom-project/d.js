function positiveSum(arr) {
  const result = arr.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);
  return result;
}

array = [3, 5, -4, 3, -2, 4];
console.log(positiveSum(array));

function makeNegative(num) {
  return -Math.abs(num);
  // const result = -num;
  // return result;
  // Code?
}
console.log(makeNegative(6));

function boolToWord(bool) {
  return bool ? "yes" : "no";
  //...
}
console.log(boolToWord(""));

function solution(str) {
  return Array.from(arguments).reverse().join("");
}
console.log(solution("france"));

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

const arr = [2, 4, "s", "d"];

const createNewArr = (array) => array.filter((el) => typeof el === "number");
console.log(createNewArr(arr));

const str = "bitcoin take over the world maybe who knows perhaps";

// Simple, given a string of words, return the length of the shortest word(s).

const word = (s) =>
  s.split(" ").reduce((acc, el) => (acc.length > el.length ? (acc = el) : acc))
    .length;
// s;
// .split(" ")
// .sort((a, b) => a.length - b.length)
// .at(0).length;

console.log(word(str));
