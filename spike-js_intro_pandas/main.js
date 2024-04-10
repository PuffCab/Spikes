// console.log("Hellow World!!");

//? VARIABLES

//! Strings

var myString = "this is a string";
// console.log("myString>>", myString);

//! Numbers

var myNumber = 5;
// console.log("myNumebr>>", myNumber);

//! Boolean

var myBoolean = true;
// console.log(myBoolean);
var myBoolean2 = false;

// console.log("myBoolean2 :>> ", myBoolean2);
var myUndefined;
// console.log("myUndefined", myUndefined);

//! Array

// var myArrayString = ["one", "two", "three"];
// console.log("myArrayString :>> ", myArrayString);

var myArrayNumbers = [1, 6, 23423, 4345];
var myArrayMixed = [1, 6, true, "string...."];

// ! Objects
// var car = {
//   color: "red",
//   doors: 4,
//   extras: ["AC", "navigation system"],
// };

//! Array Methods

// var myArrayString = ["one", "two", "three"];
// console.log("myArrayString :>> ", myArrayString[2]);

// console.log(myArrayString.length);

// myArrayString.pop();
// console.log("myArrayString :>> ", myArrayString);

// myArrayString.push("five");
// console.log("myArrayString :>> ", myArrayString);
// myArrayString.reverse();
// console.log("myArrayString :>> ", myArrayString);

// //! Objects
var car = {
  color: "red",
  doors: 4,
  extras: ["AC", "navigation system"],
};

// console.log("car :>> ", car);
// console.log(car.doors);
// console.log(car.extras);

//add property to an object

car.model = "MINI";

// console.log("car :>> ", car);

//? CONDITIONAL STATEMENTS

// console.log(5 < 2);

var number1 = 10;
var number2 = 20;
// console.log(number1 === number2);
// console.log(number1 < number2);

var A = ["one", "two"];
var B = ["one", "two"];

// console.log("is A equal to B?? :>> ", A === B);

// console.log("5" === 5); // false
// console.log("5" == 5); // true
// console.log(1 < 5); // true

//* Bang Operator (logical NOT)

// console.log(1 != 5); // true;
// console.log(!(1 < 5)); //false
// console.log(!(1 > 5)); //true

//! IF/ELSE

if (12 > 13) {
  console.log("yes, it is bigger");
} else if (2 > 15) {
  console.log("this time it is bigger");
} else {
  console.log("nope, it is not greater than");
}

//! LOOPS

var favoriteMeals = [
  "soup",
  "chips",
  "pommes",
  "oreos",
  "Juice",
  "pizza",
  "fruits",
  "stews",
  "seafood",
];

console.log(favoriteMeals[1]);
console.log(favoriteMeals[2]);

// for (var i = 0; i < favoriteMeals.length; i = i + 1) {
//   // console.log("loop running");
//   // console.log(favoriteMeals[i]);
//   console.log("favoriteMeal at position " + i + " is " + favoriteMeals[i]);
// }

//? WHILE
// var i = 0
// while (i < favoriteMeals.length) {
//       console.log("favoriteMeal at position " + i + " is " + favoriteMeals[i]);
// i++
// }

// Loops over Objects

var car = {
  color: "red",
  doors: 4,
  extras: ["AC", "navigation system"],
};
console.log("car :>> ", car);

for (var property in car) {
  console.log(property, car[property]);
}

var word1 = "HELLO";
var word2 = "WORLD";

//find a way to capitalize each word
//find a way to join them into a single string

("Hello World");
