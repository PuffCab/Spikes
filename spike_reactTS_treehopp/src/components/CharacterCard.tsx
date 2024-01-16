import React, { useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import MyModal from "./MyModal";

interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  image: string;
}

type CharacterCardProps = {
  character: CharacterType;
};

function CharacterCard({ character }: CharacterCardProps) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Col key={character.id}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={character.image}
              alt="Avatar"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="flip-card-back">
            <h1>{character.name}</h1>
            <p>{character.status}</p>
            <Button onClick={handleShow}>more info</Button>
            <MyModal
              character={character}
              handleClose={handleClose}
              show={show}
            />
          </div>
        </div>
      </div>
    </Col>
  );
}

export default CharacterCard;
