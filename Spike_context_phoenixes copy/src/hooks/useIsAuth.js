import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useIsAuth() {
  const { user } = useContext(AuthContext);

  const isAuth = user !== null ? true : false;
  return isAuth;
}

export default useIsAuth;
