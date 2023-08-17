import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  //   const params = useParams();
  const { name } = useParams();
  //   console.log("params :>> ", params);

  //Build a fetch funtion that uses the name of the character to get more information
  return (
    <div>
      <h1>More details from {name}</h1>
    </div>
  );
}

export default Details;
