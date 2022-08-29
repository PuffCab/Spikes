import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  let { name } = useParams();
  // let urlParams = useParams();
  // console.log("urlParams", urlParams);

  return (
    <div>
      <h3>More Details about ... {name} </h3>
    </div>
  );
}

export default Details;
