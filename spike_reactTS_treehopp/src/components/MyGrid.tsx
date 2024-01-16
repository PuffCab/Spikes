import React from "react";
import { Container, Row } from "react-bootstrap";
import CharacterCard from "./CharacterCard";

interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  image: string;
}

type MyGridProps = {
  anyArray: CharacterType[];
  // if we don't do a conditional rendering in the parent component, we need to include "null" in the type definition of the prop
  //   characters: CharacterType[] | null;
};

function MyGrid({ anyArray }: MyGridProps) {
  return (
    <Container>
      <Row>
        {anyArray &&
          anyArray.map((anyArray) => {
            return <CharacterCard character={anyArray} key={anyArray.id} />;
          })}
      </Row>
    </Container>
  );
}

export default MyGrid;
