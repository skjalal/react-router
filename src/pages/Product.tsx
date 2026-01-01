import React from "react";
import { Link } from "react-router-dom";

type Product = { id: string; title: string };

const PRODUCTS: Product[] = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductsPage: React.FC = () => {
  return (
    <>
      <h1>This is Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
