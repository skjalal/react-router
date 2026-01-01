import React, { type JSX } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const navigateHandler = (): void => {
    navigate("/products");
  };

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        <Link to="/products">Go to Product Page</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate to Product Page</button>
      </p>
    </>
  );
};

export default HomePage;
