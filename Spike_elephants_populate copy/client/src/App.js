import logo from "./logo.svg";
import "./App.css";

import { useEffect } from "react";

function App() {
  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/api/cities/all");
    const data = await response.json();
    console.log("data :>> ", data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Travel App</h1>
    </div>
  );
}

export default App;
