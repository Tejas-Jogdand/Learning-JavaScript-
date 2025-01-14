//Q1
let str = "Tejas\""   // /" is a one character
console.log(str);
console.log(str.length);

// Q2
let sent ="I am a student from PCCCS";

const  word = "PCCCS";

console.log(sent.includes(word));
console.log(`The word "${word}"${sent.includes(word)?'is':'is not'} in the sentence`);

//Q3

console.log(word.toLowerCase());

//Q4

let str1 = "Please give Rs 1000"

let amount = Number.parseInt(str1.slice("Please give Rs ".length))
console.log(amount)

//Q5 

let friend = "Deepika"
