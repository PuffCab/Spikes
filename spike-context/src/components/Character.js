import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Character(props) {
  const image = props.character.image;
  const gender = props.character.gender;
  const name = props.character.name;
  const id = props.character.id;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{gender}</Card.Title>
          <Card.Text>{name}</Card.Text>
          <Link to={`${id}`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Character;
