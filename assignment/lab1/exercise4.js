/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 4 (objects)  [BARE-SPEC]
   ----------------------------------------------------------------
   TASK
     1. let student = new Object();
        student.name = "Sokha"; student.age = 20;
     2. student.major = "Computer Science";
     3. student["favorite subject"] = "Math";  (bracket notation —
        needed for multi-word keys)
     4. student.age = 21;   (update)
     5. Add student.temp = anything, then delete it.
     6. hasMajor = "major" in student   → true
        hasTemp  = "temp"  in student   → false
     7. for...in → build one string `studentInfo` of "key: value"
        pairs joined by ", " (same trick as exercise 3).
     8. Print student.major, student["favorite subject"], hasMajor,
        hasTemp, studentInfo.

   EXPECTED OUTPUT
     major: Computer Science
     favorite subject: Math
     hasMajor: true
     hasTemp: false
     studentInfo: name: Sokha, age: 21, major: Computer Science, favorite subject: Math

   RUN:  node assignment/lab1/exercise4.js
   ================================================================ */

// Write your code below.
let student = new Object();
student.name = "Sokha";
student.age = 20;
student.major = "Computer Science";
student["favorite subject"] = "Math";
student.age = 21;
student.temp = "some value";
delete student.temp;
const hasMajor = "major" in student;
const hasTemp = "temp" in student;
let studentInfo = "";
for (let key in student) {
  studentInfo += key + ": " + student[key];
  if (key !== Object.keys(student)[Object.keys(student).length - 1]) {
    studentInfo += ", ";
  }
}
console.log("major:", student.major);
console.log("favorite subject:", student["favorite subject"]);
console.log("hasMajor:", hasMajor);
console.log("hasTemp:", hasTemp);
console.log("studentInfo:", studentInfo);
