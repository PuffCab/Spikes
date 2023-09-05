import Link from "next/link";
import React from "react";

type Props = {};

function product({}: Props) {
  return (
    <div>
      <h3>Select the product you want to see</h3>
      <Link href="/product/1">Product 1 </Link>
      <Link href="/product/2">Product 2 </Link>
      <Link href="/product/3">Product 3 </Link>
      <Link href="/product/4">Product 4 </Link>
      <Link href="/product/4">Product 5 </Link>
    </div>
  );
}

export default product;
