// Basic types
let id: number = 5;
let myName: string = "Tiago";
let isItBoolean: boolean = false;

// Set a variable to anything
let x: any = {};
x = "Pereira";

// Set an array of numbers
let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
// this way you only can add number to the array.

// Set an array of any values
let arrayOfValues: any[] = ["Tiago", 35, true];

// Tuple - you have to display the value in the same sequence
let person: [string, number, boolean] = ["Pereira", 35, true];

// Tuple array - you have to display the value in the same sequence
let employee: [string, number, boolean][] = [
  ["Ricardo", 29, false],
  ["Adelia", 36, false],
  ["Amina", 27, false],
];

// Union
let coordinates: number | string = "25,39";
(coordinates = 45), 87;

// Enum - Always set a default number to the values, starting at 0 if none value is set
enum direction1 {
  Up, // value 0
  Down, // value 1
  Left,
  Right,
}

enum direction2 {
  Up = 1, // value 1
  Down, // value 2
  Left,
  Right,
}

// Objects
const user: { id: number; name: string; employeeOfTheMonth: boolean } = {
  id: 1,
  name: "Tiago",
  employeeOfTheMonth: true,
};
// or in a cleaner way you can set a type:

// Type
type User = { id: number; name: string; employeeOfTheMonth: boolean };

const user2: User = { 
  id: 2, 
  name: "Adelia", 
  employeeOfTheMonth: true 
};

// Type Assertion: you can tell the compiler to treat the variable as a different type from the previous one
let customerId: any = 12;
    // now I want to customerId to be a number
let cId = <number>customerId
      // cId = "5" error
cId = 5
    // other way to do th above is
let cId2 = customerId as number
      // cId2 = "23" error
cId2 = 23;


// Functions after the arguments you set the type of value a function will return (x, y): number
let sum = (x: number, y: number): number => {
  return x+y;
}

  // Void - a function that does not return anything
let log = (message: string | number): void => {
  console.log(message);
};

// Interfaces
interface UserInterface {
  name: string;
  age: number;
}

const user3: UserInterface = {
  name: "Ricardo",
  age: 29
}
  // you can also set a key/value readonly
  interface UserInterface2 {
    readonly name: string;
    age: number;
  }
  const user4: UserInterface2 = {
    name: "Ricardo",
    age: 29
  }
  // user4.name = "Adelia" error

  // or an optional key/value usinf the ?
  interface UserInterface3 {
    name: string;
    age?: number;
  }

  const user5: UserInterface3 = { name: "Ricardo" };

interface MathFunc {
  (x: number, y: number): number;
}

const sub: MathFunc = (x: number, y: number): number => {
  return x+y
}

// Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id,
    this.name = name
  }
}

const tiago = new Person(1, "Tiago");

  // you can set a property on a class private or protected, like that is can only be accessed inside the class or a class extended from it, 
  // by adding that name before the key as fallows:
  class Person2 {
    protected id: number;
    name: string;
  
    constructor(id: number, name: string) {
      this.id = id,
      this.name = name
    }
  }

// Interfaces in Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string
}

class Person3 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id,
    this.name = name
  }

  register() {
    return `${this.name} is successfully registered`
  }
}

const jose = new Person3(5, "José")
console.log(jose)
console.log(jose.register())

// Subclasses extended from Classes

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super (id, name)
    this.position = position
  }
}
const worker = new Employee(10, "Ricardo", "jornalist")