import React from "react";
import { Button, Modal } from "react-bootstrap";

interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  image: string;
}

type MyModalProps = {
  character: CharacterType;
  show: boolean;
  handleClose: () => void;
};

function MyModal({ character, show, handleClose }: MyModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{character.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {character.species},{character.status}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
