//Write a function that takes an array of numbers and a target sum,
//and returns all pairs of numbers from the array that add up to the target sum.
//Example: findPairs([1, 2, 3, 4, 5], 6);
//Output:[[1, 5], [2, 4]]


const prompt = require('prompt-sync')();

function pairsTargetsum(arr, targetSum){
    let arrPairs = [];
    const seen = new Set();

    for (const element of arr){
        const complementry = targetSum - element;

        if(seen.has(complementry)){
            arrPairs.push([element,complementry]);
        }

        seen.add(element);
    }

    return arrPairs;
}

function main(){
    let arr = prompt("Enter the array element seprated by coma: ");
    arr = arr.split(",").map(Number);
    const targetSum = parseInt(prompt("Enter target Sum: ",10));
    const pairs = pairsTargetsum(arr,targetSum);
    console.log(`Entered array : ${arr}`);
    console.log(`Calculated pairs for target sum (${targetSum}) for given array: ${JSON.stringify(pairs)}`);
}

main();