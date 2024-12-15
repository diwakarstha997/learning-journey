const outputTag = document.getElementById("output")

//For Loop

for (let i = 0; //initialize
    i <= 10; // condition
    i++ // modifier: change the value of initializer to end the loop
){
    console.log("Hello", i)
}


for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0){
        console.log("using for",i)
    }
}

for (let i = 0; i <= 20; i += 2) {
    console.log("using for without condition",i)
}

// while loop
let i = 0
while (i <= 10) {
    console.log("using while", i)
    i++;
}

// do while
let j = 0
do {
    console.log("using do while", j)
    j++;
} while(j <= 10) 

// for/in loop [objects]
const student = {
    name: "Diwakar",
    age: 27
}

for ( let key in student ){
    console.log(key , student[key])
}

// For of [array]

const groceryList = ["Apple","Orange","Rice"]

for(let item of groceryList){
    console.log(item)
}