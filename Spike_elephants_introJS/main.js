// console.log("Hello Github world");

// //VARIABLES (var, let, const. But let's use only let and const)

// // Variable Types

// /// Numbers
// let num = 123;
// console.log(num);

// let mySum = 3 + 5;

// console.log(mySum);
// // STRINGS
// let myString = "some characters";

// console.log(myString);

// BOOLEAN

let myBoolean = true;
let myBooleanFalse = false;

// Arrays

// let myArray = ["strings", 234, true];

// console.log(myArray);

// console.log(myArray[1]);

// let numArray = [1, 45, 67, 546, 667, 233];

// console.log(numArray.length);

// console.log(numArray.indexOf(67));

// numArray.push(666);
// console.log(numArray);

// numArray.pop();
// console.log(numArray);
// numArray.reverse();
// console.log(numArray);

// Objects

let myCar = {
  brand: "mini",
  doors: "2",
  extras: ["cd stereo", "A/C", "solar roof"],
  color: "red",
};

// console.log(myCar);

// console.log(myCar.doors);

// let ercanCar = {
//   brand: "renault clio",
//   doors: 4,
//   color: "grey",
// };

// let cabGarage = [];
// console.log("cabGarage", cabGarage);
// cabGarage.push(myCar);
// console.log("cabGarage", cabGarage);
// cabGarage.push(ercanCar);
// console.log("cabGarage", cabGarage);

// console.log("cabGarage :>> ", cabGarage);

// Conditional Statements

// console.log(1 < 2);
// console.log("five" == 5);
// console.log("5" !== 5);

// IF statement

if (4 < 3) {
  console.log("this is true");
}

// If Else
if (4 > 3) {
  console.log("this is true");
} else {
  console.log("it is false");
}

let myNum = 10;

if (myNum === 3) {
  console.log("yeah, that is my number");
} else if (myNum > 50) {
  console.log("yes it is more than that");
} else if (myNum < 5) {
  console.log("yes it is less than that");
} else {
  console.log("your guesses are over");
}

//Loops

//for loop

const elephants = [
  "can",
  "ercan",
  "roxanne",
  "olja",
  "juli",
  "monique",
  "Santiago",
  "raul",
];

for (let i = 0; i < elephants.length; i = i + 1) {
  console.log("students:  ", elephants[i]);
  if (elephants[i] === "juli") {
    console.log(elephants[i] + " is in position ", i);
    break;
  }
}

// While
// let x = 0;
// while (x < 5) {
//   console.log("object");
// }

// loop over objects
let ercanCar = {
  brand: "renault clio",
  doors: 4,
  color: "grey",
};

for (let x in ercanCar) {
  console.log(x, ercanCar[x]);
}
