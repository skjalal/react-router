import React, { type JSX } from "react";
import { useParams } from "react-router-dom";

type RouteParam = { productId: string };

const ProductDetailsPage: React.FC = (): JSX.Element => {
  const params = useParams<RouteParam>();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetailsPage;
