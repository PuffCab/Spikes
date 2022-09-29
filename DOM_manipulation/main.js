//////// DOM METHODS
console.log("document", document);
console.log("body", document.body);
let body = document.body;
console.log(body.childNodes);

// const person = {
//     name : "tom",
//     age: 24,
//     height :"167 cm"
// }
// console.log('person.name', person.name)

// person.name = "Viktor"
// console.log('person :>> ', person);

///////!
///! GET SINGLE ELEMENTS
//////!

// const myH1 = document.getElementById("title")
const myH1 = document.querySelector("#title");
console.log(document.querySelector("#title"));
const nav = document.querySelector("nav");
console.log("myH1 :>> ", myH1);
console.log("nav :>> ", nav);

///////!
///! GET MULTIPLE ELEMENTS
//////!
// const myLis = document.getElementsByTagName("li")
// console.log('myLis', myLis)

// const myPs = document.getElementsByClassName("info")
const myPs = document.querySelectorAll(".info");
console.log("myPs :>> ", myPs);

const myLiHtmlCollection = document.getElementsByTagName("li");
console.log("myLiHtmlCollection", myLiHtmlCollection);

const myLisNodeList = document.querySelectorAll("li");
console.log("myLisNodeList :>> ", myLisNodeList);

const newLi = document.createElement("li");
console.log("newLi", newLi);
newLi.innerHTML = "new Li";

document.body.appendChild(newLi);
console.log("myLiHtmlCollection :>> ", myLiHtmlCollection);
console.log("myLisNodeList", myLisNodeList);

///////!
///! ATTRIBUTE METHODS
//////!

const h2 = document.querySelector("h2");
// console.log('h2.className', h2.className)
// const myH2Class = h2.getAttribute("class")
// console.log('myH2Class :>> ', myH2Class);

function changeColor() {
  const myH2Class = h2.getAttribute("class");
  console.log(myH2Class);
  console.log("someting happens");
  if (myH2Class === "blue-h2") {
    h2.className = "green-h2";
  } else {
    h2.className = "blue-h2";
  }
}

const myButton = document.querySelector("button");
myButton.setAttribute("class", "red-button");
// myButton.setAttribute("id", "red-button")

///////!
///! CREATE ELEMENTS
//////!
let myImage = document.createElement("img");
console.log("myyImage", myImage);
myImage.setAttribute(
  "src",
  "https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg"
);
myImage.setAttribute("alt", "image of cute cat");
myImage.setAttribute("height", "250px");
myImage.setAttribute("width", "350px");

const myContainer = document.getElementById("container");

myContainer.appendChild(myImage);

///////!
///! INNERHTML  && CLASSLIST
//////!

const mySpan = document.querySelector("span");
console.log("mySpan :>> ", mySpan);

const mySection = document.querySelector("section");
for (let i = 0; i < 3; i++) {
  const pTag = document.createElement("p");
  pTag.innerHTML = "this p tag has number " + (i + 1);
  pTag.classList.add("blue-h2");
  pTag.classList.remove("blue-h2");
  mySection.appendChild(pTag);
}

function togleClass() {
  let toggleButton = document.getElementById("toggle-button");
  toggleButton.classList.toggle("red-button");
}
///////!
///! VALUE && NAME INPUTS
//////!

let myRadios = document.getElementsByTagName("input");
console.log("myRadios", myRadios);

for (let i = 0; i < myRadios.length; i++) {
  console.log("myRadios[i].value :>> ", myRadios[i].value);
  console.log("myRadios[i] checked :>> ", myRadios[i].checked);
  if (myRadios[i].value === "yes" && myRadios[i].checked === true) {
    // console.log('myRadios[i]', myRadios[i])
    alert("you cliked yes");
  }
}
