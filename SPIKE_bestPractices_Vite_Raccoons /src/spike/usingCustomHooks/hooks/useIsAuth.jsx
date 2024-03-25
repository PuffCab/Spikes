import React, { useContext } from "react";

function useIsAuth() {
  // const { user } = useContext(AuthContext)
  // const user = { name: "Raul" };
  const user = null;

  const isUserAuthenticated = user !== null ? true : false;
  console.log("isUserAuthenticated", isUserAuthenticated);
  return isUserAuthenticated;
}

export { useIsAuth };
