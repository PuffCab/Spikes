// function myfunction() {
//   console.log("print this first");
//   console.log("print this second");
//   console.log("print this third");
// }

// myfunction();

// function one() {
//   console.log(1);
// }
// function two() {
//   console.log(2);
// }
// function three() {
//   console.log(3);
// }

// one();
// two();
// three();

function one() {
  console.log(1);
}
function two() {
  console.log(2);
  one();
}
function three() {
  console.log(3);
  two();
}

// three();

// Asynchronous

// Web / Browser APis events, or functions : eventhandlers (click, scroll, mouse over , key up/down), setTimeout()
// Promises

// Web / Browser APis events

// function greet() {
//   console.log("hi");
// }

// function test() {
//   console.log("test");
// }
// setTimeout(greet, 2000);
// test();

// function one() {
//   console.log(1);
// }
// function two() {
//   console.log(2);
// }

// function three() {
//   console.log(3);
//   setTimeout(one, 2000);
//   two();
// }
// three();

//PROMISES

const myPromise = new Promise((resolve, reject) => {
  let result = dinnerCooked();
  //   console.log("result :>> ", result);

  if (result) {
    resolve("yummy!!");
  } else {
    reject("I am so sorry,  i will order a pizza");
  }
});

function dinnerCooked() {
  return "dinner is ready!!";
}

// console.log("myPromise :>> ", myPromise);

// myPromise
//   .then((result) => result)
//   .then((result) => console.log("result", result))
//   .catch((error) => console.log("error", error));

// function one() {
//   console.log(1);
// }
// function two() {
//   console.log(2);
// }

// function three() {
//   console.log(3);
//   setTimeout(one, 0);
//   myPromise
//     .then((result) => result)
//     .then((result) => console.log("result", result))
//     .catch((error) => console.log("error", error));
//   two();
// }

// three();

// Async/ Await

async function myFirstAsync() {
  try {
    const fullfilledValue = await myPromise;
    console.log("fullfilledValue>>", fullfilledValue);
  } catch (error) {
    console.log(error);
  }
}

const myArrowAsync = async () => {
  try {
    const fullfilledValue = await myPromise;
    console.log("fullfilledValue>>", fullfilledValue);
  } catch (error) {
    console.log(error);
  }
};

// myFirstAsync();
// myArrowAsync();
let apiKey = "18608637f624481ea33201750220704";
let city = "berlin";

let url = `http://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=2022-08-07`;

// function fetchData() {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => console.log("result", result))
//     .catch((error) => console.log("error", error));
// }
// fetchData();

const fetchDataAsync = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log("result :>> ", result);
  } catch (error) {
    console.log("error :>> ", error);
  }
};
fetchDataAsync();

// template literals - Templating

let myName = "Raul";

function greet() {
  // console.log("good morning " + myName);
  console.log(`good morning ${myName}`);
}
greet();

// Some of the advantages of using Async/Await : Code more readable.

//// two fetches with fetch().then (an if condition can also be inserted) :

// function fetchData() {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) =>
//       fetch(url)
//         .then((response2) => {
//           return response2;
//         })
//         .then((result2) => console.log("result2", result2))
//         .catch((error) => console.log("error", error))
//     );
// }
// fetchData();

//// two fetches with Async/Await, inside the same function

// const fetchDataAsync = async () => {
//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     if (result) {
//       const response2 = await fetch(url);
//       const result2 = await response2.json();
//       console.log("result2 :>> ", result2);
//     }

//     console.log("result :>> ", result);
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
// };
// fetchDataAsync();

//// two fetches with Async/Await, but creating the second fecth function in a different function
// const fetchDataAsync = async () => {
//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     if (result) {
//       const result2 = await secondFetch();
//       console.log("result2 :>> ", result2);
//     }

//     console.log("result :>> ", result);
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
// };
// fetchDataAsync();

const secondFetch = async () => {
  const response2 = await fetch(url);
  const result2 = await response2.json();
  return result2;
};

// conditional operators  &&  , ||

const num1 = 5;
const num2 = 10;

if (num1 < 4 || num2 < 11) {
  // only one condition needs to be true
  console.log("this runs");
}

if (num1 > 4 && num2 < 7) {
  console.log("this also runs");
}
