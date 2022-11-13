import React from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  console.log(useLocation());
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default Contact;
