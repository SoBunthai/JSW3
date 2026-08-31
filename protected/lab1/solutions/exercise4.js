/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 4 · SOLUTION
================================================================= */

let student = new Object();
student.name = "Sokha";
student.age = 20;

student.major = "Computer Science";
student["favorite subject"] = "Math";
student.age = 21;

student.temp = "delete me";
delete student.temp;

const hasMajor = "major" in student;
const hasTemp = "temp" in student;

let studentInfo = "";
let i = 0;
for (let key in student) {
    studentInfo += (i > 0 ? ", " : "") + key + ": " + student[key];
    i++;
}

console.log("major:", student.major);
console.log("favorite subject:", student["favorite subject"]);
console.log("hasMajor:", hasMajor);
console.log("hasTemp:", hasTemp);
console.log("studentInfo:", studentInfo);
