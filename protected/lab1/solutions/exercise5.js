/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 5 · SOLUTION
================================================================= */

let students = [
    { name: "Dara",    score: 75 },
    { name: "Sreymom", score: 92 },
    { name: "Vithy",   score: 58 },
];

let report = "";
students.forEach((student, index) => {
    report += (index > 0 ? "; " : "") + student.name + ": " + student.score;
});

const passingStudents = students.filter((student) => student.score >= 60);

const namesOnly = students.map((student) => student.name);

const honorStudents = students.filter((student) => student.score >= 90);

console.log("report:", report);
console.log("passingStudents:", passingStudents);
console.log("namesOnly:", namesOnly);
console.log("honorStudents:", honorStudents);
