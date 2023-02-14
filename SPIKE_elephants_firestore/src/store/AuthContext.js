import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

// Create context

export const AuthContext = createContext();

// Create the store

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const redirectTo = useNavigate();

  const register = async (email, password) => {
    console.log("email, password :>> ", email, password);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log("user :>> ", user);
      setUser(userCredential.user);
    } catch (error) {
      console.log("error", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorMessage.includes("email-already-in-use")) {
        alert("you already has an account");
      }
    }
  };

  const login = (email, password) => {
    console.log("email, password", email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.log("error :>> ", error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    // redirectTo("/");
  };

  const checkUserStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("user us Logged in");

        setUser(user);
        setLoader(false);
      } else {
        console.log("user is NOT logged in");
        setUser(null);
        setLoader(false);
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("logout succesfull");
        setUser(null);
      })
      .catch((error) => {
        console.log("error logging out");
      });
  };

  useEffect(() => {
    checkUserStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, logout, register, loader }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
