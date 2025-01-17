function greeting1(){
    console.log("Hello by normal function");
}
const greeting2 = ()=>{
    console.log("Hello by arrow function");
}
function add1(a,b){
    return a+b;
}
const add2 = (a,b)=>{
    return a+b;
}

function start(){
    greeting1();
    greeting2();
    console.log(add1(2,3),add2(2,4));
}
start();