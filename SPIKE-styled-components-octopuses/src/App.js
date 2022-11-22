import logo from "./logo.svg";
import "./App.css";
import StyledComponents from "./components/StyledComponents";
import { Container } from "./style/container.styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import useMyFetch from "./hooks/useMyFetch";

function App() {
  const [dark, setDark] = useState(false);

  const theme = {
    colors: {
      primary: dark && "black",
      secondary: dark && "white",
    },
  };

  const { data, loading } = useMyFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("data>>>", data);
  const pictures = useMyFetch("https://jsonplaceholder.typicode.com/photos");

  console.log("pictures :>> ", pictures);

  return (
    <div className="App">
      <button onClick={() => setDark(!dark)}>toggle theme</button>
      <ThemeProvider theme={theme}>
        <h1>Styled Components</h1>
        <StyledComponents />
        <Container backgroundColor="grey">
          <h2>this is my Container</h2>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
