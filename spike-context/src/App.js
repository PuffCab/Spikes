import React from "react";
import "./App.css";
import Characters from "./views/Characters";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home.js";
import About from "./views/About.js";
import Nav from "./components/Nav";
import Details from "./views/Details";
import NoMatch from "./views/NoMatch";
import { CharactersContextProvider } from "./context/charactersContext";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute.js"


function App() {
  return (
    <div>
      <h2>Suricatas - Context</h2>
      <AuthContextProvider>
        <Nav />
        <CharactersContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="characters" element={
            <ProtectedRoute><Characters /></ProtectedRoute>
            } />
            <Route path="about" element={<About />} />
            <Route path="characters/:id" element={<Details />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </CharactersContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
