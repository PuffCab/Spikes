import NavBar from "@/components/NavBar";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Alert } from "react-bootstrap";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ServerSideComponentProps {
  product: ProductType;
}

export const getServerSideProps: GetServerSideProps<
  ServerSideComponentProps
> = async () => {
  console.log("this you see it in the terminal");

  const response = await fetch("https://fakestoreapi.com/products/2");
  const result = (await response.json()) as ProductType;
  console.log("process.env.API_KEY :>> ", process.env.API_KEY);

  return {
    props: {
      product: result,
    },
  };
};

function serverSideComponent({ product }: ServerSideComponentProps) {
  console.log("this you can see it in both");

  return (
    <>
      <Head>
        <title key="title">SSR</title>
      </Head>
      <div>
        <h1>Server Side Component - SSR</h1>
        <Alert>
          {" "}
          This page is rendered in the server, and then sent to the client
        </Alert>

        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </>
  );
}

export default serverSideComponent;
