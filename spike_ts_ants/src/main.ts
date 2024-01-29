import { Data } from "./@types/customTypes";

console.log("hello");

var myName = "Raul";
console.log("asdassd");
console.log("asdassd");

// PRIMITIVE TYPES : number, string, booleans

//! Tye Inference : Implicit typing

var myNumber = 34;

// myNumber = "two";

let hi = "Hi";
// hi = 23;

//! Explicit Type

let petName: string;

// petName = ["asdasdda"];

let myBoolean: boolean = true;

//! any type

let anyValue: any = 23;
anyValue = "asdasdd";
anyValue = { name: "asdasdd" };

//! Union

//Type Alias
type BestMentor = "Heron" | "Emily";
type NumberOrString = number | string;

const myBestMentor: BestMentor = "Emily";

//! Interfaces
type Car = {
  brand: string;
  model: string;
};

// interface Student {
//   name: string;
//   course: "Data" | "webdev";
//   courseLength: number;
//   hasLaptop?: boolean;
// }

// const blueAntStudent: Student = {
//   course: "webdev",
//   name: "Patrick",
//   courseLength: 5,
//   hasLaptop: true,
// };

//! FUNCTIONS

function multiply(a: number, b: number): number {
  return a * b;
}

// multiply("asdasd", 3);

const sum = (a: number, b: number): number => {
  return a + b;
};
const noReturnFunction = (a: number, b: number): void => {
  const result = a + b;
};

//! TYPE ALIASES VS INTERFACES

type MyNumber = 23;

interface MyNumInterface {
  number: 23;
}
type MyObject = {
  name: string;
};
interface MyObjInterface {
  name: string;
}

interface MyObjInterface {
  password: string;
}

const something: MyObjInterface = {
  name: "asdasd",
  password: "asdasd",
};

interface UserName {
  name: string;
}

interface UserCredentials extends UserName {
  password: string;
}
const user1: UserCredentials = {
  name: "asdasdd",
  password: "123123123",
};

//! ARRAYS

let myArrayNumbers: number[];
let myArrayNumbers2: Array<number>;

myArrayNumbers = [1, 2];

//! TUPLES

type MixedArray = [number, string, boolean];

const myWeirdArray: MixedArray = [3, "second position", true];
myWeirdArray.push("something");
// console.log("myWeirdArray :>> ", myWeirdArray[3]);

//! Namespace

const blueAntStudent2: Data.Student = {
  name: "Patrick",
  hasLaptop: true,
};
const dataSudentMentor: Data.Mentor = "Killian";

//! Type Assertion

const greet: any = "hi there";

const greetLenght = (greet as string).length;

//! GENERICS

type SuperHero<T, S> = {
  name: string;
  superPowers: T;
  secretIdentity: S;
};

const hulk: SuperHero<string, string> = {
  name: "Hulk",
  superPowers: "strength",
  secretIdentity: "Bruce Banner",
};
const superman: SuperHero<string[], string> = {
  name: "Superman",
  superPowers: ["strength", "x-ray"],
  secretIdentity: "Clarck Kent",
};
const ironMan: SuperHero<number, boolean> = {
  name: "Iron Man",
  superPowers: 0,
  secretIdentity: false,
};

//! Fetch

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const url = "https://jsonplaceholder.typicode.com/posts";
const fetchData = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data :>> ", data);
      const myPosts = data as Post[];
      //   createTable(myPosts);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
fetchData();

// ! a more reusable Fetch

type ApiResponse<T> = {
  status: number;
  error?: string;
  data: T;
};

async function fetchData2<T>(url: string): Promise<ApiResponse<T>> {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("something went wrong");
      }
    })
    .then((result) => {
      console.log("data :>> ", result);
      return {
        status: 200,
        data: result as T,
      };
    })
    .catch((error) => {
      console.log("error", error);
      return {
        status: 404,
        data: null as T,
        error: "something happened in the server....",
      };
    });
}

async function getPosts(): Promise<ApiResponse<Post>> {
  return fetchData2<Post>(url);
}
const posts = getPosts();
console.log("posts :>> ", posts);
//! DOM manipulation

const h1 = document.querySelector("h1")!;
const h1Text = h1.innerHTML;

if (h1) {
  const h1Text = h1.innerHTML;
}

//! to fix the "export undefined" or "unexpected token export..."  error, add type="module" in the script tag in index.html

async function fetchPostData(): Promise<ApiResponse<Post[]>> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const postData = await response.json();

  return { status: response.status, data: postData };
}
async function fetchAndDisplayPostTitles() {
  try {
    const response = await fetchPostData();
    const posts = response.data;
    displayPostTitles(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

async function displayPostTitles(posts: Post[]) {
  try {
    posts.forEach((post) => {
      console.log(post.title);
    });
  } catch (error) {
    console.error("Error displaying post titles:", error);
  }
}

fetchAndDisplayPostTitles();
