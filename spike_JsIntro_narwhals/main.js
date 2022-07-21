console.log("hello");

// var / let / const

// var myName = "Raul";
// console.log("myName :>> ", myName);

// var myName = "Paul";
// console.log("myName :>> ", myName);
let mySurname = "hernandez";
console.log(mySurname);
const mySecondSurname = "mateos";
console.log(mySecondSurname);

// Variable types

//Numbers
let myNumber = 23;
//String
// let myString = "awadsdasd";
// let myStringSingQ = "awadsdasd";
// boolean
// let myBoolean = true;
// let myBooleanFalse = false;
// Arrays
// let myArray = [13, "my string", false]; // mixed array
// let numArray = [2, 4, 5];
// let stringArray = ["one", "two", "something"];

// console.log("stringArray :>> ", stringArray);

// console.log(stringArray[0]);
// console.log(stringArray.indexOf("something"));
// Array Methods

// add element to an array
// stringArray.push("John");
// console.log("stringArray :>> ", stringArray);
// stringArray.pop();
// console.log("stringArray :>> ", stringArray);
// stringArray.reverse();
// console.log("stringArray :>> ", stringArray);

// Variable Type Object

// let myPet = {
//   type: "dog",
//   name: "boni",
//   color: "brownish",
//   legs: 4,
// };
// console.log("myPet :>> ", myPet);

// myPet.color = "black";
// console.log("myPet :>> ", myPet);

// let mySecondPet = {
//   type: "cat",
//   name: "claws",
//   color: "orange",
//   legs: 3,
// };

// let petsArray = [];
// console.log(petsArray);
// petsArray.push(myPet);
// petsArray.push(mySecondPet);
// console.log(petsArray);

// Comparison Opertatos
// console.log(5 < 2);
// console.log("5" == 5); // swallow comparisson (just value)
// console.log("5" === 5); // strict comparisson (value && type)

// bang Operator
// console.log(!false);
// console.log(!(5 < 2));

// Conditional statemnts

// If condition
// if (5 > 2) {
//   console.log("yes, that is true");
// }

// Else
// if (5 < 2) {
//   console.log("yes, that is true");
// } else {
//   console.log("nope, it is False");
// }

// IF -Else If
let a = 1;

let b = 6;

if (a > b) {
  console.log("yes, that is more");
} else if ((a = 1)) {
  console.log("yes it is one");
} else if (a < b) {
  console.log("it is lesss");
} else {
  console.log("both are equal");
}

let narwhals = ["emily", "jan", "philipp", "alberto", "karolina"];
// console.log(narwhals.length);
// Loop

// for (let i = 0; i < 7; i = 1 + i) {
//   console.log("print this");
// }
for (let i = 0; i < narwhals.length; i++) {
  //   console.log(i);
  if (narwhals[i] === "alberto") {
    console.log("Alberto has index " + i);
    narwhals.push(i);
    break;
  } else {
    console.log("this is not Alberto");
  }
}
// console.log(narwhals);
// console.log("narwhals[3] :>> ", narwhals[3]);

// while Loop

let x = 0;
while (x < 5) {
  console.log("x is less than 5");
  x++;
}
