// console.log("Hello World");

//! VARIABLES TYPES

//key words to define a variable : var, let , const

//?String
const myName = "My name is raul";
// console.log("myName", myName);
const string2 = "34535444";

//?Number
const myFavNumber = 234;

//?Boolean
const myBoolean = true;
// console.log("myBoolean", myBoolean);

const myBooleanFalse = false;

//? Undefined
// const some thing =

let myNoValueVariable;
// console.log("myNoValueVariable", myNoValueVariable);

//? Null type

const nullVar = null;

//? Object

const myCar = {
  color: "red",
  doors: 2,
  brand: "mini",
  spareWheel: false,
  engine: {
    part1: "cilinder",
    embol: "rounded embol",
  },
};
// console.log("myCar", myCar);

//dot notation
// console.log(myCar.color);
// console.log(myCar.engine.embol);

//! Conditional Operators

// console.log(5 < 2);
// console.log(10 == "10");
// console.log(10 === "10"); //try to always this STRIC comparisson.

//! CONDITIONAL STATEMENTS

const number1 = 10;
const number2 = 10;

// if (number1 < number2) {
//   console.log("yes, number1 is smaller than number 2");
// } else if (number1 === number2) {
//   console.log("yes both numbers are equal");
// } else {
//   console.log("nope, number1 is NOT smaller than num2");
// }

//!ARRAYS

// let arrayOfMentor = ["Emily", "Killian", "Raul"];
// console.log("arrayOfMentor", arrayOfMentor);
let favNumbers = [1, 33, 13];

let mixedArray = ["red", 5, { name: "tom", surname: "rodriguez" }, true];
// console.log("mixedArray", mixedArray[2].surname);

let arrayOfMentors = ["Emily", "Killian", "Raul"];
// console.log("arrayOfMentors", arrayOfMentors);
// console.log(arrayOfMentors[0]);
console.log(arrayOfMentors);

console.log(arrayOfMentors.length);

const someNumber = 5;
const academyName = "code academy berlin";

// console.log(someNumber.length);
// console.log(academyName.length);
const newMentor = "Muayid";
arrayOfMentors.push(newMentor);
console.log("arrayOfMentors", arrayOfMentors);
arrayOfMentors.pop();
console.log("arrayOfMentors", arrayOfMentors);

console.log(arrayOfMentors[0]);
console.log(arrayOfMentors[1]);
console.log(arrayOfMentors[2]);
console.log(arrayOfMentors[3]);

//! FOO LOOPs

// for (let i = 0; 3 > 1; i = i + 1) {
//   console.log("i::", i);
// }

for (let i = 0; 3 > i; i++) {
  console.log("i::", i);
}

for (let i = 0; i < arrayOfMentors.length; i++) {
  console.log(arrayOfMentors[i]);
}
// for (let i = 0; i <= arrayOfMentors.length; i++) {
//   console.log(arrayOfMentors[i]);
// }

//! WHILE loop
// const a = 0;
let a = 0;
while (a < 10) {
  console.log("The number is " + a);
  a++;
}
