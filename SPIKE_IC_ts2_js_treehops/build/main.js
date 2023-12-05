//! Implicit Type //type inference works with primitive types: number, string, boolean
// import { Student } from "./types/customTypes";
let myNumber = 12;
myNumber = 33434;
let myName = "Raul";
// myName = 123;
let isTrue = true;
// isTrue = "false";
//! Explicit Typing
// const num2: number = [12133];
let address;
// address = 12313123
//! UNIONS
let password;
password = "asdadasd";
password = 123123123;
// password = true
//! ANY Type
let randomValue;
randomValue = 12313;
randomValue = "asdad";
randomValue = { name: "asdasd" };
const favMentor = "Heron";
let myFavNumber = 123123; // we usually do not create custom types for primitive tyes
const laura = { name: "Laura", course: "webdev", durationOfCourse: 5 };
const myCar = {
    brand: "Mini",
    year: 2010,
    extras: ["solar roof", "A/C"],
};
const myDog = {
    species: "dog",
    hair: "brown",
    legs: true,
};
//! Function
function sum(a, b) {
    let result = a + b;
    console.log("result :>> ", result);
    return result;
}
sum(3, 4);
const myMultp = (num1, c) => {
    const result = num1 * c;
    return result;
};
myMultp(5, 2);
let myArray = [3, true, "string"];
myArray.push("new Element");
console.log("myArray :>> ", myArray);
// console.log("myArray[3] :>> ", myArray[3]);
const user1 = ["tom", "leinestrasse 48", 12049];
//! NAMESPACES
const laurasCar = {
    brand: "Twingo",
    year: 2010,
    extras: ["AC"],
};
const laurasCarEngine = "Gasoline";
const telllaurasCarEngine = (a) => {
    return `my car has a ${a} engine`;
};
telllaurasCarEngine("Electric");
//! TYPE ASSERTION // wrongly called as Type casting
const surpriseValue = "some long string here";
let surpriseValueLength = surpriseValue.length;
console.log("surpriseValueLength :>> ", surpriseValueLength);
const somePet = {
    name: "Tommy",
    age: 20,
};
// console.log('somepet :>> ', somePet.);
const somePetName = somePet.name;
const ironMan = {
    editorial: "Marvel",
    name: "ironman",
    secretIdentity: true,
    superpowers: 0,
};
const superman = {
    name: "Superman",
    editorial: "DC",
    superpowers: ["x-ray vision", "fly"],
    secretIdentity: "Clark Kent",
};
// a function that returns the same type of value that receives
function returnSameType(a) {
    return a;
}
returnSameType("s");
returnSameType(23);
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
        const posts = result;
        doSomethingWithPosts(posts);
    })
        .catch((err) => {
        const error = err;
        console.log("error :>> ", error.message);
    });
};
fetchPosts();
const reusableFetch = (url, justAFunction) => {
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
        const data = result;
        justAFunction(data);
    })
        .catch((err) => {
        const error = err;
        console.log("error :>> ", error.message);
    });
};
reusableFetch("https://jsonplaceholder.typicode.com/comments", (content) => {
    doSomethingWithComments(content);
});
reusableFetch("https://jsonplaceholder.typicode.com/posts", (content) => {
    doSomethingWithPosts(content);
});
const doSomethingWithPosts = (posts) => {
    // do something with posts
    console.log("posts :>> ", posts);
};
// const doSomethingWithComments = (comments: Comment[]) => {
//   console.log("comments :>> ", comments);
// };
//! DOM Manip
const myHeader = document.querySelector("h1");
if (myHeader) {
    console.log(myHeader.innerHTML);
}
console.log(myHeader?.innerHTML);
const loginButton = document.querySelector(".login");
const disableButton = loginButton.disabled;
loginButton.addEventListener("click", (e) => {
    console.log("e.target.name :>> ", e.target);
    const myTarget = e.target;
    console.log(myTarget.name);
});
const doSomethingWithComments = (comments) => {
    console.log("comments :>> ", comments);
    const myDiv = document.querySelector("div");
    for (let i = 0; i < comments.length; i++) {
        const p = document.createElement("p");
        p.innerHTML = comments[i].name;
        myDiv?.appendChild(p);
    }
};
export {};
//# sourceMappingURL=main.js.map