import "./App.css";
import ClassCharacters from "./classComponents/ClassCharacters";
import Characters from "./components/Characters";

function App() {
  const myStyle = {
    backgroundColor: "yellow",
    fontSize: "50px",
  };

  return (
    // This is the JSX part
    <div className="App">
      <h2 className="my-style">Hello React World</h2>

      {/* <Characters /> */}
      <ClassCharacters />
    </div>
  );
}

export default App;
