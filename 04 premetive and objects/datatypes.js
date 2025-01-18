// nn ss bb u  premitive datatypes

let a = null;
let b = 543;
let c = true; // can also be false
let d = BigInt("545");
let e = "History";
let f = Symbol("I am a Symbol");
let g = undefined;

console.log(a,b,c,d,e,f,g);
console.log(typeof d);

// Objects   non premitive datatype

let person = {
    name : "Tejas",
    age : 21
}
const person2 = {
    "name" : "Tejas",
    "age" : 21
}
console.log(person,"\n");
console.log(person2);
console.log();

const item = {
    "Tejas": true,
    "Rohan": 63,
    "love": false
}

if("Roh" in item){
    console.log(item["Roh"]);
}
else{
    item["Roh"]=1;
    item["Roh"]++;
    console.log("key not found but now added");
    console.log(item);
}

console.log(item["Rohan"]);
// console.log(item[Rohan]);
// this will throw the error since here it is considering Rohan as varible which is not declared in the object
console.log(item.Rohan); // Rohan is string so that can access using dot operator

// Use strings (or dot notation) for static, predefined keys.
// Use variables for dynamic or programmatically determined keys. This will help you write cleaner, more maintainable, and more efficient JavaScript code.