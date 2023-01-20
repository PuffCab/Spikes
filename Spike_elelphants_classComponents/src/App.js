import MyComponent from "./components/MyComponent";
import "./App.css";
import Counter from "./components/Counter";
import Characters from "./views/Characters";
import ClassCharacters from "./class-components/ClassCharacters";

function App() {
  const myStyle = {
    color: "tomato",
    fontSize: "50px",
  };

  return (
    <div className="App">
      <h1 className="red">Hello React World</h1>

      {/* <MyComponent /> */}
      {/* <Characters /> */}
      <ClassCharacters />
    </div>
  );
}

export default App;
