console.log("Hello JS");

//Variable

// var myVar = 5;
// console.log("myVar>> ", myVar);
// myVar = "something else";
// console.log("myVar>> ", myVar);

// Variable Types

let myNum = 5; // Numbers
let myString = "this is a String"; // Strings
let myBooleanTrue = true; // Boolean
let myBooleanFalse = false; // Boolean

// Arrays
// let myNumArray = [1, 6, 9]; // Array of numbers
// let myStrArray = ["hey", "this", "is", "aasd"]; // Array of strings
// let myMixedArray = ["a word", 7, true, "asdasd", false]; // Mixed Array
// let octopusesArray = [
//   "Viktor",
//   "Sebastian",
//   "Silvia",
//   "Dickson",
//   "Jacopo",
//   "Heron",
// ];
// console.log(myStrArray);

// console.log("myStrArr >>>", myStrArray[1]);

// console.log(octopusesArray.indexOf("Silvia")); // method
// octopusesArray.pop();
// console.log("octopusesArray>>", octopusesArray);

// octopusesArray.push(5);
// console.log("octopusesArray>>", octopusesArray);
// octopusesArray.reverse();
// console.log("octopusesArray>>", octopusesArray);

// Objects

// const number = 5;
// console.log("number", number);

// const car = {
//   brand: "mercedes",
//   color: "red",
//   extras: ["nav", "solar roof", "sound system"],
//   doors: 2,
// };
// console.log("car :>> ", car);

// car.color = "klein";
// console.log("car :>> ", car);

// const secondCar = {
//   brand: "ferrari",
//   color: "red",
//   doors: 2,
// };

// let garage = [];

// garage.push(car);
// garage.push(secondCar);
// console.log("garage :>> ", garage);

// Conditional statements

//// comparisson operators

console.log(5 == "5");
console.log(5 === "5");
console.log("yes" == "yes");
console.log(5 < 3);
console.log(!true);
console.log(!(5 < 2));

// if
// if (3 > 2) {
//   console.log("yeah it is");
// }

// if Else
// if (3 < 2) {
//   console.log("yeah it is");
// } else {
//   console.log("it is not");
// }

// else if
// let doors = 1;
// if (doors === 4) {
//   console.log("yeah your gess is right");
// } else if (doors > 5) {
//   console.log("nope, it is not more than that");
// } else if (doors < 2) {
//   console.log("yeah, it is less than that");
// } else {
//   console.log("you have no more tries");
// }

// LOOPS

let octopusesArray = [
  "Viktor",
  "Sebastian",
  "Silvia",
  "Dickson",
  "Jacopo",
  "Heron",
];

// For loop

for (let i = 0; i < octopusesArray.length; i = i + 1) {
  //   console.log("i am looping");
  console.log(octopusesArray[i]);
  if (octopusesArray[i] === "Jacopo") {
    console.log(octopusesArray[i] + " is in position " + i);
    break;
  }
}
// console.log(octopusesArray[0]);
// console.log(octopusesArray[1]);

// while

// let x = 0;
// while (x < 5) {
//   console.log("something");
//   x++;
// }

// loop over an Object
const car = {
  brand: "mercedes",
  color: "red",
  extras: ["nav", "solar roof", "sound system"],
  doors: 2,
};

for (let x in car) {
  //   console.log("i am looping");
  console.log(x, car[x]);
}

console.log(car.brand);
console.log(car.doors);
