import React, { useState } from "react";
import {
  ButtonCustomText,
  Footer,
  MyButton,
  MySecondButton,
  PText,
  RoundButton,
} from "../style/button.style";

function StyledComponents() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <MyButton>My custom btn</MyButton>
      <MyButton backgroundColor="coral">
        <PText>My yellow btn</PText>
      </MyButton>
      <MySecondButton onClick={() => setClicked(!clicked)} clicked={clicked}>
        second btb
      </MySecondButton>
      <RoundButton>rounded</RoundButton>
      <ButtonCustomText color="#2f00ff" text="custo" />
      <Footer color="blue" colorLi="#b22222">
        <h2>this is a footer</h2>
        <ul>
          <li>li element1</li>
          <li>li element2</li>
        </ul>
      </Footer>
    </div>
  );
}

export default StyledComponents;
