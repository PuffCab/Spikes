# Project 2: Spike 1

## Intro to JavaScript

**JavaScript** is the world's most popular programming language: 98% of websites use JavaScript on the client-side for webpage functionality. First developed in 1995 for the Netscape Navigator web browser by Brendan Eich.

"Ham is to hamster, as Java is to JavaScript.." - wise words, from a stranger on the Internet. **Java** is a completely different programming language to JavaScript, they're not related in any way. When searching for solutions, make sure you're looking for JavaScript (often shortened to just **JS**) and NOT Java!

Let's make a new file with a **.js** extension. We'll then link it to an HTML document using a `<script>` tag, with a `src` property set to your `.js` file path. This script tag should ideally be placed as the last thing in your `<body>`, to ensure it is only read _after_ all HTML and CSS has been applied. eg:

```html
<body>
  <h1>Some content</h1>
  <script src="my-js-file.js"></script>
</body>
```

JavaScript uses **variables** and **expressions** to hold information. A variable will be declared using **var**, **let**, or **const**. I recommend using **const** except for special use-cases where a variable may need to be reinitialized (ie. to replace the value), in which case you can use **let**. **Var** can be considered legacy code at this point and should be avoided. You are much more likely to have errors when using it.

Once declared, your variable needs an **identifier**, ie. a unique name. JavaScript is case-sensitive - it is standard practise to use **camelCase** when naming JavaScript variables.

After a name, your variable is assigned a **value**, this is called **initialization**. In JavaScript, an **equals** (**=**) symbol is an assignment operator. A single **=** is always assigning value to the preceding variable. Example of a variable:

```js
const myName = "Raúl"; 
let myAge = 36;
```

- A **constant** variable (ie. declared with **const**) cannot be reinitialized, but a variable declared with **let** can. eg:

```js
const myName = "Raúl";
myName = "Emily"; //this will cause an error

let myAge = 36;
myAge = 37; //this is allowed
```

### Logging to the console

Now that our variable has a value, how do we see it? The **console.log** is your new best friend! This is used to make logs in the browser console, which you can find by opening the inspector, and tabbing across to **console** in the menu. To log the variable myName, type:

```js
const myName = "Raúl";
console.log(myName); //expected output: Emily
```

Different types of variables have different syntax. Important types you will need to know are **string**, **number**, **boolean**, **array**, **object**, **undefined**, and **null**. It is useful to use a theme in your code editor that will colour-code your variables. Above, the word Emily has been surrounded by **quotation marks** - this marks it as a string.

### String

A **string** is a collection of characters surrounded by quotation marks (**tip:** A **+** symbol between two strings will connect them together!).

### Number

A **number** is, quite obviously, a number. Be careful that it _doesn't_ have quotation marks, or it will be a string! Some other programming languages have multiples types for numbers, but JavaScript keeps it simple. You can use decimals to a maximum of 17, and use mathematical symbols **( +, -, \* or / )** to make calculations, but beware some of JavaScript's mathematical results! eg:

```js
const num1 = 10;
const num2 = 5;
const newNum = num1 + num2;

```

### Boolean

A **boolean** is a simple **true** or **false** (also be careful not to use quotation marks, or JavaScript will read it as a string). eg:

```js
const myBoolean = true;
```

### Arrays

An **array** is a collection of variables, think of them like a beads on a thread. An array is marked by the square brackets **[ ]** that surround it. Each item in the array needs to be separated by a comma. Arrays can contain all other variable types (including arrays), sometimes all at once! eg:

```js
const myArray = ["Raúl", 35, true];
```

To reference a specific item in an array, you will reference the **index**. The items in an array are assigned an index of their position: the first will always be **0**, the 2nd will always be **1**, and so on. Use the variable name and then **square brackets** to indicate the index:

```js
const myCats = ["Wirenz", "Tilly", "Moet"];

console.log(myCats[1]); //expected output: Tilly
```

You will often find yourself needing to **edit** or **isolate** elements of an array or string. Take some time to look though [this page](https://www.w3schools.com/js/js_array_methods.asp) of various **array methods**, and [this page](https://www.w3schools.com/js/js_string_methods.asp) of **string methods**. They will be very beneficial for your exercises. It's important to make a note of what is being returned by each method! Two commonly used examples will be the **.push()** and **.pop()** methods to add or remove elements from an array. eg:

```js
myCats.pop();
console.log("myCats: ", myCats);
//expected output: (2) ["Wirenz", "Tilly"]

myCats.push("Ghost");
console.log("myCats: ", myCats);
//expected output: (2) ["Wirenz", "Tilly", "Ghost"]
```

Note that using these methods to **mutate** an existing array is not the same as **reinitialization**. You can still declare an array with **const** and then use the methods to change the content, because the array itself isn't being replaced.

### Objects

An **object** is a collection of **property/value pairs** marked by curly braces **{ }** (think of the way you write CSS!). The **property** acts as an identifier, and the value can hold any JavaScript data type. eg:

```js
const myObject = {
  property1: "This value is a string",
  property2: 42,
  property3: false,
  property4: ["array item 1", "array item 2", "array item 3"],
  property5: {
    subProperty: {
      subSubProperty: "You can nest objects inside objects inside objects!!",
    },
  },
};
```

To access the information held in a specific **object property**, use the variable name and the property name seperated by a period (**dot notation**):

```js
const myCat {
  name: "Wirenz",
  age: 16,
}

console.log(myCat.name); //expected output: Wirenz
```

You can **add** a property to an object by initializing at the property level. Note that this isn't reinitializing the object itself, only a property inside it, which means the object can still be declared with const. eg:

```js
myCat.colour: "tortoiseshell";
```

### Undefined

- **Undefined** means that a value does not exist. It is very often the result of an error.

### Null

- **Null** also means that a value does not exist, but it is usually a deliberate absence. The words **null** and **undefined** will be returned, and you can even assign a variable. eg:

```js
const nothing = null;
```

### Comparison Operators

To compare the value of two variables, you can use a **comparison operator**, which will return **true** or **false**:

- **==** equal to (not type strict, only special use-cases)
- **===** equal to (type strict - use this one most often)
- **!=** not equal (not type strict)
- **!==** not equal (type strict)
- **>** greater than
- **<** less than
- **>=** greater than or equal to
- **<=** less than or equal to

### Conditional Statements

- Sometimes you will want to complete an operation only under specific conditions. In that case, you would use a **conditional statement** that tells JavaScript what to do in various circumstances. The most common is the **if...else...** statement. To use it, declare a condition, and then the operation to be executed when that condition is met. eg:

```js
if (myName === "Raúl") {
  console.log("That's my name!");
} else {
  console.log("That's not my name!");
}
//expected output:
//That's my name!
```
