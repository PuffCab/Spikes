///////// DOM METHODS
console.log(document.body);
console.log(document.body.childNodes);
console.log("%cdocument", "color:red", document.body);

const myBody = document.body;
console.log("myBody", myBody.childNodes);
/////!
///! GET SINGLE ELEMENTS
//////!

// const myH1 = document.getElementById("title");
// const myH1 = document.querySelector("h1");
const myH1 = document.querySelector(".my-title");
// const myH1 = document.querySelector("#title");
console.log("myH1 :>> ", myH1);

///////!
///! GET MULTIPLE ELEMENTS
//////!
// const myLiHTMLCollec = document.getElementsByTagName("li");
// const myLis = document.querySelectorAll("li");
// const myLisNODEList = document.querySelectorAll(".li");
// console.log("myLis", myLis);
// console.log("myLis2", myLis2);
// const myH1s = document.getElementsByTagName("h1");
// console.log("myH1s :>> ", myH1s);

// HTMLCollection is a live list
// NODEList is a static list

const myLiHTMLCollec = document.getElementsByTagName("li");
console.log("myLiHTMLCollec", myLiHTMLCollec);

const myLisNODEList = document.querySelectorAll(".li");
console.log("myLisNODEList", myLisNODEList);

const newLi = document.createElement("li");
newLi.innerText = "new LI";
document.body.appendChild(newLi);
console.log("myLiHTMLCollec", myLiHTMLCollec);
console.log("myLisNODEList", myLisNODEList);

const myUl = document.querySelector("ul");
myUl.appendChild(newLi);
///////!
///! ATTRIBUTE METHODS
//////!

const myH2 = document.querySelector("h2");
const myH2Class = myH2.getAttribute("value");
console.log("myH2Class", myH2Class);
console.log("myH2 :>> ", myH2);

function changeColor() {
  const myH2Class = myH2.getAttribute("class");
  const myButton = document.querySelector("button");
  if (myH2Class === "blue-h2") {
    myH2.className = "green-h2";
    myButton.setAttribute("class", "red-button");
  } else {
    myH2.className = "blue-h2";
  }
}

///////!
///! CREATE ELEMENTS
//////!

let myImg = document.createElement("img");
myImg.setAttribute(
  "src",
  "https://i.pinimg.com/564x/32/f2/43/32f24381b05fcf53d8088c98963fe326.jpg"
);
myImg.setAttribute("alt", "cute cat");
myImg.setAttribute("style", "width:200px");
console.log("myImg", myImg);

const myDiv = document.querySelector(".container");

myDiv.appendChild(myImg);

///////!
///! INNERHTML / INNERTEXT  && CLASSLIST
//////!

const mySpan = document.querySelector("span");
console.log("mySpan.innerHTML :>> ", mySpan.innerHTML);
console.log("mySpan.innerText", mySpan.innerText);

const mySections = document.querySelectorAll("section");
console.log("mySections :>> ", mySections[1]);

for (let i = 0; i < mySections.length; i++) {
  mySections[i].innerText = "section " + i;
  if (i === 0) {
    mySections[i].innerText = "my cat is beautiful " + i;
  }
  mySections[i].classList.add("red-button", "bold-text");
  if (i === 2) {
    mySections[i].classList.remove("red-button");
  }
}

function toggleButton() {
  const myToggleButton = document.getElementById("toggle");
  myToggleButton.classList.toggle("red-button");
}
///////!
///! VALUE && NAME INPUTS
//////!

const myYesButton = document.getElementById("yes");
console.log("myYesButton :>> ", myYesButton.value);

const radioButtons = document.querySelectorAll("input");
console.log("radioButtons", radioButtons);

function changeColor() {
  for (let i = 0; i < radioButtons.length; i++) {
    console.log("radioButtons[i].value :>>  ", radioButtons[i].value);

    console.log("radioButtons[i].checked", radioButtons[i].checked);
    if (radioButtons[i].checked === true) {
      alert("you checked" + radioButtons[i].value);
    }
  }
}
