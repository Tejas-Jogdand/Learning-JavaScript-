// console.log("Example of switch case");
// const prompt = require("prompt-sync")();


// let choice = parseInt(prompt("Enter number between 1 to 9"));

// switch(choice){
//     case(1): case(3): case(5):case(7): case(9):
//         console.log('Odd');
//         break;

//     case(2): case(4): case(6): case(8):
//         console.log('Even') ;
//         break;

//     default:
//         console.log(`Invalid input ${choice}`);
// }


const prompt = require("prompt-sync")();
let choice;

do{
    let num = parseInt(prompt("Enter a number between 1 to 9:"));
switch(num){
    case 1: case 3: case 5: case 7: case 9:
        console.log(num," is odd number");
        break;
    case 2: case 4: case 6: case 8:
        console.log(num," is Even number");
        break;
    default:
        console.log("Please Enter number between 1 to 9");
}

choice = parseInt(prompt("Enter 0 to exit & 1 to continue:"));

}while(choice!=0);