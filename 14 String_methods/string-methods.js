//strings are immutable .. original string kabhi change nhi hoti

let myname = "Tejas";

console.log(myname.length);

console.log(myname.toUpperCase());
console.log(myname.toLowerCase());

console.log(myname.slice(2,4)); //  2 se le kar 3 tak ke char
console.log(myname.slice(2)); // 2 ke baad sare

console.log(myname.replace("T","N"));

console.log(myname.concat(" is a good guy."));

let friend ="     meera     "

console.log(friend.trim());


//QuickQuiz: use a for loop for traversing string

for(let i =0 ; i < myname.length; i++){
    console.log(myname[i]);
}