function hi() {
  console.log("HI");
}

hi();
hi();
hi();

function hi2(something) {
  console.log("Hi, " + something);
}
let eveningGreet = "good evening";

hi2("good morning");
hi2(eveningGreet);

function sum(a, b) {
  let result = a + b;
  //   console.log("result :>> ", result);
  return result;
}

sum(5, 7);

const calculation = sum(10, 9);
console.log("calculation :>> ", calculation);
// console.log("result :>> ", result);

function menuCost(main, dessert) {
  let totalCost = main + dessert;
  console.log("totalCost :>> ", totalCost);
  return totalCost;
}

let pizza = 20;
let tiramissu = 7;

const todaysMenu = menuCost(pizza, tiramissu);

function payMenu(menuPrice, budget) {
  console.log("budget :>> ", budget);
  if (!budget) {
    alert("go back home and take your wallet!");
  } else if (budget > menuPrice) {
    console.log("here you have my money");
  } else {
    console.log("can i do the dishes??");
  }
}
let myBudget = 20;

payMenu(todaysMenu, myBudget);

function someFunction(a, b) {
  //.....
}

const someArrowFunction = function myFunction() {
  //....
};
//CALLBACK

//BUIL YOUR CODE ALWAYS INSIDE  FUNCTIONS
// DO NOT CREATE GLOBAL VARIABLES

//FOR THE EXERCISES

//DO NOT USE Math.min(), Math.max()

//LOOPS : while, forLoop,  => .forEach(), .map()

//Methods : .join(), .split(),

function totalCalculation(parameter) {
  return function doSthWithParameter() {
    const myNumber = 9;
    return myNumber;
  };
}

const c = totalCalculation();
console.log("c :>> ", c);
console.log("totalCalculation :>> ", totalCalculation(100)()); //the second function call is for the second function inside

// function getData() {

//     return fetch("www.fakestore.com").then().then().catch()

// }

// export default function HOME() {

//     return (
//         <p>asdasdasd</p>
//     )
// }
