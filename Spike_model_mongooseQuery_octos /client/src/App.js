import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
function App() {
  const getCities = async () => {
    const response = await fetch("http://localhost:5001/api/cities/all");
    const results = await response.json();
    console.log("results", results);
  };

  useEffect(() => {
    getCities();
  }, []);

  return <div className="App"></div>;
}

export default App;
