// Problem: Write a function that takes a sentence (a string of words separated by spaces) and returns the longest word in the sentence.
// If there are multiple words of the same length, return the first one.

const prompt = require('prompt-sync')();

function longestStr(inputStr){

    let longest = "";
    let str = inputStr.split(" ");

    // let str = inputStr
    // .replace(/[^\w\s]/g, "") // Remove special characters
    // .split(" ")
    // .filter(word => word.trim() !== ""); // Remove empty words

    // console.log(str);

    for (const ele of str) {
        if (longest.length < ele.length)
            longest = ele;
    }

    return longest;
}

function main (){
    const inputStr = prompt("Enter the sentence: ");
    let longest = longestStr(inputStr);
    console.log("Longest word is \"",longest,"\" of ",longest.length," characters.");
}

main();