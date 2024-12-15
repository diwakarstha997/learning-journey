const outputTag = document.getElementById("output")

// 1. Impearative Programmming - C, Pascal, BASIC
// - Sequence of Instructions


// 2.Declarative Programming - Presentational Language - HTML, CSS, SQL
// -  what to do and does not care about how to do


// 3. Procedural programming -  C and Pascal
// - function (procedure) or block for speific task

// 4. Object Oriented Programming Language (OOP) - Java, C++
// - Everything is object

class Student {
    // used to define properties
    constructor(name, age) {
        this.name = name
        this.age = age
        this.marks = 0
    }

    // behaviour or methods
    getName () {
        return this.name
    }

    setMarks (marks) {
        this.marks = marks
    }

    getMarks() {
        outputTag.innerText = this.name + " have achieved " + this.marks
    }
}
const stu1 = new Student("Diwakar", 28)
stu1.setMarks(60)
stu1.getMarks()

const stu2 = new Student("Test_1", 23)
stu2.setMarks(90)
stu2.getMarks()

// 5.  Functional Programming - JS
// - Everything is function

// - Pure Functions
// for same input -- same output - predictable behaviour

// - Side Effect
// - is not related to returning value, example - I/O operations, state change
// - unpredictable behaviour

// - HOF - Higher Order Function
// accepts functions as and argument and can/may return functions

// Recursive Function

// 6. Event Driven Programming - JS
// Graphical User Interface (GUI) events

// 7. Logic Programming - Prolog, Datalog
// - use logical constraints or rules

// 8. Parallel Programing - message passing

// 9. Meta Programming - ruby, JS
// - allow program to generate and modify other programs, often used for code generation, build frameworks
// - HOF, eval in JS