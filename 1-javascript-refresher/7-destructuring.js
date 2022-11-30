// !Destructuring Array
// We can separate array values in variables by destructuring it
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);
// !Output: 1 2

// Also if you want to get (1 & 3) just leaving the blank the (2)
const [num1, , num3] = numbers;
console.log(num1, num3);
// !Output: 1 3

// !Destructuring Object
// We can separate object values in variables by destructuring it
const person = {
  name: "Ivan",
  age: 28,
};

const { name } = person;
console.log(name, age);
// !Output: Ivan, Undefined
