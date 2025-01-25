// Write a function that accepts two arrays of numbers and returns a new array containing only 
// the elements that are present in both arrays (intersection of two arrays)
const prompt = require('prompt-sync')();

function intersectionArrays(arr1,arr2){
    let resultArr = [];

    // for (const element1 of arr1) {
    //     for (const element2 of arr2) {
    //         if(element1==element2)
    //             arr.push(element1);
    //     }
    // }
    //Issues: will insert duplicate values & time complexity O(n^2)

    arr1 = new Set(arr1); // converts 1st array to Set

    for (const element of arr2) {
        if(arr1.has(element) && !resultArr.includes(element)){
            resultArr.push(element);
        }
    }
    // time complexity O(n)

    return resultArr;
}

function main(){
    let arr1 = prompt("Enter the 1st array elements with coma: ");
    let arr2 = prompt("Enter the 2nd array elements with coma: ");

    if (!arr1 || !arr2) {
        console.log("Please enter valid arrays.");
        return;
    }

    arr1 = arr1.split(",").map(Number);
    arr2 = arr2.split(",").map(Number);
    console.log(`Frist array: ${arr1} \nSecond array: ${arr2}`);
    // console.log(arr1); //prints array in [1,2] formate

    const intersectedArray = intersectionArrays(arr1,arr2);
    console.log(`Intersected array : ${intersectedArray}`);
}

main();