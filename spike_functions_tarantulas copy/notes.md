# Project 2: Spike 3

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

## Call Stack

JavaScript **call stack** determines the function execution order: LIFO (last in, first out). When a function is called, it is added to the top of the stack. If that function calls another function, then the child function will be added to the top. Because of the synchronous nature of JavaScript, only one function can be "active" at a time: the top function in the call stack. When the top function has finished, it will be removed and the next function in the stack becomes "active". 

## Parameters/Arguments

The parentheses of a function will hold the **parameters** or **arguments** to be used inside the function. These are optional - if there are none, the parentheses stay empty. If there are more than one, they are separated by commas. **Parameters** is the name given to the variables inside the parentheses when you **declare** the function. **Arguments** is the name given to those variables when you **call** the function. Think of parameters as a placeholder for arguments. eg:

```js
function add(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}
add(1, 5); //expected output: 6
```

## Function Return

Everything that happens inside a function is **function scoped**, which means that once the function has completed, all variables declared inside the function will be removed from memory. Logging the result of our function to the console is one way to see it, but we can also store the **return** of a function into a variable _outside_ the function. This is called a **function expression**, and it means we can now access the value of our result outside the function's scope. Return is optional. If a function doesn't return a value, the return will be **undefined**. eg:

```js
function add(n1, n2) {
  const result = n1 + n2;
  return result;
}

const addResult = add(1, 3);

console.log(addResult); //expected output: 4
```