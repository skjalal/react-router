import React, { type JSX } from "react";
import { useParams, Link } from "react-router-dom";

type RouteParam = { productId: string };

const ProductDetailsPage: React.FC = (): JSX.Element => {
  const params = useParams<RouteParam>();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailsPage;
