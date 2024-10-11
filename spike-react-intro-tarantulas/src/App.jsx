import "./App.css";
import CoffeComponent from "./components/CoffeeComponent";
import FavoriteMeals from "./components/FavoriteMeals";
import Characters from "./components/Characters";
import { Button } from "react-bootstrap";

function App() {
  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    border: "none",
  };
  //JS section
  console.log("hey there");

  const num1 = 34;
  const num2 = 55;
  const sum = () => {
    const a = 1;
    const b = 2;
    const c = a + b;
    console.log("c", c);
  };
  if (1 > 1) {
    sum();
  } else {
    console.log("print this");
  }

  //JSX (inside the render())

  return (
    <div>
      <h1 className="red">Hello World: React</h1>
      <h3 style={{ backgroundColor: "yellow" }}>Inline styled</h3>
      <button style={buttonStyle}>Styled with and object</button>
      <Button variant="success">Success</Button>
      {/* <h3>Number 1 is : {num1}</h3>
      <h3>Number 2 is : {num2}</h3>
      <h3>Num1 + num2 : {num1 + num2}</h3> */}
      {/* <CoffeComponent /> */}
      {/* <FavoriteMeals /> */}
      <Characters />
    </div>
  );
}

export default App;
