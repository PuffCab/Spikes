function sayHello() {
  console.log("Hallo");
}

// sayHello();
// sayHello();
// sayHello();
// sayHello();

let silvia = "Silvia";
let viktor = "Viktor";
let morning = "Good Morning";
let evening = "Good evening";

function greetSomeone(dayMoment, personName) {
  console.log(dayMoment + " " + personName);
}

// greetSomeone("Silvia");
// greetSomeone(silvia);
// greetSomeone(viktor);

// greetSomeone(morning, viktor);
// yagni

//Return

// function addNumbers(a, b) {
//   let result = a + b;
//   //   console.log(result);
//   return result;
// }
// addNumbers(4, 3);
// // console.log(result);
// console.log(addNumbers(10, 6));
// let myResult = addNumbers(40, 60);
// console.log("myResult >>>", myResult);

let callos = 8;
let tiramisu = 5;

function menuPrice(mainPrice, dessertPrice) {
  let totalPrice = mainPrice + dessertPrice;
  return totalPrice;
}

let menuCost = menuPrice(callos, tiramisu);

function totalBill(menuCost) {
  let myBudget = 20;
  console.log(menuCost);
  if (myBudget > menuCost) {
    console.log("Keep the change");
  } else {
    console.log("can I clean the dishes?");
  }
}

totalBill(menuCost);

// for loops / while loops
// some methods .pop, .push, .join() , splice()

// DO NOT USE .max() , .min()

//Skip the DOM manipulation
