import React from "react";
import "../style/character.css";
import Button from "react-bootstrap/Button";
function Character({ name }) {
  //   const name = props.name;
  return (
    <div>
      <p>{name}</p>
      <Button className="red" variant="primary">
        some button
      </Button>
    </div>
  );
}

export default Character;
