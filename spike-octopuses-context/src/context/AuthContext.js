// 1. Import hook
import { createContext, useState } from "react";

// 2. Create Context / Store

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({
      userName: "Heron",
    });
    console.log(`user ${user?.userName} logged in`);
    console.log(user);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};
