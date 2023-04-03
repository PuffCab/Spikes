console.log("data", data);

// console.log("data[0].description", data[0].description);

// for (let i = 0; i < data.length; i++) {
//   var tBody = document.getElementById("tBody");

//   var tr = document.createElement("tr");
//   var id = document.createElement("td");
//   id.innerText = data[i].id;

//   var title = document.createElement("td");
//   title.innerText = data[i].title;

//   var price = document.createElement("td");
//   price.innerText = data[i].price;

//   tr.appendChild(id);
//   tr.appendChild(title);
//   tr.appendChild(price);

//   tBody.appendChild(tr);
// }

function createCards() {
  for (let i = 0; i < data.length; i++) {
    var container = document.getElementById("container");

    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.setAttribute("style", "width: 18rem;");

    var img = document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src", data[i]["Species Illustration Photo"].src);
    img.setAttribute("alt", data[i]["Species Illustration Photo"].alt);
    img.setAttribute("title", data[i]["Species Illustration Photo"].title);

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    var h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerText = data[i]["Species Name"];

    var p = document.createElement("p");
    p.classList.add("card-text");
    p.innerHTML = data[i].Taste;

    cardBody.appendChild(h5);
    cardBody.appendChild(p);

    cardDiv.appendChild(cardBody);
    cardDiv.appendChild(img);

    container.appendChild(cardDiv);
  }

  addEvents();
}
function hello() {
  console.log("hi there");
  alert("some secret got revealed");
}
createCards();
//! Callbacks
//#region
function one() {
  console.log("I am a callback function");
}

function two(IAmAParameter) {
  console.log("I am function Two");
  console.log("IAmAParamter", IAmAParameter);
  IAmAParameter();
}
console.log("without return", two(one()));
two(one);

// function calc(num1, num2, calcType) {
//   if (calcType === "sum") {
//     return num1 + num2;
//   } else if (calcType === "multiply") {
//     return num1 * num2;
//   }
// }

// console.log("calc sum", calc(3, 8, "sum"));
// console.log("calc sum", calc(3, 8, "multiply"));

function suma(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

function subs(num1, num2) {
  return num1 - num2;
}

function calcWithCallbacks(num1, num2, calcType) {
  if (typeof calcType === "function") {
    return calcType(num1, num2);
  } else {
    alert("you need to use a function");
  }
}

function showNumbers(num1, num2) {
  alert("your numbers are " + num1 + " and " + num2);
}

// console.log("calcWithCallbacks sum", calcWithCallbacks(20, 56, suma));
// console.log("calcWithCallbacks sum", calcWithCallbacks(20, 56, multiply));
// // console.log("calcWithCallbacks sum", calcWithCallbacks(20, 56, showNumbers));
// console.log("calcWithCallbacks sum", calcWithCallbacks(20, 56, "suma"));
//#endregion

var myButton = document.getElementById("myButton");

function changeColor(eventObject) {
  console.log("eventObject", eventObject);
  alert(eventObject.target.value);
  console.log("change color run");
  myButton.classList.toggle("yellow");
}

// myButton.addEventListener("click", function changeColor() {
//   myButton.classList.toggle("blue");
// });

myButton.addEventListener("click", changeColor);

// function addEvents() {
//   var myh5 = document.getElementsByTagName("h5");
//   for (let i = 0; i < myh5.length; i++) {
//     myh5[i].addEventListener("click", showTitle);
//   }

//   var myImg = document.querySelector("img");
//   myImg.addEventListener("click", showTitle);
// }
function addEvents() {
  var myh5 = document.getElementsByTagName("h5");
  for (let i = 0; i < myh5.length; i++) {
    myh5[i].addEventListener("click", function () {
      alert("this is the title");
    });
  }

  var myImg = document.querySelector("img");
  myImg.addEventListener("click", function () {
    alert("this is the img");
  });
}

function showTitle() {
  alert("this is the title");
}

function showText() {
  alert("this is the img");
}

var mySpan = document.getElementById("span");
var pText = document.getElementById("pText");
mySpan.addEventListener("click", showAlert);
pText.addEventListener("click", showAlert);

// var html = document.getElementById("html");
// var body = document.getElementById("body");
// var div = document.getElementById("div");
// var myButton = document.getElementById("myButton");

html.addEventListener("click", showAlert, true);
body.addEventListener("click", showAlert, true);
div.addEventListener("click", showAlert, true);
myButton.addEventListener("click", showAlert, true);

function showAlert(event) {
  event.stopPropagation();
  console.log("event", event);
  // alert("you clicked " + event.target.tagName);
  alert("you clicked " + event.currentTarget.tagName);
}
