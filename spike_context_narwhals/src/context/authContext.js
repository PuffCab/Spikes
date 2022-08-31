// 1. Import hook
import { createContext, useState } from "react";

// 2. Create Context / Store

export const AuthContext = createContext();

// 3. Create provider

export const AuthContextProvider = (props) => {
  console.log("authcontext run");
  // 4. Move state and function
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
