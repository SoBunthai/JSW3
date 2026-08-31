/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 5 (array of objects)
   [BARE-SPEC]
   ----------------------------------------------------------------
   Combines exercises 1–4: an ARRAY of OBJECTS, walked with
   arrow-function callbacks — same shape as Lab 2.

   TASK
     1. let students = [
            { name: "Dara",    score: 75 },
            { name: "Sreymom", score: 92 },
            { name: "Vithy",   score: 58 },
        ];
     2. forEach → report = "Dara: 75; Sreymom: 92; Vithy: 58"
        (joined by "; ", same separator trick as exercise 3/4)
     3. filter (score >= 60) → passingStudents
     4. map    → namesOnly (just the names)
     5. filter (score >= 90) → honorStudents
     6. Print report, passingStudents, namesOnly, honorStudents.

   EXPECTED OUTPUT
     report: Dara: 75; Sreymom: 92; Vithy: 58
     passingStudents: [ { name: 'Dara', score: 75 }, { name: 'Sreymom', score: 92 } ]
     namesOnly: [ 'Dara', 'Sreymom', 'Vithy' ]
     honorStudents: [ { name: 'Sreymom', score: 92 } ]

   RUN:  node assignment/lab1/exercise5.js
   ================================================================ */

// Write your code below.
