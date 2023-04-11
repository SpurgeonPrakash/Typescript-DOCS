"use strict";
// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
let add;
add = (n1, n2) => n1 + n2;
console.log(add(1, 1));
let add1;
add1 = (n1, n2) => n1 + n2;
console.log(add1(5, 1));
// As you can see the below code is not throwing an error even though there is no outputName property.
class Person {
    // you can use optional parameter or assaign a default value..
    // constructor(n?: string) {
    constructor(n = "") {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("hii");
        }
    }
}
// we can assign both Person and Greetable type here
// let user1: Person;
let user1;
let user2;
// optiona
user1 = new Person();
user2 = new Person("Spurgeon");
// this will throw error if we use greetable as a type.
// user1.name = "sam"
user1.greet("Hellooo..");
user2.greet("Hellooo..");
