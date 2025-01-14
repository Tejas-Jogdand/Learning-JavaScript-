//Q1
let string="number = ";
let number=7;

console.log(string+number);

//Q2
let s= string+number;

console.log(typeof s);

//Q3

const item={
    name: "laptop",
    price : 500,
    description:"A laptop with high performance",
    isAvailable:true
}

// let item = 3; //error you can not change const object to number

//Q4
console.log(item);

item['quantity']=5; // this way you can add/edit string keys to objects
item.category = "Electronic gadeget";  // this way you can add/edit varible keys to objects
console.log(item);
item.name="Mobile";
console.log(item);

// you can add and alter keys in objects 
// Objects are mutable 
// Use Object.freeze() to make an object truly immutable

//Q5

const dict = {
    Nihit:"Gods gift",
    Ankita :"Best friend of mine",
    Sachin:"My favourite cricketer",
    Rahul:"His nickname",
    Aman:"Her hobby"
}
dict.Tejas="Hello";
dict.Rahul="Hello rahukl";

Object.freeze(dict);

// dict.Rahul="Hello rahukl";
dict.Raj="Hello";

console.log(dict);