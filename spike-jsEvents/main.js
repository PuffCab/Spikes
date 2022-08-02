console.log("data", data);

const divContainer = document.getElementById("container");
for (let i = 0; i < data.length; i++) {
  // console.log(data[i]);

  const divCard = document.createElement("div");
  divCard.setAttribute("class", "col-xs-12 col-sm-6 col-md-4 col-lg-2");
  divCard.classList.add("card");
  divCard.classList.add("text-cencer");
  divCard.classList.add("border-dark");
  // divCard.setAttribute("style", "width: 18rem");

  if (i % 2 == 0) {
    divCard.classList.add("text-bg-secondary");
  }

  const img = document.createElement("img");
  img.setAttribute("src", data[i].image);
  img.setAttribute("alt", data[i].title);
  img.classList.add("card-img-top");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const h5 = document.createElement("h5");
  h5.classList.add("text-color");
  h5.classList.add("card-title");
  h5.innerHTML = data[i].price;

  const p = document.createElement("p");
  p.classList.add("card-text");
  p.innerHTML = data[i].title;

  divContainer.appendChild(divCard);
  divCard.appendChild(img);
  cardBody.appendChild(h5);
  cardBody.appendChild(p);
  divCard.appendChild(cardBody);
}

let testButton = document.getElementById("test");
testButton.setAttribute("value", "some importan info");
function helloEvent(e) {
  console.log("hello there");
  console.log("e :>> ", e.target.value);
  console.log("e :>> ", e);
}

testButton.addEventListener("click", helloEvent);
testButton.addEventListener("mouseover", function changeColor() {
  testButton.classList.toggle("red");
});

// Callbacks
//#region

// function myCallback() {
//   console.log("i am the callback function");
// }

// function mainFunction(callback) {
//   console.log("i am the main function");
//   callback();
// }
// mainFunction(myCallback);

////// Calculator without using Callbacks

// function myCalculator(num1, num2, calcType) {
//   if (calcType === "sum") {
//     return num1 + num2;
//   } else if (calcType === "multiply") {
//     return num1 * num2;
//   }
// }

// // console.log(myCalculator(5, 7, "sum"));
// console.log(myCalculator(45, 76, "multiply"));

////// Calculator  USING Callbacks

// function sum(a, b) {
//   return a + b;
// }
// function multiply(dumd, dumber) {
//   console.log("see the type of A :>> ", typeof a);
//   return dumd * dumber;
// }

// function doWhatever(a, b) {
//   return "you selected a product with price " + a + " and one with price " + b;
// }

// function myCalculator(a, b, callback) {
//   if (typeof callback === "function") {
//     return callback(a, b);
//   } else {
//     console.log("you have to pass a function");
//   }
// }

// console.log(myCalculator(33, 67, multiply));
// console.log(myCalculator(33, 67, sum));
// console.log(myCalculator(33, 67, doWhatever));
// console.log(
//   myCalculator(33, 67, function (a, b) {
//     return a - b;
//   })
// );
// console.log(myCalculator(30003, 6700, sum));

//#endregion

/////  Bubbling and Capturing

function alerBox(event) {
  alert(`this is the ${event.currentTarget.tagName}`);
  // alert(`you clicked ${event.target.tagName}`);
}

let myHtml = document.getElementById("html");
let myBody = document.getElementById("body");
let myDiv = document.getElementById("div");

// myDiv.addEventListener("click", alerBox, true);
// myBody.addEventListener("click", alerBox, true);
// myHtml.addEventListener("click", alerBox, true);
// testButton.addEventListener("click", alerBox, true);

const span = document.getElementById("span");
const p = document.getElementById("p");

function textInfo(event) {
  // event.stopPropagation();
  alert("some important info about the text");
}

//I created a different callback function for the p tag, to make the example clearer.
function texPInfo(event) {
  // event.stopPropagation();
  alert("some important info about the P tag");
}

span.addEventListener("click", textInfo);
p.addEventListener("click", texPInfo);

const fetchPokemons = async () => {
  // const pokesArray = [];

  // const response = await fetch(
  //   "https://pokeapi.co/api/v2/pokemon?limit=151%27"
  // );
  // const data = await response.json();
  // const dataResults = data.results;
  // // console.log("result :>> ", data.results);

  fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((response) => response.json())
    .then((results) => {
      console.log("results :>> ", results.results);
      getPokesArray(results.results);
      // return dataResults.push(results.results);
    });
};

fetchPokemons();

const fetchEachPokemon = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result);
};

function getPokesArray(dataResults) {
  const pokesArray = [];
  console.log("dataResults :>> ", dataResults);
  for (let i = 0; i < dataResults.length; i++) {
    console.log("nadaaaa :>> ");
    fetchEachPokemon(dataResults[i].url)
      .then((response2) => {
        return response2;
      })
      .then((eachPoke) => {
        // console.log("eachPoke :>> ", eachPoke);
        pokesArray.push(eachPoke);
      });
    // console.log("eachPoke :>> ", poke);
  }
  console.log("pokesArray :>> ", pokesArray);
}
