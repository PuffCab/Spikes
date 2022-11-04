import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  console.log("protected route props", children);

  const { user } = useContext(AuthContext);

  const isAuthenticated = user ? true : false;

  return <>{isAuthenticated ? children : <Navigate to="/" />}</>;
}

export default ProtectedRoute;
