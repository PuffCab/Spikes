// console.log("products", products);

function createCards(products) {
  console.log("products", products);
  const cardsContainer = document.querySelector(".row");

  for (let i = 0; i < products.length; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "col-xs-12 col-sm-6 col-md-4 col-lg-2");
    card.classList.add("card");
    // card.setAttribute("style", "width: 18rem;");

    if (i % 2 === 0) {
      card.classList.add("border-primary");
    }

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", products[i].image);
    cardImg.setAttribute("alt", "image of " + products[i].title);
    cardImg.setAttribute("class", "card-img-top ");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = products[i].title;

    const cardPrice = document.createElement("p");
    cardPrice.setAttribute("class", "card-text");
    cardPrice.innerText = products[i].price;

    const cardButton = document.createElement("button");
    cardButton.setAttribute("class", "card-button btn btn-primary");
    cardButton.innerText = "do something";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(cardButton);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    cardsContainer.appendChild(card);
  }
  addEvents();
}

function addEvents() {
  const buttonsArray = document.querySelectorAll(".card-button");

  for (let i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].addEventListener(
      "click",
      //   function (event) {
      //     console.log("event", event);
      //     alert("button clicked");
      //   }
      buttonAlert

      //     function (e) {
      //       buttonAlert(e);
      //     }
    );
  }
}

function buttonAlert(e) {
  console.log("e", e);
  alert("button clicked");
}

function changeBackgroundColor() {
  const body = document.querySelector("body");
  body.classList.toggle("grey");
}

createCards(products);

//! CALLBACKS : Calculator example
// let calc = function (num1, num2, calcType) {
//   //   if (calcType === "sum") {
//   //     return num1 + num2;
//   //   }
//   //   if (calcType === "sub") {
//   //     return num1 - num2;
//   //   }

//   return calcType(num1, num2);
// };

// function add(a, b) {
//   const result = a + b;

//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// // console.log("result:::", calc(3, 4, "sum"));
// console.log("result:::", calc(3, 4, add));
// console.log("result:::", calc(3, 4, multiply));
