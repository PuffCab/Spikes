// console.log("hello ts");
// async function hi() {
//   return "hi there";
// }
// function hi2() {
//   return "no ideas today";
// }
// function hi3() {
//   return "no ideas today";
// }
// console.log("sorry...");
//? IMPLICIT TYPING
let myNumber = 5;
// myNumber = "some string"
var myName = "Raul";
let myBoolean = true;
// myBoolean =["asdasd"]
//? EXPLICIT TYPING
let userName;
userName = "user22";
// userName = 4
let isTrue;
isTrue = true;
// isTrue = {name:"asdasd"}
function sum() {
    let a = 2;
    const b = 5;
    let result = a + b;
}
function sum2(paramA, paramB) {
    var result = paramA * paramB;
}
//? UNION
let dateValue;
dateValue = "Monday";
dateValue = 234242344;
// dateValue = false
let webMentor;
// webMentor = "Killian";
//? INTERFACE
// interface WebStudent {
//   name: string;
//   course: "webdev" | "data";
//   courseLenght: number;
//   hasLaptop: boolean;
//   hasPet?: boolean;
// }
const pandaMember = {
    name: "Su",
    course: "webdev",
    courseLength: 5,
    hasLaptop: true,
};
let pandaMember2 = {
    course: "data",
    courseLenght: 2,
    hasLaptop: true,
    name: "Tom",
};
let pandaMember3 = {
    course: "webdev",
    courseLenght: 5,
    hasLaptop: true,
    name: "Tim",
    hasPet: true,
};
const valCar = {
    brand: "Maybach",
    model: "X",
    year: 2024,
};
const patrickCar = {
    brand: "BMW",
    model: "M1",
    year: 2012,
};
// ANY type
let randomThing;
randomThing = { name: "asdasd" };
randomThing = "whatever";
//? FUNCTIONS
function multiply(x, y) {
    const result = x * y;
    return x * y;
}
// const result = multiply("one", "two");
const result = multiply(2, 5);
console.log("result :>> ", result);
//* Function Signature
let sumFunction;
sumFunction = (num1, number2) => {
    return num1 + number2;
};
//? TYPE ALIASES
const register = (password, user) => {
    //do some operation to register the user....
};
const login = (password, user) => {
    //do some operation to register the user....
};
console.log(login("asdasd", { email: "asdasd", name: "asdasd" }));
//? ARRAYs
// const arrNumber: number[] = ["asdasd"]
// const arrNumber: number[] = [5, 6];
const arrNumber = [5, 6];
// arrNumber.push("asdasdd")
// const mixedArray: Array<number | string> = [5, "asdasd"];
const mixedArray = [5, "asdasd"];
export {};
