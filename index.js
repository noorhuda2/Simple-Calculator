#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const asnwer = await inquirer.prompt([
    { message: chalk.green("Enter your first number"), type: "number", name: "firstNumber" },
    { message: chalk.green("Enter your first number"), type: "number", name: "secondNumber" },
    {
        message: chalk.green("Select one of the operators to perform action"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional statement
if (asnwer.operator === "Addition") {
    console.log(chalk.yellow(asnwer.firstNumber + asnwer.secondNumber));
}
else if (asnwer.operator === "Subtraction") {
    console.log(chalk.yellow(asnwer.firstNumber - asnwer.secondNumber));
}
else if (asnwer.operator === "Multiplication") {
    console.log(chalk.yellow(asnwer.firstNumber * asnwer.secondNumber));
}
else if (asnwer.operator === "Division") {
    console.log(chalk.yellow(asnwer.firstNumber / asnwer.secondNumber));
}
else {
    console.log(chalk.red("Please select vaild operator"));
}
