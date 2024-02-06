import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { gql, useMutation, useQuery } from "@apollo/client";

const GET_SUPERHEROES = gql`
  query getSuperheroes {
    superheroes {
      name
      secretIdentity
    }
  }
`;

const ADD_SUPERHERO = gql`
  mutation addSuperhero($newSuperhero: NewSuperheroInputs!) {
    addSuperhero(newSuperhero: $newSuperhero) {
      name
      secretIdentity
    }
  }
`;

function App() {
  const { data } = useQuery(GET_SUPERHEROES);
  console.log("data :>> ", data);

  const [addSup, { data: data2 }] = useMutation(ADD_SUPERHERO);
  console.log("data2 :>> ", data2);
  // const addSup = () => {};

  return (
    <>
      <h1>Mutations in the Client</h1>

      <button
        onClick={() =>
          addSup({
            variables: {
              newSuperhero: {
                name: "Spiderman",
                secretIdentity: "Peter Parker",
                superpowers: ["aracnid sense"],
              },
            },
          })
        }
      >
        Add Superhero with predefined data
      </button>
    </>
  );
}

export default App;
