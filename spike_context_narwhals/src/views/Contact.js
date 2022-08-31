import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useMyFetch } from "../hooks/useMyFetch";

function Contact() {
  console.log("contact run");

  // const location = useLocation();

  // const characters = location.state.characters;

  const { characters, error, fetchData } = useMyFetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  useEffect(() => {
    fetchData();
  }, []);

  console.log("characters", characters);
  console.log("error", error);
  return (
    <div>
      <h4>This is my contact page</h4>
      <div>you can contact all these characters :</div>
      {/* {characters &&
        characters.characters.map((char, i) => {
          return <p key={i}> {char.name}</p>;
        })} */}
    </div>
  );
}

export default Contact;
