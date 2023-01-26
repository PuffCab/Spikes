import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import {
  Button,
  ButtonWithText,
  DinamicButton,
  RoundButton,
} from "./styles/Button.styles";
import { Container } from "./styles/Container.styles";
import { Footer } from "./styles/Footer.styles";
import Button2 from "./Button2.js";
import Characters from "./Characters";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const theme = {
    colors: {
      primary: darkTheme ? "black" : null,
      secondary: darkTheme ? "white" : null,
    },
  };
  return (
    <div className="App">
      <h1>Styled Components</h1>

      <Button>My styled Button</Button>
      <Button backgroundColor="blue">My blue Button</Button>
      <DinamicButton
        onClick={() => setIsClicked(!isClicked)}
        isClicked={isClicked}
        hoverColor="yellow"
      >
        My blue Button
        <p>Don't do this</p>
      </DinamicButton>
      <button onClick={() => setDarkTheme(!darkTheme)}>change theme</button>
      <Footer color="white">
        <h3>Footer</h3>
        <ul>
          <li>phone number</li>
          <li>email</li>
        </ul>

        <ThemeProvider theme={theme}>
          <Container backgroundColor="lightyellow">
            <h2>Styled Container</h2>
            <RoundButton hoverColor="tomato">rounded</RoundButton>
            <ButtonWithText text={"some text"} />
          </Container>
        </ThemeProvider>
      </Footer>
      {/* <Characters /> */}
    </div>
  );
}

export default App;
