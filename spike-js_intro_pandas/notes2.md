# Project 2: Spike 2

## Iterators

You're going to become _very_ familiar with JavaScript **loops**! They can be used to loop over a JavaScript **iterable** (most commonly **strings** and **arrays**). 

### For Loop

The most basic is a **for loop**. The syntax is very nicely explained on W3Schools [here](https://www.w3schools.com/js/js_loop_for.asp). A for loop is made up of:
  - **Statement 1:** Initialize a variable to refer to the loop (think of this as "where" the loop begins).
  - **Statement 2:** Define the conditions for running the loop (it is very common to use the **length** of an array).
  - **Statement 3:** Instruct what to do once each iteration is finished.
  - Then, in **curly braces**, you can write some code to be run over each iteration. eg:

```js
for (let i = 1; i < 11; i++) {
  console.log(i);
}
```

This example starts at `1`. For `1`, it will perform whatever code you've written in the curly braces, in our case - we're just logging `1` to the console. After it has done this, it's going to look in the 3rd statement to see what it should do next: `i++` is shorthand for `i = i + 1`. This is why we use a `let` instead of a `const` - so we can reinitialize the variable on each iteration. `i` is now `2`.

The loop will check the 2nd statement to make sure it should continue. `2 < 11` is true, therefore it will run again. The code in the curly braces will be applied again to `2`. Then our 3rd statement will increment `i` to `3` and the loop repeats. It will continue this until the 2nd statement is false, ie. `11 < 11`.

Have a play with the values. Make a reverse loop by reversing the values!

```js
for (let i = 10; i > 0; i--) {
  console.log(i);
}
```

If you have an array, you can pass the array's **length** to your 2nd statement condition. The `.length` property exists on arrays for the number of items, but also for strings for the number of characters. We already know that we can isolate an item in an array using the index, so if we set `i = 0` (to represent the first index), we're now able to loop over the array and write code to apply to each item. 

```js
for (let i = 0; i < myCats.length; i++) {
  console.log(myCats[i]);
}
//expected output:
//Wirenz
//Tilly
//Moet

for(let i = myCats.length; i < 0; i--) {
  console.log(myCats[i]);
}
```

- If an array is nested inside another array, then a loop will need to nested inside another loop. eg:
```js
const nestedArray = [
  ["one", "two", "three"],
  ["four", "five", "six"],
  ["seven", "eight", "nine"]
]

for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; i < nestedArray[i].length) {
    console.log(nestedArray[i][j]);
  }
}
```

### While Loop

- There are a few common loops, it would be worth doing some [reading](https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/) for each of them. We will cover `.map()` and `.forEach()` methods later, try to avoid using them for now. Another quick example is a **while loop**, which is very similar to a for loop but without Statement 1 and Statement 3. eg:

```js
let num = 3;
while (num > 0) {
  console.log("Countdown: " + num);
  num--;
}
//expected output:
//Countdown 3
//Countdown 2
//Countdown 1
```

### For In Loop (Object Property Iteration)

- A **for in** loop works specifically on **objects**, for when you want to run some code for each property on an object. eg:

```js
for (let x in myCat) {
  console.log(myCat[x]);
}
//expected output:
//Wirenz
//16
//tortoiseshell
```

## Methods 

JavaScript has many pre-written functions called **methods**. There are methods written specifically for [strings](https://www.w3schools.com/js/js_string_methods.asp), [numbers](https://www.w3schools.com/js/js_number_methods.asp), [arrays](https://www.w3schools.com/js/js_array_methods.asp), and more! Every method will have it's own set of rules, so it's important to read how it works before attempting to use it. This will include reading how to pass the correct information, but also what to expect as a result. Some methods will manipulate a variable, others will duplicate with changes, others will simply return a boolean for you to use. 

It's not expected to memorize every method! Take some time, however, to do a bit of research into what exists. This will make finding solutions much easier! Many of these methods are simple loops themselves, so you can still write your own solutions without using them. They are considered time-savers for common small tasks developers will need to perform over and over again.

## Programming Principles

A really good list of [programming principles](https://www.makeuseof.com/tag/basic-programming-principles/) to live by.

## JavaScript functions

A JavaScript **function** is a block of code with a functional purpose that can be re-used throughout a script.

The keyword **function** is used to declare a function. It is then given a unique **identifier** (ie, name), followed by a pair of parentheses **( )**, and curly braces **{ }** will hold the functional code. eg:

```js
function myFunction() {
  console.log("This is my function");
}
```

Note that the code inside a function will not run until the function has been **called**/**invoked**. A function can be called multiple times in the same script, so that you're not repeating blocks of code. This helps with code readability, and also **block-scoped** variables prevent your RAM/memory from becoming bloated, since they only exist for the lifetime of the function. To call a function, use it's name and parentheses:

```js
myFunction(); //expected output: This is my function
```

Function declarations are **hoisted** in JavaScript. This means that you can call/use the function before it's been declared, so long as it's declared somewhere in that scope.

The parentheses of a function will hold the **parameters** or **arguments** to be used inside the function. These are optional - if there are none, the parentheses stay empty. If there are more than one, they are separated by commas. **Parameters** is the name given to the variables inside the parentheses when you **declare** the function. **Arguments** is the name given to those variables when you **call** the function. Think of parameters as a placeholder for arguments. eg:

```js
function add(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}
add(1, 5); //expected output: 6
```

Everything that happens inside a function is **function scoped**, which means that once the function has completed, all the variables inside will be deleted. Logging the result of our function to the console is one way to see it, but we can also store the **return** of a function into a variable. This is called a **function expression**. Return is optional, but if you don't use it, a function expression returns **undefined**. eg:

```js
function add(n1, n2) {
  const result = n1 + n2;
  return result;
}

const addResult = add(1, 3);

console.log(addResult); //expected output: 4
```