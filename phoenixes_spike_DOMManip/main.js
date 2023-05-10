// console.log(document);

var myDocumentBody = document.body;
// console.log("myDocumentBody", myDocumentBody.childNodes);

//! GET SINGLE ELEMENTS

var h1Tag = document.getElementById("h1");
console.log("h1Tag", h1Tag);

// var h1TagQuery = document.querySelector(".header");
// console.log("h1TagQuery", h1TagQuery);
// var h1TagQueryId = document.querySelector("#h1");
// console.log("h1TagQueryId", h1TagQueryId);
// var h1TagQueryTag = document.querySelector("h1");
// var navTagQueryTag = document.querySelector("nav");
// console.log("h1TagQueryTag, navTagQueryTag", h1TagQueryTag, navTagQueryTag);

//! Get Multiple elements

var pTags = document.getElementsByTagName("p"); //* --> getElementsBy...() returns an HTMLCollection which is a LIVE list
// console.log("ptags", pTags);

var pTagsClass = document.querySelectorAll("p"); //* --> .querySelectorAll()  returns a NODELIST : an STATIC list
// console.log("pTagsClass", pTagsClass);

var newP = document.createElement("p");
newP.innerText = "This is a new P tag";
var pSection = document.getElementById("p-section");

pSection.appendChild(newP);
// console.log("ptags", pTags);
// console.log("pTagsClass", pTagsClass);

// ATTRIBUTE METHODS

// var myImg = document.querySelector("img");
// console.log("myImg", myImg);
// var imgSrc = myImg.getAttribute("src");
// console.log("imgSrc", imgSrc);

function changeImg() {
  var myImg = document.querySelector("img");
  var imgSrc = myImg.getAttribute("src");
  //   console.log("imgSrc", imgSrc);
  if (imgSrc === "codingLaugh.png") {
    myImg.setAttribute("src", "hateJS.webp");
  } else {
    myImg.setAttribute("src", "codingLaugh.png");
    myImg.setAttribute("alt", "another coding meme");
    myImg.setAttribute("title", "Steve Carell driving and loughing");
  }
}

function changeColor() {
  console.log("callling changeColor");
  var h1 = document.getElementById("h1");
  //   h1.setAttribute("class", "red");
  //     h1.setAttribute("style", "font-size:50px");

  h1.classList.toggle("bigRed");
}

function addNewLine() {
  console.log("i am typing");
  var input = document.getElementById("input-text");
  console.log("input", input.value);

  var newPtag = document.createElement("p");
  newPtag.innerText = input.value;
  //+ if we used newPtag.innerText = input.value, the injected <script> won't run.

  var pTagSpan = document.getElementById("new-line");
  console.log("newPtag", newPtag);
  pTagSpan.appendChild(newPtag);

  //modify H1 text
  var h1Tag = document.getElementById("h1");
  h1.innerHTML = "some new header";

  ///////////////////
  //+ aditional code to fake an XSS attack
  ///////////////////
  // Get the <script> tag from the input value
  var scriptTag = newPtag.querySelector("script");
  if (scriptTag) {
    // If the <script> tag exists, execute its contents
    eval(scriptTag.innerHTML);
    // Remove the <script> tag to prevent it from being displayed
    scriptTag.remove();
  }
  ////////////////////
  //+ if you insert <scipt>alert("I hacked your site")</scipt> in the input field, will run.
  //+ if we modify newPtag.innerHTML = input.value; to newPtag.innerText = input.value, it won't run
  ////////////////////
}

var span = document.getElementById("span");

console.log("span.innerHTML", span.innerHTML);
console.log("span.innerText", span.innerText);

function round() {
  var myImg = document.querySelector("img");
  myImg.classList.add("round");
}
function rectangle() {
  var myImg = document.querySelector("img");
  myImg.classList.remove("round");
}

function selectedMood() {
  //   var radios = document.querySelectorAll("input");
  var radios = document.querySelectorAll("input[type=radio]");
  console.log("radios", radios);
  console.log("radios", radios[0].checked);

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked === true) {
      console.log("your mood is: " + radios[i].value);
    } else {
      console.log("and you are not ", radios[i].value);
    }
  }
}
