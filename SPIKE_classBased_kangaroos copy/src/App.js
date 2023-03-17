import "./App.css";
import ClassCharacters from "./ClassComponents/ClassCharacters";
import Counter from "./components/Counter";
import FirstComponent from "./FirstComponent";
import Kangaroos from "./Kangaroos";
import Characters from "./pages/Characters";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { SecondComponent } from "./Student";

function App() {
  const styleObject = {
    color: "yellow",
    fontSize: "50px",
  };

  return (
    <div className="App">
      <h1 className="orange">Hello React World</h1>

      {/* <FirstComponent /> */}
      {/* <Kangaroos /> */}
      {/* <Counter />
      <Counter /> */}
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <Characters /> */}
      <ClassCharacters />
    </div>
  );
}

export default App;
