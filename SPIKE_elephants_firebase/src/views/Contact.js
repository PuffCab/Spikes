import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Contact() {
  console.log("useLocation()", useLocation());
  const secret = useLocation();

  return (
    <div>
      <div>Contact info</div>
      <p>{secret?.state?.msg}</p>
      <Footer />
    </div>
  );
}

export default Contact;
