import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  const [characterDetails, setCharacterDetails] = useState({});
  const redirectTo = useNavigate();
  console.log("useNavigate() :>> ", useNavigate());

  //   console.log("useParams() :>> ", useParams());
  const { name } = useParams();
  const goHome = () => {
    redirectTo("/");
  };
  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      const data = await response.json();
      console.log("data :>> ", data);
      setCharacterDetails(data.results[0]);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <h2>More details about {name}</h2>
      <ul>
        <li>Status: {characterDetails.status}</li>
        <li>Species: {characterDetails.species}</li>
        <li>gender: {characterDetails.gender}</li>
      </ul>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}

export default Details;
