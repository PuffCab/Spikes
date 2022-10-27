import React from "react";
import Navbar from "../components/Navbar";
import ViktorsCharacters from "../components/ViktorsCharacters";
import ViktorsModal from "../components/ViktorsModal";

function Home() {
  //recieve here the input value...send it down to ViktorsCharacters
  function getSearch(input) {
    console.log(input);
  }
  return (
    <div>
      <Navbar getSearch={getSearch} />
      <ViktorsCharacters />
    </div>
  );
}

export default Home;
