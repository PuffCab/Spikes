import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
  //   return <h1>.....LOADING.....</h1>;
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;
