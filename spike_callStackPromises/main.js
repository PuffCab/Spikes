//! SYNCHRONOUS JS
const token =
  "MTc5NzdfMTY1MDgwNjEyMF85Yjk1NTZjNDY5MWQ0MzczOGJlOGNiYTI2MWI4OGVkN2M2YzU4NmY3";
// function syncJs() {
//   console.log("first");
//   console.log("second");
//   console.log("third");
// }
// syncJs();

function one() {
  console.log("1");
}
function two() {
  console.log("2");
  one();
}
function three() {
  console.log("3");
  two();
  console.log("4");
}

// three();

//! ASYNCHRONOUS JS

//? Web/Browser API events or functions : event handlers (click, mouseover,...), methods (setTimeout, SetInterval)...

// function greet1() {
//   console.log("good");
// }
// function greet2() {
//   console.log("Morning");
// }

// setTimeout(greet1, 2000);
// // greet1();
// greet2();

function one() {
  console.log("1");
}
function two() {
  console.log("2");
}
function three() {
  console.log("3");
  setTimeout(one, 0);
  two();
}

// three();

//? Promises
// Promise : I will cook you dinner to dine at 22:00
//you --> producing the code that generates a promise
//partner --> code consumer (eating the dinner at 22h)
//dinner --> the PROMISE : what links code producer - code consumer.

// const myDinnerPromise = new Promise((resolve, reject) => {
//   let result = cookingDinner();
//   if (result === "dinner is ready!!") {
//     resolve("yummy!! ");
//   } else {
//     reject("sorry!!! ....let's order a pizza");
//   }
// });

// function cookingDinner() {
//   // return "dinner is ready!!";
//   return null;
// }

// myDinnerPromise
//   .then((result) => {
//     console.log("result :>> ", result);
//   })
//   .catch((error) => {
//     console.log("error :>> ", error);
//   });

// function one() {
//   console.log("1");
// }
// function two() {
//   console.log("2");
// }
// function three() {
//   console.log("3");
//   setTimeout(one, 0);
//   myDinnerPromise
//     .then((result) => {
//       console.log("result :>> ", result);
//     })
//     .catch((error) => {
//       console.log("error :>> ", error);
//     });
//   two();
// }

// three();

//! ASYNC / AWAIT

const getData = () => {
  const url = `https://www.scorebat.com/video-api/v3/feed/?token=${token}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data :>> ", data);
      if (data) {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => console.log("products", json));
      }
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

// getData();

// const getProducts = async () => {
//   const response = await fetch("https://fakestoreapi.com/produc");
//   console.log("response :>> ", response);
//   if (response.status === 200) {
//     const result = await response.json();
//     console.log("result :>> ", result);
//   } else {
//     alert("something went wrong");
//   }

//   if (result) {
//     const response2 = await fetch("https://fakestoreapi.com/products/1");
//     const result2 = await response2.json();
//     console.log("result2 :>> ", result2);
//   }
// };
// getProducts();

const getProducts2 = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/produc");
    console.log("response :>> ", response);
    const result = await response.json();
    console.log("result :>> ", result);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

getProducts2();
