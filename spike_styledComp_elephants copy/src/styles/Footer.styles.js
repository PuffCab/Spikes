import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #9b8cb0;

  h3, li {
    color: ${(props) => props.color};
  }
 ´
`;

export { Footer };
