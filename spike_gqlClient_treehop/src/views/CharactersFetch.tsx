import React, { useEffect } from "react";

function CharactersFetch() {
  const fetchCharacters = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
      query:
        "query GetCharacters{\n    characters{\n        results{\n            name\n        }\n    }\n}",
      variables: {},
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
    };

    fetch("https://rickandmortyapi.com/graphql", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log("characters", result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <h1>Characters using Fetch</h1>
    </>
  );
}

export default CharactersFetch;
