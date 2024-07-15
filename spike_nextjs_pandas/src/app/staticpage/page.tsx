import { APIResponse, Character } from "@/models/custom-types";
import Image from "next/image";
import { Alert } from "react-bootstrap";

async function staticPage() {
  const randomId = Math.floor(Math.random() * 800);
  console.log("randomId :>> ", randomId);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${randomId}`
  );

  const result: Character = await response.json();

  return (
    <div>
      <Alert>
        This page is already rendered on the server and served to the browswer
        when we navigate to it. Everytime you reload the page (in the
        deployed/built version) you will get always the same content
      </Alert>
      <div>
        <h2>NAME:{result.name}</h2>
        {/* <img src={result.image} alt={result.name} /> */}
        <Image src={result.image} alt={result.name} width={300} height={400} />
      </div>
    </div>
  );
}

export default staticPage;
