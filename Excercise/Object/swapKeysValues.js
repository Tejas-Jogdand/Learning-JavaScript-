const prompt = require('prompt-sync')();

let obj = {};

function inputObject(){
    const n = parseInt(prompt("Enter how many key-value pairs you want: ",10));
    for(let i = 0 ; i<n; i++){
        const key = prompt(`Enter key[${i+1}]:`);
        const value = prompt(`Enter value for ${key}:`);
        obj[key]=value;
    }
    console.log(obj);
    return obj;
}

function transformObject(obj){
    let tempObj = {};
    for (const key in obj) {
        const value = obj[key];
        tempObj[value]=key;
    }
    return tempObj;
}

function main(){
    let obj = inputObject();
    let transformedObject = transformObject(obj);
    console.log(transformedObject);
};

main(); 