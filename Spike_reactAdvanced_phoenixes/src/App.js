import "./App.css";
import Contact from "./views/Contact";
import HomePage from "./views/HomePage";
import MyComponent from "./MyComponent.js";
import Phoenixes from "./Phoenixes.js";
import Counter from "./components/Counter";
import Characters from "./views/Characters";

function App() {
  const myStyle = { color: "yellow", fontSize: "80px" };

  return (
    <div className="App">
      <h1 className="red">Rick & Morty</h1>
      <h2 style={{ color: "blue", fontSize: "70px" }}>inline style</h2>
      <h2 style={myStyle}> style object</h2>
      {/* <MyComponent /> */}
      {/* <HomePage /> */}
      {/* <Contact /> */}
      {/* <Phoenixes /> */}
      {/* <Counter />
      <Counter /> */}
      <Characters />
    </div>
  );
}

export default App;
