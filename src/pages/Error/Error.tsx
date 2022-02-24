import React from "react";
import { Link } from "react-router-dom";
import { ErrorContainer } from "./style";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <h1>Ops, Something is wrong!</h1>
      <div className="login-box">
        <Link to="/">Login page</Link>
      </div>
    </ErrorContainer>
  );
};

export { ErrorPage };
