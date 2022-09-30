import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return <p>404 - Page not found</p>;
};

export default ErrorPage;
