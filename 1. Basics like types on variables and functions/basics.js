"use strict";
function addBasic(num1, num2, showResult, resultPhrase) {
    const result = num1 + num2;
    if (showResult) {
        console.log(resultPhrase + " " + result);
    }
    else {
        return num1 + num2;
    }
}
let number1;
number1 = 6;
const number2 = 2.8;
const show = true;
const resultPhrase = "The result is:";
addBasic(number1, number2, show, resultPhrase);
