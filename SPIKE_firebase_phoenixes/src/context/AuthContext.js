import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

//1. Create context

export const AuthContext = createContext();

//2. Define our Store(what we are gonna share)

export const AuthContextProvider = (props) => {
  //Move here the state variables and functions you want to share

  const goTo = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("userCredential", userCredential);
      const user = userCredential.user;
      setUser(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage);
      setUser(null);
    }
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("login user", user);
        setUser(user);
        goTo("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage);
        setUser(null);
      });
  };

  const checkUserIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        console.log("user IS loggedin", user);
        setUser(user);
        setLoading(false);
      } else {
        // User is signed out
        // ...
        console.log("user NOT logged IN");
        setUser(null);
        setLoading(false);
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        console.log("logout succesfull");
      })
      .catch((error) => {
        // An error happened.
        console.log("error logging out");
      });
  };

  useEffect(() => {
    checkUserIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, register, login, logout, loading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
