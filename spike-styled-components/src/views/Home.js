import React, { useState } from "react";
import {
  Button,
  Button2,
  ButtonWithText,
  RoundButton,
} from "../components/styles/Button.style";
import { Container } from "../components/styles/Container.style";
import { Footer } from "../components/styles/Footer.style";
import MyButton from "../components/styles/MyButton";
import { GlobalStyle } from "../Global.style";

function Home() {
  const [click, setClick] = useState(false);

  return (
    <Container backgroundColor="beige">
      <h3>Home</h3>
      <MyButton text="my button" color="red" backgroundColor="blue" />
      <Button backgroundColor="red" hoverColor="green">
        Styled button
      </Button>
      <Button backgroundColor="blue">blue button</Button>
      <Button2 onClick={() => setClick(!click)} click={click}>
        click me
      </Button2>
      <RoundButton backgroundColor="lightblue">round</RoundButton>

      <ButtonWithText text="my own text" color="pink" fontSize="30px" />

      <Footer color="yellow">
        <h2>My footer</h2>
        <ul>
          <li>Li element</li>
        </ul>
      </Footer>
    </Container>
  );
}

export default Home;
