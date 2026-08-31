/* ================================================================
   JavaScript — Week 3 — Lab 2 (Option B) · Quiz App
   ----------------------------------------------------------------
   10 multiple-choice questions, Kahoot-style. Add more to the
   question bank if you want — same shape, just add objects.
   After the quiz you get asked to play again.

   Uses: ARRAY of question OBJECTS, FUNCTION (`checkAnswer`,
   `runQuiz`), CALLBACK (`onQuestion` and `onAnswered` — functions
   passed in as parameters that YOU call, without needing to know
   what they do inside — same idea as a forEach callback). What
   they do inside is next week's topic (DOM), already built for
   you, so you can see your functions drive a real page — you
   never write any DOM code here.

   Run: open index.html with Live Server, F12 for the console.
   ================================================================ */
"use strict";

/* ---- PROVIDED: question bank, DOM refs, rendering, retry loop —
   do not edit --------------------------------------------------------- */
const questions = [
    { question: "What keyword declares a value that can be reassigned?",
      choices: ["A) const", "B) let", "C) function"], answer: "B" },
    { question: "Which array method adds an item to the END of an array?",
      choices: ["A) push", "B) shift", "C) pop"], answer: "A" },
    { question: "Which loop is built for looping over an OBJECT's keys?",
      choices: ["A) for...of", "B) forEach", "C) for...in"], answer: "C" },
    { question: "What does typeof null return?",
      choices: ["A) \"null\"", "B) \"undefined\"", "C) \"object\""], answer: "C" },
    { question: "Which array method returns a NEW array with only the elements that pass a test?",
      choices: ["A) map", "B) filter", "C) reduce"], answer: "B" },
    { question: "Which symbol checks strict equality (same value AND type)?",
      choices: ["A) ==", "B) ===", "C) ="], answer: "B" },
    { question: "What does [\"a\",\"b\",\"c\"].at(-1) return?",
      choices: ["A) \"a\"", "B) \"c\"", "C) undefined"], answer: "B" },
    { question: "Which keyword makes a variable that CANNOT be reassigned?",
      choices: ["A) let", "B) var", "C) const"], answer: "C" },
    { question: "A function passed as an argument into another function is called a...?",
      choices: ["A) method", "B) callback", "C) loop"], answer: "B" },
    { question: "Which array method removes the FIRST element of an array?",
      choices: ["A) pop", "B) shift", "C) push"], answer: "B" },
];

const progressEl = document.getElementById("quiz-progress");
const questionEl = document.getElementById("quiz-question");
const choicesEl = document.getElementById("quiz-choices");
const statusEl = document.getElementById("quiz-status");
const logEl = document.getElementById("quiz-log");

/* promptName — returns null if the player hits Cancel, so the retry
   loop below knows to stop instead of quizzing a fake "Player". */
function promptName() {
    return prompt("What's your name?");
}

/* showQuestion — passed into runQuiz() below as `onQuestion`. You'll
   call it once per question; you don't need to know what it does
   inside (same idea as a forEach callback). */
function showQuestion(question, index, total) {
    progressEl.textContent = "Question " + index + " of " + total;
    questionEl.textContent = question.question;
    choicesEl.innerHTML = "";
    question.choices.forEach((choice) => {
        const li = document.createElement("li");
        li.textContent = choice;
        choicesEl.append(li);
    });
}

/* handleAnswered — passed into runQuiz() below as `onAnswered`.
   You'll call it once per question, after you've checked the
   answer, with (isCorrect, question, score, total). */
function handleAnswered(isCorrect, question, score, total) {
    const li = document.createElement("li");
    li.textContent = isCorrect ? "Correct!" : "Wrong! The correct answer was " + question.answer;
    logEl.append(li);
    statusEl.textContent = "Score: " + score + " / " + total;
}

function updateScoreDisplay(score, total) {
    statusEl.textContent = "Score: " + score + " / " + total;
}

/* showFinalResult — called once the quiz is done, replacing the
   last question on screen with the final score. */
function showFinalResult(playerName, score, total) {
    progressEl.textContent = "Quiz complete!";
    questionEl.textContent = playerName + ", you scored " + score + " / " + total + "!";
    choicesEl.innerHTML = "";
}
/* ---- END PROVIDED --------------------------------------------------- */


/* =================================================================
   YOUR CODE — Part A: checkAnswer(question, userAnswer)

   Goal: return true if the player's answer matches question.answer
   (ignore extra spaces and UPPER/lowercase differences).

   Two methods you'll need — both work on text (strings):
     .trim()        removes spaces from the start/end.
                     "  b  ".trim()        -> "b"
     .toUpperCase()  converts text to CAPITAL letters.
                     "b".toUpperCase()     -> "B"

   One catch: userAnswer might be null (the player pressed Cancel),
   and calling .trim() on null crashes the whole page. Fix: write
   (userAnswer || "") first — if userAnswer is null, that whole
   expression becomes "" (empty string) instead, which .trim() and
   .toUpperCase() can safely handle.

   Put it together:
     const cleaned = (userAnswer || "").trim().toUpperCase();
     return cleaned === question.answer;
   ================================================================= */
function checkAnswer(question, userAnswer) {

}


/* =================================================================
   YOUR CODE — Part B: runQuiz(questions, playerName, onQuestion, onAnswered)
     let score = 0
     questions.forEach((question, index) => {
       onQuestion(question, index + 1, questions.length)
       userAnswer = prompt(
         question.question + "\n" + question.choices.join("\n") +
         "\nYour answer (A/B/C):"
       )
       isCorrect = checkAnswer(question, userAnswer)
       if isCorrect: score++
       onAnswered(isCorrect, question, score, questions.length)
     })
     return score
     Hint: put the question + choices INSIDE the prompt message
     itself (as above) — the popup can cover the page, so it needs
     to show everything the player needs, not just "A/B/C".
     Hint: onQuestion/onAnswered are callback parameters, just like
     a forEach callback — call them, you don't need to know what's
     inside them.
   ================================================================= */
function runQuiz(questions, playerName, onQuestion, onAnswered) {

}


/* ---- PROVIDED: retry loop — do not edit ----------------------------- */
let playAgain = true;
let cancelled = false;

while (playAgain) {
    const playerName = promptName();
    if (playerName === null) {
        cancelled = true;
        break;
    }

    logEl.innerHTML = "";
    updateScoreDisplay(0, questions.length);

    const score = runQuiz(questions, playerName, showQuestion, handleAnswered);
    showFinalResult(playerName, score, questions.length);

    playAgain = confirm(
        playerName + ", you scored " + score + " / " + questions.length + ". Play again?"
    );
}

statusEl.textContent = cancelled ? "Quiz cancelled." : "Thanks for playing!";
