import React from "react";

import CharacterCard from "./CharacterCard";
import { Col } from "react-bootstrap";
import { CharacterType } from "../types/customTypes";

interface CardsGridProps {
  characters: CharacterType[];
}

function CardsGrid({ characters }: CardsGridProps) {
  return (
    <>
      {characters &&
        characters.map((character) => {
          return (
            <Col key={character.id}>
              <CharacterCard character={character} />
            </Col>
          );
        })}
    </>
  );
}

export default CardsGrid;
