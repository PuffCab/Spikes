//! Implicit Typing : for primitive types

import { Cohort, User } from "./types/customTypes";

let myNumber = 5;
// myNumber = "five"

var myName = "Raul";
// myName  =45
myName = "Tom";

let myBoolean = true;
// myBoolean = "some other "
myBoolean = false;

//! Explicit typing

let userName: string;
// userName =5
userName = "lion34";

let isTrue: boolean;
// isTrue = "asdasd"
isTrue = true;

function sum(a, b) {
  let result = a + b;
  console.log("result", result);
}
sum(4, "hey there");

//! Do not use type any in your definitions

//! UNIONS

type WebMentor = "Emily" | "Raul" | "Lucas";

let myFavMentor: WebMentor = "Emily";

type dateValue = string | number;

let myDate: dateValue = 12312331233;

let favNumber: "22" | "13" | "666";
favNumber = "22";

//! Interfaces

// const student1: Cohort.Student = {
//   name: "Ben",
//   course: "webdev",
//   courseLenght: 5,
//   hasLaptop: true,
//   chooseCohortName(name) {
//     console.log("name", name);
//   },
// };

// const student2: Student = {
//   name: "Janina",
//   course: "data",
//   courseLenght: 5,
//   hasLaptop: false,
//   hasPet: true,
// };

//* Index signature

type Car = {
  brand: string;
  year: number;
  // [key:string]:string | boolean
  [key: string]: any;
};

const myCar: Car = {
  brand: "Opel",
  year: 2000,
  model: "vectra",
};

//! Functions

function sum2(paramA: number, paramB: number): number {
  let result = paramA + paramB;
  console.log("result", result);
  return result;
}
sum2(4, 33);

//Function signature

let sumFunction: (a: number, b: number) => number;

sumFunction = (number1: number, number2: number) => {
  return number1 + number2;
};

//! Types Aliases

const register = (
  user: { name: string; email: string },
  password: string | number
) => {
  //...do something with this information ..
};

type StringOrNumber = string | number;
type UserObj = { name: string; email: string };

interface UserObjInterface {
  name: string;
  email: string;
}

interface UserAdress extends UserObjInterface {
  address: string;
}

// const myUser:UserAdress = {}

const login = (password: StringOrNumber, user: UserObj) => {
  //...do something with this information ..
};

//! ARRAYS

// const arrNumbers :number[]=["asdasd"]
const arrNumbers: number[] = [4, 6, 7];

const arrStrings: Array<string> = ["one", "asdasdd"];

const mixedArray: (string | number | number[])[] = ["asdasd", 6, [5, 7, 8]];

//! Objects

type Parameter = {};
type Parameter2 = Object;
// type Parameter3 = Record<string, number>;
// type Parameter3 = Record<string, number>;

function myFunction(obj: Parameter3) {
  return obj;
}

// myFunction(1);
myFunction({ anyNumber: 1 });
myFunction({ anyString: 4 });

//! TUPLES

type MyMixedArray = [number, string];

let mixedThings: MyMixedArray = [5, "asdasd"];

mixedThings.push(7);

console.log("mixedThings", mixedThings);
// console.log("mixedThings[2]", mixedThings[2]);

//! Importing types

const adminUser: User = { name: "asdasdd", password: 2234234 };

//! NAmespaces

const student1: Cohort.Student = {
  name: "Ben",
  course: "webdev",
  courseLenght: 5,
  hasLaptop: true,
  chooseCohortName(name) {
    console.log("name", name);
  },
};
student1.chooseCohortName("tarantulas");
