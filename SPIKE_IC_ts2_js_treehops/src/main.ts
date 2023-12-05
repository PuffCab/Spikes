//! Implicit Type //type inference works with primitive types: number, string, boolean

import { Student, Vehicle } from "./types/customTypes";

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

const myCar: Vehicle.Car = {
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

//! TUPLES

type MixedArray = [number, boolean, string];
let myArray: MixedArray = [3, true, "string"];

myArray.push("new Element");
console.log("myArray :>> ", myArray);

// console.log("myArray[3] :>> ", myArray[3]);

const user1 = ["tom", "leinestrasse 48", 12049];

//! NAMESPACES

const laurasCar: Vehicle.Car = {
  brand: "Twingo",
  year: 2010,
  extras: ["AC"],
};

const laurasCarEngine: Vehicle.Engine = "Gasoline";

const telllaurasCarEngine: Vehicle.RevealEngineType = (a) => {
  return `my car has a ${a} engine`;
};

telllaurasCarEngine("Electric");

//! TYPE ASSERTION // wrongly called as Type casting

const surpriseValue: any = "some long string here";

let surpriseValueLength: number = (surpriseValue as string).length;
console.log("surpriseValueLength :>> ", surpriseValueLength);

type Dog = {
  name: string;
};

const somePet: object = {
  name: "Tommy",
  age: 20,
};
// console.log('somepet :>> ', somePet.);
const somePetName = (somePet as Dog).name;

//! GENERICS

interface Superhero<T, S> {
  name: string;
  editorial: "DC" | "Marvel";
  superpowers: T;
  // superpowers: string | number | boolean,
  secretIdentity: S;
}

const ironMan: Superhero<number, boolean> = {
  editorial: "Marvel",
  name: "ironman",
  secretIdentity: true,
  superpowers: 0,
};

const superman: Superhero<string[], string> = {
  name: "Superman",
  editorial: "DC",
  superpowers: ["x-ray vision", "fly"],
  secretIdentity: "Clark Kent",
};

// a function that returns the same type of value that receives

function returnSameType<T>(a: T) {
  return a;
}
returnSameType("s");
returnSameType(23);

//! FETCH with TS

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const fetchPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("something very bad happened");
      }

      return response.json();
    })
    .then((result) => {
      // console.log("result :>> ", result);
      // const posts: Post[] = result;
      const posts = result as Post[];
      doSomethingWithPosts(posts);
    })
    .catch((err) => {
      const error = err as Error;
      console.log("error :>> ", error.message);
    });
};
fetchPosts();

const reusableFetch = <T>(url: string, justAFunction: (content: T) => void) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("something very bad happened");
      }

      return response.json();
    })
    .then((result) => {
      // console.log("result :>> ", result);
      // const posts: Post[] = result;
      const data = result as T;
      justAFunction(data);
    })
    .catch((err) => {
      const error = err as Error;
      console.log("error :>> ", error.message);
    });
};

reusableFetch<Comment[]>(
  "https://jsonplaceholder.typicode.com/comments",
  (content) => {
    doSomethingWithComments(content);
  }
);
reusableFetch<Post[]>(
  "https://jsonplaceholder.typicode.com/posts",
  (content) => {
    doSomethingWithPosts(content);
  }
);

const doSomethingWithPosts = (posts: Post[]) => {
  // do something with posts
  console.log("posts :>> ", posts);
};

// const doSomethingWithComments = (comments: Comment[]) => {
//   console.log("comments :>> ", comments);
// };

//! DOM Manip

const myHeader = document.querySelector("h1")!;

if (myHeader) {
  console.log(myHeader.innerHTML);
}
console.log(myHeader?.innerHTML);

const loginButton = document.querySelector(".login") as HTMLButtonElement;
const disableButton = loginButton.disabled;

loginButton.addEventListener("click", (e: MouseEvent) => {
  console.log("e.target.name :>> ", e.target);
  const myTarget = e.target as HTMLButtonElement;
  console.log(myTarget.name);
});

const doSomethingWithComments = (comments: Comment[]) => {
  console.log("comments :>> ", comments);

  const myDiv = document.querySelector("div");

  for (let i = 0; i < comments.length; i++) {
    const p = document.createElement("p");
    p.innerHTML = comments[i].name;

    myDiv?.appendChild(p);
  }
};
