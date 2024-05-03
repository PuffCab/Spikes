// console.log("hello ts");
// async function hi() {
//   return "hi there";
// }

import { WebStudent } from "./@types/customTypes";

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

let userName: string;
userName = "user22";
// userName = 4

let isTrue: boolean;
isTrue = true;
// isTrue = {name:"asdasd"}

function sum() {
  let a = 2;
  const b = 5;

  let result = a + b;
}

function sum2(paramA: number, paramB: number) {
  var result = paramA * paramB;
}

//? UNION

let dateValue: string | number;

dateValue = "Monday";
dateValue = 234242344;
// dateValue = false

let webMentor: "Emily" | "Raul";
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

let pandaMember2: WebStudent = {
  course: "data",
  courseLenght: 2,
  hasLaptop: true,
  name: "Tom",
};
let pandaMember3: WebStudent = {
  course: "webdev",
  courseLenght: 5,
  hasLaptop: true,
  name: "Tim",
  hasPet: true,
};

type Car = {
  brand: string;
  year: number;
  model: string;
};

const valCar: Car = {
  brand: "Maybach",
  model: "X",
  year: 2024,
};

//* Index Signature

type Car2 = {
  brand: string;
  year: number;
  model: string;
  // [key: string]: string | number | boolean;
  [key: string]: any;
};

const patrickCar: Car2 = {
  brand: "BMW",
  model: "M1",
  year: 2012,
};

// ANY type

let randomThing: any;
randomThing = { name: "asdasd" };

randomThing = "whatever";

//? FUNCTIONS

function multiply(x: number, y: number) {
  const result = x * y;
  return x * y;
}

// const result = multiply("one", "two");
const result = multiply(2, 5);
console.log("result :>> ", result);

//* Function Signature
let sumFunction: (a: number, b: number) => number;

sumFunction = (num1: number, number2: number) => {
  return num1 + number2;
};

//? TYPE ALIASES

const register = (
  password: string | number,
  user: { name: string; email: string }
) => {
  //do some operation to register the user....
};

type StringOrNum = string | number;
type userObj = { name: string; email: string };

const login = (password: StringOrNum, user: userObj) => {
  //do some operation to register the user....
};

console.log(login("asdasd", { email: "asdasd", name: "asdasd" }));

//? ARRAYs

// const arrNumber: number[] = ["asdasd"]
// const arrNumber: number[] = [5, 6];
const arrNumber: Array<number> = [5, 6];
// arrNumber.push("asdasdd")
// const mixedArray: Array<number | string> = [5, "asdasd"];
const mixedArray: (number | string)[] = [5, "asdasd"];
