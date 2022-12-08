//! VAR - LET - CONST

//Local scope / Global Scope
// Hoisting

// VAR - global scoped  or local scoped

// var myName = "Raul";
// console.log("myName :>> ", myName);
// var myName = 2324;
// myName = "Santiago";
// console.log("myName :>> ", myName);

// function printName() {
//   var myName = "Roxanne";
//   console.log("myName :>> ", myName);
// }
// printName();
// console.log("myName globa variable", myName);

console.log(num);
var num = 34;
console.log(num);

// LET  - blocked scoped
if (true) {
  let myName = "jan";
}

// function printName() {
//   //   let name = "Roxanne";
//   console.log("myName :>> ", myName);
// }
// printName();
// console.log(myName);

// let myNumber = 123;
// console.log(myNumber);
// myNumber = "asdad";
// console.log(myNumber);

// console.log(text);
// let text = "asdasdd";

// Const

// const person = "asdasdd";
// console.log("person", person);

// person = 23123;
// console.log("person", person);

// const abc = 9
// console.log(abc);

//! FUNCTION EXPRESSIONS
// function expresions do not get hoisted , so cannot be invoked before they are created

//Function declaration

// someName(); // this works becuase function declarations get hosited, hence we can call the function before creating it.
// function someName() {
//   // do something
//   console.log("raul");
// }

// Function expression
// functionExpression();

// const functionExpression = function () {
//   console.lo("I am a function expression");
// };

// console.log(functionExpression.name);

//IIFE ...Inmediate Invoked Function Expression
// Closures

//! ARROW FUNCTIONS

const arrowFunction = () => {
  console.log("i am an arrow function");
};
arrowFunction();

const arrowFunctionWithReturn = (a, b) => {
  let result = a + b;
  return result;
};

console.log(arrowFunctionWithReturn(3, 8));
const arrowFunctionImplicitReturn = (a, b) => a + b;

console.log(arrowFunctionImplicitReturn(30, 80));

const arrowFunctionOneParameter = a => a
console.log(arrowFunctionOneParameter(300))

const arrowFunctionNoParameters = _ => console.log("no parameters");
arrowFunctionNoParameters();


//! MODERN LOOPS

//? .forEach()

const catFacts = data.data
console.log('catFacts :>> ', catFacts);

// for (let i = 0; i < catFacts.length; i++) {
//     console.log('catFacts[i]', catFacts[i])
    
// }

// catFacts.forEach((catFact, index, originalArray)=> {
//     // console.log("catFact", catFact);
//     // console.log('index :>> ', index);
//     if(index < 3) {
//        console.log(catFact) 
//     }
//     // console.log('originalArray', originalArray)
// })

// catFacts.forEach((catFact, index, originalArray)=> {
//    console.log('originalArray', originalArray)
//    catFact.newFact = "this is not a catfact"
// })
// console.log('catFacts :>> ', catFacts);

//? .filter()

const filteredCatFacts =catFacts.filter((catFact, index, originalArray) => {
//   if (index < 4) {
//     return catFact.fact.includes("While")
//   }
  return catFact.fact.includes("While")
})

// console.log('filteredCatFacts :>> ', filteredCatFacts);

//? .map()

const myFactsIndexes = catFacts.map((catFact, index, originalArray) => {
//   console.log('catFact', catFact)

    return index
}).sort((a,b) => {
  return b-a
})

// console.log('myFactsIndexes :>> ', myFactsIndexes);
console.log('catFacts :>> ', catFacts);
const myNewCatFacts = catFacts.map((catFact, index, originalArray) => {
    catFact.anotherFact = "I am a Dog's person"
    // return catFact
    // return Object.assign({}, catFact, {anotherFact : "I am a Dog's person"})
    return {...catFact, anotherFact : "I am a Dog's person"}
    })

    console.log('myNewCatFacts', myNewCatFacts)
    console.log('are they the same', myNewCatFacts== catFacts)

    //! ... Spread Operator

    const num1 = [1,2,3]
    const num2 = [4,5,6]
    const num3 = [...num1, ...num2]
    // console.log('num3 :>> ', num3);

    const obj1 = {
        name: "Raul",
        age : "20"
    }
    const obj2 = {
        name: "Julie",
    }

const obj3 = {
    ...obj1, ...obj2
}

// console.log('obj3', obj3)

//!Template Literals

// console.log("numbers inside num1 are:" + num1 + " ,those are all")

// console.log(`numbers inside num1 are: ${num1}, those are all`);

// let div = document.createElement("div")
// div.innerText = "this is a div"



// let div = `<div>this is a div </div>`
// console.log('div :>> ', typeof div);
// document.querySelector("body").innerHTML=div 

// or operator ||

const numb = 2
const numb2 = 40 

// if ( numb === 1 || numb === 2 ) {
//     console.log("something")
// }

// And operator : && 

if (numb ===2 && numb > 1) {
    console.log("is true");
} else {
    console.log("not true")
}

// Truthy / Fasy values : values that are evaluated to true/false when compared
// All values are truthy : any string (not empty), a number, a non empty-object, etc...  except -->
// Falsy values : false, 0, -0, 0n, ""(empty string), null, undefined and NaN (Not A Number)
// When checking data types , it returns either the FIRST FALSY value, or the LAST TRUTHY value if both are true

let result ='' && 'something' // will output "", because an empty string evaluates to false and is the first one
let result1 = 2 && 0 // will output 0, because 0 is falsy, therefore returns the 1st falsy value
let result2 = "test" && 4 // will output "test", because both are truthy, and returns the 1st of them
console.log(result, result1, result2);