import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Calculator";
import { Link } from "react-router-dom";
import Login from "./views/login/Login";

function App() {
  const num1 = 5;
  const num2 = 7;
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* //REVIEW[epic=test, seq=2] 2-  Other ways to find the element: we can add "data-testid""  which is an attribute for testing ...and use it : data-testid="myLink*/}
        <a
          data-testid="myLink"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* //REVIEW[epic=test, seq=5] 5- Add new elements to create a new test */}
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
      {/* //REVIEW[epic=test, seq=10] 10- Create new  elements : with "data-testid" , and with "title"*/}
      <h1 data-testid="myTestId">Hey there</h1>
      <p title="sum">{num1 + num2}</p>
      {/* <Calculator /> */}
    </div>
  );
}

export default App;
