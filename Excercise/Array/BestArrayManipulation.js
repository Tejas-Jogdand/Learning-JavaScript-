// Exercise: Write a function that takes an array of numbers and returns a 
// new array with all even numbers doubled and odd numbers tripled.

// Example: transformArray([1, 2, 3, 4]); // Output: [3, 4, 9, 8]


const prompt = require('prompt-sync')();

let arr = [];

function inputArray(){

    let n = prompt("Enter numbers seprated by coma: ",10);
    arr = n.split(",").map(Number);
    console.log(`Entered array : ${arr}`);

    return arr;
}

function transformArray(arr){
    return arr.map(num => {
        return num%2==0?num*2:num*3;
    });
}

function main(){
    let arr = inputArray();
    const transformedArray = transformArray(arr);
    console.log(`Transformed Array : ${transformedArray}`);
}

main();