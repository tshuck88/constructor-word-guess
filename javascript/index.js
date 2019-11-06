const inquirer = require('inquirer');
const Word = require("./word.js");

const possibleWords = ["banana", "apple", "pineapple", "strawberry", "coconut", "kiwi", "blackberry", "javascript", "python", "development", "software", "engineer", "function", "object", "array", "algorithm"];
let currentWord;
let guessRemaining;
let gameOver;
const newLine = "\n"
initializeGame();

function newWord() {
    const index = Math.floor(Math.random() * possibleWords.length);
    currentWord = new Word(possibleWords[index]);
}

function displayWord() {
    console.log(newLine + currentWord.displayWord() + newLine);
}

function promptUser() {
    console.log("Guesses Remaining: " + guessRemaining + newLine);
    inquirer.prompt([{
        type: "input",
        name: "guess",
        message: "Guess a letter!",
    }
    ]).then(answers => {
        guessRemaining--;
        currentWord.userGuess(answers.guess);
        checkLetter(answers.guess)
        displayWord();
        isGameOver();
    });
}

function checkLetter(letter) {
    if (currentWord.displayWord().includes(letter)) {
        console.log(newLine + "Correct!");
    } else {
        console.log(newLine + "Incorrect!");
    }
}

function isGameOver() {
    if (!currentWord.displayWord().includes("_")) {
        gameOver = true;
        console.log("You guessed the word. You win!");
    } else if (guessRemaining > 0) {
        promptUser();
    } else {
        gameOver = true;
        console.log("You are out of guesses. The word was " + currentWord.word + ". Game Over!");
    }
}

function initializeGame() {
    guessRemaining = 14;
    newWord();
    displayWord();
    promptUser();
}













