import Head from "next/head";
import React, { ChangeEvent, useState } from "react";
import { Button, Container } from "react-bootstrap";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  //   rating: Rating;
}

export default function SearchProduct() {
  const [productId, setProductId] = useState<string | null>(null);
  const [product, setProduct] = useState<ProductType | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value :>> ", typeof e.target.value);
    setProductId(e.target.value);
  };

  const fetchProduct = async () => {
    console.log("productId :>> ", productId);
    try {
      const response = await fetch(
        `http://localhost:3001/api/myApi/?productId=${productId}`
      );
      const result: ProductType = await response.json();
      console.log("result :>> ", result);
      setProduct(result);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <>
      <Head>
        <title key="title">Search</title>
      </Head>
      <input
        type="number"
        name="search"
        id="search"
        placeholder="choose a number"
        onChange={handleInputChange}
        min={1}
        max={15}
      />
      <Button variant="warning" onClick={fetchProduct}>
        Search product
      </Button>

      {product && (
        <Container>
          {product.title}
          {product.price}
        </Container>
      )}
    </>
  );
}
