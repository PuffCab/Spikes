import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { test, useIsLogged } from "../hooks/useIslogged";

function ProtectedRoute({ children }) {
  const isLogged = useIsLogged();

  return <>{isLogged ? children : <Navigate to="/login" />}</>;
}

export default ProtectedRoute;
