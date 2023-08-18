import React, { useState } from "react";

import { Button, Card } from "react-bootstrap";
import { CharacterType } from "../types/customTypes";
import CardModal from "./CardModal";

interface CharacterCardProps {
  character: CharacterType;
}

function CharacterCard({ character }: CharacterCardProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>{character.gender}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            more info
          </Button>
        </Card.Body>
      </Card>
      <CardModal
        handleClose={handleClose}
        show={show}
        species={character.species}
        status={character.status}
      />
    </>
  );
}

export default CharacterCard;
