import "./App.css";
import MyComponent from "./components/MyComponent";
import Button from 'react-bootstrap/Button';
function App() {

  const myStyle = {
    color: "blue", 
    fontSize: "100px"
  }
  return (
    <div className="App">
      <h1 className="red">Hello React World</h1>
      <h1 style = {{ color: "red"}}>inline Style</h1>
      <h1 style = {myStyle}>style object</h1>
      <Button variant="primary">Primary</Button>
      <MyComponent />
    </div>
  );
}

export default App;
