import React, { type JSX } from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        <Link to="/products">Go to Product Page</Link>
      </p>
    </>
  );
};

export default HomePage;
