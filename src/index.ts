export {};

// Unexpected token. A constructor, method Error in TS

// EXAMPLE 1 - Remove var, let and function keywords from your class

class A {
  a = 100;
  b = 'bobbyhadz.com';

  myFunction() {
    console.log(this.a);
  }
}

const myInstance = new A();

console.log(myInstance.a); // 👉️ 100
console.log(myInstance.b); // 👉️ "bobbyhadz.com"

myInstance.myFunction(); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 2 - Taking arguments via the constructor method

// class A {
//   constructor(
//     public a: number,
//     public b: string,
//   ) {
//     this.a = a;
//     this.b = b;
//   }

//   myFunction() {
//     console.log(this.a);
//   }
// }

// const myInstance = new A(42, 'bobbyhadz.com');

// console.log(myInstance.a); // 👉️ 42
// console.log(myInstance.b); // 👉️ "bobbyhadz.com"

// ---------------------------------------------------

// // EXAMPLE 3 - Using default values for constructor parameters

// class A {
//   constructor(
//     public a = 100,
//     public b = 'bobbyhadz.com',
//   ) {
//     this.a = a;
//     this.b = b;
//   }

//   myFunction() {
//     console.log(this.a);
//   }
// }

// const myInstance = new A();

// console.log(myInstance.a); // 👉️ 100
// console.log(myInstance.b); // 👉️ "bobbyhadz.com"

// ---------------------------------------------------

// // EXAMPLE 4 - Using arrow functions for class methods

// class A {
//   constructor(
//     public a = 100,
//     public b = 'bobbyhadz.com',
//   ) {
//     this.a = a;
//     this.b = b;
//   }

//   myFunction = () => {
//     console.log(this.a);
//   };
// }

// const myInstance = new A();

// console.log(myInstance.a); // 👉️ 100
// console.log(myInstance.b); // 👉️ "bobbyhadz.com"

// myInstance.myFunction(); // 👉️ 100
