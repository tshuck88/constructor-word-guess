const Letter = require("./letter.js");

const Word = function (word) {
    this.word = word;
    this.letters = [];
    this.currentWordArray = [];
    for (let i = 0; i < this.word.length; i++) {
        this.letters.push(new Letter(this.word[i]));
    }
    this.displayWord = function () {
        for (let j = 0; j < this.letters.length; j++) {
            this.currentWordArray.push(this.letters[j].displayLetter());
        }
        return this.currentWordArray.join(" ");
    }
    this.userGuess = function (char) {
        for (let k = 0; k < this.letters.length; k++) {
            this.letters[k].checkGuess(char)
        }
    }
}

module.exports = Word;