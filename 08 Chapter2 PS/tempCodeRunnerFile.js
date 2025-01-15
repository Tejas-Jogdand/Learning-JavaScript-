const prompt = require("prompt-sync")();

let age= Number.parseInt(prompt("What is your age ? "));

if(age>=10 && age <=20){
    console.log("Your age lies in between 10 to 20");
}
else{
    console.log("Your age doesnt lie in between 10 to 20");
}