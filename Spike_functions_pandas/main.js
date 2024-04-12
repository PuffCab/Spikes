var favDishes = ["pizza", "pasta", "paella", "schnitzel"];

function printFavDish() {
  console.log("favDishes :>> ", favDishes[2]);
}
// printFavDish();
// for (let i = 0; i < favDishes.length; i++) {
//   console.log("loop favDishes :>> ", favDishes[i]);
// }
// printFavDish();

const car = {
  color: "red",
  brand: "Opel",
  doors: 4,
};

// function greet() {
//   console.log("Good Morning");
// }
function greet(nightGreet, someName) {
  //   console.log(greetType + "! " + name);
  console.log(nightGreet + "! " + someName);
}

// greet("good morning", "Vaclav");
// greet("good Evening", "Patrick");
var nightGreet = "Good Night";
var someName = "Baseer";
// greet(nightGreet, someName);
// greet(someName, nightGreet);

function sum(a, b) {
  var sumOperation = a + b;
  console.log("sumOperation :>> ", sumOperation);
  return sumOperation;
  var asdasd = "asdasd";
}

// console.log("sum(45,78) :>> ", sum(45, 78));
// var result = sum(7, 89);

// console.log("result :>> ", result);
// sum(4, 6);

function calculateBill(food, drink) {
  var total = food + drink;
  console.log("total :>> ", total);
  return total;
}

var pasta = 100;
var bier = 4;

var myBill = calculateBill(pasta, bier);

function getChange(totalBill, money) {
  console.log("totalBill :>> ", totalBill);
  console.log("money :>> ", money);
  var totalChange = money - totalBill;

  //check that money is a number

  if (typeof money !== "number") {
    alert("i only accept money in official currency");
  }
  //   console.log("totalChange :>> ", totalChange);
  // we pay more than the totall bill : get some change
  if (totalChange > 0) {
    console.log("you get " + totalChange + "€ change");
  } else if (totalChange < 0) {
    console.log("you owe " + Math.abs(totalChange) + "€ money");
  } else {
    console.log("you get no change");
  }
  //we pay less than the total bill : we owe some money

  //we pay the same: no chage
}

getChange(myBill, 5);

//Elevator function: Lets build a function that, knowing from which are calling the elevator, and knowing in which floor the elevator is, we get if the elevar should go up or down

//write a funtion

function getElevatorDirection(elevatorFloor, ourFloor) {
  // find out elevators direction

  if (elevatorFloor > ourFloor) {
    console.log("elevator goes DOWN");
    return "down";
  } else if (elevatorFloor < ourFloor) {
    console.log("elevator goes UP");
    return "up";
  } else {
    console.log("open doors, please!");
    return "same floor";
  }
}

var direction = getElevatorDirection(8, 1);
// console.log("direction :>> ", direction);

function getElevatorTime(elevatorDirection, numberOfFloors) {
  var upTime = 2;
  var downTime = 0.5;
  var elevatorTime;
  //up
  if (elevatorDirection === "up") {
    console.log("going up for " + numberOfFloors * upTime + " seconds");
    elevatorTime = numberOfFloors * upTime;
    return elevatorTime;
  } else if (elevatorDirection === "down") {
    //down
    console.log("going down for " + numberOfFloors * downTime + " seconds");
    elevatorTime = numberOfFloors * downTime;
    return elevatorTime;
  } else {
    //same floor
    console.log("i am here already");
    elevatorTime = 0;
    return elevatorTime;
  }
}

getElevatorTime(direction, 6);
console.log(getElevatorTime(direction, 6));

//EXERCISES

//user array method such us : .push(), .pop(), .sort(), .split(), .join()

//DON't use Math.max, Math.min
