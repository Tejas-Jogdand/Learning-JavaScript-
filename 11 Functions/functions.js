function oneplusaverage(a,b){
    return 1+(a+b)/2
}

let a = 4, b = 4, c = 2;

console.log(oneplusaverage(a,c));
console.log(oneplusaverage(a,b));
console.log(oneplusaverage(b,c));

//arrow functions

const sum = (a,b) =>{
    return a+b;
}

console.log(sum(a,c));

const hello =() =>{
    return console.log("Hello");
}
