#!/usr/bin/env node
import inquirer from "inquirer";
// computer will generate a random number
// user input for guessing number
// compare user input with computer generated number and show reults
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulation!you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
