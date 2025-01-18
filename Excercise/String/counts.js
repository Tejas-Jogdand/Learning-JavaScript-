// Write a function that counts the frequency of each character in a given string and returns an object with characters as keys and their counts as values.

const prompt = require('prompt-sync')();

function inputString(){
    const string = prompt("Enter a string: ");
    return string;
}

function stringCount(string){
    let obj = {};

    for (const char of string) {
        if(obj[char]){                        //returns undefined if char not found in object
            obj[char]=obj[char]+1;         
        }
        else{
            obj[char]=1;                  // frist time : adding char & count as 1
        }
    }
    return obj;
}

function main(){
    const string = inputString();
    const obj = stringCount(string);
    console.log(obj);
}

main();

// const str = "aaabbca";

// const freqCounter = str.split("").reduce((acc, char) => {
//   acc[char] = (acc[char] || 0) + 1; // Increment the count for the character
//   return acc;
// }, {});

// console.log(freqCounter);
// Output: { a: 4, b: 2, c: 1 }