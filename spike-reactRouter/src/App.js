import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import About from "./views/About";

import Characters from "./views/Characters";
import Details from "./views/Details";
import Home from "./views/Home";
import NoMatch from "./views/NoMatch";

function App() {
  return (
    <div>
      <h2 className="name-Style">Suricatas - React Router</h2>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:name" element={<Details />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
