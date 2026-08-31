/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 3 · SOLUTION
================================================================= */

let fruits = ["apple", "banana"];

fruits.push("cherry");
fruits.push("date");
fruits.unshift("avocado");

const poppedFruit = fruits.pop();
const shiftedFruit = fruits.shift();

const upperFruits = fruits.map((fruit) => fruit.toUpperCase());

const longFruits = fruits.filter((fruit) => fruit.length > 5);

let fruitList = "";
fruits.forEach((fruit, index, array) => {
    fruitList += fruit;
    if (index < array.length - 1) {
        fruitList += ", ";
    }
});

console.log("fruits:", fruits);
console.log("poppedFruit:", poppedFruit);
console.log("shiftedFruit:", shiftedFruit);
console.log("upperFruits:", upperFruits);
console.log("longFruits:", longFruits);
console.log("fruitList:", fruitList);
