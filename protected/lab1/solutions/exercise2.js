/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 2 · SOLUTION
================================================================= */

let colors = ["Red", "Green", "Blue"];

const firstColor = colors[0];
const lastColor = colors.at(-1);
const colorCount = colors.length;

colors[1] = "Emerald";
colors[3] = "Yellow";

let mixedArr = ["Apple", 11, true];

console.log("colors:", colors);
console.log("firstColor:", firstColor);
console.log("lastColor:", lastColor);
console.log("colorCount:", colorCount);
console.log("mixedArr:", mixedArr);
