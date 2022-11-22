import styled from "styled-components";
import Button3 from "../components/Button3";

const MyButton = styled.button`
  &:hover {
    background-color: green;
    & p {
      color: yellow;
    }
  }

  width: 100px;
  height: 50px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "red"};
  border-radius: 40%;
`;
const MySecondButton = styled.button`
  background-color: ${(props) => (props.clicked ? "purple" : "red")};
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: lightblue;

  h2 {
    color: ${(props) =>
      props.theme.colors.secondary
        ? props.theme.colors.secondary
        : props.color};
    font-size: 20px;
  }

  li {
    color: ${(props) => props.colorLi};
  }
`;

const PText = styled.p`
  color: white;
  font-size: 10px;
`;

const RoundButton = styled(MyButton)`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

const ButtonCustomText = styled(Button3)`
  color: ${(props) => props.color};
`;

export {
  MyButton,
  MySecondButton,
  Footer,
  PText,
  RoundButton,
  ButtonCustomText,
};
