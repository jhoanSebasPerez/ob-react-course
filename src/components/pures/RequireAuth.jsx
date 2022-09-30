import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const context = useContext(AppContext);
  const location = useLocation();

  if (!context.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
