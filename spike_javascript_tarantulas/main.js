// console.log("Hello World");
// console.log("this is a console.log");

//how to make comments in a JS file : with //  ( ctrl + #)
//! VARIABLE TYPES
//+ keywords to create a variable : var, let, const
//?String
// const myName = "Raul";
const mYName = "asdasd";
// const my Name = "Tom" // do not do this
const myCar = "Mini Copper";
// console.log("myName value is:", myName);
// console.log(myCar);
//?Number
const today = 29;
const tarantulasWebdevGroup = 2;

//?Booleans

const trueVariable = true;
const falseVariable = false;

//?Object

const raulCar = {
  color: "Red",
  wheels: 4,
  doors: 5,
  ps: 116,
  radio: true,
  combustible: "benzine",
  seats: {
    color: "black",
    material: "leather",
    number: 4,
  },
};

// console.log("Raul's car:", raulCar);

//+ DOT NOTATION (to access properties from objects)

console.log("the color of the car:", raulCar.color);

console.log("seat's material:", raulCar.seats.material);

//? undefine

let benCar;

// console.log("benCar :>> ", benCar);

//? Null
const pierreCar = null;
// console.log("pierreCar", pierreCar);

//! Comparisson Operators

const number1 = 340;
const number2 = 20;
const number3 = 10;
const number4 = "10";

// console.log(number1 < number2);
// console.log(number1 > number2);
// console.log(number2 === number3);
// console.log(number3 == number4);
// console.log(number3 === number4);

const isNum1MoreThanNum2 = number1 < number2;

// console.log(isNum1MoreThanNum2);
// const num1 = 123123;
const sum = number1 + number2;

// console.log("sum", sum);

//? Conditional Statements

if (number1 < number2) {
  console.log("first number is less than the second");
} else if (number1 > number2) {
  console.log("yes, number1 is bigger than number2");
  console.log("number1", number1);
} else {
  console.log("none of the previous conditions are true");
}
// console.log("myVar", myVar);
// var myVar = "asdasd";

// console.log("a :>> ", a);
// let a;
// const b = a;
// console.log("b :>> ", b);

const myName = "Raul";
console.log(myName);

//? Arrays

//array of strings
// const favMeals = ["rice and stew", "korean fried chicken", "croquetas"];
// array of numbers
// const favNumbers = [22, 17, 42];
const booleansArray = [true, false, false, true];
const objectsArray = [
  { name: "tom", age: 22 },
  { name: "Sue", age: 56 },
];
const car1 = { brand: "Opel", year: 2020 };
// console.log("car1 :>> ", car1);
const car2 = { brand: "BMW", year: 2024 };
const mycars = [car1, car2];

const mixedArray = [true, 34, "raul"];

//! Array methods

const favMeals = ["rice and stew", "korean fried chicken", "croquetas"];
// console.log("favMeals :>> ", favMeals);

favMeals.push("paella");
// console.log("favMeals :>> ", favMeals);

// console.log("favMeals length", favMeals.length);

favMeals.pop();
// console.log("favMeals :>> ", favMeals);
// console.log("favMeals length", favMeals.length);

favMeals.join();

// console.log("favMeals :>> ", favMeals.join(" + "));
const combinedFavMeals = favMeals.join(" and ");
// console.log("combinedFavMeals :>> ", combinedFavMeals);

//Index vs Lenght
//length: number of elements inside an Array
//index: position of an element inside an Array. Starts from 0
const koreanChicken = favMeals.at(1);
// console.log("koreanChicken :>> ", koreanChicken);

//bracket notation : to access elments inside an Array

// console.log(favMeals[2]);
const favNumbers = [22, 17, 42];
const myFavNumber = favNumbers[0];
// console.log("myFavNumber :>> ", myFavNumber);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log("fruits :>> ", fruits);
// fruits.shift();
// console.log(fruits.shift());

//! LOOPS
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

//? While Loop

let num = 3;

while (num > 0) {
  const countdown = num;
  console.log("num :>> ", countdown);
  num--;
}

//? For Loop

// for (initialization(let x = 0); condition(x < 5); iterator / CountQueuingStrategy(x = x + 1)) {
//     statement : do this as long as the condition is true
// }

for (let x = 5; x < 5; x = x + 1) {
  console.log("value of x is:", x);
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits :>> ", fruits);

for (let x = 0; x < fruits.length; x = x + 2) {
  console.log("fruits :>> ", fruits[x]);
}
