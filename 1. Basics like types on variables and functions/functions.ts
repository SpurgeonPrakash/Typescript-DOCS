// implicitely due to inherence, we will get function add(n1: number, n2: number): number as type of this function to this below function because we are returning a number.

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// however, we can set the returned type af a function explicitely
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// returning void

// implicitely due to inherence, we will get function printResult(num: number): void as type of this function to this below function because we are not returning anything.
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// returning undefined
// function printResult(num: number): undefined {
//   console.log("Result: " + num);
//   // return undefined;
//   return;
// }

// using undefined as variable type
// let test: undefined;
// test = undefined;

// let combinedValues: Function;

// combinedValues = add;

// // throws an error
// // combinedValues = 5;

// combinedValues = printResult;
// console.log(combinedValues(8, 8)); //undefined, doesn't throws any error.

// to overcome this assignment of wrong function, we use function types.
// Function Types:
// this is not arrow function. in typescript this is how we create a function type.
// let variableName: (arg1: arg1Type, arg2: arg2Type, ...) => return_type
let combinedValues: (a: number, b: number) => number;

function hello() {
  return "hello";
}

// throws error because these was not returning a number type.
// combinedValues = hello;
// combinedValues = printResult;

// will work fine.
combinedValues = add;

function add1(a: string) {
  return 5;
}
// throws an error
// combinedValues = add1;

console.log(combinedValues(8, 8)); //16

// Function Types and Callbacks.

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addAndHandle(1, 5, printResult);

addAndHandle(1, 5, (num) => {
  console.log("Addition of 2 Nums: ", num);
});

// Throws an error, since we are passing one more additional parameter to callback
// addAndHandle(1, 5, (num, num2) => {
//   console.log("Addition of 2 Nums: ", num);
// });
