// How the document looks like

console.log("document", document);

// document body
const myBody = document.body;
console.log("myBody :>> ", myBody);

// body childNodes

const childNodes = myBody.childNodes;
console.log(childNodes);

// DOM methods

///////!
///! GET SINGLE ELEMENTS
//////!

// const myH1 = document.getElementById("my-title");
// console.log(myH1);

// const myH1 = document.querySelector("#my-title");
// const myH1 = document.querySelector("h1");
// console.log(myH1);

///////!
///! GET MULTIPLE ELEMENTS
//////!

//? .GETELEMENTSBYTAGNAME();
const myLisHCollection = document.getElementsByTagName("li");
console.log("🚀 ~ myLisHCollection", myLisHCollection);

const myP = document.getElementsByTagName("p");
console.log("🚀 ~myP", myP);

//? .GETELEMENTSBYCLASSNAME();
const myPClass = document.getElementsByClassName("pClass");
console.log("🚀  ~ myPClass", myPClass);

//? .QUERYSELECTORALL()
const myLiNodeList = document.querySelectorAll("li");
console.log("🚀 ~ myLiNodeList", myLiNodeList);

let additionalLi = document.createElement("li");
additionalLi.innerHTML = "new one";
document.body.appendChild(additionalLi);

console.log("🚀  myLis htmlCollection", myLisHCollection.item(0).innerHTML);
console.log("🚀 ~ liQuery nodeList", myLiNodeList.item(0)); // works with nodeList
console.log("🚀  myLisHCollection", myLisHCollection.namedItem("homeId"));
// console.log("🚀 ~ liQuery nodeList", liQuery.namedItem("homeId")); //Output error

for (let key of myLiNodeList.keys()) {
  console.log(key);
} // with HtmlCollection outputs error

for (let entry of myLiNodeList.entries()) {
  console.log("entry", entry);
} // with HtmlCollection outputs error

for (let value of myLiNodeList.values()) {
  console.log("value >>", value);
} // with HtmlCollection outputs error

myLiNodeList.forEach((element) => {
  console.log("element :>> ", element);
}); // with an HTMLCollection outputs error

for (let i = 0; i < myLiNodeList.length; i++) {
  console.log(myLisHCollection[i]);
} // works with both

///////!
///! ATTRIBUTE METHODS
//////!

//? .GETATTRIBUTE()

const myH2 = document.querySelector("h2");
const myH2Class = myH2.getAttribute("class");
console.log("🚀  ~ myH2Class", myH2Class);

function changeColor() {
  const myH2Class = myH2.getAttribute("class");
  if (myH2Class === "blue-h2") {
    myH2.className = "green-h2";
  } else {
    myH2.className = "blue-h2";
  }
}

//? .SETATTRIBUTE()
const myButton = document.querySelector("button");

myButton.setAttribute("class", "red-button");

///////!
///! CREATE ELEMENTS
//////!

//? .CREATEELEMENT()
let myImage = document.createElement("img");
myImage.setAttribute(
  "src",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-photos-of-cats-cuddling-1593203046.jpg"
);
myImage.setAttribute("alt", "two cute cats");

//? .APPENDCHILD(ELEMENT)
// console.log(myImage);
const imgContainer = document.getElementById("container");
imgContainer.appendChild(myImage);

myImage.setAttribute("style", "height:200px; width: 300px");

///////!
///! INNERHTML  && CLASSLIST
//////!

const mySpan = document.querySelector("span");
console.log("innerHTML", mySpan.innerHTML);
console.log("innerText", mySpan.innerText);
console.log("textContent", mySpan.textContent);

const sections = document.getElementsByTagName("section");
for (let i = 0; i < sections.length; i++) {
  sections[i].innerHTML = "this is section " + (i + 1);
  sections[i].classList.add("bold-text", "red-button");
  console.log("sections[i] :>> ", sections[i].classList);
  sections[i].classList.remove("bold-text");
}

let toggleButton = document.getElementById("toggle-button");
function toggleClass() {
  toggleButton.classList.toggle("red-button");
}

///////!
///! VALUE && NAME INPUTS
//////!

let myInputs = document.getElementsByTagName("input");
console.log("inputs :>> ", myInputs);
for (let i = 0; i < myInputs.length; i++) {
  console.log(myInputs[i].value);
  console.log(myInputs[i].checked);
}
