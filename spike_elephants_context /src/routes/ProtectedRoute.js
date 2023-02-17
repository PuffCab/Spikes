import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import useIsAuth from "../hooks/useIsAuth";
import { AuthContext } from "../store/AuthContext";
import { isAuth } from "../utils/isAuth";

function ProtectedRoute({ children }) {
  console.log("children", children);

  const { user } = useContext(AuthContext);

  //   const isUser = user ? true : false; // if we want to do the logic of checking our user inside the protected route component

  // const isUser = isAuth(user); // if we extract the logic to a utilities function

  const isUser = useIsAuth();

  return <>{isUser ? children : <Navigate to="/" />} </>;
}

export default ProtectedRoute;
