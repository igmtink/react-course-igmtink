// !Primitive Type
// Numbers / Strings / Booleans
// This primitive type is you can copy the value from variables to the another variables and make it original
const number = 1;
const newNumber = number;
newNumber = 2;
console.log(number, newNumber);
// !Output: 1, 2

// !Reference Type
// Object / Array
// This reference type is you can copy the value from variables to the another variables but it won't make it original
const person = { name: "Ivan" };
const newPerson = person;
person.name = "Aiori";
console.log(newPerson);
// !Output: { name: 'Aiori' }

// If you want copy the properties of object and make it orginal use a spread operator
const secondPerson = {
  ...person,
};

person.name = "Lovemir";

console.log(secondPerson);
// !Output: { name: 'Ivan' }
