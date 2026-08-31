/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 3 (array methods + callbacks)
   [BARE-SPEC]
   ----------------------------------------------------------------
   Use arrow functions for every callback below.

   TASK
     1. let fruits = ["apple", "banana"];
     2. push "cherry", then "date".
     3. unshift "avocado".
     4. pop  → poppedFruit
     5. shift → shiftedFruit
        (fruits is now ["apple","banana","cherry"])
     6. map    → upperFruits (each name UPPERCASE)
     7. filter → longFruits (only names longer than 5 letters)
     8. forEach(item, index, array) → build one string `fruitList`
        joined by ", " — add the ", " only when
        index < array.length - 1 (skip it after the last item).
     9. Print fruits, poppedFruit, shiftedFruit, upperFruits,
        longFruits, fruitList.

   EXPECTED OUTPUT
     fruits: [ 'apple', 'banana', 'cherry' ]
     poppedFruit: date
     shiftedFruit: avocado
     upperFruits: [ 'APPLE', 'BANANA', 'CHERRY' ]
     longFruits: [ 'banana', 'cherry' ]
     fruitList: apple, banana, cherry

   RUN:  node assignment/lab1/exercise3.js
   ================================================================ */

// Write your code below.
