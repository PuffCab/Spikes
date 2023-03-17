import React from "react";
import { Button } from "react-bootstrap";

function CharacterCard({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <Button variant="secondary">click here</Button>
    </div>
  );
}

export default CharacterCard;
