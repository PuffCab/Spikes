//////// DOM METHODS
// console.log("document", document);
// const htmlBody = document.body;
// console.log("htmlBody", htmlBody);

//? If we want to modify an exiting element
// 1. locate / select
// 2. accces whatever property we want to modify.

///////!
///! GET SINGLE ELEMENTS
//////!

// const myH1 = document.getElementById("h1");
// console.log("myH1", myH1);

// const myH1Tag = document.querySelector("h1");
// console.log("myH1Tag", myH1Tag);
// const myH1Class = document.querySelector(".header");
// console.log("myH1Class", myH1Class);
// const myH1QueryId = document.querySelector("#h1");
// console.log("myH1QueryId", myH1QueryId);

///////!
///! GET MULTIPLE ELEMENTS
//////!
//.getElementsBy... : HTMLCollection is LIVE list. Iteration methods :for loops (for, for...of). We CANNOT forEach
//.querySelectorAll : NodeList is Static list : Iteration methods :for loops (for, for...of).  .forEach(), .map()

const allHTags = document.getElementsByTagName("h2");
console.log("allHTags", allHTags);

const allHTagsQuery = document.querySelectorAll("h2");
console.log("allHTagsQuery", allHTagsQuery);

const newH2 = document.createElement("h2");
newH2.innerText = "I am a new H2";

document.body.appendChild(newH2);

console.log("allHTags after newH2", allHTags);

console.log("allHTagsQuery after newH2", allHTagsQuery);

///////!
///! ATTRIBUTE METHODS
//////!

function changeColor() {
  const blueH2 = document.getElementById("blue-h2");
  console.log("blueH2", blueH2);

  const blueH2Class = blueH2.getAttribute("class");
  console.log("blueH2Class", blueH2Class);

  if (blueH2Class !== "blue-h2") {
    blueH2.className = "blue-h2";
  } else {
    blueH2.className = "green-h2";
  }
}

const myImg = document.querySelector("img");
myImg.setAttribute("style", "width:200px");
myImg.setAttribute("alt", "some weirdo driving ");
///////!
///! CREATE ELEMENTS
//////!

//1. Target the element inside which the new element will go
const imgContainer = document.querySelector(".img-container");

//2. Create the element, by assiging it to a variable.
const newImg = document.createElement("img");
//2.1 Add all needed atributtes to the new element: text, src,class, style...
newImg.setAttribute("src", "quote.jpg");
newImg.setAttribute("alt", "meme pic");
newImg.setAttribute("style", "width:300px");

//3. Append it as a child of the container element
imgContainer.appendChild(newImg);

///////!
///! INNERHTML  && CLASSLIST
//////!

const p1 = document.getElementById("p1");
p1.innerHTML = "this text has been modifed";
const p2 = document.getElementById("p2");
p2.innerText = "me too!!! ";

const mySection = document.querySelector("section");

for (let i = 0; i < 4; i++) {
  const pTag = document.createElement("p");
  pTag.classList.add("bold-p");
  pTag.innerText = "I am created in " + (i + 1) + " position";

  mySection.appendChild(pTag);
}
const myButton = document.createElement("button");
myButton.innerText = "bold me";
mySection.appendChild(myButton);

function makeBold() {
  const boldPTags = document.querySelectorAll(".bold-p");

  for (let i = 0; i < boldPTags.length; i++) {
    // boldPTags[i].classList.add("bold-text");
    boldPTags[i].classList.toggle("bold-text");
  }
}
myButton.addEventListener("click", () => {
  makeBold();
});

///////!
///! VALUE && NAME INPUTS
//////!

function addNewLine() {
  //1. target the input
  const myInput = document.getElementById("p-input");

  //2. target the container where the new line will be inserted

  const spanContainer = document.getElementById("span-input");

  //3. create new p element
  const newPtag = document.createElement("p");
  newPtag.innerText = myInput.value;

  //4. append newPtag to the container

  spanContainer.appendChild(newPtag);
}

//Handling Radio/check buttons

function findColor() {
  //Target inputs
  const colorInputs = document.querySelectorAll("input[type='radio']");
  console.log("colorInputs", colorInputs);
  //target element to insert selected color

  const favColorH3 = document.getElementById("fav-color");

  for (let i = 0; i < colorInputs.length; i++) {
    if (colorInputs[i].checked === true) {
      favColorH3.innerText = "My Favorite color is " + colorInputs[i].value;
    }
  }
}
