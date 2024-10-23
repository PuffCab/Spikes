console.log("Functions!!");
console.log("Hi there");

// const num1 = 2;
// const num2 = 10;
// const newNumber = num1 + num2;
// console.log("newNumber", newNumber);

function sayHi() {
  console.log("Good Morning");
}

// sayHi();
// sayHi();
// sayHi();
// sayHi();

function resusableGreet(greetType, name) {
  console.log(greetType + " " + name + " !!");
}

// resusableGreet("Good Evening", "Ben");
// resusableGreet("Good Morning", "Emily");
// const greet3 = "Good Night";
// const greet4 = "Servus";
// const name1 = "Jost";
// const name2 = "Killian";
// resusableGreet(greet4, name1);
// resusableGreet(name1, greet4);
// const greetType = 1231233;
// const name = "Lucas";
// resusableGreet(name, greetType);

function sum(a, b) {
  const result = a + b;
  return "anything";
  console.log("result", result);
}
sum(4, 7);
// console.log("sum:::", sum(200, 500));
const sumResult = sum(3000, 70000);
// console.log("sumResult", sumResult);

function calculateBill(foodPrice, DrinksPrice) {
  const total = foodPrice + DrinksPrice;
  console.log("total", total);
  return total;
}

const pasta = 36;
const bier = 7;
console.log("typeof pasta", typeof pasta);

calculateBill(pasta, bier);

function getChange(totalBill, money) {
  console.log("totalBill", totalBill);
  console.log("money", money);
  if (typeof totalBill !== "number" || typeof money !== "number") {
    alert("that doesn't look like a bill");
  }
  //   if (typeof money !== "number") {
  //     alert("we only take cash");
  //   }

  const totalChange = money - totalBill;

  console.log("totalChange", totalChange);

  if (totalChange > 0) {
    console.log("your change is " + totalChange + "€");
  } else if (totalChange < 0) {
    console.log("sorry, you are " + totalChange + "€ short");
  } else {
    console.log("no change for you");
  }
}

// const bill1 = calculateBill(pasta, bier);
// console.log("bill1", bill1);
// getChange(bill1, "just some money");

//! Function expression
myFunction();
function myFunction(params) {
  //some code here
  console.log("my function");
}
// const randomValue = myFunction()

//! Arrow functions
// arrowFunction();
const arrowFunction = (params) => {
  //some code here
  console.log("my arrow function");
};
// arrowFunction();
// const anotherVariable = arrowFunction();

const coolFunction = (_) => console.log("asdasd");

const myH2 = document.createElement("h2");
myH2.innerText = "this is being generated from my JS file";

const body = document.querySelector("body");
body.appendChild(myH2);
