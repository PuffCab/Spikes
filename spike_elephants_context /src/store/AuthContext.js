import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create context

export const AuthContext = createContext();

// Create the store

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState({});
  const redirectTo = useNavigate();

  const login = () => {
    setUser({
      userName: "Monique",
    });
    redirectTo("/");
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
