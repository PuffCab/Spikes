import { APIResponse, Character } from "@/models/custom-types";
import Image from "next/image";
import { Alert } from "react-bootstrap";

// export const revalidate = 0;

export async function generateMetadata({ params }) {
  return {
    title: "character page",
  };
}

async function dynamicPage() {
  const componentType =
    typeof window === "undefined" ? "server component" : "client component";
  console.log("componentType :>> ", componentType);
  const randomId = Math.floor(Math.random() * 800);
  console.log("randomId :>> ", randomId);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${randomId}`,
    { next: { revalidate: 0 } }
    // { cache: "no-cache" } //no-cache has the same efect of 0 seconds revalidate.
  );

  const result: Character = await response.json();

  return (
    <div>
      <Alert>
        This page is <strong>Dynamically</strong> generated on the{" "}
        <strong>Server</strong> and served to the browser, everytime we navigate
        or refresh the page.
      </Alert>
      <div>
        <h2>NAME:{result.name}</h2>
        {/* <img src={result.image} alt={result.name} /> */}
        <Image src={result.image} alt={result.name} width={300} height={400} />
      </div>
    </div>
  );
}

export default dynamicPage;
