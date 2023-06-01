import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CharactersContext } from "../context/CharactersContext";

function Seasons() {
  const myStyle = {
    borderBottom: "solid 1px",
    marginBottom: "1rem",
  };
  const { characters } = useContext(CharactersContext);
  // console.log("characters in Seasons", characters);
  return (
    <>
      <h1>Seasons</h1>
      <h3>check what happened in every season of the show</h3>
    </>
  );
}

export default Seasons;
