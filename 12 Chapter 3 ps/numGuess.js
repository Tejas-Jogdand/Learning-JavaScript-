const prompt = require('prompt-sync')();

const num = parseInt(Math.random()*10);
console.log("This is guess the number game(0-9)");
let input;
let attempts=0;
do{

    attempts++;
    input = parseInt(prompt("Guess the number : "));

    if(input>num)
        console.log("Please enter smaller number");
    else if(input<num)
        console.log("Please enter greater number");

}while(input!=num);
console.log("You guessed it correct number",num,"in",attempts,"attempts");