import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./views/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Travel App</h1>
      <Register />
    </>
  );
}

export default App;
