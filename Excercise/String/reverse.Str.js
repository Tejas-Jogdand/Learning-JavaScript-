// Write a function that takes a string as input and returns the string reversed.


const prompt = require('prompt-sync')();

function reverseStr(inputStr){
    return inputStr.split("").reverse().join("");
}

function main (){
    const inputStr = prompt("Enter the string: ");
    let reversed = reverseStr(inputStr);
    console.log(reversed);
}

main();