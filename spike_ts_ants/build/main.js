var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
let petName;
// petName = ["asdasdda"];
let myBoolean = true;
//! any type
let anyValue = 23;
anyValue = "asdasdd";
anyValue = { name: "asdasdd" };
const myBestMentor = "Emily";
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
function multiply(a, b) {
    return a * b;
}
// multiply("asdasd", 3);
const sum = (a, b) => {
    return a + b;
};
const noReturnFunction = (a, b) => {
    const result = a + b;
};
const something = {
    name: "asdasd",
    password: "asdasd",
};
const user1 = {
    name: "asdasdd",
    password: "123123123",
};
//! ARRAYS
let myArrayNumbers;
let myArrayNumbers2;
myArrayNumbers = [1, 2];
const myWeirdArray = [3, "second position", true];
myWeirdArray.push("something");
// console.log("myWeirdArray :>> ", myWeirdArray[3]);
//! Namespace
const blueAntStudent2 = {
    name: "Patrick",
    hasLaptop: true,
};
const dataSudentMentor = "Killian";
//! Type Assertion
const greet = "hi there";
const greetLenght = greet.length;
const hulk = {
    name: "Hulk",
    superPowers: "strength",
    secretIdentity: "Bruce Banner",
};
const superman = {
    name: "Superman",
    superPowers: ["strength", "x-ray"],
    secretIdentity: "Clarck Kent",
};
const ironMan = {
    name: "Iron Man",
    superPowers: 0,
    secretIdentity: false,
};
const url = "https://jsonplaceholder.typicode.com/posts";
const fetchData = () => {
    fetch(url)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log("data :>> ", data);
        const myPosts = data;
        //   createTable(myPosts);
    })
        .catch((error) => {
        console.log("error", error);
    });
};
fetchData();
function fetchData2(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch(url)
            .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("something went wrong");
            }
        })
            .then((result) => {
            console.log("data :>> ", result);
            return {
                status: 200,
                data: result,
            };
        })
            .catch((error) => {
            console.log("error", error);
            return {
                status: 404,
                data: null,
                error: "something happened in the server....",
            };
        });
    });
}
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetchData2(url);
    });
}
const posts = getPosts();
console.log("posts :>> ", posts);
//! DOM manipulation
const h1 = document.querySelector("h1");
const h1Text = h1.innerHTML;
if (h1) {
    const h1Text = h1.innerHTML;
}
//! to fix the "export undefined" or "unexpected token export..."  error, add type="module" in the script tag in index.html
function fetchPostData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        const postData = yield response.json();
        return { status: response.status, data: postData };
    });
}
function fetchAndDisplayPostTitles() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetchPostData();
            const posts = response.data;
            displayPostTitles(posts);
        }
        catch (error) {
            console.error("Error fetching posts:", error);
        }
    });
}
function displayPostTitles(posts) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            posts.forEach((post) => {
                console.log(post.title);
            });
        }
        catch (error) {
            console.error("Error displaying post titles:", error);
        }
    });
}
fetchAndDisplayPostTitles();
export {};
//# sourceMappingURL=main.js.map