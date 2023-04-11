// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: "Spurgeon",
//   age: 10,
//   greet(phrase) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hellooo..");

// we can also use type as below. we can replace interfaces with custom types.
// type Person = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };

// let user1: Person;

// user1 = {
//   name: "Spurgeon",
//   age: 10,
//   greet(phrase) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hellooo..");

// Implementing an interfaces using classes
// interface Greetable {
//   name: string;
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   age: number = 30;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
// }

// // we can assign both Person and Greetable type here
// let user1: Person;
// // let user1: Greetable;

// user1 = new Person("Spurgeon");

// user1.greet("Hellooo..");

// We Can also implement Multiple Interfaces.
// interface Greetable {
//   name: string;
//   greet(phrase: string): void;
// }

// interface showAge {
//   age: number;
//   display(): void;
// }

// class Person implements Greetable, showAge {
//   name: string;
//   age: number;
//   constructor(n: string, y: number) {
//     this.name = n;
//     this.age = y;
//   }
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
//   display() {
//     console.log("Your Age is: " + this.age);
//   }
// }

// // we can assign both Person and Greetable type here
// let user1: Person;
// // let user1: Greetable;

// user1 = new Person("Spurgeon", 30);

// user1.greet("Hellooo..");
// user1.display();

// Interfaces and custom types can have read only properties but not access modifiers like public, private, protected, etc.,
// interface Greetable {
//   readonly name: string;
//   greet(phrase: string): void;
// }

// interface showAge {
//   age: number;
//   display(): void;
// }

// class Person implements Greetable, showAge {
//   name: string;
//   age: number;
//   constructor(n: string, y: number) {
//     this.name = n;
//     this.age = y;
//   }
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
//   display() {
//     console.log("Your Age is: " + this.age);
//   }
// }

// // we can assign both Person and Greetable type here
// // let user1: Person;
// let user1: Greetable;

// user1 = new Person("Spurgeon", 30);
// // this will throw error if we use greetable as a type.
// // user1.name = "sam"

// user1.greet("Hellooo..");
// // user1.display();

// Extending Interfaces, Implementing inheritence with interfaces

// interface Named {
//   readonly name: string;
// }
// // We casn also extends more than one interface
// // interface Greetable extends Named, AnotherInterface {
// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   age: number = 30;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
// }

// // we can assign both Person and Greetable type here
// // let user1: Person;
// let user1: Greetable;

// user1 = new Person("Spurgeon");
// // this will throw error if we use greetable as a type.
// // user1.name = "sam"

// user1.greet("Hellooo..");

// Interfaces as function types.

// type addFn = (a: number, b: number) => number;

// let add: addFn;
// add = (n1: number, n2: number) => n1 + n2;

// console.log(add(1, 1));

// // now we can also use interfaces to achieve above
// interface addFn1 {
//   // we can think below function as an anonymous function
//   (a: number, b: number): number;
//   // this is similar to abstract function (greet(phrase: string): void;), but without a name for the function.
// }

// let add1: addFn1;
// add1 = (n1: number, n2: number) => n1 + n2;

// console.log(add1(5, 1));

// interface Named {
//   readonly name: string;
// }
// // We casn also extends more than one interface
// // interface Greetable extends Named, AnotherInterface {
// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   age: number = 30;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
// }

// // we can assign both Person and Greetable type here
// // let user1: Person;
// let user1: Greetable;

// user1 = new Person("Spurgeon");
// // this will throw error if we use greetable as a type.
// // user1.name = "sam"

// user1.greet("Hellooo..");

// Optional Parameters and Properties.
type addFn = (a: number, b: number) => number;

let add: addFn;
add = (n1: number, n2: number) => n1 + n2;

console.log(add(1, 1));

// now we can also use interfaces to achieve above
interface addFn1 {
  // we can think below function as an anonymous function
  (a: number, b: number): number;
  // this is similar to abstract function (greet(phrase: string): void;), but without a name for the function.
}

let add1: addFn1;
add1 = (n1: number, n2: number) => n1 + n2;

console.log(add1(5, 1));

interface Named {
  readonly name?: string;
  // Optional Property.
  outputName?: string;
}
// We casn also extends more than one interface
// interface Greetable extends Named, AnotherInterface {
interface Greetable extends Named {
  greet(phrase: string): void;
}

// As you can see the below code is not throwing an error even though there is no outputName property.
class Person implements Greetable {
  name?: string;
  age: number = 30;
  // you can use optional parameter or assaign a default value..
  // constructor(n?: string) {
  constructor(n: string = "") {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("hii");
    }
  }
}

// we can assign both Person and Greetable type here
// let user1: Person;
let user1: Greetable;
let user2: Greetable;

// optiona
user1 = new Person();
user2 = new Person("Spurgeon");
// this will throw error if we use greetable as a type.
// user1.name = "sam"

user1.greet("Hellooo..");
user2.greet("Hellooo..");
