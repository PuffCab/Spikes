import { APIResponse, Character } from "@/models/custom-types";
import Image from "next/image";
import { Alert } from "react-bootstrap";

// export const revalidate = 5;

async function isrPage() {
  const randomId = Math.floor(Math.random() * 800);
  console.log("randomId :>> ", randomId);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${randomId}`,
    { next: { revalidate: 5 } }
    // { cache: "no-cache" } //no-cache has the same efect of 0 seconds revalidate.
  );

  const result: Character = await response.json();

  return (
    <div>
      <Alert>
        This page is already rendered on the server, at build time. But ever 5
        seconds, the server will re-render this page and the content will
        change.
      </Alert>
      <div>
        <h2>NAME:{result.name}</h2>
        {/* <img src={result.image} alt={result.name} /> */}
        <Image src={result.image} alt={result.name} width={300} height={400} />
      </div>
    </div>
  );
}

export default isrPage;
