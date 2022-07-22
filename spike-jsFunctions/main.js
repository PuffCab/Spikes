function sayHello() {
  console.log("Hellooo");
}

// sayHello();

function greetSomeone(parameter) {
  console.log(parameter);
  let a = 1 + 2;
  console.log(a);
}
let morningGreet = "good morning";
let lunchGreet = "mahlzeit!";
// greetSomeone("good morning");
// greetSomeone("nighty");
// greetSomeone("hello");
// greetSomeone(morningGreet);
// greetSomeone(lunchGreet);

function greetSomeoneWithName(morningGreet, jan) {
  console.log(morningGreet + " , " + jan);
}

let jan = "jan";
// greetSomeoneWithName(morningGreet, jan);
// greetSomeoneWithName(jan, morningGreet);

function sumNums(a, b) {
  let result = a + b;
  console.log(result);
  return result;
}
// sumNums(1, 2);
// console.log("result outside the function :>> ", result);
console.log(sumNums(3, 4));

let result = sumNums(20, 59);
console.log("result outside function :>> ", result);

function multiply(params) {
  let multiply = params * 3;
  console.log(multiply);
}
// multiply(result);

function myCart(productA, productB) {
  console.log("you added to your cart " + productA + " and also " + productB);
}

let productA = "iphone";
let productB = "iron pan";

myCart(productA, productB);

function cartTotalPrice(priceA, priceB) {
  let totalPrice = priceA + priceB;
  return totalPrice;
}

let priceIphone = 800;
let pricePan = 100;
let totalPrice = cartTotalPrice(priceIphone, pricePan);
cartTotalPrice(priceIphone, pricePan);

function yourCredit(totalPrice) {
  let myCredit = 900;

  if (totalPrice < myCredit) {
    console.log("you have enought credit to buy");
  } else {
    console.log("you can buy it");
  }
}

yourCredit(totalPrice);

//forLoops, while loops, if , if else, functions

// ,max()  , .min() ...do not use them

// DOM Manipulation ones ... you can skip them until the spike

// try to push your done exercises to Github
