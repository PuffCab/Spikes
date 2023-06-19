console.log("document", document.body.childNodes);

const h1 = document.getElementById("h1");
console.log("h1", h1);

const h2 = document.querySelector("#h1");
console.log("h2", h2);

const myH2sHTMLColl = document.getElementsByTagName("h2");
console.log("myH2sHTMLColl", myH2sHTMLColl); // HTMLCollection is a live list

const myH2sNodeList = document.querySelectorAll(".h2-class"); // NODELIST a static list (will capture only the elements previously existing in our HTML, not the new added ones)
console.log("myH2sNodeList", myH2sNodeList);

const newH2 = document.createElement("h2");
newH2.innerText = "I am new";

document.body.appendChild(newH2);

console.log("myH2sHTMLColl", myH2sHTMLColl);
console.log("myH2sNodeList", myH2sNodeList);

function changeColor() {
  const myP = document.querySelector("p");
  const myPClass = myP.className;

  console.log("myP", myP.className);
  if (myPClass === "blue") {
    myP.className = "red";
  } else {
    myP.className = "blue";
    myP.innerText = "i changed color";
  }
}

//1st create the element
const myImg = document.createElement("img");
//2. assign attributes
myImg.setAttribute("src", "hateJS.webp");
myImg.setAttribute("alt", "random picture");
console.log("myImg", myImg);

//3. Store in a variable the HTML Tag that is gonna content the element
const imgContainer = document.getElementById("img-container");

//4. instruct JS to put the new created element inside the HTML tag you selected before
imgContainer.appendChild(myImg);
myImg.setAttribute("style", "width:200px; height: 200px");

// WHEN ADDING or MODIFYING the text content of an HTML element, better use the attribute innerText
h2.innerHTML = "innerHTML";
h2.innerText = "innerText";
// h2.innerHTML = "";

const span = document.querySelector("span");
console.log("span.innerHTML", span.innerHTML);
console.log("span.innerText", span.innerText);

const sectionContainer = document.getElementById("section-container");
//DRY

for (let i = 0; i < 5; i++) {
  const section = document.createElement("section");
  section.innerText = "this is section " + (i + 1);

  section.classList.add("bold");
  sectionContainer.appendChild(section);
}
function removeBold() {
  const sectionElements = document.querySelectorAll("section");
  console.log("sectionElements", sectionElements);
  for (let i = 0; i < sectionElements.length; i++) {
    // sectionElements[i].classList.remove("bold");
    sectionElements[i].classList.toggle("bold");
  }
}

function findMood() {
  const myInputs = document.querySelectorAll("input");

  console.log("myInputs", myInputs);
  const inputsContainer = document.getElementById("inputs-container");
  for (let i = 0; i < myInputs.length; i++) {
    console.log("which one is clikec?");
    if (myInputs[i].checked === true) {
      console.log("myInputs[i].value", myInputs[i].value);
      const moodH1 = document.createElement("h1");
      moodH1.innerText = "My mood is:" + myInputs[i].value;
      inputsContainer.appendChild(moodH1);
    }
  }
}
