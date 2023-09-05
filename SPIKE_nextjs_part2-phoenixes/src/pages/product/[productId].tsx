import ProductCard from "@/components/ProductCard";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  //   rating: Rating;
}

// interface ProductPageProps {

// }

export const getStaticPaths: GetStaticPaths = () => {
  console.log("staticPaths");
  const idsArray = ["1", "2", "3", "4"];

  const paths = idsArray.map((id) => {
    return { params: { productId: id } };
  });
  console.log("paths :>> ", paths);

  return {
    paths,
    fallback: false, //!check error
  };

  //   return {
  //     paths: [
  //       {
  //         params: {
  //           productId: "1",
  //         },
  //       },
  //       {
  //         params: {
  //           productId: "2",
  //         },
  //       },
  //       {
  //         params: {
  //           productId: "3",
  //         },
  //       },
  //       {
  //         params: {
  //           productId: "4",
  //         },
  //       },
  //     ],
  //     fallback: true,
  //   };
};

export const getStaticProps: GetStaticProps<ProductType> = async (context) => {
  // console.log("context :>> ", context);
  console.log("getProps");
  const productId = context.params?.productId;

  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const result: ProductType = await response.json();
  //   console.log("result :>> ", result);

  return {
    props: result,
  };
};

export default function ProductPage({ ...props }: ProductType) {
  //   console.log("props :>> ", props);
  const router = useRouter();
  //   console.log("router :>> ", router);
  return (
    <div>
      <h1>Page of product {router.query.productId}</h1>
      <ProductCard {...props} />
    </div>
  );
}
