import styled from "styled-components";

const Container = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: ${(props) =>
    props.theme.colors.primary ? props.theme.colors.primary : props.color}; ;
`;

export { Container };
