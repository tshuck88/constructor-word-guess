const inquirer = require('inquirer');
const Word = require("./word.js");

const possibleWords = ["banana", "apple", "pineapple", "strawberry", "coconut", "kiwi", "blackberry", "javascript", "python", "development", "software", "engineer", "function", "object", "array", "algorithm"];
let currentWord;
let guessRemaining = 14;

function newWord() {
    const index = Math.floor(Math.random() * possibleWords.length);
    currentWord = new Word(possibleWords[index]);
}

newWord();

function displayWord() {
    console.log("\n" + currentWord.displayWord() + "\n");
}

displayWord();
promptUser();

function promptUser() {
    console.log("Guesses Remaining: " + guessRemaining);
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
        if (guessRemaining > 0) {
            promptUser();
        } else {
            console.log("Game Over!")
        }
    });
}

function checkLetter(letter) {
    if (!currentWord.displayWord().includes("_")) {
        console.log("You win!")
    } else if (currentWord.displayWord().includes(letter)) {
        console.log("Correct!")
    } else {
        console.log("Incorrect!")
    }
}















