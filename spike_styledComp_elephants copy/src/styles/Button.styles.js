import styled from "styled-components";
import Button2 from "../Button2";

const Button = styled.button`
  width: 150px;
  height: 50px;

  border-radius: 40%;
`;
const DinamicButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${({ isClicked }) => (isClicked ? "green" : "grey")};
  border-radius: 20%;

  &:hover {
    background-color: ${(props) => props.hoverColor};
    p {
      color: red;
    }
  }
`;

const RoundButton = styled(DinamicButton)`
  background-color: ${(props) =>
    props.theme.colors.secondary
      ? props.theme.colors.secondary
      : props.backgroundColor};
  border-radius: 50%;
`;

const ButtonWithText = styled(Button2)`
  color: ${(props) =>
    props.theme.colors.secondary ? props.theme.colors.secondary : "fuchsia"};
`;

export { Button, DinamicButton, RoundButton, ButtonWithText };
