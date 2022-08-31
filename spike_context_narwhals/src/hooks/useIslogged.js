import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function useIsLogged() {
  const { user } = useContext(AuthContext);

  const userBoolean = user !== null ? true : false;
  return userBoolean;
}

export { useIsLogged };
