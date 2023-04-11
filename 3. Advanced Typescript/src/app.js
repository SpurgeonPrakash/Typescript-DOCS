"use strict";
// Intersection Types:
const el = {
    name: "Spurgeon",
    previleges: ["create-server"],
    startDate: new Date(),
};
console.log(el);
const e2 = {
    name: "Sam",
    previleges: ["create-client"],
    startDate: new Date(),
};
console.log(e2);
let a;
// Now Typescript Will  never complain if we Universal type.
a = true;
a = 10;
a = "Prakash";
console.log(a);
// type gaurds
// type gaurds helps us with union types
function add(a, b) {
    // this condition is called a type gaurd using typeof operator.
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    // in typeGaurd
    if ("previleges" in emp) {
        console.log("Previliges: " + emp.previleges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInformation({ name: "Spurgeon", startDate: new Date() });
printEmployeeInformation(el);
class Car {
    drive() {
        console.log("Driving Car");
    }
}
class Truck {
    drive() {
        console.log("Driving Truck");
    }
    loadCargo(amount) {
        console.log("Loading cargo...: " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehichle(vehicle) {
    vehicle.drive();
    // inmstanceOf Type Gaurd. we can use instance of because after compilation all these type script classes will be transpiled back to constructor function
    // if ("loadCargo" in vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehichle(v1);
useVehichle(v2);
function moveAnimal(animal) {
    // if ("flyingSpeed" in animal) {
    //   console.log("Moving with Speed: " + animal.flyingSpeed);
    // }
    let speed;
    switch (animal.type) {
        case "bird": {
            speed = animal.flyingSpeed;
            break;
        }
        case "horse": {
            speed = animal.groundSpeed;
        }
    }
    console.log(animal.type + " Moving with Speed: " + speed);
}
const an = {
    type: "bird",
    flyingSpeed: 10,
};
moveAnimal(an);
// TypeCasting.
// const para = document.querySelector("p"); // type is HTMLParagraphElement | null
// const para1 = document.querySelector("#msg-output"); // type is Element | null
// const userInputElement = document.querySelector("#user-input"); // type is Element | null
// this will throw error. since userInputElement can be null and typescript unable to find value of input saying value doesn't exists in input. It consists of just element
// so we need to do typeCasting to say HTMLInoutElement
// userInputElement.value = "Hiii..";
// we can do this typecasting in two ways:
// version 1: addiung a type infront of value with angular brackets.
const para = document.querySelector("p"); // type is HTMLParagraphElement | null
const para1 = document.querySelector("#msg-output"); // type is Element | null
const userInputElement = (document.querySelector("#user-input")); // type is HTMLInputElement | null
// version 2. Where some languages like react will have similar syntax with jsx syntax. so there will be conflict there. because there we write jsx in js or ts files. So we have an alternative. adding "as" keyword at the end of value and doing typeCasting as below
const userInputElement2 = document.querySelector("#user-input-two"); // type is HTMLInputElement
// now this will work.
userInputElement.value = "Hiii..";
userInputElement2.value = "Helloo..";
// we can say that some expressions will never yield null using "!" operator.
const para3 = document.querySelector("p"); //type is HTMLParagraphElement
const userInputElement3 = document.querySelector("#user-input-3"); // type is HTMLInputElement
userInputElement3.value = "lkjbflkjab";
// we can achieve above like below also!
const userInputElement4 = document.querySelector("#user-input-4"); // type is HTMLInputElement | null
if (userInputElement4) {
    userInputElement4.value = "Heyyyy...";
}
// the below will not throw error. because each property in it is a string and value is also a string.
const obj1 = {
    username: "Username should start with a charecter.",
    email: " Email is not valid",
};
console.log(obj1);
// Function Overloiads.
// consider below function
function addOne(a, b) {
    // this condition is called a type gaurd using typeof operator.
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + " " + b.toString();
    }
    return a + b;
}
const result = addOne("Spurgeon", "prakash");
// we know that the result will be a type of string. But typescript will still thinks that return type is a Combinable(string or number).
// this will throw an error.
// result.split(" ");
//  we can do typeCasting and can fix this issue.
const resultArray = result.split(" ");
console.log(resultArray);
function addTwo(a, b) {
    // this condition is called a type gaurd using typeof operator.
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + " " + b.toString();
    }
    return a + b;
}
// now we will have flexibility to pass numbers or strings as value.
const numberValue = addTwo(45, 67);
const stringValue = addTwo("hello", "world");
console.log(numberValue);
console.log(stringValue);
console.log(stringValue.split(" "));
// Optional Chaining:
const fetchUserData = {
    id: "u1",
    name: "Max",
    job: {
        title: "CEO",
        description: "My Own Company..",
    },
};
// Everything works fine
console.log(fetchUserData.job.title);
// but what if the data fetched from backend has some missing data like below. lets say we dont have job property.
const fetchUserDataOne = {
    id: "u1",
    name: "Max",
    // job: {
    //   title: "CEO",
    //   description: "My Own Company..",
    // },
};
// now we will get error.
// console.log(fetchUserDataOne.job.title);
// In js, Not typescript we can do below to fix this. However it throws error in ts since ts know its null.
// console.log(fetchUserDataOne.job && fetchUserDataOne.job.title);
// we can also use optional chaining operator in js. Even though typescript throws error. The code gets compiled and executed safely.
// console.log(fetchUserDataOne?.job?.title);
// Nullish Coalescing:
const userInput = null;
// lets say we wanna store this userinput into a variable without having null values we can use "Or operator" and "Default value as shown below."
const storedData = userInput || "DEFAULT";
console.log(storedData);
// but the problem here is what if we want store userinput like this => "". Since "" is also a falsy value we will get DEFAULT value. This is not our desuired outcome. we should get empty string.
const userInputOne = "";
const storedData1 = userInputOne || "DEFAULT";
console.log(storedData1);
// to solve this problem we use Nullish Coalescing operator in ts.
const storedData3 = userInputOne !== null && userInputOne !== void 0 ? userInputOne : "DEFAULT";
const storedData4 = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData3);
console.log(storedData4);
