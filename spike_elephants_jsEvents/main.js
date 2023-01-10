console.log("data :>> ", data);

const cardsContainer = document.getElementById("cards-container");
for (let i = 0; i < data.length; i++) {
  const divCard = document.createElement("div");
  divCard.setAttribute("class", "col-6 col-sm-12 col-md-6 col-lg-2");
  divCard.classList.add("card");
  //   divCard.setAttribute("style", "width: 10rem;");

  if (i % 2 === 0) {
    divCard.classList.add("text-bg-primary");
  }
  divCard.classList.add("border-danger");

  const img = document.createElement("img");
  img.setAttribute("src", data[i].image);
  img.setAttribute("alt", "product picture");

  const cardBody = document.createElement("div");
  divCard.classList.add("card-body");

  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.innerText = data[i].price;

  const p = document.createElement("p");
  divCard.classList.add("card-text");
  p.innerText = data[i].title;

  divCard.appendChild(img);
  divCard.appendChild(h5);
  divCard.appendChild(p);
  divCard.appendChild(cardBody);
  cardsContainer.appendChild(divCard);
}

function hello() {
  alert("Hello world");
}

// Callbacks
//#region
// function callbackFunction() {
//   console.log("i am a callback");
// }

// function someFunction(oneFunction) {
//   oneFunction();
//   console.log("i am doing something");
// }

// someFunction(callbackFunction);

// calculator without callbacks

// function calculator(num1, num2, calcType) {
//   if (calcType === "sum") {
//     return num1 + num2;
//   } else if (calcType === "multiply") {
//     return num1 * num2;
//   }
// }

// console.log("result:  :>> ", calculator(20, 45, "multiply"));

// // calculator WITH callbacks

// function sum(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function calc(num1, num2, callback) {
//   if (typeof callback !== "function") {
//     console.log("sorry this not a math opperation");
//   }
//   return callback(num1, num2);
// }

// function sub(a, b) {
//   return a - b;
// }

// function tellNumbers(a, b) {
//   console.log("you selected numbers " + a + " and " + b);
//   //   return "you selected numbers " + a + " and " + b;
// }
// console.log("result2", calc(30, 500, sub));

// console.log(
//   calc(234, 4589, function print(a, b) {
//     consle.log(first);
//   })
// );

//#endregion

const helloButton = document.querySelector(".btn");

// helloButton.addEventListener("click", hello);
helloButton.addEventListener("click", function blueBg(event) {
  console.log("event: ", event);
  helloButton.classList.add("blue");
});

const testButton = document.getElementById("test");
testButton.addEventListener("click", changeColor);
const p = document.querySelector("p");
const span = document.querySelector("span");
function higlight(event) {
  //   event.stopPropagation();
  p.classList.toggle("red");
}
span.addEventListener("mouseenter", higlightSpan);
p.addEventListener("click", higlight);
function changeColor(e) {
  console.log("e :>> ", e.target.value);
  testButton.classList.toggle("red");
}

function higlightSpan() {
  span.classList.toggle("blue");
}

const html = document.getElementById("html");
const body = document.getElementById("body");
html.addEventListener("click", alertBox, false);
// body.addEventListener("click", alertBox, false);
testButton.addEventListener("click", alertBox, false);

function alertBox(event) {
  alert(
    "you clicked" +
      event.target.tagName +
      " and this is the " +
      event.currentTarget.tagName
  );
}
