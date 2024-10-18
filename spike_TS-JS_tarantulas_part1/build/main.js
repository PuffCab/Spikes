"use strict";
//! Implicit Typing : for primitive types
Object.defineProperty(exports, "__esModule", { value: true });
let myNumber = 5;
// myNumber = "five"
var myName = "Raul";
// myName  =45
myName = "Tom";
let myBoolean = true;
// myBoolean = "some other "
myBoolean = false;
//! Explicit typing
let userName;
// userName =5
userName = "lion34";
let isTrue;
// isTrue = "asdasd"
isTrue = true;
function sum(a, b) {
    let result = a + b;
    console.log("result", result);
}
sum(4, "hey there");
let myFavMentor = "Emily";
let myDate = 12312331233;
let favNumber;
favNumber = "22";
const myCar = {
    brand: "Opel",
    year: 2000,
    model: "vectra",
};
//! Functions
function sum2(paramA, paramB) {
    let result = paramA + paramB;
    console.log("result", result);
    return result;
}
sum2(4, 33);
//Function signature
let sumFunction;
sumFunction = (number1, number2) => {
    return number1 + number2;
};
//! Types Aliases
const register = (user, password) => {
    //...do something with this information ..
};
// const myUser:UserAdress = {}
const login = (password, user) => {
    //...do something with this information ..
};
//! ARRAYS
// const arrNumbers :number[]=["asdasd"]
const arrNumbers = [4, 6, 7];
const arrStrings = ["one", "asdasdd"];
const mixedArray = ["asdasd", 6, [5, 7, 8]];
// type Parameter3 = Record<string, number>;
// type Parameter3 = Record<string, number>;
function myFunction(obj) {
    return obj;
}
// myFunction(1);
myFunction({ anyNumber: 1 });
myFunction({ anyString: 4 });
let mixedThings = [5, "asdasd"];
mixedThings.push(7);
console.log("mixedThings", mixedThings);
// console.log("mixedThings[2]", mixedThings[2]);
//! Importing types
const adminUser = { name: "asdasdd", password: 2234234 };
//! NAmespaces
const student1 = {
    name: "Ben",
    course: "webdev",
    courseLenght: 5,
    hasLaptop: true,
    chooseCohortName(name) {
        console.log("name", name);
    },
};
student1.chooseCohortName("tarantulas");
//# sourceMappingURL=main.js.map