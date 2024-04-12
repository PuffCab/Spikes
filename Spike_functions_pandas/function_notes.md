# Functions

## Function

A function is a block of code that performs a specific task or calculates a value. They encapsulate a sequence of instructions that you want to use repeatedly or with different data, making them reusable pieces of code that can be called (or invoked) multiple times throughout your program. They take inputs, do some processing, and can return a result.

How to identify: In JavaScript, functions are typically identified by the keyword `function`, followed by a name, parentheses `()`, and curly braces `{}` containing the function body.

```javascript
function someName() {
  //The inside of the curly braces is the functin body
  //here we will write the logic we want to perform.
  console.log("Hello");
}
```

- **How to use**: To use a function, you call it by its name followed by parentheses, possibly containing **arguments**: myFunction(arg1, arg2).

```javascript
someName() // output: "Hello"
//this will call the function declared above and print "Hello" in our console
```

- **How to name**: Function names in JavaScript should be descriptive verbs and follow _camelCase_ notation.

- **Common mistakes**: A common mistake is not invoking the function by forgetting the parentheses, leading to the function not executing

## Parameters

Parameters are placeholders for values that a function can accept and use when called.

- **Usecase**: Parameters allow us to write functions that can be used over and over again with different values (reusability).

- **How to identify**: Parameters are identified by their position in the parentheses following the function name in a function declaration.

- **How to name**: Parameter names should be descriptive and follow camelCase notation. Like variables, they can't be reserved words in JavaScript.

```javascript
function greetPerson(greetType, name) { //greetType and name are PARAMETERS
  console.log(greetType + " " + name);
}
```

## Arguments

Arguments are the actual values passed to a function when it is called/invoked.

- **Usecase**: Arguments are each of the values passed to a function when it is called/invoked. They are assigned to the function's parameters in the order they are provided. You can pass any number of arguments to a function.

- **How to identify**: Arguments are identified by their position in the parentheses following the function name in a function call.

- **How to name**: you don't. Arguments are either values, or variables we have declared previously, so they don't have names.

```javascript
function greetPerson(greetType, name) {
  console.log(greetType + " " + name);
}
greetPerson("Hi", "Tom"); //strings "Hi" and "Tom" are ARGUMENTS
//output: Hi Tom
```

- **Common mistakes**: A common mistake is providing the wrong number of arguments. If you provide more arguments than there are parameters, the extra arguments are ignored. If you provide fewer arguments, the missing ones are set to undefined.

    Another common error is providing the arguments in different order as the parameters of the function

    ```javascript
    function greetPerson(greetType, name) {
      console.log(greetType + " " + name);
    }
    greetPerson("Tom", "Hi"); //output: Tom Hi
    ```

## Returns

When a function is invoked/called, it executes its code and, when it reaches a return statement, it immediately stops execution and gives back ("returns") the value specified to the function call (`myFunction()`).

- **Usecase**: It allow us to use the restult obtained in a function, in a different part of our code

```javascript
function calculateBill(food, drink) {
  var total = food + drink;
  return total; //the value of total is stored is stored in the function call
}
var mealCost = calculateBill(20, 10); //we create a variable that stores the value returned by the function

function getChange(billValue, mealCost) {
  const change = billValue - mealCost;
  console.log("You get " + change + "€ change");
}
getChange(50, mealCost);
//output in console: You get 20€ change
```

- **Common mistakes**: A common mistake is forgetting to return a value. If you don't specify a return value, the function will return undefined.

```javascript
function calculateBill(food, drink) {
  var total = food + drink;
  //NO RETURN
}
var mealCost = calculateBill(20, 10); //we create a variable that stores the value returned by the function

function getChange(billValue, mealCost) {
  const change = billValue - mealCost;
  console.log("You get " + change + "€ change");
}
getChange(50, mealCost);
//output in console: You get NaN€ change
```
