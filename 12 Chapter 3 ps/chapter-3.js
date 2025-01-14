//Q1

let marks = {
    "Maths": 80,
    "Science": 75,
    "English": 92,
    "History": 63,
    "Geography": 84
}

for(let i=0 ; i<Object.keys(marks).length;i++){
    console.log("Marks in "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
}

//Q2

for(let i in marks){
    // console.log(i);
    console.log("Marks of "+i+" are "+marks[i]);
}

//Q3

const prompt = require("prompt-sync")();

let cn =43;

let i;

while (i!=cn){
    i = prompt("Enter a number ");
    console.log("try again");
}
console.log("You have enterd correct number");

//Q4

const mean =(a,b,c,d)=>{
    return (a+b+c+d)/4;
}

console.log(mean(4,5,7,6));