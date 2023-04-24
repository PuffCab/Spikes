import "./App.css";
import FirstComponent from "./FirstComponent";
import Kangaroos from "./Kangaroos";
import { SecondComponent } from "./Student";

function App() {
  const styleObject = {
    color: "yellow",
    fontSize: "50px",
  };

  return (
    <div className="App">
      <h1 className="orange">Hello React World</h1>
      <h3>This is an h3</h3>
      <h2 style={{ color: "purple", backgroundColor: "lightblue" }}>
        Inline style
      </h2>
      <p style={styleObject}> with style object</p>
      {/* <FirstComponent /> */}
      <Kangaroos />
      <SecondComponent />
    </div>
  );
}

export default App;
