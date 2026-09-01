/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 1 (functions)  [BARE-SPEC]
   ----------------------------------------------------------------
   TASK
     1. Function DECLARATION  add(a, b)      → a + b
     2. Function EXPRESSION   subtract(a, b) → a - b
     3. Arrow, no braces      multiply = (a, b) => a * b
     4. Arrow, 1 param        double = n => n * 2
     5. Arrow, WITH braces (needs `return`)  divide = (a, b) => {...} → a / b
     6. Function DECLARATION  greet(name = "Guest") → "Hello, " + name + "!"
     7. CALLBACK: write announce(name, callback) — it calls
        callback() and returns "Hello, " + name + " | " + the
        callback's result. Write sayBye() → "Goodbye!". Then call
        announce("Alice", sayBye).
     8. Call all of the above, print the results below.

   EXPECTED OUTPUT
     resultAdd: 7
     resultSubtract: 6
     resultMultiply: 15
     resultDouble: 12
     resultDivide: 5
     greetDefault: Hello, Guest!
     greetNara: Hello, Nara!
     announcement: Hello, Alice | Goodbye!

   RUN:  node assignment/lab1/exercise1.js
   ================================================================ */

// Write your code below.
function add(a, b) {
  return a + b;
}
const subtract = function (a, b) {
  return a - b;
}
const multiply = (a, b) => a * b;

const double = n => n * 2;

const divide = (a, b) => { return a / b; };

function greet(name = "Guest") {
  return "Hello, " + name + "!";
}     

function announce(name, callback) {
return "Hello, " + name + " | " + callback();
}
const sayBye = () => "Goodbye!";  

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



