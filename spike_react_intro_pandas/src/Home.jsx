import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;
