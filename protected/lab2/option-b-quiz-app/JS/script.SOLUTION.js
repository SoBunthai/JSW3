/* ================================================================
   JavaScript — Week 3 — Lab 2 (Option B) · Quiz App · SOLUTION
================================================================= */
"use strict";

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

function promptName() {
    return prompt("What's your name?");
}

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

function handleAnswered(isCorrect, question, score, total) {
    const li = document.createElement("li");
    li.textContent = isCorrect ? "Correct!" : "Wrong! The correct answer was " + question.answer;
    logEl.append(li);
    statusEl.textContent = "Score: " + score + " / " + total;
}

function updateScoreDisplay(score, total) {
    statusEl.textContent = "Score: " + score + " / " + total;
}

function showFinalResult(playerName, score, total) {
    progressEl.textContent = "Quiz complete!";
    questionEl.textContent = playerName + ", you scored " + score + " / " + total + "!";
    choicesEl.innerHTML = "";
}

/* ---- YOUR CODE (answer) — Part A ------------------------------------ */
function checkAnswer(question, userAnswer) {
    const cleaned = (userAnswer || "").trim().toUpperCase();
    return cleaned === question.answer;
}

/* ---- YOUR CODE (answer) — Part B ------------------------------------ */
function runQuiz(questions, playerName, onQuestion, onAnswered) {
    let score = 0;

    questions.forEach((question, index) => {
        onQuestion(question, index + 1, questions.length);
        const userAnswer = prompt(
            question.question + "\n" + question.choices.join("\n") +
            "\nYour answer (A/B/C):"
        );
        const isCorrect = checkAnswer(question, userAnswer);

        if (isCorrect) {
            score++;
        }

        onAnswered(isCorrect, question, score, questions.length);
    });

    return score;
}

/* ---- PROVIDED: retry loop -------------------------------------------- */
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
