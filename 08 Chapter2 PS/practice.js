const prompt = require('prompt-sync')();

let choice;

function calculate(a,b){
    console.log(`a=${a} b=${b}`);
    console.log("\n0.Exit \n1.Divide \n2.Multiply \n3.Add \n4.Substract\n");
    choice = parseInt(prompt("Enter your choice: "));
    switch(choice){
        case 1:
            return a/b;
            break;
        case 2:
            return a*b;
            break;
        case 3:
            return a+b;
            break;
        case 4: 
            return a-b;
            break;
        case 0:
            console.log("\nExiting...");
            return 0;
            break;
        default:
            console.log("\nPlease choose out of these: ");
            return calculate(a,b);           //recursion on wrong choice
    }
}

function tk_input(){
    let input = prompt("Input varible a & b with space: ");
    const [a,b] = input.split(" ").map(Number);
    showResult(a,b);
}

function showResult(a,b){
    let result = calculate(a,b);
    if(result != 0)
    console.log(result);
}

tk_input(); //starting point