import { APIResponse, Character } from "@/models/custom-types";
import Image from "next/image";
import { Alert } from "react-bootstrap";

type DynamicUrlProps = {
  params: {
    id: string;
  };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const arrayOfIds = ["1", "2", "3"];
  return arrayOfIds.map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params: { id } }: DynamicUrlProps) {
  return {
    title: "id-" + id,
  };
}
async function staticPage({ params: { id } }: DynamicUrlProps) {
  console.log("character ID :>> ", id);
  const randomId = Math.floor(Math.random() * 800);
  console.log("randomId :>> ", randomId);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  const result: Character = await response.json();

  return (
    <div>
      <Alert>
        This page is one of the pages generate at build time on the server,
        because the final segment of the url is included in the array of{" "}
        <strong>Static Params (generateStaticParams())</strong>. If you you also
        add <strong>dynamicParams=false</strong>, when visiting other url inside
        /fanpage other than the 3 contained in the array, it won't display a
        page.
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
