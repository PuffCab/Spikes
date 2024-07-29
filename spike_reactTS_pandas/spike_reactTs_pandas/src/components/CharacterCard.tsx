import { useState } from "react";
import { Button } from "react-bootstrap";
import CardModal from "./CardModal";

type CharacterCardProps = {
  image: string;
  name: string;
  species: string;
  gender: string;
};

function CharacterCard({ image, name, species, gender }: CharacterCardProps) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={image}
              alt={`picture from character ${name}`}
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="flip-card-back">
            <h1>{name}</h1>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
          </div>
        </div>
      </div>
      <CardModal
        gender={gender}
        name={name}
        species={species}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
}

export default CharacterCard;
