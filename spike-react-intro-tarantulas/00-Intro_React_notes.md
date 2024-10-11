# Project 3: Spike 2

## MPA, SPA & PWA

- **MPA**: So far, some of you have built projects using HTML+CSS+JS. Those kind of apps we usually refer to them as **MPA** (**Multi-Page Applications**). This means our websites have been built with multiple `.html` files that link together and typically a full page reload happens whenever you navigate between different sections or pages of the application. Every time that happens, the application triggers a request to the server, which send us again a package containing `.html` , `.css` and `.js` files (and eventually other types of documents).

- **SPA (Single-Page Application)** :

  - In a Single-Page Application, the entire application is contained within a single `.html` file. That file acts like a whiteboard, that starts empty, when we load the URL, the browser draws some content, and and every time we navigate to another section/page, the browser essentially clears the board and replaces it with fresh content.
  - Navigation between different sections or views of the application is handled dynamically through JavaScript without requiring a full page reload.
  - SPAs offer a more fluid and responsive user experience since only the necessary data is fetched from the server and the page doesn't need to be completely reloaded.
  - React, Angular, and Vue are popular frameworks (well, actually React is considered a library) for building SPAs.

- **PWA (Progressive Web App)** : is a term coined by Google (by Chrome developer Alex Russel, in 2015), used to define websites built using _modern techniques_, to mimic a native app on a smartphone, opening from the Home screen by tapping an icon, and can be downloaded from app stores. Except, a PWA runs in a browser, meaning there is no installation necessary to use it.

They should meet some criteria and include some features such as offline mode and push notifications. ![PWA technologies](https://res.cloudinary.com/practicaldev/image/fetch/s--dCvS0dsb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://qph.fs.quoracdn.net/main-qimg-e9e0f8bfcdecc04f83c5d3aa7abfa612)

[Here](https://neoteric.eu/blog/pwa-vs-mpa-vs-spa-whats-the-best-choice-for-your-app/) is a good breakdown of each Application type.

The Pros of SPA seem to outweigh the Cons, but the biggest obstacle for SPA is making sure your App is compatible for **SEO** (**Search Engine Optimization**). Google crawlers can't just read the content of your pages when your App is empty, so you need to make sure there is meta data available for Google Analytics to rank your App in their search results. The initial load can sometimes also take some time, since the user device downloads the entire App on the first visit. But once this download is complete, using and navigating through the App should be much faster.

💡💡 An app built with React will be a SPA, and could be turned into a PWA.

## React

A useful extension for VSCode snippets is: **ES7 React/Redux/GraphQL/React-Native snippets**.

React was developed by Facebook, mainly to have live news feed updates without needing to update the entire page - isolate just the component that needs updating - in 2011. Then integrated into Instagram, and finally made open-sourced in 2013.

In order to run a React development server, you need to have Node installed. You can check if you already have Node installed by running `node -v` from any terminal. If you get a version number, it's already on your device. If you get an error, you'll need to [install](https://nodejs.org/en) it.

When you installed Node, it should also have included the [**npm** package manager](https://docs.npmjs.com/about-npm). **Packages** are pre-written code bundles that we can install and use in our project, rather than writing everything from scratch. They can be as simple as a single function, or massively complicated. If you're using a styling library like Bootstrap, they will offer a React compatible package you can install for your project. The package manager (npm, yarn, etc) keeps all this organized. When you push your code to GitHub, you don't push all the installed packages (it would be huge!!), you push a `package.json` file which describes all the project's package **dependencies**. If you clone a project, you'll have to run `npm install` to install all the packages listed in the repo's `package.json`.

We're going to use a script from [Vite](https://vitejs.dev/guide/) to create our App. You can create a React App manually, but you will need to use some external technology like Webpack and Babel to bundle the JavaScript. Vite will take care of all that for us. Vite is a fairly new service, so if you're looking at old tutorials you might see that programmers used to use the script `npx create-react-app` to create new projects. This still works, but the React team decided to "part ways" with them, so it is not as mantained and it was, hence it is bloated with outdated packages.

We can now create a new project. Vite will also create a Root folder for your new project, so you just need to navigate to where you'd like to create a new project, then run `npm create vite`, then follow the prompts! If you're prompted to install Vite, do so. **Name** your project, then select **React** from the list of framework options. We're going to give you a small challenge to get used to using React before your full project, so for now just select **JavaScript**. Later, we'll include Typescript.

Vite will have created a folder for you, with a lot of folders and files inside. The terminal also shows instructions to launch the app:

```bash
cd <app name>
npm install
npm run dev
```

The only `.html` file is the `index.html` at the root of the project. This holds a single `<div>` with the `id` property **"root"**. The `src` folder holds your working files, this is where you'll add your app's pages and content. There are two `.jsx` files that exist already: `main.jsx` and `app.jsx`. If we have a look inside each, we'll see that the `main.jsx` is using some React methods to render the content of the `app.jsx` component inside the single root `<div>` on the `index.html`.

## React Functional Components

As described in React's documentation, [_components are one of the core concepts of React_](https://react.dev/learn/your-first-component).

React code is broken down into smaller pieces known as [**Components**](https://react.dev/learn/your-first-component). A Component is a **JavaScript function** that returns **JSX** elements to be rendered on the DOM. Breaking long bits of code into Components isn't just for readability, it also means you can isolate the logic linked to that Component (this is especially useful for when you generate elements with loops).

It also exist another type of components, called **Class Components** which are built using JS classes. Since the introduction of Hooks (an special type of react functions) with React 16.8 (2019), React has progressively shifted from the use of Class Components to Functional Components. Therefore in this course we will focus only in the use of Functional Components.

```jsx
// Components are named capitalized.
function App() {
  // In this area we will write our JS code

  //Inside the return, we will write a special type of HTML
  return <div></div>;
}

// To be able to reuse our components, we need to exporting them.
export default App;
```

Let's create our first component!

```jsx
function MyButton() {
  return <button>I'm a button</button>;
}

export default MyButton;
```

⚠️⚠️ Don't forget that React component names MUST ALWAYS start with a capital letter.⚠️⚠️

In order to see our button on the screen, we need to "put" it inside our `App` component.

```jsx
function App() {
  return (
    <div>
      <h1>How many buttons do you want?</h1>
      <MyButton />
    </div>
  );
}

export default App;
```

## JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx) is a mix between HTML and JavaScript. You can't return raw HTML elements from a JavaScript function (you would have to write them as a `string`), so JSX was developed to simplify DOM manipulation. You don't need to manually `document.createElement("h1")` in React, you can simply write your `<h1>` in the return of your Component, and because everything is wrapped inside the React `.render()` method on `main.jsx`, React will create and append it for you.

It's important to remember though, that the return of a function can only return **one** element. If you're returning multiple JSX elements, you'll need to wrap them in a container, such as a `<div>`. Occasionally, we want to separate multiple elements into a single Component for logic reasons, but an additional `<div>` or `<span>` would mess with our layout or styling. In this case we can use a special React element called a **Fragment**, as `<React.Fragment>` or simply `<>`.

It's going to make things much easier if you can recognize a React Component as a special type of JavaScript function. We always give Components **Capitalized names** to differentiate them from regular JavaScript functions or HTML Tags. When you want to use your Component, it's "called" like an HTML element in the JSX. Look at the `main.jsx` to see how it calls the App Component `<App />`. If you call the `<App />` Component again right underneath, all that content will appear twice.

- Main differences with HTML:

  - `ClassName`:

  ```jsx
  // JSX
  <div className="container">I am JSX</div>;

  // HTML
  <div class="container">I am HTML</div>;
  ```

  - Use of variables inside HTML elements:

  ```jsx
  function App() {
    const favLibrary = "React";
    return <h1>👩🏻‍💻 💙 {favLibrary}</h1>;
  }

  export default App;
  ```

  - Use of logic inside HTML elements:

  ```jsx
  function CoffeeComponent() {
    const hasCoffee = false;

    let message;

    if (hasCoffee) {
      message = <p>Yes, I'm fueled up and ready to go! ☕️</p>;
    } else {
      message = <p>No coffee, no work! ☕️😴</p>;
    }

    return (
      <div>
        <h1>Ready for the day?</h1>
        {message}
      </div>
    );
  }

  export default CoffeeComponent;
  ```

  We can include that logic directly inside our "HTML" (JSX!) ➡️ check `Conditional Rendering.` section for examples.

In React, we separate Components into separate files. In order to access variables across different files, we **export** them from one place, then **import** them into another. We typically only put one Component per file, this is so you can default export the single variable, and it keeps your code organized. If you create a folder for `Components`, you can keep them all together. Feel free to create sub-folders to group related Components together, but be aware your imports will need to be updated if you change where a file is located.

## Strict Mode

Wrapped around your `<App />` Component on the `main.jsx` is a Component called `<React.StrictMode>`. This is a [debugging tool](https://react.dev/reference/react/StrictMode). It will re-render each Component and re-run Effects an extra time in order to find common bugs caused by impure rendering or missing Effect clean-up (we will cover Effects in the next spike). This only happens in **development mode** - when you build and deploy your app, this behavior will stop. You will notice this mostly as double console logs. Even though this can be a bit annoying, I recommend leaving it active.

## Conditional Rendering

JSX let's you write **inline JavaScript** mixed in with your HTML. The syntax uses **curly braces** **{}** to escape into JavaScript at any point in your HTML. This is useful for defining [**conditional rendering**](https://react.dev/learn/conditional-rendering) - if one condition is true, show this element, else show other element.

```jsx
function CoffeeComponent() {
  const hasCoffee = false;

  return (
    <div>
      <h1>Ready for the day?</h1>
      <p>
        {(() => {
          if (hasCoffee) {
            return "Yes, m fueled up and ready to go! ☕️";
          } else {
            return "No coffee, no work! ☕️😴";
          }
        })()}
      </p>
    </div>
  );
}

export default CoffeeComponent;
```

A bit of a complex syntax, isn't it ?😵‍💫.
Luckily, the **ternary operator** will make it easier.

```jsx
function CoffeeComponent() {
  const hasCoffee = false;

  return (
    <div>
      <h1>Ready for the day?</h1>
      {hasCoffee ? (
        <p>Yes, I am fueled up and ready to go! ☕️</p>
      ) : (
        <p>No coffee, no work! ☕️😴</p>
      )}
    </div>
  );
}

export default CoffeeComponent;
```

A **ternary operator** can function like shortened syntax for an **if... else... statement**. You specify a condition and follow with a **?**, then you define the expression if the condition is **truthy**, followed by a **:** and the expression if the condition is **falsy**. The **&&** operator checks if a condition is truthy, but doesn't require an "else". You can use **{}** in your return to escape into JavaScript and make these checks within your HTML. This will be a very important step when using variables that update (we will cover React State in the next spike). If you try to render, or apply a JavaScript method to a variable of an incompatible type, your code will break.

## Looping

Since you can escape into JavaScript within the JSX, you can also utilize loops like `.map()`. When you're generating many copies of the same element/Component, however, React wants to be able to keep track of them so it requires the **outermost returned element** to have a `key` property. This key **must** be unique on the **page**. If you're only looping once on the page, you know you're safe to use the **index** of each element in the array you're looping over. If you have multiple loops however, then those index values will no longer be unique. Don't forget that looping inside a Component being rendered on that page will also count! If the data items have some unique ID property, this is the best scenario. Otherwise, you can use some **string concatenation**/**template literals** to create your own unique key.

## Props

**Props** are how you can pass data from one Component to another. This is essentially **Parameters** and **Arguments**, with specific Component syntax. The keyword **props** always exists as a Parameter in React Functional Components. If we log it to the console, it will show an empty object. One default property on the props object is **children**, which refers to any content _between_ the Component's opening and closing tags. We've only been using self-closing Components up until now, but we can test passing data down through the `props.children`.

We can add other properties to the props object by putting them as properties in the opening tag of the Component. You can pass any JavaScript variable as props, including expressions and functions. You're essentially creating the key/value pair to add to the props object when you add a prop to pass into a Component. A shortcut way of accessing the props values is to **destructure** the object.

```jsx
<MyComponent name={"Raúl"} hometown={"Salamanca"} />;

// props object will look like:
const props = {
  name: "Raúl",
  hometown: "Salamanca",
};
```

Inside the component `<MyComponent/>`, the props received will look like this

```jsx
function MyComponent(props) {
  return (
    <div>
      <p>My Name is {props.name}</p>
      <p>I was born in {props.hometown}</p>
    </div>
  );
}
export default MyComponent;
```

Since `props` is an object, if we prefer, we can use destructuring to access the name of the properties directly.

```jsx
function MyComponent({ name, hometown }) {
  return (
    <div>
      <p>My Name is {name}</p>
      <p>I was born in {hometown}</p>
    </div>
  );
}
export default MyComponent;
```

I like to demonstrate this in a single file to hopefully help you understand why passing data **downstream** works, but passing data back **upstream** doesn't. You have to think carefully about the structure of your project to make sure all Components that need certain data are able to access it. Later, we'll learn some different ways to pass data that sidestep this limitation, but for this exercise concentrate on where data is coming from, where you're using it, and how it's being passed from A to B.

- How to pass data **upstream** :

  First we need to create a function in the parent component, that receives as parameter the data that will be sent from the child component.

  ```jsx
  function ParentComponent() {
    const getDataFromChild = (data) => {
      console.log(data);
    };
    return (
      <div>
        <ChildComponent getDataFromChild={getDataFromChild} />
      </div>
    );
  }
  export default ParentComponent;
  ```

In `ChildComponent` we receive the function `getDataFromChild` as props, and we call it using an event (click, hover, etc...).

```jsx
function ChildComponent({ getDataFromChild }) {
  const sendData = () => {
    getDataFromChild("Hello parent component!");
  };
  return (
    <div>
      <button onClick={sendData} />
    </div>
  );
}
export default ChildComponent;
```

The string `Hello Parent component` will be printed to the console, thanks to the `console.log(data)` we have in the parent component, hence the data traveled **upstream** from `ChildComponent` to `ParentComponent`.

## styling in React

React allows you to apply CSS to components, but it’s important to understand how CSS in React works and how it interacts with the global nature of styles in web applications.

One of the most frequently mentioned React's downsides, is that it is _not CSS scoped_ , meaning that all.

- **Why React is Not CSS Scoped?**
  In React, CSS is not scoped to individual components. This means that by default, the CSS applied to one component can affect any other component that shares the same class name, because CSS is global in scope. If two components share the same class name, the styles will apply across both components, regardless of where they are used in the component tree.

We might have a component created in its own file:

```javascript
// /components/Button.js
//let's imagine that class "btn" applies a red color to the button's text
function Button() {
  return <button className="btn">Click Me</button>;
}
export default Button;
```

Another component created in a different folder, using the same class

```javascript
// pages/Header.js
function Header() {
  return <h1 className="btn">Header Text</h1>;
}

export default Header;
```

And if we import both inside the same third component

```javascript
// /src/App.js
import Button from "./Button";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Button />
    </div>
  );
}

export default App;
```

The text from both will be red.

### ways of styling

1. **With a CSS file**

The most common method for styling in React is using a traditional `.css` file. You write the styles in a separate CSS file and **import** that file into the component or the main `App.js` file.

```javascript
// Button.js
import "./App.css"; // Importing the CSS file

function Button() {
  return <button className="myButton">Styled with CSS</button>;
}

export default Button;
```

2. **Inline Styling**

Inline styling is done by directly specifying a style property within the JSX tag. This style is written as an object, with camelCased CSS properties.

```javascript
function InlineStyledButton() {
  return (
    <button style={{ backgroundColor: "green", color: "white" }}>
      Click Me
    </button>
  );
}

export default InlineStyledButton;
```

3. **Styling with a Style Object**

You can define a style object in JavaScript and use it to style your component. This helps to separate your styles from the JSX but keeps everything in the same file.

```javascript
function StyledWithObject() {
  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    border: "none",
  };

  return <button style={buttonStyle}>Styled Button</button>;
}

export default StyledWithObject;
```

4. **CSS Modules (Scoped CSS)**

CSS Modules offer a solution to the problem of globally scoped CSS by scoping the CSS to the component where it's imported. With CSS modules, the class names are automatically unique, avoiding clashes across components.

```javascript
// Button.js
import styles from "./Button.module.css"; // Importing the CSS module

function Button() {
  return <button className={styles.myButton}>Scoped CSS</button>;
}

export default Button;
```

5. **CSS Frameworks for React**

For building larger, consistent UI components quickly, many developers use CSS frameworks. Here are some of the most popular CSS frameworks commonly used in React:

- Bootstrap (React-Bootstrap): Provides pre-designed responsive UI components. [Website](https://react-bootstrap.netlify.app/)
- Material-UI (MUI): Based on Google's Material Design principles, it provides customizable React components. [Website](https://mui.com/material-ui/)

- Tailwind CSS: A utility-first CSS framework that allows you to compose styles directly in your JSX with small utility classes. [Website](https://tailwindcss.com/)

- Chakra UI: A modular and accessible component library focused on ease of use and simplicity. [Website](https://v2.chakra-ui.com/)

- Styled Components: Allows us to create reusable components mixing CSS with JS [Website](https://styled-components.com/)

<!-- Include recommended extensions (components diagrams) -->
