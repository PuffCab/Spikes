// Scope

// const a = 1;
// function foo() {
//   const a = 2;
//   console.log("a", a);
// }
// foo();
// console.log("a", a);
// console.log(b);

//? VAR
// are hoisted
// can be redeclared and updated
//global when declared in the global scope, and local when in a code block
// console.log("a", a);
// var a;

// a = 100;
// var b = 50;

// b = "something";
// console.log("b", b);
// var b = 232412;
// console.log("b", b);

// console.log("a", a);

// var myName = "Raúl";

// function printName() {
//   console.log("myName", myName);
//   var otherName = "Antonio";
// }
// printName();
// console.log("otherName", otherName);

//! LET
//block scoped variable
//not hoisted
//can be updated, cannot be redeclared within the same scope.
// console.log("a", a);
let a;
a = 100;
function redeclareLet() {
  let a = 123123;
  console.log("a", a);
}
// let a = 123123

// let c;
// console.log("c", c);
// c = 123123;

// CONST
//block scoped variable
//not hoisted , and has to be initiasied at the time of declaration
//cannot be neither redeclared, nor updated

// console.log("h", h);
// const h = 23123;

// const k = "hi";
// // const k = "asdasd"
// k = 234234;

// console.log("k", k);

//? Function Declaracion
myFunction();
function myFunction() {
  // console.log("function declaration");
  return "function return";
}
const myFunctionReturn = myFunction();
// console.log("myFunctionReturn", myFunctionReturn);

//? Function Expressions
// functionExpression();
const functionExpression = () => {
  //code ....
  // console.log("function expression ");
};
const IIFE = function () {
  console.log("IIFE");
};
//IIFE
// (function () {
//   console.log("IIFE");
// })();

//? Arrow functions
// arrowFunction();
const arrowFunction = (a, b) => {
  // console.log("arrow Function");
};
arrowFunction();
//Implicit return
const arrowFunctionImplicitReturn = (a, b) => "this is a return"; //when there is ONE single line of code, {} aren't needed, and return is implicit
// console.log("arrowFunctionImplicitReturn", arrowFunctionImplicitReturn());
const arrowFunctionNoImplicitReturn = (a, b) => {
  "this is a return";
};
// console.log("arrowFunctionNoImplicitReturn", arrowFunctionNoImplicitReturn());

//? Single parameter
const singleParameterAF = (a) => a;
// console.log("singleParameterAF", singleParameterAF("this is param A"));

//? No parameters
// const noParametersAF = _ => " i am an even cooler AF"; //this is valid code

//anonimous functions
// function() {
//     "this is an anonimous funciton"
// }

// () => {
//     "this is an anonimous funciton"

// }

//! ES6 Loops

//?.forEach()
// console.log("catFacts BEFORE", catFacts);
// const justFacts = catFacts.forEach((catFact, index, originalArray) => {
//   // console.log("catFact", catFact);
//   // console.log("index", index);
//   // console.log("originalArray", originalArray);
//   // catFact.doILikeCats = "Nope ....";

//   return { ...catFact, newProperty: "new value" };
// });
// console.log("catFacts After", catFacts);

//?.map()
console.log("catFacts BEFORE", catFacts);

const onlyFacts = catFacts.map((catFact, index, originalArray) => {
  // console.log("catFact", catFact);
  // console.log("index", index);
  // console.log("originalArray", originalArray);
  // catFact.newFact = "I don't like cats";
  // return (catFact.newFact = "I don't like cats");
  // return { ...catFact, newFact: "i don't like cats" };
  return Object.assign({}, catFact, { newOpinion: "now I do like cats" });
});

console.log("catFacts After", catFacts);
console.log("onlyFacts", onlyFacts);

//? .filter()

// const filteredCatFacts = catFacts.filter((catFact, index, originalArray) => {
//   // return catFact.fact.includes("Dog");
//   return catFact.fact.length > 50;
// });
// console.log("filteredCatFacts", filteredCatFacts);

//? spread operator

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// const array3 = array1.concat(array2);
// const array3 = [...array1, ...array2];
const array3 = [...array1, "hey", "there"];
// console.log("array3", array3);

const person1 = {
  name: "Anotonio",
  nacionality: "Spain",
  age: 34,
};
const person2 = {
  name: "Joao",
  nacionality: "Spain",
};

const person3 = {
  ...person1,
  ...person2,
};
console.log("person3", person3);

// const A = 1;
// const A = "something";
const A = ["something"];
// const B = ["something"];
// const B = 1;
// const B = "something";
const B = [...A];
console.log("A===B", A === B);

//!Logical operators

const num1 = 50;
const num2 = 300;
const num3 = 3;
const age = 100;
// or Operator
// if (age > num1 || num2) {
//   console.log("code run");
// }

// && operator
if (age > num1 && (num2 || num3)) {
  console.log("code run");
}

//&& returns the first falsy value, or the last truthy value

// const result = false && "something";
// console.log("result", result);
// const result = "" && "something";
// console.log("result", result);
// const result = 2 && 0;
// console.log("result", result);

//|| returns the first truthy value, or the last falsy
// const result = 0 || null;
// console.log("result", result);

//AJAX

const useInformation = (info) => {
  console.log("info", info);
};
const getData = () => {
  fetch("https://catfa.ninja/fact")
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((information) => {
      // console.log("information", information);
      useInformation(information.data);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
getData();

// console.log(fetch("https://catfact.ninja/facts"));
// console.log("apiResult", apiResult);
