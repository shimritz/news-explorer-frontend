import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, loggedIn }) => {
  const { isLoggedIn } = loggedIn();

  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default ProtectedRoute;
