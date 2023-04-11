// unknown types

let userInput: unknown;
let userName: string;

// works fine whatever type we add.
userInput = 5;
userInput = "Text data";

// throws an error
// userName = userInput;

// never types

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

// the return type is never because the script breaks because of an error.

generateError("Something went wrongggg", 500);

// this will not log..
console.log(generateError("Something went wrong", 500));
