import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";

function App() {
  const num1 = 1;
  const num2 = 2;
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
        <h1 data-testid="myTestId">My Header</h1>
        <p title="sum">{num1 + num2}</p> */}
        <Login />
      </header>
    </div>
  );
}

export default App;
