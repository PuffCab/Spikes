console.log("products :>> ", products);

function createCards() {
  //   var cardsContainer = document.querySelector(".container");
  var cardsContainer = document.querySelector(".row");

  for (let i = 0; i < products.length; i++) {
    var cardDiv = document.createElement("div");

    // cardDiv.setAttribute("style", "width: 18rem");
    cardDiv.setAttribute("class", "col-12 col-md-4 col-lg-2");
    cardDiv.classList.add("card");
    if (i % 2 === 0) {
      cardDiv.classList.add("class", "text-bg-primary");
    } else {
      cardDiv.classList.add("class", "text-bg-danger");
    }

    //adding border to cards

    cardDiv.classList.add("border-dark");
    //IMG
    var imgSrc = products[i].image;
    var img = document.createElement("img");
    img.setAttribute("src", imgSrc);
    img.setAttribute("alt", "image of a product");
    img.classList.add("card-img-top");
    cardDiv.appendChild(img);

    //Card Body
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardDiv.appendChild(cardBody);

    //H5
    var h5 = document.createElement("h5");
    cardBody.classList.add("card-title");
    h5.innerText = products[i].title;
    cardBody.appendChild(h5);
    //P tag
    var pTag = document.createElement("p");
    cardBody.classList.add("card-text");
    pTag.innerText = products[i].price;
    cardBody.appendChild(pTag);

    //apend card to our Cards Container in the HTML file

    cardsContainer.appendChild(cardDiv);
  }
}

function addEventToButton() {
  var headerButton = document.getElementById("header-button");
  headerButton.addEventListener("click", changeHeaderColor);
}
addEventToButton();
function changeHeaderColor() {
  var header = document.querySelector("h1");
  header.classList.toggle("purple");
}

function addEvents() {
  var openModalButton = document.getElementById("open-modal");
  var closeModalButton = document.getElementById("close-modal");
  openModalButton.addEventListener("click", openModal);
  closeModalButton.addEventListener("click", closeModal);
}

function openModal(event) {
  console.log("event :>> ", event);
  var dialog = document.querySelector("dialog");
  dialog.showModal();
}
function closeModal() {
  var dialog = document.querySelector("dialog");
  dialog.close();
}

function addEventsToText() {
  var html = document.getElementById("html");
  var body = document.getElementById("body");
  var outerText = document.getElementById("outer-text");
  var innerText = document.getElementById("inner-text");

  html.addEventListener("click", showAlert);
  body.addEventListener("click", showAlert);
  outerText.addEventListener("click", showAlert);
  innerText.addEventListener("click", showAlert);
}

function showAlert(event) {
  //   event.stopPropagation();
  //   alert("you clicked in the " + event.currentTarget.tagName);
  alert("you clicked in the " + event.target.tagName);
}

addEventsToText();
addEvents();

createCards();

//! CALLBACKS
//#region
// function myCalculator(num1, num2, operationType) {
//   if (operationType === "sum") {
//     return num1 + num2;
//   } else if (operationType === "substraction") {
//     return num1 - num2;
//   }
// }

// console.log(myCalculator(40, 7, "sum"));
// console.log(myCalculator(40, 7, "substraction"));

// function sum(num1, num2) {
//   return num1 + num2;
// }

// function division(num1, num2) {
//   return num1 % num2;
// }

// function revealPressedNumbers(num1, num2) {
//   console.log("your numbers are " + num1 + " and " + num2);
// }

// function callbackCalculator(num1, num2, callbackFunction) {
//   return callbackFunction(num1, num2);
// }

// console.log("with callbacks", callbackCalculator(100, 250, sum));
// console.log("with callbacks", callbackCalculator(100, 250, division));
// console.log(
//   "with callbacks",
//   callbackCalculator(100, 250, revealPressedNumbers)
// );

// console.log(
//   "anonimous function",
//   callbackCalculator(23, 56, function (a, b) {
//     console.log("asdasdasdasdasdasd" + a + b);
//   })
// );
//#endregion
