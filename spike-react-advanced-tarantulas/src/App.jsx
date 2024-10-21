import "./App.css";
import CoffeComponent from "./components/CoffeeComponent";
import FavoriteMeals from "./components/FavoriteMeals";
import Characters from "./components/Characters";
import { Button } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./components/Counter";

function App() {
  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    border: "none",
  };
  //JS section

  //JSX (inside the render())

  return (
    <div>
      {/* <h1 className="red">Hello World: React</h1> */}

      {/* <FavoriteMeals /> */}
      <Characters />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
