/////////// !Spread Operator //////////

// !Spread in Array
// (...) Adding the old array in the new array
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5];
// !Output: [1, 2, 3, 4, 5]

// !Spread in Object
// (...) Adding the old object in the new object
const person = {
  name: "Ivan",
};

const newPerson = {
  ...name,
  age: 22,
};
// !Output: { name: 'Ivan', age: 22 }

/////////// !Rest Operator //////////

// !You can pass multiple arguments in function
const filter = (...args) => {
  return args.filter((num) => num === 1);
};

console.log(filter(1, 2, 3, 4, 5));
// !Output: [1]
