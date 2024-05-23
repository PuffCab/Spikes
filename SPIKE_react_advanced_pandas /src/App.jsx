import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FavMeal from "./components/FavMeal";
import FavMeals from "./components/FavMeals";
import Counter from "./components/Counter";
import Characters from "./Characters";

function App() {
  //! JS part
  const myStyle = {
    backgroundColor: "red",
  };
  //! Inside the Return we have the JSX
  return (
    <>
      <h1 className="yellow">Hello React World</h1>
      {/* <h2 style={{ backgroundColor: "red" }}>Inline styled</h2> */}
      <h2 style={myStyle}>Inline styled</h2>
      {/* <h2>Parent From FavMeals Component</h2> */}
      {/* <FavMeals /> */}
      <Counter />
      {/* <Characters /> */}
    </>
  );
}

export default App;
