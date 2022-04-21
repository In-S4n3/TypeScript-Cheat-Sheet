"use strict";
// Basic types
let id = 5;
let myName = "Tiago";
let isItBoolean = false;
// Set a variable to anything
let x = {};
x = "Pereira";
// Set an array of numbers
let arrayOfNumbers = [1, 2, 3, 4, 5];
// this way you only can add number to the array.
// Set an array of any values
let arrayOfValues = ["Tiago", 35, true];
// Tuple - you have to display the value in the same sequence
let person = ["Pereira", 35, true];
// Tuple array - you have to display the value in the same sequence
let employee = [
    ["Ricardo", 29, false],
    ["Adelia", 36, false],
    ["Amina", 27, false],
];
// Union
let coordinates = "25,39";
(coordinates = 45), 87;
// Enum - Always set a default number to the values, starting at 0 if none value is set
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 0] = "Up";
    direction1[direction1["Down"] = 1] = "Down";
    direction1[direction1["Left"] = 2] = "Left";
    direction1[direction1["Right"] = 3] = "Right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2[direction2["Up"] = 1] = "Up";
    direction2[direction2["Down"] = 2] = "Down";
    direction2[direction2["Left"] = 3] = "Left";
    direction2[direction2["Right"] = 4] = "Right";
})(direction2 || (direction2 = {}));
// Objects
const user = {
    id: 1,
    name: "Tiago",
    employeeOfTheMonth: true,
};
const user2 = {
    id: 2,
    name: "Adelia",
    employeeOfTheMonth: true
};
// Type Assertion: you can tell the compiler to treat the variable as a different type from the previous one
let customerId = 12;
// now I want to customerId to be a number
let cId = customerId;
// cId = "5" error
cId = 5;
// other way to do th above is
let cId2 = customerId;
// cId2 = "23" error
cId2 = 23;
// Functions after the arguments you set the type of value a function will return (x, y): number
let sum = (x, y) => {
    return x + y;
};
// Void - a function that does not return anything
let log = (message) => {
    console.log(message);
};
const user3 = {
    name: "Ricardo",
    age: 29
};
const user4 = {
    name: "Ricardo",
    age: 29
};
const user5 = { name: "Ricardo" };
const sub = (x, y) => {
    return x + y;
};
// Classes
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
}
const tiago = new Person(1, "Tiago");
// you can set a property on a class private or protected, like that is can only be accessed inside the class or a class extended from it, 
// by adding that name before the key as fallows:
class Person2 {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
}
class Person3 {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is successfully registered`;
    }
}
const jose = new Person3(5, "José");
console.log(jose);
console.log(jose.register());
// Subclasses extended from Classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const worker = new Employee(10, "Ricardo", "jornalist");
console.log(worker)
