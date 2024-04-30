// var myName = "Raúl";

// console.log(myName);

// myFunction();
// function myFunction() {
//   var myName = "Andrei";
//   console.log(myName);
// }

// console.log(myName);

//? Hoisting
// console.log("myName", myName);
var myName = "asdasdasd";

//? VAR
//global variable when declared in global scope, function scoped when declare inside a function. hoisted, initialised with undefined, we can redeclare it.

var myName = "Raul";
var myName = "Su";
// console.log(myName);

//? Let
//block scoped variable. Cannot be redeclared. Can be reassigned. It is hoisted, but not initialised.
// console.log("num", num);
let num = 1;
num = 2;

let car;

car = "BMW";
// console.log(car);

//? const
//block scoped variables. cannot be redeclared. Cannot reassigned. Has to be initialised at the time of declaration. It is hoisted ,but not initialised.
const myDog = "Luna";
// myDog = "Tom";

// const myCat
// console.log(myCat);
// console.log(myDog);

//? FUNCTION EXPRESSIONS

// Function declaration

// console.log(sum(5));

function sum(b) {
  return 1 + b;
}
// console.log(sum(5));

//+ Function expression
//they are not hoisted, therefore cannot be called before declaration
// console.log("sub(4) :>> ", sub(4));
const sub = function (a) {
  return a - 1;
};

// sub(3);
// console.log("sub(4) :>> ", sub(4));

//? Arrow Funtions

const revealPassword = () => {
  console.log("1234567");
  const password = "123452";
  return password;
};
// console.log("revealPassword() :>> ", revealPassword());

const implicitReturn = () => "Raul";

// console.log("revealUserName() :>> ", implicitReturn());

const noParameter = (_) => "tom";
// console.log("noParameter() :>> ", noParameter());

const oneParameter = (a) => a;
// console.log(
//   'oneParameter("just one parameter!!") :>> ',
//   oneParameter("just one parameter!!")
// );

//! NEW LOOPS

// console.log("catFacts :>> ", catFacts.length);
function getCatFacts() {
  for (let i = 0; i < catFacts.data.length; i++) {
    console.log("catFacts[i] :>> ", catFacts.data[i]);
  }
}

// getCatFacts();

//? .forEach()

function catFactsForEach() {
  catFacts.data.forEach((catFact, indexNumber, originalArray) => {
    //   console.log("catFact :>> ", catFact);
    //   console.log("indexNumber :>> ", indexNumber);
    //   console.log("originalArray :>> ", originalArray);
    if (indexNumber % 2 === 0) {
      console.log("catFact", catFact);
    }
  });
}
// catFactsForEach();

//? .MAP()
function catFactsMap() {
  catFacts.data.map((catFact, indexNumber, originalArray) => {
    //   console.log("indexNumber :>> ", indexNumber);
    //   console.log("originalArray :>> ", originalArray);
    catFact.newFact = "I don't like cats";
  });
}
// catFactsMap();

const evenCatFacts = catFacts.data.map((catfact, index) => {
  if (index % 2 === 0) {
    return catfact;
  }
});

// console.log("evenCatFacts :>> ", evenCatFacts);

//? .FILTER()

const evenFilteredCatFacts = catFacts.data.filter(
  (catfact, index, originalArray) => {
    // console.log("ori :>> ", originalArray);
    // return catfact.fact.includes("dogs");
    return "hi";
  }
);
// console.log("evenFilteredCatFacts :>> ", evenFilteredCatFacts);

//! Array Mutators
// console.log("catFacts :>> ", catFacts);
// function catFactsForEach() {
//   catFacts.data.forEach((catFact, indexNumber, originalArray) => {
//     // console.log("catFact before opinion :>> ", catFact);
//     // catFact.myOpinionAboutCats = "I don't like cats";  //! this mutates the original array
//     console.log("catFact :>> ", catFact);
//     return { ...catFact, myOpinionAboutCats: "I don't like cats" };
//   });
//   console.log("catFacts :>> ", catFacts);
// }
// catFactsForEach();
// console.log("catFacts :>> ", catFacts);
function catFactsMap() {
  const newCatFacts = catFacts.data.map(
    (catFact, indexNumber, originalArray) => {
      // console.log("catFact before opinion :>> ", catFact);
      // catFact.myOpinionAboutCats = "I don't like cats";  //! this mutates the original array
      //   console.log("catFact :>> ", catFact);
      //   return { ...catFact, myOpinionAboutCats: "I don't like cats" };
      return Object.assign({}, catFact, { moreOpinions: "I am a dogs person" });
    }
  );
  //   console.log("newCatFacts :>> ", newCatFacts);
}
catFactsMap();

// const bike = {
//   brand: "Honda",
// };
// // console.log("bike :>> ", bike);
// bike.wheels = 2;
// console.log("bike :>> ", bike);

//?  SPREAD OPERATOR

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
const array3 = ["hi", "there"];
// console.log("array2 :>> ", array2);

const array4 = [...array3, ...array1];
// console.log("array4 :>> ", array4);

const person1 = {
  name: "Raul",
  nationality: "spain",
};

const person2 = {
  name: "Patricia",
  nationality: "spain",
};

const person3 = {
  ...person1,
  ...person2,
};

// console.log("person3 :>> ", person3);

// Logical operators =  ||  - && operators

// const name = "Raul";
// const name2 = "Tom";

// if (name === "Raul" || name == "Andrei") {
//   console.log("Name is correct");
// } else {
//   console.log("not correct");
// }

// if (name === "Raul" && name2 === "Tom") {
//   console.log("Name is correct");
// } else {
//   console.log("not correct");
// }

// console.log(2 > 1);

//&& returns the first falsy value, or the last truthy value
// const result = false && "whatever"; // output: false
// const result = "" && "whatever"; // output: ""
// const result = 2 && 0; // output: 0

// OR operator returns first truthy value, or the last falsy
const result = 0 || null;

console.log("result :>> ", result);
