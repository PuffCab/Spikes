import "./App.css";
import Characters from "./components/Characters";
import Counter from "./components/Counter";
import MyComponent from "./MyComponent";
import Octopuses from "./Octopuses";

function App() {
  /// your JS code goes here //

  const myStyle = {
    backgroundColor: "yellow",
    fontSize: "50px",
  };
  //////////
  return (
    // This is the JSX part
    <div className="App">
      <h2 className="my-style">Hello React World</h2>
      {/* <Octopuses /> */}
      {/* <Counter /> */}
      <Characters />
    </div>
  );
}

export default App;
