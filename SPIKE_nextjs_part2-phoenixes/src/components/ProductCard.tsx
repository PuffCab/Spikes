import React from "react";
import { Card } from "react-bootstrap";
import localImage from "@/assets/images/random_image.jpg";
import Image from "next/image";

interface ProductCardProps {
  //   id: number;
  title: string;
  price: number;
  description: string;
  //   category: string;
  image: string;
}

export default function ProductCard({
  description,
  image,
  price,
  title,
}: ProductCardProps) {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src={localImage} /> */}
      {/* <Image src={localImage} alt="random image" /> */}
      <Image src={image} width={100} height={100} alt="product image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
