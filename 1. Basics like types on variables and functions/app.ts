function addWithoutArrow(a: number, b: number): number {
  return a + b;
}

const newName = "Spurgeon";
// newName = "Prakash";

let age = 20;
age = 30;

const addWithArrow = (a: number, b: number): number => {
  return a + b;
};

console.log(addWithoutArrow(2, 5));
console.log(addWithArrow(1, 5));

const printOutput: (a: number | string) => void = (output) => {
  console.log(output);
};

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput("Spurgeon Gnan Prakasham Tara");

const addWIthDefaultValue = (a: number, b: number = 5) => {
  return a + b;
};

console.log(addWIthDefaultValue(4));

const hobbies = ["Sports", "Cooking"];

// const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies[0], hobbies[1]);
// activeHobbies.push(...hobbies);

const activeHobbies = ["Hiking", ...hobbies];

console.log(activeHobbies);

const personOther = {
  username: "Max",
  userAge: 30,
};

const copiedPerson = { ...personOther };

console.log(copiedPerson);

// const addWithRest = (...numbers: number[]): number => {
//   return numbers.reduce((acc, value) => {
//     return acc + value;
//   }, 0);
// };

const addWithRest = (...numbers: [number, number, number, number]): number => {
  return numbers.reduce((acc, value) => {
    return acc + value;
  }, 0);
};

const addNumbers = addWithRest(5, 10, 15, 20);

console.log(addNumbers);

const hobby1 = hobbies[0];
const hobby2 = hobbies[1];

const [hob1Dest, hob2Dest, ...restOfelements] = hobbies;

console.log(hob1Dest, hob2Dest);

const personName = personOther.username;
const personAge = personOther.userAge;

const { username: fullname, userAge } = personOther;

console.log(fullname, userAge);
