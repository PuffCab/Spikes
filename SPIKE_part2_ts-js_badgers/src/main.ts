import { Student, Vehicle, WebMentor } from "./types/main";

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
// myNumArray.push("1");

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

//! TUPLE

// let myArr = ["one", 2, false];

// myArr[0] = false;

let myArr: [string, number] = ["one", 2];
// myArr[0]= "asdasd"
myArr.push(4);
console.log("myArr", myArr);

// console.log("myArr[", myArr[2]);

//! NAMESPACE

const car1: Vehicle.Car = {
  brand: "opel",
  year: 2017,
};

const car2: Vehicle.Car = {
  brand: "toyota",
  year: 2000,
};

// const bike:Vehicle.Car = {
//   color: "red",

// }
const myGarage: Vehicle.CarCollection = [car1, car2];

const sayCarEngine: Vehicle.TellMotor = (engine) => {
  return `my car's engine is ${engine}`;
};

console.log(sayCarEngine("Electric"));

//! GENERICS

//! Generics with Functions

const addPlate = <Type extends { model: string }>(car: Type) => {
  const plate = 12344;

  return { ...car, plate };
};

const myCar = {
  model: "mini",
  year: 2020,
};

const car4 = {
  doors: 4,
  model: "bmw",
};
const car5 = "asdasda";
const carWithPlate = addPlate(car4);
// console.log("carWithPlate", carWithPlate.)

//! GENERICS with Interfaces

interface SuperHero<Type> {
  name: string;
  company: "DC" | "Marvel";
  // superpowers :string[] | string
  superpowers: Type;
}

const superman: SuperHero<string[]> = {
  name: "Clark kent",
  company: "DC",
  superpowers: ["x vision", "super strength"],
};

const robin: SuperHero<string> = {
  name: "Robin",
  company: "DC",
  superpowers: "gold digger",
};

//! API RESPONSES

//? Approach 1

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// const url = "https://jsonplaceholder.typicode.com/posts";

// function fetchData(url: string): Promise<Post[]> {
//   return fetch(url)
//     .then((response) => {
//       console.log("response", response);
//       if (!response.ok) {
//         throw new Error("something very bad happened");
//       }
//       return response.json() as Promise<Post[]>;
//     })
//     .then((result) => {
//       console.log("result", result);
//       const posts = result;
//       // createHtmlTable(posts)
//       return posts;
//     })
//     .catch((error) => {
//       console.log("error", error);
//       return error;
//     });
// }

// fetchData(url);

//? Aproach 2

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface APIResonse<Type> {
  status: number;
  data: Type;
  error?: string;
}
interface APIResponse2<Type> {
  status: number;
  data: Type;
  error?: string;
}

function fetchData<Type>(url: string): Promise<APIResonse<Type>> {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("we are all gonna dieeee");
      }
    })
    .then((result) => {
      console.log("result>>>>", result);
      const info: Type = result;
      return {
        status: 200,
        data: result as Type,
      };
    })
    .catch((error) => {
      console.log("error", error);
      return {
        status: 0,
        data: null as Type,
        error: `something very bad happend--> ${error.message}`,
      };
    });
}

function getPosts(): Promise<APIResonse<Post[]>> {
  const url = "https://jsonplaceholder.typicode.com/posts";
  return fetchData<Post[]>(url);
}

const myPosts = () => {
  return getPosts()
    .then((response) => {
      if (response.status === 200) {
        const posts = response.data;
        // createHtmlTable(posts)
      }
    })
    .catch((error) => {
      console.log("error getting posts", error);
    });
};

myPosts();
