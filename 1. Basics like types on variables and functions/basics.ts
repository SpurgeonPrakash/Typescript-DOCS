function addBasic(
  num1: number,
  num2: number,
  showResult: boolean,
  resultPhrase: string
) {
  const result = num1 + num2;
  if (showResult) {
    console.log(resultPhrase + " " + result);
  } else {
    return num1 + num2;
  }
}

let number1: number;
number1 = 6;
const number2: number = 2.8;
const show: boolean = true;
const resultPhrase: string = "The result is:";

addBasic(number1, number2, show, resultPhrase);
