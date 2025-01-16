const prompt = require('prompt-sync')();

let num1 = prompt("Enter the number: ");
let num2 = parseInt(prompt("Enter the number2: "));
let num3 = Number.parseInt(prompt("Enter the number3: "));
let num4 = parseFloat(prompt("Enter the number4: "));
// console.log(`Type of num4 ${num4} is ${typeof num4}`)
num4 =  parseFloat(num4.toFixed(3));
// toFixed() methos is used to restrict the decimals but it will convert number to string hence use it while input if you that number for calulation 

console.log(`Type of num1 ${num1} is ${typeof num1}`);
console.log(`Type of num2 ${num2} is ${typeof num2}`);
console.log(`Type of num3 ${num3} is ${typeof num3}`);
console.log(`Type of num4 ${num4} is ${typeof num4}`);
