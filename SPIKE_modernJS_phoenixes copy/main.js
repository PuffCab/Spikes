// SYNCHRONOUS JS
// Single threaded blocking language

// console.log("wrring");

// console.log("two");

function email() {
  console.log(" email wrote -- took 5 min");
}

function phoneCall() {
  for (let i = 0; i < 10000; i++) {
    console.log("phone call took 10 min");
  }
}

// email();
// phoneCall();
// email();

// ASYNCHRONOUS JS

// email();
// setTimeout(() => {
//   phoneCall();
// }, 5000);

// email();

// FETCH
// console.log("fetch -->", fetch("https://catfact.ninja/facts"));

// console.log("one");

// fetch("https://catfact.ninja/facts")
//   .then(function (response) {
//     // console.log("response-->", response);
//     // console.log("response in json-->", response.json());
//     return response.json();
//   })
//   .then(function (result) {
//     // console.log("result", result.data);
//     const catFacts = result.data;
//     createCards(catFacts);
//   })
//   .catch(function (error) {
//     console.log("error--->", error);
//     errorFunction();
//   });
// console.log("three");

// function createCards(catFacts) {
//   console.log("catFacts --->", catFacts);
//   for (let i = 0; i < catFacts.length; i++) {
//     const p = document.createElement("p");
//     p.innerText = catFacts[i].fact;
//     document.querySelector("body").appendChild(p);
//   }
// }

// function errorFunction() {
//   alert("something went wrong");
// }

//! Function Declaration

// myFunctionDeclaration();
// function myFunctionDeclaration() {
//   // run some code
//   console.log("i am a function declaration");
// }

//! Function Expression

const myFunctionExpression = function () {
  console.log("i am a function expression");
  return "i am also a function";
};

// myFunctionExpression();
// console.log(myFunctionExpression());

//! Arrow Functions

// const arrowFunction = () => {
//   console.log("arrow function");
//   return "arrow function";
// };
// console.log(arrowFunction());
// const a = 23;
// const b = 45;
// const arrowWithImplicitReturn = (a, b) => a + b;

// console.log(arrowWithImplicitReturn(a, b));

// const arrowWithOneParameter = a => a;
// console.log(arrowWithOneParameter(a))

// const arrowNoParameters = _ => "how cool am I?"
// console.log(arrowNoParameters())

// Fetch with arrow functions

fetch("https://catfact.ninja/facts")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    // console.log(result);
    const catFacts = result.data;
    // console.log("catFacts", catFacts);
    // createCards(result.data);
    // playingWithForEach(catFacts);
    // playingWithFilter(catFacts);
    playingWithMap(catFacts);
  })
  .catch((error) => {
    console.log(error);
  });

//! ADDITIONAL WAYS OF LOOPING

function createCards(catFacts) {
  console.log("catFacts --->", catFacts);
  for (let i = 0; i < catFacts.length; i++) {
    const p = document.createElement("p");
    p.innerText = catFacts[i].fact;
    document.querySelector("body").appendChild(p);
  }
}

//! .forEach()

function playingWithForEach(catFacts) {
  catFacts.forEach((catFact, index, originalArray) => {
    // console.log("catFact", catFact);
    // console.log("index", index);
    // console.log("originalArray", originalArray);
    catFact.newFact = "cats hate Dogs";
  });
}

//!.filter()

function playingWithFilter(catFacts) {
  const filteredCatFacts = catFacts.filter((catFact, index, originalArray) => {
    // console.log("catFact", catFact);
    // console.log("INDEX", index);
    // return catFact.fact.includes("climb");
    // return true
    catFact.newFact = "cats hate Dogs";
    // console.log("originalArray", originalArray);
    return catFact.newFact === "cats hate Dogs";
    // return catFact.length > 114;
  });
  // console.log("filteredCatFacts:", filteredCatFacts);
}

//! .map()

function playingWithMap(catFacts) {
  const newCatFacts = catFacts.map((catFact) => {
    // console.log("catFact", catFact);
    // const noFact = catFact.fact;
    // achtung! this modifies the original array
    // catFact.noFact = "i don't like cats";
    // return catFact;

    // with spread operator
    return { ...catFact, noFact: "I do not like cats" };
  });
  // console.log("newCatFacts", newCatFacts);
}

//! Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// var arr3 = [];
// arr3.push(arr1, arr2);

// arr1.forEach((number) => {
//   arr3.push(number);
// });
// console.log("arr3", arr3);

const arr3 = [...arr1, ...arr2];
// console.log("arr3", arr3);

const person1 = {
  name: "Raul",
  surname: "Hernandez",
};

// const person2 = {
//   height: 123,
//   eyeColor: "Brown",
// };
const person2 = {
  name: "Tom",
  eyeColor: "Brown",
};

const person3 = { ...person2, ...person1 };

// console.log("person3", person3);

//! TEMPLATE LITERALS

const word = "variable";
const word2 = "using concatenation";
const word3 = "templating";

// console.log("this is a string with a " + word + " " + word2);

// console.log(`this is a string with a ${word} using ${word3}`);
// fetch(`http://www.url.com/` + pageNumber)

const body = document.querySelector("body");
const p = document.createElement("p");
p.innerHTML = `<ul class="someClass"> this a p tag using templating <a> with some link</a></ul>`; // DON'T be lazy

body.appendChild(p);

// Logic Operators

let number1 = 10;
let number2 = 20;
// OR operator : ||
// if (number1 > 15 || number2 === 7) {
//   console.log("do something");
// }

// AND operator  :&&

// if (number1 === 10 && number2 === 20) {
//   console.log("AND operator");
// }

// falsy : "", undefined, null, 0, -0, NaN
//when checking data types with && , returns the FIRST FALSY value, or the LAST TRUTHY
// const check = "" && 4;
// const check = 2 && 3;
const check = 10 && null;
console.log("-->", check);
