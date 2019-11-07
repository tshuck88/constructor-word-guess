# constructor-word-guess

## Introduction

Welcome to my command line Node word guessing game. This game is built using Node and Inquirer.js.

## Game Development

Constructor functions were used to build objects for each word and each individual letter of each word. 

Each letter object has the ability to check if it has been guessed or not, and to display as an underscore or the corresponding letter. 

Each word object has the ability to create new letter objects and display them as a word. When the user makes a guess the word object can check if the user guess matches any of the letters in the word, and display them if so.

Inquirer.js was used to prompt the user for their guesses and to restart the game.

## The Game

The object of the game is to guess the word before running out of guesses. Users start with 14 guesses and 1 is removed after each letter guessed. When the user guesses a correct letter, it will display in the word in place of the previous underscore. 

Users begin the game by entering the command `node index.js` in their terminal. A blank word is then displayed and the user is prompted to guess a letter. As the user guesses letters, the user is notified if they are correct or not and the correct letters are displayed in the word. At the end of the game the user has the option to restart the game if they want to. 

## Example

![Word Guess Game](./images/example.gif)



