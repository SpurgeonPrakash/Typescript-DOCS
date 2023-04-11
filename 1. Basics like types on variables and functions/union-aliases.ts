// function combine(input1: number, input2: number) {
//   const result = input1 + input2;
//   return result;
// }

// what if we wanna combine both numbers and strings like below. we will get an error:
// const combinedAges = combine(30, 20);
// const combinedAges1 = combine("My Age is", "thirty");

// so using unions

// function combine(input1: number | string, input2: number | string) {
//   const result = input1 + input2;
//   return result;
// }
// we will get an error now saying cant perform + operation of type number | string and  number | string.

// const combinedAges1 = combine("My Age is", "thirty four");
// const combinedAges = combine(30, 20);

// so the work around is

// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 20);
// const combinedAges1 = combine("My Age is ", "thirty");

// console.log(combinedAges);
// console.log(combinedAges1);

// using literal-types

// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: "as-number" | "as-text" //literal-type
// ) {
//   let result;
//   if (
//     typeof input1 === "number" &&
//     typeof input2 === "number" &&
//     resultConversion === "as-number"
//   ) {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 20, "as-number");
// const combinedAges1 = combine("spurgeon", "prakash", "as-text");

// console.log(combinedAges); // 50
// console.log(combinedAges1); // spurgeonprakash

// type ALiases / custom types

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor //literal-type
) {
  let result;
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion === "as-number"
  ) {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 20, "as-number");
const combinedAges1 = combine("spurgeon", "prakash", "as-text");

console.log(combinedAges); // 50
console.log(combinedAges1); // spurgeonprakash
