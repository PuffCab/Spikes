import { ReactNode, createContext, useState } from "react";
import { User } from "../@types/CustomTypes";

// define the type of my context
type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

//define the initial value of the context
const initContextValue = {
  user: {} as User,
  setUser: () => {
    throw new Error("context not initialised");
  },
};

//define type of the props the AuthContextProvider receives
type AuthContextProviderProps = {
  children: ReactNode;
};

//1. create context
export const AuthContext = createContext<AuthContextType>(initContextValue);

//2. create provider
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  // move inside states and functions
  const [user, setUser] = useState<User | null>(null);

  //2. return the provider fo the context and the values to share
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
