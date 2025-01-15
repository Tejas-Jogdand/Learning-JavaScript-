// chapter 2 

// Use Number.parseInt when you need to convert the input to an integer.
// If you skip it, the input will remain a string, which can lead to incorrect results in arithmetic operations.
// For floating-point inputs, use Number() or parseFloat().
// Q1
const prompt = require("prompt-sync")();

let age= Number.parseInt(prompt("What is your age ? "));

if(age>=10 && age <=20){
    console.log("Your age lies in between 10 to 20");
}
else{
    console.log("Your age doesnt lie in between 10 to 20");
}


//Q2

let age2 = Number.parseInt(prompt("Enter your age "));

switch(age2){
    case 12:
        console.log("your age is 12 ");
        break;
    case 13:
        console.log("your age is 13 ");
        break;
    default :
        console.log("Your age is not special");
}

// Q3

let num = Number.parseInt(prompt("Enter any number "));

if(num%2==0 && num%3==0){
    console.log(num," is divisible by both 2 and 3");
}
else{
    console.log(num," is not divisible by 2 and 3");
}


// Q4

let num1 = Number.parseInt(prompt("Enter any number "));

if(num1%2==0 || num1%3==0){
    console.log(num," is divisible by both 2 or 3");
}
else{
    console.log(num," is not divisible by 2 or 3");
}


// Q5

let age3= Number.parseInt(prompt("Enter your age "));

let ans = age3>=18?"You can drive":"You can not drive";

console.log(ans);