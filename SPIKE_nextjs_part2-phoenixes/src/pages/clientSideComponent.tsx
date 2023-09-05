import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export default function ClientSideComponent() {
  console.log("this one is on the terminal");
  const [product, setProduct] = useState<ProductType | null>(null);

  const fetchProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const result = (await response.json()) as ProductType;

    setProduct(result);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Head>
        <title key="title">CSR</title>
      </Head>

      <div>
        <h1>Client Side Render - CSR</h1>
        <Alert>This page is rendered by the browser, on the client.</Alert>
        {product && (
          <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        )}
      </div>
    </>
  );
}
