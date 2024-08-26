"use client";
import { useParams } from "next/navigation";
import React from "react";
import { Alert } from "react-bootstrap";

function SingleCharacterPage() {
  const { characterName } = useParams();
  console.log("characterName :>> ", characterName);

  //You can use the character name to fetch by name or by id
  return (
    <div>
      <Alert>
        This is a <strong>Client Side Component (CSR)</strong>. It is rendered
        by the browser when we visit the url.
      </Alert>
      <h2>This is the page of : {characterName}</h2>
    </div>
  );
}

export default SingleCharacterPage;
