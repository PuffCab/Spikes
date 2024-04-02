import React from "react";
import { Col } from "react-bootstrap";
import { Character } from "../@types/Customtypes";
import CharacterCard from "./CharacterCard";

type GridProps = {
  characters: Character[] | null;
};

const Grid = ({ characters }: GridProps) => {
  return (
    <>
      {characters &&
        characters.map((character) => {
          return (
            <Col key={character.id}>
              <div>
                <CharacterCard
                  image={character.image}
                  name={character.name}
                  species={character.name}
                  status={character.status}
                />
              </div>
            </Col>
          );
        })}
    </>
  );
};

export default Grid;
