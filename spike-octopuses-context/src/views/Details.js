import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  console.log(useParams());
  const { name } = useParams();

  return (
    <div>
      <h2>More info about: {name} </h2>
    </div>
  );
}

export default Details;
