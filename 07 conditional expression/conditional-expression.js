const prompt = require("prompt-sync")();

// const promptSync = require("prompt-sync"); // Import the module
// const prompt = promptSync(); // Initialize the prompt function


let a = prompt("Hey, what is your age?"); //promt accept input in string formate 

a = Number.parseInt(a);   // coverting string into variable

if(a<0){
    console.log("Invalid age");
}
else if((a>0 && a <18) || a>=80){
    console.log("you are not eligible to drive");
}
else if(a>=18 && a<80){
    console.log("You are eligible to drive")
}