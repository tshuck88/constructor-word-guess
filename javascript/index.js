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

console.log(currentWord.displayWord())
inquirer.prompt([{
    type: "input",
    name: "guess",
    message: "Guess a letter!",
},
]).then(answers => {
    console.log("Answer: " + answers.guess),
    console.log(currentWord.displayWord())

})

console.log("Guesses Remaining: " + guessRemaining);


