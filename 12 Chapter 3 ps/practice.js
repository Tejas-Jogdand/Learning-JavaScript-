let marks = {
    "Raj":82,
    "Sam":93,
    "Ram":83
}

let keys = Object.keys(marks);
console.log(keys);

keys.map((key,i) => {
    console.log(key,marks[key]);
});

for(let i = 0; Object.keys(marks).length>i; i++)
    console.log("Nane : ",Object.keys(marks)[i],"\tMarks : ",marks[Object.keys(marks)[i]]);

console.log();
for(let i in marks)
    console.log("Name : ",i,"\tMarks : ",marks[i]);