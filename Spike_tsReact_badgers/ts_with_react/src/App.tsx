import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Characters from "./views/Characters";

function App() {
  return (
    <>
      <h1>Rick & Morty Fan site</h1>
      <Characters />
    </>
  );
}

export default App;
