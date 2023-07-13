// add frist n numbers
const prompt = require("prompt-sync")();

let n= Number.parseInt(prompt("Enter n value "));

let sum = 0; 
for(let i = 0 ; i<n ; i++){
    sum+=(i+1);
}
console.log("Sum of frist ",n," numbers is ", sum);

// For in loop

let obj = {
    john:89,
    mary:76,
    peter:54,
    lisa:32,
    sara:19
}

for(let a in obj){
    // console.log(a);// prints the keys of object

    console.log("Marks of "+a+" are "+obj[a]);
}

// For of loop
// it iterates array and string.... not object
for(let b of "Tejas"){
    console.log(a);
}