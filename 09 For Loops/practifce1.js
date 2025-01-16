// Sum of 1st n number
const prompt = require('prompt-sync')();

let n = Number.parseInt(prompt("Enter a number: "));
// let sum = 0;

// for(let i=1; i<=n; i++){
//     sum +=i;
// }

// sum = n*(n+1)/2; using formula

// console.log(`Sum of 1st ${n} is ${sum}`);
let obj = {
    Tejas:30,
    Raj:24,
    Vishal:23,
    Rajesh:45
}

console.log(obj);

for(let i in obj){
    console.log(`Name: ${i}\tAge: ${obj[i]}`);
}

// For of loop
// it iterates array and string.... not object
for(let b of "Tejas"){
    console.log(b);
}

let arr = [1,2,3,4];
console.log(arr);
for(let a of arr){
    console.log(a);
}
for(let a in arr){
    console.log(a);
}

// When to Use Which?
// Use for...of:

// When working with arrays and iterable objects.
// You want to access the actual values of the elements.
// Cleaner and more readable for arrays.
// Use for...in:

// When working with objects (not arrays).
// You need to iterate over object property keys.