import { createContext, useState } from "react";

//1. Create context

export const AuthContext = createContext();

//2. Define our Store(what we are gonna share)

export const AuthContextProvider = (props) => {
  //Move here the state variables and functions you want to share
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
