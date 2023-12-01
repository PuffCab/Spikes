//! Implicit Type //type inference works with primitive types: number, string, boolean
// import { Student } from "./types/customTypes";
let myNumber = 12;
myNumber = 33434;
let myName = "Raul";
// myName = 123;
let isTrue = true;
// isTrue = "false";
//! Explicit Typing
// const num2: number = [12133];
let address;
// address = 12313123
//! UNIONS
let password;
password = "asdadasd";
password = 123123123;
// password = true
//! ANY Type
let randomValue;
randomValue = 12313;
randomValue = "asdad";
randomValue = { name: "asdasd" };
const favMentor = "Heron";
let myFavNumber = 123123; // we usually do not create custom types for primitive tyes
const laura = { name: "Laura", course: "webdev", durationOfCourse: 5 };
const myCar = {
    brand: "Mini",
    year: 2010,
    extras: ["solar roof", "A/C"],
};
const myDog = {
    species: "dog",
    hair: "brown",
    legs: true,
};
//! Function
function sum(a, b) {
    let result = a + b;
    console.log("result :>> ", result);
    return result;
}
sum(3, 4);
const myMultp = (num1, c) => {
    const result = num1 * c;
    return result;
};
myMultp(5, 2);
export {};
//# sourceMappingURL=main.js.map