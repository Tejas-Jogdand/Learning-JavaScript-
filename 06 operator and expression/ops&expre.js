// java script operators and expressions
console.log("Oprators in javascript");
console.log("Arithmetic Oprators:");
let a = 2;
let b = 3;

console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a / b = ",a/b);
console.log("a * b = ",a*b);
console.log("a % b = ",a%b); // modulo returns remainder
console.log("a ** b = ",a**b); // exponential

console.log("++a = ",++a); //3
console.log("a = ",a); //3
console.log("a-- =",a--); //3

console.log("Arithmetic Oprators:");
let c = 8;
console.log("c = ",c); //8

c +=5;         //c=c+5;
console.log("c += 5 ",c); //7

c -=5;         //c=c-5;
console.log("c -= 5 ",c); //-3

console.log("Comparator Oprators:");

let comp1 = 6;
let comp2 = "6";
console.log("Type of com2 variable is",typeof(comp2));

console.log("Comp1 == Comp2 ", comp1==comp2); // compares only value
console.log("Comp1 != Comp2 ", comp1!=comp2);
console.log("Comp1 === Comp2 ", comp1===comp2);  //compares value and type as well
console.log("Comp1 !== Comp2 ", comp1!==comp2);

console.log("Comp1 >= Comp2 ", comp1>=comp2);
console.log("Comp1 > Comp2 ", comp1>comp2);


console.log("Logical Oprators:");

console.log("true && false == ", true && false);
console.log("true || false == ", true || false);
console.log("!true == ", !true);