//while
const prompt = require("prompt-sync")();

let n = Number.parseInt(prompt("Enter value of n "));
i=0;

while(i<n){
    console.log(i);
    i++;
}

//do while - Execute once everytime

let n1 = Number.parseInt(prompt("Enter value of n1 "));
i1=0;

do{
    console.log(i1);
    i1++;
}while(i1<n1)