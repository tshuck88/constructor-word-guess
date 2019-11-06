const inquirer = require('inquirer');
const Word = require("./word.js");

const possibleWords = ["banana", "apple", "pineapple", "strawberry", "coconut", "kiwi", "blackberry", "javascript", "python", "development", "software", "engineer", "function", "object", "array", "algorithm"];
let currentWord;
let guessRemaining = 12;

function newWord() {
    const index = Math.floor(Math.random() * possibleWords.length);
    currentWord = new Word(possibleWords[index]);
}

newWord();

function displayWord() {
    console.log("\n" + currentWord.displayWord() + "\n");
    console.log(currentWord.displayWord().includes("_"));
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
        displayWord();
        if(guessRemaining > 0){
            promptUser();
        }
    });
}














