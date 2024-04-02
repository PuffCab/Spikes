import React from "react";
import { Button, Modal } from "react-bootstrap";

type CardModalProps = {
  show: boolean;
  handleClose: () => void;
  status: string;
  species: string;
};

function CardModal({ handleClose, show, species, status }: CardModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{species}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{status}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CardModal;
