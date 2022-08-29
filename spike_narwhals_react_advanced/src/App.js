import "./App.css";
import MyComponent from "./MyComponent";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Characters from "./views/Characters";

function App() {
  const myStyle = {
    fontSize: "50px",
    backgroundColor: "yellow",
  };

  return (
    <div className="App">
      {/* <h2 className="new-style">Hello React World</h2> */}
      {/* <p style={{ backgroundColor: "blue", fontWeight: "bold" }}>
        my inline style
      </p>
      <p style={myStyle}>with styling object</p> */}

      {/* <hr /> */}
      {/* <Home /> */}
      {/* <hr /> */}
      {/* <Contact /> */}

      {/* <MyComponent /> */}
      {/* <Counter /> */}
      <Characters />
    </div>
  );
}

export default App;
