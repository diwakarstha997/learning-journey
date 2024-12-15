const outputText = document.getElementById('output')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

day = days[0]

// if Statement 
if(day == "Sunday") {
    outputText.innerText = "Attend the Dented Code Full Stack Course at 8:40"
} else if (day == "Saturday"){ // else statement
    outputText.innerText = "Attend the PY class for 5 points"
} else { // Else if statement
    outputText.innerText = "Go to ServoTech to earn money for survival"
}

// Grading System
const overallMark = 60

if(overallMark >= 80) {
    outputText.innerText = "Excellent" 
} 
else if(overallMark >= 60 && overallMark < 80 ) {
    outputText.innerText = "First Division" 
}
else if(overallMark >= 40 && overallMark < 60 ) {
    outputText.innerText = "Second Division" 
}else {
    outputText.innerText = "You can do it, try revisiting module" 
}

// Nested if
const isRaining = true
const isWindy = false

if(isRaining) {
    outputText.innerText = "It is raining"

    if(isWindy) {
        outputText.innerText = "It is windy"
    }
    else {
        outputText.innerText = "It is raining and it is not windy"
    }
}
else {
    outputText.innerText = "It is not raining"
}

// Switch
const dayNumber = (new Date()).getDay();

switch (dayNumber) {
    case 0:
        outputText.innerText = days[0]
        break
    case 1:
        outputText.innerText = days[1]
        break
    case 2:
        outputText.innerText = days[2]
        break
    case 4:
        outputText.innerText = days[3]
        break
    case 5:
        outputText.innerText = days[4]
        break
    case 6:
        outputText.innerText = days[5]
        break
    case 7:
        outputText.innerText = days[6]
        break
    default:
        outputText.innerText = "Invalid Day"

}

// Ternary Operator
outputText.innerText = (2%2 === 0) ? "Even Number" : "Odd Number"