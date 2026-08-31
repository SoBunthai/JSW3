/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 1 · SOLUTION
================================================================= */

function add(a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
};

const multiply = (a, b) => a * b;

const double = n => n * 2;

const divide = (a, b) => {
    const result = a / b;
    return result;
};

function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

function announce(name, callback) {
    const greeting = "Hello, " + name;
    const callbackResult = callback();
    return greeting + " | " + callbackResult;
}

function sayBye() {
    return "Goodbye!";
}

const resultAdd = add(3, 4);
const resultSubtract = subtract(10, 4);
const resultMultiply = multiply(3, 5);
const resultDouble = double(6);
const resultDivide = divide(20, 4);
const greetDefault = greet();
const greetNara = greet("Nara");
const announcement = announce("Alice", sayBye);

console.log("resultAdd:", resultAdd);
console.log("resultSubtract:", resultSubtract);
console.log("resultMultiply:", resultMultiply);
console.log("resultDouble:", resultDouble);
console.log("resultDivide:", resultDivide);
console.log("greetDefault:", greetDefault);
console.log("greetNara:", greetNara);
console.log("announcement:", announcement);
