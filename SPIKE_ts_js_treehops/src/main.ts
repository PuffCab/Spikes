//! Implicit Type //type inference works with primitive types: number, string, boolean

import { Car, Student } from "./types/customTypes";

// import { Student } from "./types/customTypes";

let myNumber = 12;

myNumber = 33434;

let myName = "Raul";
// myName = 123;

let isTrue = true;
// isTrue = "false";

//! Explicit Typing

// const num2: number = [12133];

let address: string;
// address = 12313123

//! UNIONS

let password: string | number;

password = "asdadasd";
password = 123123123;
// password = true

//! ANY Type

let randomValue: any;
randomValue = 12313;
randomValue = "asdad";
randomValue = { name: "asdasd" };

//! Custom types : Type aliases

type Mentor = "Heron" | "Emily";

const favMentor: Mentor = "Heron";

type FavNumber = number;

let myFavNumber: FavNumber = 123123; // we usually do not create custom types for primitive tyes

// type Student = {
//   course: "data" | "webdev";
//   name: string;
//   durationOfCourse: number;
// }; // moved inside customTypes.ts

type Password = string;

const laura: Student = { name: "Laura", course: "webdev", durationOfCourse: 5 };

//! Interface

// interface Car {
//   brand: string;
//   year: number;
//   extras: string[];
//   previousOwners?: Array<string>;
// } // moved inside customTypes.ts

interface MyDate {
  date: number;
}

const myCar: Car = {
  brand: "Mini",
  year: 2010,
  extras: ["solar roof", "A/C"],
};

// ternary Operator

// if (condition) {
//   //do sth
// } else {
//   //if previous condition is not met...do this
// }

// const number = 5

// number< 4 ? console.log("it is less than 4") : console.log("it is not")

// index signature

interface Pet {
  species: string;
  [key: string]: string | number | boolean;
}

const myDog: Pet = {
  species: "dog",
  hair: "brown",
  legs: true,
};

//! Function

function sum(a: number, b: number): number {
  let result = a + b;
  console.log("result :>> ", result);
  return result;
}
sum(3, 4);

type Multiply = (x: number, y: number) => number;

const myMultp: Multiply = (num1, c) => {
  const result = num1 * c;
  return result;
};
myMultp(5, 2);
