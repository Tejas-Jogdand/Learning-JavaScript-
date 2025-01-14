console.log("difference between var let and const");

var a=10;
console.log(a);
var a=50; // allowed
console.log(a);

let b=4;
console.log(b);

{let b=32; 
    // not allowed
    console.log(b);
}


let c=14;

const constant=4;
// constant= 40; //error

// const invalid; //error