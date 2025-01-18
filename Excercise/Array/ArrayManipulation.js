// Exercise: Write a function that takes an array of numbers and returns a 
// new array with all even numbers doubled and odd numbers tripled.

// Example: transformArray([1, 2, 3, 4]); // Output: [3, 4, 9, 8]


const prompt = require('prompt-sync')();

let arr = [];

function inputArray(){
    // let arr = [];
    // let n = parseInt(prompt("How many numbers you want to enter? ",10));
    
    // for (let i = 0; i < n; i++) {
    //     const elem = Number.parseInt(prompt(`Enter ${i+1} number : `,10));
    //     arr.push(elem);
    // }

    let n = prompt("Enter numbers seprated by coma: ",10);
    arr = n.split(",").map(Number);
    console.log(`Entered array : ${arr}`);
}

function desiredArray(arr){
    let newArray = [];

    for(let i = 0;i < arr.length ;i++){
    
        if(arr[i]%2==0){
            const elem = arr[i]*2;
            newArray.push(elem);
        }
        else
        {
            const elem = arr[i]*3;
            newArray.push(elem);
        }
    }

    console.log(`Your desired array : ${newArray}`);
}

inputArray();

desiredArray(arr);