import styled from "styled-components";

const Container = styled.div`
  width: 40vw;
  height: 40vh;
  background-color: ${(props) =>
    props.theme.colors.primary
      ? props.theme.colors.primary
      : props.backgroundColor};
`;

export { Container };
