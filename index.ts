#! /usr/bin/env node
//This line is called shebang. it tells the operating system to run it with node js.

import inquirer from "inquirer";

const result : {
    sentence : string
} = await inquirer.prompt([
    {
        name: "sentence",
        message: "write your sentence to count the words",
        type: "input"
    }
]);

const words = result.sentence.trim().split(" "); 
//trim will remove unwanted spaces form start and end.
//split method will seperate each word from your sentence and store it in an array.
// (" ") space between double cotations will seperate each word of sentence.

console.log(`words in your sentence are = ${words.length}`);
// length method will count the elements(words) of array, made by split function.

console.log(words);


