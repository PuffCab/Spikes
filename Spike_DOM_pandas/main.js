//////// DOM METHODS

// console.log("document :>> ", document);
const myName = "Raul";
///////!
///! GET SINGLE ELEMENTS
//////!
var h1 = document.getElementById("h1");
// console.log("h1 :>> ", h1);
h1.innerText = "Hello DOM Manipulation";

// var h1WithQuery = document.querySelector("#h1");
// var h1WithQuery = document.querySelector("h1");
var h1WithQuery = document.querySelector(".h1-class");

h1.innerText = "Changed again with the class";
///////!
///! GET MULTIPLE ELEMENTS
//////!

var h2HTMLCollection = document.getElementsByTagName("h2"); //Returns a live list of elements
// console.log("h2HTMLCollection :>> ", h2HTMLCollection);

var h2NodeList = document.querySelectorAll("h2"); // Returns a static list
// console.log("h2NodeList :>> ", h2NodeList);

var additionalH2 = document.createElement("h2");
additionalH2.textContent = "I am a new H2";

// console.log("additionalH2 :>> ", additionalH2);

document.body.appendChild(additionalH2);

// console.log("h2HTMLCollection :>> ", h2HTMLCollection);

// console.log("h2NodeList :>> ", h2NodeList);

var newH2HTMLCollection = document.getElementsByTagName("h2"); //Returns a live list of elements
// console.log("newH2HTMLCollection :>> ", newH2HTMLCollection);

///////!
///! ATTRIBUTE METHODS
//////!

var h2 = document.getElementById("blue-h2");
// console.log("blueH2 :>> ", h2);
// var h2Class = h2.getAttribute("class");
// console.log("h2Class :>> ", h2Class);

function changeColor() {
  // console.log("button clicked");
  var h2Class = h2.getAttribute("class");

  if (h2Class === "blue-h2") {
    h2.className = "green-h2";
  } else {
    h2.className = "blue-h2";
  }
}

var myImg = document.querySelector("img");
myImg.setAttribute("style", "width:200px");
myImg.setAttribute("alt", "coding meme picture");

///////!
///! CREATE ELEMENTS
//////!

var newImg = document.createElement("img");
newImg.setAttribute("src", "./quote.jpg");
console.log("newImg :>> ", newImg);
newImg.setAttribute("style", "width:250px");

var section = document.querySelector("section");
console.log("section :>> ", section);
section.className = "section";

section.appendChild(newImg);
//decide where we are gonna insert

///////!
///! INNERHTML-INNERTEXT && CLASSLIST
//////!

function generatePtags() {
  //find the container for our element
  var pTagsContainer = document.querySelector(".container");

  for (let i = 0; i < 3; i++) {
    var pTag = document.createElement("p");
    pTag.innerText = "This is article " + (i + 1);
    pTag.classList.add("bold-text");

    //append/ tell where i am gonna put my new elements

    pTagsContainer.appendChild(pTag);
  }
}

generatePtags();

function removeBold() {
  var pTags = document.querySelectorAll(".bold-text");
  console.log("pTags :>> ", pTags);
  for (let i = 0; i < pTags.length; i++) {
    pTags[i].classList.remove("bold-text");
  }
}
///////!
///! VALUE && NAME INPUTS
//////!

function addNewLine() {
  //find input
  var myInput = document.getElementById("p-input");
  // find container for the new pTags
  var spanContainer = document.getElementById("span-id");
  var newPtag = document.createElement("p");
  console.log("myInput.value :>> ", myInput.value);
  newPtag.innerText = myInput.value;

  spanContainer.appendChild(newPtag);
}

function findMood() {
  //find inputs

  //   var myMoodInputs = document.getElementsByTagName("input");
  var myMoodInputs = document.querySelectorAll("input[type='radio']");
  console.log("myMoodInputs :>> ", myMoodInputs);

  //find tag for the result

  var moodText = document.getElementById("myMood");

  for (let i = 0; i < myMoodInputs.length; i++) {
    if (myMoodInputs[i].checked === true) {
      console.log("myInputs[i] :>> ", myMoodInputs[i].value);

      moodText.innerText = myMoodInputs[i].value;
    }
  }
}

//! Expensive operations
