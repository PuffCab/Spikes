import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function Contact() {
  const location = useLocation();
  console.log("location", location);
  const characters = location.state.characters;
  return (
    <div>
      <h4>This is my contact page</h4>
      <div>you can contact all these characters :</div>
      {characters &&
        characters.map((char, i) => {
          return <p key={i}> {char.name}</p>;
        })}
    </div>
  );
}

export default Contact;
