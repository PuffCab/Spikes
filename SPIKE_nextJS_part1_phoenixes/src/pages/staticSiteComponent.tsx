import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface StaticSiteComponentProps {
  product: ProductType;
}

export const getStaticProps: GetStaticProps<
  StaticSiteComponentProps
> = async () => {
  const randomId = Math.floor(Math.random() * 15);
  console.log("randomId :>> ", randomId);

  const response = await fetch(`https://fakestoreapi.com/products/${randomId}`);
  const result = (await response.json()) as ProductType;

  return {
    props: {
      product: result,
    },
    revalidate: 60 * 1,
  };
};

function StaticSiteComponent({ product }: StaticSiteComponentProps) {
  return (
    <div>
      <h1>Static Site Generated - SSG</h1>
      <Alert> This component is already stored in the server</Alert>
      <div>
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default StaticSiteComponent;
