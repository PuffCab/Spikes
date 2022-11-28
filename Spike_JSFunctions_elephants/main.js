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

// let myBoolean = true;
// let myBooleanFalse = false;

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

// let myCar = {
//   brand: "mini",
//   doors: "2",
//   extras: ["cd stereo", "A/C", "solar roof"],
//   color: "red",
// };

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

// if (4 < 3) {
//   console.log("this is true");
// }

// // If Else
// if (4 > 3) {
//   console.log("this is true");
// } else {
//   console.log("it is false");
// }

// let myNum = 10;

// if (myNum === 3) {
//   console.log("yeah, that is my number");
// } else if (myNum > 50) {
//   console.log("yes it is more than that");
// } else if (myNum < 5) {
//   console.log("yes it is less than that");
// } else {
//   console.log("your guesses are over");
// }

//Loops

//for loop

// const elephants = [
//   "can",
//   "ercan",
//   "roxanne",
//   "olja",
//   "juli",
//   "monique",
//   "Santiago",
//   "raul",
// ];

// for (let i = 0; i < elephants.length; i = i + 1) {
//   console.log("students:  ", elephants[i]);
//   if (elephants[i] === "juli") {
//     console.log(elephants[i] + " is in position ", i);
//     break;
//   }
// }

// While
// let x = 0;
// while (x < 5) {
//   console.log("object");
// }

// loop over objects
// let ercanCar = {
//   brand: "renault clio",
//   doors: 4,
//   color: "grey",
// };

// for (let x in ercanCar) {
//   console.log(x, ercanCar[x]);
// }

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

function sayHello() {
  console.log("hello");
}

// sayHello();
// sayHello();
// sayHello();

function greetSomeone(greetingType) {
  console.log(greetingType);
}

// greetSomeone("good morning");

// greetSomeone("good evening");

function neededIngredients(ingredient1, ingredient2) {
  let units = 10;
  console.log(
    "to cook this recipe I need " +
      units +
      " " +
      ingredient1 +
      " and " +
      ingredient2
  );
}

// neededIngredients("carrots", "onions");
// neededIngredients("potatos");

// let main = "köfte";
// let dessert = "baklava";
function menuOfTheDay(dessert, main) {
  console.log("today's menu is: " + dessert + " and " + main);
}
// menuOfTheDay(dessert, main);
let a = 1;
let b = 2;
// function sum(c, d) {
//   console.log("a is " + a);
//   let result = a + b + c + d;
//   console.log(result);
//   return result;
//   let something = "asdasdd"
// }

// sum(40, 50);
// console.log(sum(40, 50));

// const myResult = sum(100, 600);

// const myResult2 = sum(10000, 20000);
// console.log("myResult2", myResult2);

// console.log("myResult :>> ", myResult);

function menuOfTheDay(dessert, main) {
  console.log("today's menu is: " + dessert + " and " + main);
}

function menuPrice(mainPrice, dessertPrice) {
  let totalPrice = mainPrice + dessertPrice;
  console.log(totalPrice);
  return totalPrice;
}
// menuPrice(4, 5);
// console.log(menuPrice(7, 5));
const menuCost = menuPrice(40, 5000000);
console.log("menuCost :>> ", menuCost);

function totalBill(menuPrice) {
  let myBudget = 10;
  console.log("menuPrice", menuPrice);
  if (menuPrice > myBudget) {
    console.log("may I clean the dishes?");
  } else {
    console.log("thanks , i will be coming back");
  }
}

totalBill(menuCost);

const arrowFunction = (parameter) => {
  console.log(parameter);
};

arrowFunction("asdasdasd");

//forLoops while
//.sort(), .slice()
//.max().min()
