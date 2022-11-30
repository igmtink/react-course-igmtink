// !ES6 Classes Properties & Method
class Es6Class {
  constructor() {
    this.myProperty = "value";
  }

  myMethod() {
    console.log(this.myProperty);
  }
}

// !ES7 Classes Properties & Method
class Es7Class {
  myProperty = "value";

  myMethod = () => {
    console.log(this.myProperty);
  };
}

// !NOTE: In inheritance class in (ES7) you don't need to call (super()) special method
