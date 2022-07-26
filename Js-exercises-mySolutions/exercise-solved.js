//JavaScript Basics Exercises

// Writing expressions with variables

// Exercise 1

// In your JavaScript file create a variable called myName with your name as the value.
// Put your name inside string quotes, e.g., "my name".
// Then add a line of code to print the variable name to the console after the previous message.
// Save your JavaScript file in your editor.
// Reload the HTML page in your browser.You should see your name printed.If not, investigate and fix it.

let myName = "oded";
console.log(myName);

// Exercise 2

// Create a variable called age with a number that is your age. Do not use string quotes for numbers.
// Add a line to print that variable in the console.
// Save the file and reload the page.You should see your name and your age.

let age = 32;
console.log(age);

// Exercise 3

// Create a variable called juliaAge with a value 32.
// Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age.
// Print the value of ageDiff.Save the file and reload the page.You should see your age and the age difference.
// If you are younger than Julia, you should see a negative number.

let juliaAge = 32;
let ageDiff = age - juliaAge;
console.log(ageDiff);

// Exercise 4

// Write a conditional that compares the variable with your age with the number 21.
// It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age.
// Save your JavaScript file and reload the page.Make sure you see the correct message.
// Try changing your age in the JavaScript file to make sure the other message prints when it should.

if (age < 21) {
  console.log("you are younger than 21");
} else {
  console.log("you are older than 21");
}

// Exercise 5

// Write a conditional that compares your age with Julia's age.
// This conditional will need to test if you are older, younger, or the same age, and print, appropriately,
//     either "Julia is older than you", Julia is younger than you", or "You have the same age as Julia".
// Save your changes and reload the file.

if (age < juliaAge) {
  console.log("you are younger than julia");
} else if (age == juliaAge) {
  console.log("you are the same age as julia");
} else {
  console.log("you are older than julia");
}

//JavaScript Array

// Exercise 1

// Create an array with all the names of your class (including mentors).
// Sort the array alphabetically.Then print the first element of the array in the console.
// On the next line, print the last element of the array in the console.
// On the next line, print all the elements of the array in the console(use a "for" loop).
// Save the file and reload the page.
// You should see the first element of the sorted array, the last element of the sorted array,
// and a list of all the elements in order in the array in the console.

var students = [
  "michelle",
  "oded",
  "denis",
  "natalia",
  "moe",
  "chirag",
  "laura",
  "ottavia",
];
students.sort();
console.log(students[0]);
console.log(students[students.length - 1]);

for (i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// Exercise 2
// Create an array with all the ages of the students in your class.
// Iterate the array using a while loop, and then print every age in the console.
// Add a conditional inside the while loop to only print even numbers.
// Write again a loop but use a "for" loop instead of a "while" loop.
// Save your changes to your JavaScript file.Reload the HTML page in your browser.
// You should see every age printed, then only the even numbers printed.

let studentsAge = [30, 36, 28, 19, 69, 43];
var i = 0;
while (i < studentsAge.length) {
  console.log(studentsAge[i]);
  i++;
}

var i = 0;
while (i < studentsAge.length) {
  if (studentsAge[i] % 2 == 0) {
    console.log(studentsAge[i]);
  }
  i++;
}

// For the following exercises, you cannot sort your array.
// Be sure your solution works for any array that it is passed!

// Exercise 3
// Write a function that receives an array as a parameter and prints the lowest number in the array to the console.
// Save the changes to your JavaScript file.Reload the HTML page in your browser.
// You should see the lowest number in the array printed in the console.If not, investigate and fix it.

function findMin(array) {
  var i;
  var min = Infinity;
  for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

console.log(findMin(studentsAge));

// Exercise 4
// Write a function that receives an array as a parameter and prints the biggest number in the array to the console.
// Save the changes to your JavaScript file.Reload the HTML page in your browser.
// You should see the biggest number in the array printed in the console.If not, investigate and fix it.

function findMax(array) {
  var i;
  var max = -Infinity;
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log(findMax(studentsAge));

// Exercise 5
// Write a function that receives two parameters, an array, and an index.
// The function will print the value of the element at the given position(one - based) to the console.
// For example, given the following array and index, the function will print '6'.
// var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;
// Save the changes to your JavaScript file and check your browser console.
// You should see the number at the correct index printed in the console.If not, investigate and fix it.

function printVal(array, i) {
  console.log(array[i]);
}

let example = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
printVal(example, 1);

// Exercise 6
// Write a function that receives an array and only prints the values that repeat.
// For example, given the following array and index, the function will print '6,23,33,100'.
// var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// Save the changes to your JavaScript file. Reload the HTML page in your browser.
// You should see an array of the repeated numbers printed in the console.If not, investigate and fix it.
function dabel(array) {
  let seen = [];
  let twice = [];
  for (let i = 0; i < array.length; i++) {
    if (seen.includes(array[i])) {
      twice.push(array[i]);
    } else {
      seen.push(array[i]);
    }
  }
  for (let i = 0; i < twice.length; i++) {
    console.log(twice[i]);
  }
}

dabel(example);

// Exercise 7
// Write a simple JavaScript function to join all elements of the following array into a string.
// myColor = ["Red", "Green", "White", "Black"];
// Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console:
// "Red", "Green", "White", "Black".
// If not, investigate and fix it.

function stringTogether(array) {
  let together = "";
  for (let i = 0; i < array.length; i++) {
    together = together.concat(" " + array[i]);
  }
  console.log(together.trim());
}

myColor = ["Red", "Green", "White", "Black"];

stringTogether(myColor);

// JavaScript String
// Exercise 1
// Write a JavaScript function that reverses a number.
// For example, if x = 32443 then the output should be 34423.
// Save your JavaScript file and reload the page.
// Make sure you see the correct output.If not, investigate and fix it.

function backwards(num) {
  let numString = num.toString();
  let back = "";
  for (let i = numString.length + 1; i > 0; i--) {
    back = back.concat(numString.charAt(i));
  }

  console.log(back);
}

let x = 32443;
backwards(x);

// Exercise 2
// Write a JavaScript function that returns a string in alphabetical order.
// For example, if x = 'webmaster' then the output should be 'abeemrstw'.
// Punctuation and numbers aren't passed in the string.
// Save your JavaScript file and reload the page.Make sure you see the correct output.If not, investigate and fix it.

function makeAlphabet(str) {
  var arr = str.split("");
  arr.sort();
  return arr.join("").trim();
}

let mmm = "webmaster";
console.log(makeAlphabet(mmm));

// Exercise 3
// Write a JavaScript function that converts the first letter of every word to uppercase.
// For example, if x = "prince of persia" then the output should be "Prince Of Persia".
// Save your JavaScript file and reload the page.Make sure you see the correct output.If not, investigate and fix it.

function capital(str) {
  cap = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let g = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    cap = cap.concat(g + " ");
  }
  console.log(cap);
}

let xy = "prince of persia";
capital(xy);

// Exercise 4
// Write a JavaScript function that finds the longest word in a phrase.
// For example, if x = "Web Development Tutorial", then the output should be "Development".
// Save your JavaScript file and reload the page.
// Make sure you see the correct output.If not, investigate and fix it
function longestWord(str) {
  let arr = str.split(" ");
  let lengthi = -Infinity;
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > lengthi) {
      longest = arr[i];
      lengthi = arr[i].length;
    }
  }
  console.log(longest);
}

let xyz = "Web Development Tutorial";
longestWord(xyz);

// DOM manipulation exercises
// Exercise 1
// Now let's add content to an HTML document instead of writing to the console.
// Write a function called addBands myBandList) that will list your favorite bands.
// Start with an empty HTML page that contains a level 1 heading "My Favorite Bands" and an empty unordered list with ID band - list.
// Your function should use the JavaScript DOM to create list items and add them to the unordered list,
// with one list item for each string in array myBandList.
// For example, if I call:
// addBands(['Dire Straits', 'Kansas', 'Steely Dan']);
// The function will add three list items to the unordered list.

// function addBands(array) {
//     var ul = document.getElementById("band-list")
//     for (let i = 0; i < array.length; i++) {
//         let li = document.createElement("li");
//         li.innerHTML = array[i]
//         ul.appendChild(li)

//     }
// }

// let myBandList = ["Dire Straits", "Kansas", "Steely Dan"];
// addBands(myBandList);

// Exercise 2
// Write a function called addMultTable(rows, cols) that will create a multiplication table like this.
// Start with an empty HTML page that only contains a level 1 heading.
// Your function should use the JavaScript DOM to insert an HTML table after the heading.
// For example, if I call: addMultTable(4, 8);
// It will create an HTML table with 4 rows and 8 columns, and append it after the level 1 heading.

function addMultTable(rows, col) {
  var tble = document.createElement("TABLE");
  document.body.appendChild(tble);
  for (let i = 0; i < rows; i++) {
    row = tble.insertRow(0);
    for (let i = 0; i < col; i++) {
      cell1 = row.insertCell(0);
    }
  }
  document.body.appendChild(tble);
}
addMultTable(4, 5);

// Extra: Function exercises
// Exercise 1
// Write a JavaScript function that returns nothing and has no parameters.
// This function should print the result of the multiplication of two numbers(the numbers that you want).

function dabelo() {
  console.log(2 * 5);
}

dabelo();

// Exercise 2
// Write a JavaScript function with no parameters.
// This function should return the result of the multiplication of two numbers(the numbers that you want),
// and in your main program, you should print the result.
// Tip: if a function returns something, you can assign the function call to a variable.
// In this way, the value of the return will be held by this variable.

function dabely() {
  return (ten = 2 * 5);
}
dabely();
console.log(ten);

// Exercise 3
// Write a JavaScript function with two parameters.
// These parameters are the numbers that have to be multiplied.
// The function should return the result of the multiplication of both numbers(the numbers that you want),
// and in your main program, you should print the result.Test the function with 3 examples.

function double(a, b) {
  return a * b;
}

console.log(double(2, 5));
console.log(double(3, 6));
console.log(double(6, 5));

// Exercise 4
function triTyp(a, b, c) {
  if (a == b && a == c) {
    console.log("Triangle is Equilateral");
  } else if ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)) {
    console.log("Triangle is Isosceles");
    if (a ** 2 + b ** 2 == c ** 2) {
      console.log("Triangle is also Right-angled");
    }
  } else {
    console.log("Triangle is Scalene");
    if (a ** 2 + b ** 2 == c ** 2) {
      console.log("Triangle is also Right-angled");
    }
  }
}

// Exercise 5
// Write a function that receives as a parameter an array of characters and replaces all "a" by "1".
// e.g.: JavaScript will become J1v1Script.

function a1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "a") {
      array[i] = 1;
    }
  }
}

popl = "JavaScript";
poplo = popl.split("");
console.log(poplo);
a1(poplo);
console.log(poplo);

// Exercise 6
// Write two functions.  The first one should return the sum of all the elements of an array,
// and the second one should return the smallest number in the array.
// Print the result in the main program.
function arrSum(array) {
  let sum = null;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log(sum);
}

// for function 2 see line 120

let arr = [1, 2, 8, 3, 2];
arrSum(arr);
console.log(findMin(arr));

// Exercise 7
// Write a function that adds the even numbers of an array.
// For example, the array: 1 2 8 3 2 would result in the sum of 2 + 8 + 2, since they are even numbers.
// Return the result and print it in the main program.

function arrSumEven(array) {
  let sum = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum = sum + array[i];
    }
  }
  console.log(sum);
}

arrSumEven(arr);

// Exercise 8
// Write a function that adds the even positions of an array.
// For example, the array: 1 2 8 3 2 3 4 would result in the sum of 8 + 2 + 4 since they are in even positions
// in the array(position 2, 4, 6).Return the result and print it in the main program.

function arrSumEvenPos(array) {
  let sum = null;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0 && i > 0) {
      sum = sum + array[i];
    }
  }
  console.log(sum);
}

let mon = [1, 2, 8, 3, 2, 3, 4];
arrSumEvenPos(mon);

// Exercise 9
// Write a function that by sending a number as parameter,tells you all the even numbers before it.
// For example, if you send to the function the number 9, it should print 2, 4, 6, 8.

function evenBefore(num) {
  for (let i = 0; i < num; i++) {
    if (i != 0 && i % 2 == 0) {
      console.log(i);
    }
  }
}

evenBefore(9);
// Exercise 10
// Write a function that by sending two numbers as parameters, it tells you the odd numbers between these.
// For instance, if you send the numbers 1 and 13 as parameters, it should print 1, 3, 5, 7, 9, 11,13

function oddBetween(num1, num2) {
  let i = 0;
  let top = 0;
  if (num1 < num2) {
    i = num1;
    top = num2;
  } else if (num1 > num2) {
    i = num2;
    top = num1;
  } else {
    return console.log("same number, nothing between");
  }
  while (i <= top) {
    if (i % 2 != 0) {
      console.log(i);
    }

    i++;
  }
}

oddBetween(1, 13);
