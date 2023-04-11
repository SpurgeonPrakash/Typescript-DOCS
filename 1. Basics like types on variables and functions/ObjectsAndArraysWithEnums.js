"use strict";
// accessing name will still found an error because we just told typescript that the person is of type object and not individual type of each properties in the object. So assigning object => const person: {} = {properties: values}
// const person: object = {
//   name: "Spurgeon",
//   age: 29,
// };
// To Overcome this, We can use {name: string, age: number}
// const person: { name: string; age: number } = {
//   name: "Spurgeon",
//   age: 29,
// };
// type inference will automatically add types to below object
// const person = {
//   name: "Spurgeon",
//   age: 29,
// };
// now person will have array type. Array of type strings for below hobbies property.
// const person = {
//   name: "Spurgeon",
//   age: 29,
//   hobbies: ["Sports", "Cooking"],
// };
// below variable of type array type. Array of type strings.
let favouriteActivities;
favouriteActivities = ["Sports", "Cooking"];
// below code throws an aerror because second value of array is number.
// favouriteActivities = ["Sports", 1]; to fix this we should say of type any. but its not that recommended
// let favouriteActivities: any[];
// favouriteActivities = ["Sports", 1];
// below we added one more new property. What if we want the role array of type strictly first element to be integer and second element to be String. Then we can use tuples.
// const person = {
//   name: "Spurgeon",
//   age: 29,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// But without tuples the below actions will not throw an error because type inference in typescript thinks that  role is of type (string | number)[].
// person.role.push("admin");
// person.role[1] = 's';
// the above will work fine and it is not what we want. We only need two elements in the array, First element should be of type number, Second element should be of type STRING.
// So now lets write the above object to implement tuple in it, by explicitly telling the array type as below.
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Spurgeon",
//   age: 29,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
//  push will work but adding 3rd element array explicitly throws an error. But we camt stop pushing elements into this array.
// this will work
// person.role.push("admin");
// this won't work
// person.role[2] = "s";
// console.log(person.role); // [2, 'author', 'admin']
// this won't work
// person.role = [];
// this will work
// person.role = [1, "author"];
// this won't work
// person.role = [1, "author", 2];
// console.log(person.role); // [1, 'author']
// enums
// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }
// const person = {
//   name: "Spurgeon",
//   age: 29,
//   hobbies: ["Sports", "Cooking"],
//   role: Role.ADMIN,
// };
// if (person.role === Role.AUTHOR) {
//   console.log("He is an author");
// } else if (person.role === Role.ADMIN) {
//   console.log("He is an administrator");
// }
// console.log(person.role); // 0, since its the first lable in enum Role.
// we can even assign values to these labels as below:
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["AUTHOR"] = 6] = "AUTHOR";
    Role[Role["READ_ONLY"] = 7] = "READ_ONLY";
})(Role || (Role = {}));
const person = {
    name: "Spurgeon",
    age: 29,
    hobbies: ["Sports", "Cooking"],
    role: Role.READ_ONLY,
};
console.log(person.role); // 7
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
