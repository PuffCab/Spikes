import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { CharactersContext } from "../context/charactersContext";

function Details() {
  //   console.log(useParams);

  const { id } = useParams();
  const location = useLocation();
  // console.log(location);
  const [singleCharacter, setSingleCharacter] = useState(null);
  let goHome = useNavigate();

  const goHomeHandler = () => {
    goHome("/");
  };

  const fechtSingleCharacter = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const results = await response.json();
      setSingleCharacter(results);
      // console.log("results :>> ", results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fechtSingleCharacter();
  }, []);
  return (
    <div>
      
      {singleCharacter ? (
        <h2>Details from {singleCharacter.gender} </h2>
      ) : (
        <p>Nothing to show</p>
      )}
      {/*  */}
      <button onClick={goHomeHandler}>go Home</button>
    </div>
  );
}

export default Details;
