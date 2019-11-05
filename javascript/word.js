const Letter = require("./letter.js");

const Word = function (word) {
    this.word = word;
    this.letters = [];
    for (let i = 0; i < this.word.length; i++) {
        this.letters.push(new Letter(this.word[i]));
    }
    this.displayWord = function (arr) {
        const currentWord = [];
        for (let j = 0; j < arr.length; j++) {
            currentWord.push(arr[j].displayLetter());
        }
        return currentWord.join(" ");
    }
    this.userGuess = function (char) {
        for (let k = 0; k < this.letters.length; k++) {
            this.letters[k].checkGuess(char)
        }
    }
}

module.exports = Word;