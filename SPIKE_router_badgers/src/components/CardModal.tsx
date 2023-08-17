import React from "react";
import { Button, Modal } from "react-bootstrap";

interface CardModalPops {
  show: boolean;
  handleClose: () => void;
  species: string;
  status: string;
}

const CardModal = ({ show, handleClose, species, status }: CardModalPops) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
