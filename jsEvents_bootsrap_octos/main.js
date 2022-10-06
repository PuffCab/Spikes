console.log("data :>> ", data);

let container = document.getElementById("cards-container");
for (let i = 0; i < data.length; i++) {
  let divCard = document.createElement("div");
  // divCard.setAttribute("class", "card")

  divCard.setAttribute("style", "width: 18rem;");
  divCard.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");
  divCard.classList.add("card");
  divCard.classList.add("border-dark");

  if (i % 2 === 0) {
    divCard.classList.add("text-bg-primary");
  }

  let img = document.createElement("img");
  img.setAttribute("src", data[i].image);
  img.setAttribute("alt", data[i].title);
  img.classList.add("card-img-top");

  let divCardBody = document.createElement("div");
  divCardBody.classList.add("card-body");

  let h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.innerText = data[i].price;

  let p = document.createElement("p");
  p.classList.add("card-text");
  p.innerText = data[i].title;

  divCardBody.appendChild(p);
  divCardBody.appendChild(h5);
  divCard.appendChild(divCardBody);

  divCard.appendChild(img);
  container.appendChild(divCard);
}

function helloEvent() {
  console.log("Hello there");
  alert("alert!!!!");
}

const colorButton = document.getElementById("color-button");
function changeColor(e) {
  console.log("event object", e);
  colorButton.classList.toggle("red");
}
colorButton.addEventListener("click", changeColor);

let myHtml = document.getElementById("html");
let myBody = document.getElementById("body");
let myDiv = document.getElementById("div");
myHtml.addEventListener("click", alertBox);
myBody.addEventListener("click", alertBox);
myDiv.addEventListener("click", alertBox);
// colorButton.addEventListener("click", alertBox);

function alertBox(event) {
  alert(
    `this is the ${event.currentTarget.tagName} and you clicked the  ${event.target.tagName} `
  );
  //   alert(`this is the ${event.target.tagName}`);
}

let span = document.getElementById("span");
let pTag = document.getElementById("p-tag");

span.addEventListener("click", function () {
  console.log("general info");
});

pTag.addEventListener("click", function (event) {
  event.stopImmediatePropagation();
  console.log("very specific info");
});

//////! Callback example

// function callback() {
//   console.log("this is the callback function");
// }
// function callback2() {
//   console.log("this is the callback2 function");
// }

// function testCallback(a) {
//   console.log("this is the test function");
//   a();
// }
// testCallback(callback2);
/////! Calculator without callbacks

// let calc = function (num1, num2, calcType) {
//   if (calcType === "sum") {
//     return num1 + num2;
//   } else if (calcType === "multiply") {
//     return num1 * num2;
//   }
// };

// console.log(calc(3, 2, "sum"));

/////! Calculator WITH callbacks
// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// let doSomething = function (a, b) {
//   console.log("your numbers are " + a + " and " + b);
// };

// let calculate = function (num1, num2, callback) {
//   return callback(num1, num2);
// };

// console.log(calculate(100, 45, add));
// console.log(calculate(100, 45, multiply));
// console.log(calculate(100, 45, doSomething));

// console.log(
//   calculate(454, 3453454, function (a, b) {
//     return a - b;
//   })
// );
