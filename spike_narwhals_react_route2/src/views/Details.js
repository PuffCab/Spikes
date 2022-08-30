import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Details() {
  let { name } = useParams();
  // let urlParams = useParams();
  // console.log("urlParams", urlParams);
  let location = useLocation();
  console.log("location", location);
  return (
    <div>
      <h3>More Details about ... {name} </h3>
      <p>I am a {location.state.species}</p>
    </div>
  );
}

export default Details;
