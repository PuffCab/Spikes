import React from "react";
import { Navbar } from "react-bootstrap";
import ViktorsModal from "./ViktorsModal";

function ViktorsCharacters() {
  // Fetching characters.and mapping....
  return (
    <div>
      <Navbar />
      {/* map your caracters... */}
      <ViktorsModal />
    </div>
  );
}

export default ViktorsCharacters;
