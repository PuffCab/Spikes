// 1. Import hook
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";
// 2. Create Context / Store

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const redirectTo = useNavigate();

  const register = async (email, password) => {
    console.log("email, password", email, password);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("userCredentials :>> ", userCredentials);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log("error", error);
    }
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("user :>> ", user);
        setUser(userCredential.user);

        redirectTo("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("login error", error);
      });
  };

  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("user is logged in");
        setUser(user);
        setIsLoading(false);
      } else {
        // User is signed out
        // ...
        console.log("user is NOT logged in");
        setUser(null);
        setIsLoading(false);
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, register, isLoading, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
