// Generics:

// Lets say we have an array of type string:

const arr: string[] = [];

// Now lets talk about built-in generics.
// In ts Arrays are of type Generics which are already built into it.

// 1. Built In Generic: Array<type>
const arr1: Array<string> = []; // This is equals to arr Which was defined above.
// ofcourse we can use unions and other types as type for generic array.
const arr2: Array<string | number> = [];

// 2. Built in Generic: Promise<type>
// This promise is a generic of type Promise<unknown>.
const promise = new Promise((resolve, reject) => {
  let succeeded = true;
  setTimeout(() => {
    if (succeeded) {
      resolve("Done");
    } else {
      reject(new Error("Failed to fetch data"));
    }
  }, 2000);
});

//  Now lets use of type Promise<string> as below

const promise1: Promise<string> = new Promise((resolve, reject) => {
  let succeeded = true;
  setTimeout(() => {
    if (succeeded) {
      resolve("Done");
    } else {
      reject(new Error("Failed to fetch data"));
    }
  }, 2000);
});

promise1
  .then((data) => {
    // As you can see after 2 seconds it will log an array.
    console.log(data.split(""));
  })
  .catch((err) => {
    console.log(err);
  });

// Will throw an error

const promise2: Promise<number> = new Promise((resolve, reject) => {
  let succeeded = true;
  setTimeout(() => {
    if (succeeded) {
      resolve(10);
    } else {
      reject(new Error("Failed to fetch data"));
    }
  }, 2000);
});

promise2
  .then((data) => {
    // It will thrpow an error because split is a method on type string.
    // console.log(data.split(""));
  })
  .catch((err) => {
    console.log(err);
  });

// Custom Generics: we can build generic classes or functions

// Custom Generic Functions

function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "kjhlkjh" }, { age: 25 }));
// console.log(merge({ name: "kjhlkjh" }, { age: 25 }));

const mergeObject = merge({ name: "kjhlkjh" }, { age: 25 });

// If we try to retrieve info like below we will get an error saying "Property 'name' does not exist on type 'object'"
// console.log(mergeObject.name);

// To overcome this, we can use typeCasting as below:
const mergeObject1 = merge({ name: "kjhlkjh" }, { age: 25 }) as {
  name: string;
  age: number;
};
console.log(mergeObject1.name);

// But typecasting will become cumbursome if our object is large object with multiple nested level objects.

// So using custom generic will help us in such a cases.
// I added constraints below for T, U because newer version will throw an error. May be old versions support it without extending.
function merge1<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObject2 = merge1({ name: "xdfgddfg" }, { age: 30 });
console.log(mergeObject2);

console.log(mergeObject2.name);

// const mergeObject3 = testMethod<string, number>("Spurgeon", 10);

const mergeObject3 = merge1<
  { name: string; hobbies: string[] },
  { age: number }
>({ name: "xdfgddfg", hobbies: ["lsjnkfljknf"] }, { age: 30 });

console.log(mergeObject3.hobbies);

// Working with Constraints
function merge2<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// Now lets say we passed an number value instead of object as second Parameter to merge2. We will not get any error.
// Instead Object.assign will not add value 30 to first value
const mergeObject4 = merge2({ name: "Sam", hobbies: ["Cooking"] }, 30);
// as you can see mergeObject4 doesnt contain value 3.
console.log(mergeObject4); //{name: 'Sam', hobbies: ['Cooking']}

console.log(mergeObject3.hobbies);
// So lets add constraint to second parameter to merge2.
function merge3<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no Value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got more than 1 element";
  }
  return [element, descriptionText];
}

console.log(countAndPrint(["text1"]));

// KeyOf Constraint:

function extactAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Your name is:" + " " + obj[key];
}

console.log(
  extactAndConvert(
    {
      name: "Spurgeon",
    },
    "name"
  )
);

// Generic Classes

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  // removeItem(item: T) {
  //   if (this.data.indexOf(item) === -1) {
  //     return;
  //   }
  //   this.data.splice(this.data.indexOf(item), 1);
  // }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Spurgeon");
textStorage.addItem("Gnan");
textStorage.addItem("Prakasham");

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(15);
numberStorage.addItem(85);

const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: "Shalem" });
objectStorage.addItem({ name: "Sam" });
objectStorage.addItem({ name: "Raj" });

console.log(textStorage.getItem());
console.log(numberStorage.getItem());
console.log(objectStorage.getItem());

// Built In Utility Generics.
// 1. Partial:

interface courseGoal {
  title: string;
  description: string;
  completeUrl: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUrl: Date
): courseGoal {
  return {
    title,
    description,
    completeUrl,
  };
}

console.log(createCourseGoal("A Test Book", "A test Description", new Date()));

// lets say in js we modified the above function like this
// the below change will throw an error. Because we declared goal of type courseGoal and initialized with empty object without properties of courseGoal.
// function createCourseGoal1(
//   title: string,
//   description: string,
//   completeUrl: Date
// ): courseGoal {
//   let goal: courseGoal = {};
//   // In JS we can add properties to an objesct like this
//   goal.title = title;
//   goal.description = description;
//   goal.completeUrl = completeUrl;
//   return goal;
// }

// To overcome above situation we can use partials.
// partial will wrap all our own types and changes it into optional. So we can set the goul =  {} an empty object

function createCourseGoal1(
  title: string,
  description: string,
  completeUrl: Date
): courseGoal {
  let goal: Partial<courseGoal> = {};
  // In JS we can add properties to an objesct like this
  goal.title = title;
  goal.description = description;
  goal.completeUrl = completeUrl;
  return goal as courseGoal;
}

// Read only Utility Types.
// Read only will throws an array when we try to modify the below array

const array: Readonly<string[]> = ["Spurgeon", "Prakash"];

// This will throw an error:
// array.push("Gnan");
// array.pop();

console.log("********************************************************");

// ---------------------------------------------------------------------
// More Examples of generics

// Functional Generics
function findMin<T>(arr: T[]): T {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const numArr = [1, 2, 3, -1, 0];
const minNum = findMin(numArr);
console.log(minNum); // Output: -1

const strArr = ["a", "z", "p", "y"];
const minStr = findMin(strArr);
console.log(minStr); // Output: 'a'

function concatArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

const numArr1 = [1, 2, 3];
const strArr1 = ["a", "b", "c"];
const mixedArr = concatArrays(numArr1, strArr1);
console.log(mixedArr); // Output: [1, 2, 3, 'a', 'b', 'c']

// Generics with Classes:
class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

let numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
let num1 = numberStack.pop(); // num1 is of type number
console.log(numberStack);
console.log(num1);

let stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
let str1 = stringStack.pop(); // str1 is of type string
console.log(stringStack);
console.log(str1);

// Generics with inrterfaces:
interface Person {
  name: string;
  age: number;
}

function getName<T extends Person>(obj: T): string {
  return obj.name;
}

const person: Person = { name: "John", age: 30 };
const name1 = getName(person);
console.log(person.age);

console.log(name1); // Output: 'John'
