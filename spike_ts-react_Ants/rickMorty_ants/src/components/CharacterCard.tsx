import React, { useState } from "react";
import "../styles/CharacterCardStyle.css";
import { Button } from "react-bootstrap";
import CardModal from "./CardModal";
type CharacterCardProps = {
  image: string;
  name: string;
  species: string;
  status: string;
};

function CharacterCard({ image, name, species, status }: CharacterCardProps) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={image}
            alt="Avatar"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="flip-card-back">
          <h3>{name}</h3>
          <p>{species}</p>
          <Button variant="info" onClick={handleShow}>
            More Info
          </Button>
          <CardModal
            handleClose={handleClose}
            show={show}
            species={species}
            status={status}
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
