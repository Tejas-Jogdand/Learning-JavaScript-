const obj = {};
const key1 = Symbol("key");
const key2 = Symbol("key");

obj[key1] = "value1";
obj[key2] = "value2";

console.log(obj);
console.log(typeof key1);