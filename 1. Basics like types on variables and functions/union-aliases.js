"use strict";
// function combine(input1: number, input2: number) {
//   const result = input1 + input2;
//   return result;
// }
function combine(input1, input2, resultConversion //literal-type
) {
    let result;
    if (typeof input1 === "number" &&
        typeof input2 === "number" &&
        resultConversion === "as-number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 20, "as-number");
const combinedAges1 = combine("spurgeon", "prakash", "as-text");
console.log(combinedAges); // 50
console.log(combinedAges1); // spurgeonprakash
