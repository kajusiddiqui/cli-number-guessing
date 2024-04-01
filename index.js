#! /usr/bin/env node
//SHABANG
import inquirer from 'inquirer';
// 1)computer will generate a randome number
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing game");
// 2)User input for guessing the number
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number from 1 to 6: "
    }
]);
//3) Compare user input with computer generated number
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the number right");
}
else {
    console.log("You guessed the number wrong");
}
