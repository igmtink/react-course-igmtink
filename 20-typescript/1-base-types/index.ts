// Primitives: Number, String, Boolean
// !Primitives + Typescript

let age: number;
age = 12;
age = "12"; // Error

let userName: string;
userName = "Ivan";
userName = 123; // Error

let isInstructor: boolean;
isInstructor = true;
isInstructor = null; // Error

// More Complex Types: Arrays, Objects
// !More Complex Types + Typescript

let hobbies: string[]; // (number[], boolean[])
hobbies = ["Games", "Sports", "Music"];
hobbies = [1, 2, 3]; // Error

let person: {
  name: string;
  age: number;
};
person = {
  name: "Ivan",
  age: 23,
};
// Error
person = {
  name: 23,
  age: "Ivan",
};

// !Typescript + Array Object
let people: { name: string; age: number }[];

// !Type Inference
// (Type Inference) is a advance feature of (Typescript) don't need to declare a (Types)
let course = "React - The Complete Guide";
course = 123;

// !Union Type
// (Union Type) to have a multiple types
let product: string | number = "Product #1"; // let product: string | string[]
product = 12345;

// !Type Aliases
// (Type Aliases) to refactor (Types) and use it in many var
type Employee = {
  name: string;
  age: number;
};

let employee: Employee;
employee = {
  name: "Ivan",
  age: 23,
};

let admin: Employee[];
admin = [
  {
    name: "Ivan",
    age: 23,
  },
];

// !Function Types
function add(a: number, b: number) {
  return a + b;
}
add(2, 3);
add("a", "b"); // Error

// !Generics
// (Generics) is a (Function) that have any (Types) with (Type Inference)
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const stringArray = insertAtBeginning(["a", "b", "c"], "d");
stringArray[0].split("");

const numberArray = insertAtBeginning([1, 2, 3], -1);
numberArray[0].split(""); // Error because the (Generics Function) is setting a (Number Types) because of the value
