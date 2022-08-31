// import "./App.css";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./views/Home";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: darkTheme ? "black" : "purple",
          secondary: darkTheme ? "white" : "brown",
        },
      }}
    >
      <div>
        <button onClick={() => setDarkTheme(!darkTheme)}>toggle theme</button>
        <h2> Styled Components</h2>

        <hr />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
