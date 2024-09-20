function sum() {
  const result = 3 + 5;
  console.log("result is :>> ", result);
}

// sum(); //Function call

function sumNumbers(number1, number2) {
  const result = number1 + number2;
  console.log("result is :>> ", result);
}

sumNumbers(10, 45);

sumNumbers(890, 500);

sumNumbers(77, 90);

function sayHi(greet, name) {
  console.log(greet + " !! " + name);
}
sayHi("Good Morning", "Ben");
sayHi("Good evening", "Ben");
sayHi("Ben", "good Night");

function myName() {
  const raulName = "Raúl";
  console.log("raulName :>> ", raulName);
  //   return raulName;
  return "anything that comes to my mind";
}

// console.log("raulName :>> ", raulName);
myName();
console.log("myName() :>> ", myName());

const revealName = myName();

console.log("revealName :>> ", revealName);

function calculateBill(foodPrice, drinksPrice) {
  const total = foodPrice + drinksPrice;
  console.log("total :>> ", total);
  return total;
}

const pasta = 34;
const bier = 5;

calculateBill(30, 15);

// calculateBill(pasta, bier);

function getChange(totalBill, money) {
  console.log("totalBill :>> ", totalBill);
  console.log("money :>> ", money);

  if (typeof money !== "number") {
    alert("Sorry, we only take Cash!!");
  }
  const totalChange = money - totalBill;
  console.log("totalChange :>> ", totalChange);

  if (totalChange > 0) {
    console.log("your change is " + totalChange + " €");
  } else if (totalChange < 0) {
    console.log("Sorry, you are " + totalChange + " short");
  } else {
    console.log("you get no change");
  }
}

const bill1 = calculateBill(pasta, bier);
console.log("bill1 :>> ", bill1);
getChange(bill1, 100);
const pizza = 20;
const cola = 7;
const bill2 = calculateBill(pizza, cola);
// getChange(bill2, 10);
// getChange(bill2, 50);
getChange(bill2, 27);

//For the exercises, do not use Math.min() or Math.max()
//with the arrays we will need to use methods like .sort(), .split() , .join()
