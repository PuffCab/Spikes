// console.log("hello ts");
// async function hi() {
//   return "hi there";
// }

import { Cohort, WebStudent } from "./@types/customTypes";

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

//? Object

type Pet = {
  name: string;
  breed: string;
};

type Param = Object;
// type Param = {}
function hi(a: Param) {
  return a;
}
hi({ name: "Tom" });
hi(5);
hi("asdasd");

// type Param2 = Record<string, number>
type Param2 = Record<string, unknown>;
// type Param2 = {[key:string]:unknwon}
function myFunction(a: Param2) {
  return a;
}
myFunction("asdasd");
myFunction({ whateverKeyName: "asdasdd" });
myFunction({ whateverKeyName: 5 });

//* Unknwon

let surprise: unknown = "whatever";

//? TUPLE

type MixedArray = [string, number];

let myMixedArray: MixedArray = ["string", 5];
mixedArray.push(10);
// console.log("myMixedArray :>> ", myMixedArray[2])

let coordinates = [1231231, "asdasd"];
let someUser = ["email@email.com", "userName"];

//? Namespaces

let bob: Cohort.Student = {
  name: "Bob",
  courseLenght: 3,
  hasLaptop: true,
};

let bobsMentor: Cohort.Mentor = "Killian";

//? TYPE ASSERTION
//type casting

let value: unknown = "some string";
let valueLength = (value as string).length;
console.log("valueLength :>> ", valueLength);

//* Unions

// type Password = number | string
let password: number | string = "my secret password";
let passwordLength = password.length; // in this case TS is infering the type
//if that doesn't happen, we can help TS with Type assertion
let passwordLength2 = (password as string).length;

//Objects
interface CarColor {
  color: string;
}

const myCar: object = {
  doors: 2,
  color: "red",
};

console.log((myCar as CarColor).color);

//FETCH
// DOM Manipulation

//? GENERICS

interface Superhero<T, B> {
  name: string;
  editorial: "Marvel" | "DC";
  superpowers: T;
  secretIdentity: B;
}

const spiderman: Superhero<number, boolean> = {
  name: "Spiderman",
  editorial: "Marvel",
  superpowers: 4,
  secretIdentity: true,
};

const hulk: Superhero<string[], string> = {
  // const hulk: Superhero<Array<string>, string> = { // same thing, different notation
  name: "hulk",
  editorial: "Marvel",
  superpowers: ["strength", "bad temper"],
  secretIdentity: "Bruce Banner",
};

//Write a function that returns the same type that receives as parameter

const getValueBack = <T>(a: T) => {
  return a;
};
// const getValueBack =(a:number | string) => {
// return a
// }

// getValueBack(5)
const functionValue = getValueBack(5);

// getValueBack("asdasd")
// getValueBack(["some values", "more values"])

//? Extends

interface MyUser {
  name: string;
  email: string;
}
type MyUserAlias = {
  name: string;
  email: string;
};

interface UserWithAddress extends MyUser {
  address: string;
}
// type UserWithAddress extends MyUserAlias= {
//   address: string;
// } // this cannot be done
let userA: UserWithAddress = {
  name: "userA",
  email: "email@email.com",
  address: "some lost street",
};
// Type Intersection

type UserAdmin = {
  admin: boolean;
};

type SuperUser = MyUserAlias & UserAdmin;

let userB: SuperUser = { name: "a", admin: true, email: "a@email.com" };

//? FETCH (simple version)

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const result: Post[] = await response.json();
      console.log("result :>> ", result);
    }
  } catch (err) {
    const myError = err as Error;
    console.log(myError.message);
  }
}

//? FETCH using Generics

interface Post2 {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface APIResponse<T> {
  status: number;
  data: T;
  error?: string;
}

const fetchData = async <T>(url: string): Promise<APIResponse<T>> => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      return {
        status: 200,
        data: result as T,
      };
    } else {
      throw new Error("something went wrong");
    }
  } catch (error) {
    console.log("error :>> ", error);
    return {
      status: 404,
      data: null as T,
      error: "something went wrong",
    };
  }
};

function getPost2(): Promise<APIResponse<Post[]>> {
  return fetchData<Post[]>(url);
}

let arrayOfPost = await getPost2();
arrayOfPost.data[0].title;
console.log("arrayOfPost.data :>> ", arrayOfPost.data);

//! DOM

const myH1 = document.querySelector("h1");
const h1Text = myH1?.innerHTML;
if (myH1) {
  const h1Text = myH1.innerHTML;
}
const myH1B = document.querySelector("h1")!;
const h1Text2 = myH1B.innerHTML;

// acces Properties from an HTMLelement

const myButton = document.querySelector("button") as HTMLButtonElement;
console.log(myButton.disabled);

const myButton2 = document.querySelector(".register");

myButton2?.addEventListener("click", (e) => {
  console.log((e.target as HTMLButtonElement).value);
});

const buildListTitle = (posts: Post[]) => {
  const container = document.querySelector(".container")!;

  posts.forEach((post) => {
    const p = document.createElement("p");
    p.innerText = post.title;
    container.appendChild(p);
  });
};

buildListTitle(arrayOfPost.data);
