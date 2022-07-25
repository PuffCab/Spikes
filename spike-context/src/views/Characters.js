import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Character from "../components/Character";
import { CharactersContext } from "../context/charactersContext";

function Characters() {
  const { characters, error, fetchData, loader, deleteData } =
    useContext(CharactersContext);

  // console.log("context :>> ", context);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container-div">
      <Button variant="danger" onClick={deleteData}>
        Delete all
      </Button>
      {characters ? (
        characters.map((character, i) => {
          return (
            <div key={i}>
              <Character character={character} />
            </div>
          );
        })
      ) : (
        <p>....Loading.....</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Characters;
