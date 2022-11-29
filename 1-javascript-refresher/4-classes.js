class Human {
  // !Classes (Properties)
  constructor() {
    // !Variable inside Classes (Properties)
    this.gender = "Male";
  }

  // !Classes (Method)
  printGender() {
    console.log(this.gender);
  }
}

// !Inheritance Class
class Person extends Human {
  // !Classes (Properties)
  constructor() {
    // !Special (Method) to initialize the Inheritance Class (Human)
    super();
    // !Variable inside Classes (Properties)
    this.name = "Max";
  }

  // !Classes (Method)
  printMyName() {
    console.log(this.name);
  }
}

// !Calling the Class with Inheritance Class
const person = new Person();
// !Calling the (Method) inside the Class and Inheritance Class
person.printMyName();
person.printGender();
