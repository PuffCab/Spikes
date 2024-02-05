import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CharactersFetch from "./views/CharactersFetch";
import Countries from "./views/Countries";
import Country from "./views/Country";

function App() {
  return (
    <>
      <h1>GQL</h1>
      {/* <CharactersFetch /> */}
      {/* <Countries /> */}
      <Country code={"ES"} />
      <br />
      <Country code={"JP"} />
      <br />
      <Country code={"IT"} />
    </>
  );
}

export default App;
