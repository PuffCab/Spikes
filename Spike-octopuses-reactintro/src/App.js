import "./App.css";
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
      <h2 className="coral">this is the parent</h2>
      <h2 style={{ backgroundColor: "green" }}>inline style</h2>
      <h2 style={myStyle}>style object</h2>
      <Octopuses />
    </div>
  );
}

export default App;
