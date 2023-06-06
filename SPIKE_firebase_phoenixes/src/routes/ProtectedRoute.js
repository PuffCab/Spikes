import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { isAuth } from "../utils/isAuth";
import useIsAuth from "../hooks/useIsAuth";

function ProtectedRoute(props) {
  // console.log("props", props);
  //!Using our own logic in the component
  const { loading } = useContext(AuthContext);

  //   const isAuth = user !== null ? true : false;

  //! Using our utilities function
  //   const isUserLogged = isAuth(user);

  //!Using our custom hook

  const isUserLogged = useIsAuth();

  return (
    <>
      {loading ? (
        <h1>...Loading...</h1>
      ) : isUserLogged ? (
        props.children
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default ProtectedRoute;
