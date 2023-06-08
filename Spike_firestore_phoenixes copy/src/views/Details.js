import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Details() {
  //   console.log("useParams()", useParams());

  // const { name } = useParams();
  const characterName = useParams();
  const url2 = "https://jsonplaceholder.typicode.com/posts";

  const url = `https://rickandmortyapi.com/api/character/?name=${characterName.name}&status=alive`;

  const { info } = useFetch(url2);
  console.log("info", info);

  return <h1>Details from {characterName.name}</h1>;
}

export default Details;
