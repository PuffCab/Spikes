import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: lightblue;
  h2 {
    /* color: purple; */
    font-size: 1rem;
    color: ${(props) => props.color};
  }
  li {
    color: ${(props) => props.color};
  }
`;

export { Footer };
