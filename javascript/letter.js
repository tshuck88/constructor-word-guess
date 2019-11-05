const Letter = function(character){
    this.character = character.toLowerCase();
    this.guessed = false;
    this.displayLetter = function(){
        if(this.guessed){
            return this.character;
        }
        return "_";
    }
    this.checkGuess = function(char){
        if(char.toLowerCase() === this.character){
            this.guessed = true;
        }
    }
}

module.exports = Letter;