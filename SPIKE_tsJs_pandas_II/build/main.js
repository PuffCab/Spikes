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
// type Param = {}
function hi(a) {
    return a;
}
hi({ name: "Tom" });
hi(5);
hi("asdasd");
// type Param2 = {[key:string]:unknwon}
function myFunction(a) {
    return a;
}
myFunction("asdasd");
myFunction({ whateverKeyName: "asdasdd" });
myFunction({ whateverKeyName: 5 });
//* Unknwon
let surprise = "whatever";
let myMixedArray = ["string", 5];
mixedArray.push(10);
// console.log("myMixedArray :>> ", myMixedArray[2])
let coordinates = [1231231, "asdasd"];
let someUser = ["email@email.com", "userName"];
//? Namespaces
let bob = {
    name: "Bob",
    courseLenght: 3,
    hasLaptop: true,
};
let bobsMentor = "Killian";
//? TYPE ASSERTION
//type casting
let value = "some string";
let valueLength = value.length;
console.log("valueLength :>> ", valueLength);
//* Unions
// type Password = number | string
let password = "my secret password";
let passwordLength = password.length; // in this case TS is infering the type
//if that doesn't happen, we can help TS with Type assertion
let passwordLength2 = password.length;
const myCar = {
    doors: 2,
    color: "red",
};
console.log(myCar.color);
const spiderman = {
    name: "Spiderman",
    editorial: "Marvel",
    superpowers: 4,
    secretIdentity: true,
};
const hulk = {
    // const hulk: Superhero<Array<string>, string> = { // same thing, different notation
    name: "hulk",
    editorial: "Marvel",
    superpowers: ["strength", "bad temper"],
    secretIdentity: "Bruce Banner",
};
//Write a function that returns the same type that receives as parameter
const getValueBack = (a) => {
    return a;
};
// const getValueBack =(a:number | string) => {
// return a
// }
// getValueBack(5)
const functionValue = getValueBack(5);
// type UserWithAddress extends MyUserAlias= {
//   address: string;
// } // this cannot be done
let userA = {
    name: "userA",
    email: "email@email.com",
    address: "some lost street",
};
let userB = { name: "a", admin: true, email: "a@email.com" };
const url = "https://jsonplaceholder.typicode.com/posts";
async function getPosts(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const result = await response.json();
            console.log("result :>> ", result);
        }
    }
    catch (err) {
        const myError = err;
        console.log(myError.message);
    }
}
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const result = await response.json();
            return {
                status: 200,
                data: result,
            };
        }
        else {
            throw new Error("something went wrong");
        }
    }
    catch (error) {
        console.log("error :>> ", error);
        return {
            status: 404,
            data: null,
            error: "something went wrong",
        };
    }
};
function getPost2() {
    return fetchData(url);
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
const myH1B = document.querySelector("h1");
const h1Text2 = myH1B.innerHTML;
// acces Properties from an HTMLelement
const myButton = document.querySelector("button");
console.log(myButton.disabled);
const myButton2 = document.querySelector(".register");
myButton2?.addEventListener("click", (e) => {
    console.log(e.target.value);
});
const buildListTitle = (posts) => {
    const container = document.querySelector(".container");
    posts.forEach((post) => {
        const p = document.createElement("p");
        p.innerText = post.title;
        container.appendChild(p);
    });
};
buildListTitle(arrayOfPost.data);
export {};
//# sourceMappingURL=main.js.map