import { Student, WebMentor } from "./types/main";

console.log("hello TS world");

//! PRIMITIVES : boolean, number, string

//? Implicit type
let word = "some word";
// word = 3

let myBoolean = false;

// myBoolean = "true";

let myNum = 4;
// myNum = true

//? Explicit Type

let count: number;
count = 4;
// count = "one" // error

//! ANY type  --> do not use it (without a good reason)

let random: any;

random = 4;
random = "some...";
random = false;

//! CUSTOM TYPES

//! UNIONS

let password: string | number;
password = "password";
password = 123456;
// password = false
let samMentor: WebMentor;

// samMentor = "Killian"; // Error
samMentor = "Heron";

//! INTERFACES

const sam: Student = {
  name: "Sam",
  course: "web",
  courseLength: 3,
  laptopBrand: "mac",
  useVerticalMouse: false,
};

const josh: Student = {
  name: "Josh",
  course: "web",
  courseLength: 5,
  hasPet: true,
  crazyThing: "sasdasd",
};

//!FUNCTIONS

function multiply(a: number, b: number, c?: string): number | string {
  if (c) {
    const res = a * b + c;
    return res;
  } else {
    const res = a * b;
    return res;
  }
}

// arrow function version
const arrowMultiply = (a: number, b: number, c?: string): number | string => {
  if (c) {
    const res = a * b + c;
    return res;
  } else {
    const res = a * b;
    return res;
  }
};

const result = multiply(1, 2);
console.log("result", result);

//! VOID,  function without return

function greet(greet: string): void {
  console.log(greet);
}
greet("hi there");

// Arrow version
const arrowGreet = (greet: string): void => {
  console.log(greet);
};

//! TYPE ALIAS

interface User {
  name: string;
  id: number;
}

type StringOrNumber = string | number;
type StringOrBoolean = string | boolean;

type SubmitCredentials = (arg1: User, arg2: StringOrNumber) => void;

const register: SubmitCredentials = (user: User, password: StringOrNumber) => {
  // we send this credentials to a database
};

const login: SubmitCredentials = (
  loginUser: User,
  loginPassword: StringOrNumber
) => {
  // we send this credentials to a database
};

//! ARRAYS

// const myNumArray: number[] = [];
const myNumArray: Array<number> = [];
myNumArray.push(1);
myNumArray.push("1");

// const myMixedArray: (number | string)[] = [];
const myMixedArray: Array<number | string> = [];
myMixedArray.push(34);
myMixedArray.push("someting");
// myMixedArray.push(true)

const santi: Student = {
  course: "web",
  name: "Santi",
  courseLength: 5,
};
const pedro: Student = {
  course: "web",
  name: "Pedro",
  courseLength: 5,
};
const jose = {
  course: "web",
  name: "Pedro",
  courseLength: 5,
};

type Cohort = Array<Student>;

const badgers: Cohort = [santi, pedro, jose];
