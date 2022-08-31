import styled from "styled-components";
import Button3 from "../Button3";

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 40%;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

const Button2 = styled.button`
  background-color: ${(props) => (props.click ? "orange" : "green")};
`;

const RoundButton = styled(Button)`
  border-radius: 80%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.theme.colors.secondary};
`;

const ButtonWithText = styled(Button3)`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;

export { Button, Button2, RoundButton, ButtonWithText };
