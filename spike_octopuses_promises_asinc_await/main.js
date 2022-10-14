// Synchronous

// console.log("first");
// console.log("second");
// console.log("third");

// function one() {
//   console.log("first");
// }
// function two() {
//   console.log("second");
// }
// function three() {
//   console.log("third");
// }
// one();
// two();
// three();

// Call Stack

// function one() {
//   console.log("first");
// }
// function two() {
//   console.log("second");
//   one();
// }
// function three() {
//   console.log("third");
//   two();
// }

// three();

///////// ASYNC JS

/// WEB APIs / BROWSER APIs : events (clicks, mouse over, scrolls...), or some methods setTimeout()

// setTimeout(() => {
//   console.log("I am late!");
// }, 2000);

// setTimeout(function myFunction() {
//   console.log("i am function");
// }, 1000);

// function greet() {
//   console.log("hi");
// }

// function test() {
//   console.log("test");
// }
// setTimeout(greet, 2000);

// test();

// function one() {
//   console.log("first");
// }
// function two() {
//   console.log("second");
// }
// function three() {
//   console.log("third");
//   setTimeout(one, 0);
//   two();
// }

// three();

////// PROMISES

const myPromise = new Promise((resolve, reject) => {
  let result = dinnerCooked();

  if (result) {
    resolve("yummy!, thanks");
  } else {
    reject("let's order a pizza");
  }
});

function dinnerCooked() {
  return "Dinner is ready";
}

// myPromise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function one() {
  console.log("first");
}
function two() {
  console.log("second");
}
function three() {
  console.log("third");
  setTimeout(one, 0);
  myPromise
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  two();
}

three();
