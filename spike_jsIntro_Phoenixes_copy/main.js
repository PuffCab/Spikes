// our best JS friend

// console.log("hi, i am your new best friend");

//VARIABLES (var, let, const ...for now lets talk only about var)
var myVar = "some value here";
// console.log("myVar::", myVar);

//! Variable Types

//number
var myNumber = 5;
// console.log("myNumber", myNumber);
//String

var myString = "this is a string";
// console.log("myString", myString);

// Boolean

var myBooleanTrue = true;
var myBooleanFalse = false;

// Null  and undefined

var myNullVar = null;

var myUndefinedVar; // --> Camelcase

// console.log("myUndefinedVar", myUndefinedVar);

//Arrays

const myNumberArray = [1, 2, 3];
// console.log("myNumberArray", myNumberArray);
// const myStringArray = ["this", "is", " an array of", "strings"];
const myVarArray = [myBooleanTrue, myVar];

const myMixedArray = [2, true, "string", myVar];

// console.log("myMixedArray", myMixedArray);

// Arrays : Length and index

// console.log("myMixedArray.lenght", myMixedArray.length);

// console.log("myMixedArray index of", myMixedArray.indexOf("string"));

//Array Methods

//add elements to an array
// console.log("myMixedArray", myMixedArray);
// myMixedArray.push("new value");
// console.log("myMixedArray", myMixedArray);
// myMixedArray.pop();
// console.log("myMixedArray", myMixedArray);
// myMixedArray.reverse();
// console.log("myMixedArray", myMixedArray);

const myName = "Raul";
const mySurname = "Hernández";

// console.log("My name is " + myName + " " + mySurname);

//How to use an array method : nameOfOurVariable.MethodName()

// Find the value of an element inside an array
const myStringArray = ["this", "is", " an array of", 2];
// console.log("myStringArray", myStringArray[3]);

//Objects : key-property/value pairs

const myLaptop = {
  brand: "Apple",
  model: "macbook pro",
  screenSize: 14,
  ports: ["usbC", "hdmi", "thunderbolt3"],
  keyboard: {
    material: "plastic",
    language: "german",
    keys: 30,
  },
  //   keyboardMaterial: "plastic",
  //   keyboardLanguage: "german",
};

//dot notation :
// console.log("laptop's brand --->", myLaptop.brand);
// console.log(myLaptop.ports);
// console.log(myLaptop.keyboard);

myLaptop.brand = "Lenovo";
myLaptop.year = 2023;
// console.log("myLaptop:", myLaptop);

//Logical staments

// console.log(5 < 2);
// console.log("V" == 5);
// IF statement
// console.log(89 < 6);
// if (89 < 6) {
//   console.log("yes it is less than that");
// }

// if else
// var myFavColor = "green";
// if (myFavColor === "yellow") {
//   console.log("red is my favorite color");
// } else {
//   console.log("that is not my fav color");
// }

// if else if
// var myFavColor = "red"
// if (myFavColor === "yellow") {
//   console.log("yellow is my favorite color");
// } else if (myFavColor === "green") {
//   console.log("green is my fav color");
// } else if (myFavColor === "orange") {
//   console.log("orange is my Fav color");
// } else {
//   console.log("nobdoy guessed it");
// }

var someVar;
someVar = 2;
console.log("someVar", someVar);

var numberOne = 1;
console.log(numberOne);
var numberOne = "some text";
console.log(numberOne);

//LOOPS

var phoenixes = [
  "Sonja",
  "Martha",
  "Mila",
  "Sabir",
  "Alireza",
  "Phuoc",
  "Melissa",
  "Raul",
  "Heron",
];
console.log('phoenixes.indexOf("Sabir', phoenixes.indexOf("Sabir"));

console.log(phoenixes[1]);
console.log(phoenixes[5]);

//For loops

// for (counter; condition; iterator) {
//     // Code to run
// }

// for (var counter = 0; counter <= 3; counter = counter + 1) {
//   console.log("I am looooooping");
//   console.log(counter);
// }

// for (var i = 0; i < phoenixes.length; i++) {
//   console.log(phoenixes[i]);
//   if (phoenixes[i] === "Sabir") {
//     console.log(phoenixes[i] + " is in position ", +i);
//   } else {
//     console.log(phoenixes[i] + "is not sabir");
//   }
// }

// While
// var x = 2;
// while (phoenixes.length > x) {
//   console.log(phoenixes);
//   x++;
// }
// var decimalNumber = 45.78394;
// console.log(Math.round(decimalNumber));

// var myAge = 23;
// console.log(myAge);
