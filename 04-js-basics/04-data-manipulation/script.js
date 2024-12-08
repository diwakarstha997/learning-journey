const outputTag = document.getElementById('output')

// Data Manipulation
// Basic Syntax: data.data_manipulation_function()

// NUMBERS Data Manipulation
// Parsing / type conversion
// parseInt
const number = "25"
const calc = 2 + parseInt(number)

outputTag.innerText = calc

// parseFloat
const number2 = "25.234"
outputTag.innerText = parseFloat(number2)

//toFixed
const number3 = 20.9876374
outputTag.innerText = number3.toFixed(2)

//isCheck
//isNaN
outputTag.innerText = isNaN(2)
outputTag.innerText = isNaN("RRR")

//isFinite
outputTag.innerText = isFinite(5)

//Math Object
// MATH.math_object_method(number)
outputTag.innerText = Math.round(25.43)
outputTag.innerText = Math.floor(25.99)
outputTag.innerText = Math.ceil(25.43)
outputTag.innerText = Math.abs(-24)
outputTag.innerText = Math.min(2,4,1,5)
outputTag.innerText = Math.max(2,4,1,5)
outputTag.innerText = Math.pow(25,3)
outputTag.innerText = Math.sqrt(25)
outputTag.innerText = Math.round(Math.cbrt(8))

// optional maths
outputTag.innerText = Math.sin(30)

// Log functions
outputTag.innerText = Math.LOG10E

// Random number generator
outputTag.innerText = Math.random()


outputTag.innerText = Math.round(Math.random() * 10000)

// STRING MANIPULATION
const string = "Dented Code"

outputTag.innerText =string.length

// Escape Characters
const string2 = "Hello, \"Dented Code\""
outputTag.innerText = string2

outputTag.innerText = "Hello \n\nDented Code"
outputTag.innerText = "H\te\tl\tl\to Dented\tCode"
outputTag.innerText = "\t\tDented Code"

// Extracting character from string based on positon
outputTag.innerText = string.at(0)
outputTag.innerText = string.at(-1)

outputTag.innerText = string.charAt(4)
outputTag.innerText = string.charCodeAt(4)
outputTag.innerText = string[0]

// Extracting String Parts
outputTag.innerText = string.slice(4)
outputTag.innerText = string.slice(-1)
outputTag.innerText = string.slice(4,8)

outputTag.innerText = string.substring(4, 8)
outputTag.innerText = string.substr(4, 3)

// converting to lowercase and uppercase
outputTag.innerText = string.toUpperCase()
outputTag.innerText = string.toLowerCase()
outputTag.innerText = string.toLocaleUpperCase()

// Concatination and Trimming
outputTag.innerText = "Dented" + "Code"
outputTag.innerText = "Dented".concat("Code")

outputTag.innerText = "     Dented Code   ".trim() + "HELLOO"
outputTag.innerText = "Dented     ".trimEnd()
outputTag.innerText = "   Dented".trimStart()

// Repeat and Replace
outputTag.innerText = "Dented Code".repeat(3)
outputTag.innerText = "Dented Code".replace("Dented", "H")
outputTag.innerText = "Dented Code".replaceAll("e", "E")

// Converting string to array
outputTag.innerText = "Dented Code".split("")

// String Search

outputTag.innerText = "Dented Code".indexOf("en")
outputTag.innerText = "Dented Code".indexOf("e") // first occurence
outputTag.innerText = "Dented Code".lastIndexOf("e") // Last occurence
outputTag.innerText = "Dented Code".search("ode")
outputTag.innerText = "Dented Code".includes("ode") // Gives bolean value
outputTag.innerText = "Dented Code".startsWith("Den")
outputTag.innerText = "Dented Code".endsWith("e")

// Regex - Regular expression - pattern matching
outputTag.innerText = "test@mail.com".match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

outputTag.innerText = "Dented Code".matchAll(/e/g)

// ARRAY MANIPULATIONS
const groceryList = ['apple', 'rice', 'cereals', 'milk', 'egg']

outputTag.innerText = groceryList.length

// Accessing array elements /items
outputTag.innerText = groceryList[4]
outputTag.innerText = groceryList.indexOf('rice')
outputTag.innerText = groceryList.lastIndexOf('rice')

// Adding and removing elements
outputTag.innerText = groceryList

groceryList.push('meat', 'tea') // add to the last
outputTag.innerText = groceryList

groceryList.pop() //remove from the last
outputTag.innerText = groceryList

groceryList.pop()
outputTag.innerText = groceryList


groceryList.pop()
outputTag.innerText = groceryList

groceryList.unshift("Mushroom") //add to the start
outputTag.innerText = groceryList

groceryList.shift() //remove from start
outputTag.innerText = groceryList

//splice(startIndex, deleteCount, items to be added)
groceryList.splice(1,0, 'spice')
outputTag.innerText = groceryList

groceryList.splice(1,2, 'dice')
outputTag.innerText = groceryList


groceryList.splice(1,2)
outputTag.innerText = groceryList


// Combining and spliting arrays
const array1 = [100, 122, 0, 12, 22,33,44,55]
const array2 = [2,4,6,8]

outputTag.innerText = array1 + array2
outputTag.innerText = array1.concat(array2)
// Spliting
outputTag.innerText = array1.slice(1,3)
outputTag.innerText = array1.join("|") // converts array to string

// Sorting and reversing
outputTag.innerText = [11,2,22,1].sort((a, b) => a - b)
outputTag.innerText = array1.reverse()
outputTag.innerText = ['apple', 'rice', 'cereals', 'milk', 'egg'].sort()

// Iterating over array elements
const students = ["Amita", "Anzol", "Sailesh", "RRR", "Karan"]
students.forEach((student) => {
  console.log(student);
})

console.log("-----------");

//Mapping
students.map((student) => {
  console.log(student);
})

const newList = [1,2,3,4]
const updatedList = newList.map((item)=>{ return item + 10})
const updatedListN = newList.map((item)=>{ return item ** 2})

const updatedListM = newList.map((item)=>{ return Math.pow(item, 4)})
newList.map(() => {} ) // callback function

outputTag.innerText = updatedListM

//Filter very very important
const filteredList = newList.filter((item) => { return item % 2 === 0 } )
outputTag.innerText = filteredList

//Reduce
const reducedValue = newList.reduce( (accumulator, currentItem) => {return accumulator} )
outputTag.innerText = reducedValue

const newList3 = [100,23,-23,0,98]
const reducedValue2 = newList3.reduce( (accumulator, currentItem) => {return Math.max(accumulator, currentItem)} )
outputTag.innerText = reducedValue2

// searching elements in array
outputTag.innerText = [1,2,3].find(item => item%2 === 0) //returns item
outputTag.innerText = [1,2,3].findIndex(item => item%2 === 0) //returns index
outputTag.innerText = [1,2,3].includes(3) //returns boolean

//flat and flatmap
const nestedArray = [1,2,3,["a","b","c"]]
outputTag.innerText = nestedArray
console.log("nestedArray", nestedArray);
console.log("nestedArray", nestedArray.flat());
const nestedArrayWithLevel = [1,2,3,["a","b","c",[1000,2000]]]
console.log("nestedArray", nestedArrayWithLevel.flat(2));

const res = nestedArray.flatMap(item => item + "A")
console.log("res", res)

const mappedArray = [1,2,3].flatMap((item) => { return [item] } )
console.log("mappedArray", mappedArray)

// object manpulation
const studentOne = {
  name: "Diwakar Shrestha",
  age: 27,
  address: "Nepal",
  college: "Dented Code",
  bloodGroup: "O+"
}

outputTag.innerText = studentOne.name
outputTag.innerText = studentOne["name"]
console.log(studentOne.name)

// Object Destructuring
const { name, age, address, gender = "Male", bloodGroup = "N/A" } = studentOne

outputTag.innerText = name + " " + age + " " + address + " " + gender + " " + bloodGroup


// Assigning a value | add a property to object
Object.assign(studentOne, { phone: "0451296997"})
outputTag.innerText = studentOne.phone

//Spread Oprator 
const newStudent = {...studentOne, name: "The Brave New World"}
console.log(newStudent)

// Delete Property
delete newStudent.college
console.log("newStudent", newStudent)

// Converting object to array
outputTag.innerText = Object.entries(studentOne)
outputTag.innerText = Object.keys(studentOne)
outputTag.innerText = Object.values(studentOne)

// outputTag.innerText = Object.keys(studentOne).map(item => studentOne(item))

// Data manipulation
const today = new Date()
outputTag.innerText = today

outputTag.innerText = today.getDate()
outputTag.innerText = today.getDay()
outputTag.innerText = today.getTime()
outputTag.innerText = today.getMonth()
outputTag.innerText = today.getMinutes()

today.setDate(29)
outputTag.innerText = today.getDate()

today.setMonth(11)
outputTag.innerText = today.getMonth()

// Date formating
outputTag.innerText = today.toLocaleString()
outputTag.innerText = today.toLocaleDateString()
outputTag.innerText = today.toLocaleTimeString()

const myDate = new Date("1997/03/08")
outputTag.innerText = myDate

//Regular Expression
/*

  /pattern/modifier

*/

const sentence = "The quick brown fox jumps over the lazy dogs"

const regex = /[a-t]/gi

outputTag.innerText = sentence.match(regex);

