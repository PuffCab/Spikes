import "./App.css";

import Contact from "./views/Contact";
import Home from "./views/Home";
import Login from "./views/Login";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";

import Characters from "./views/Characters";
import NoMatch from "./views/NoMatch";
import Details from "./views/Details";
import NewCharacter from "./views/NewCharacter";
import Evolution from "./views/Evolution";
import Season1 from "./views/Season1";
import Season2 from "./views/Season2";
import EvolutionLayout from "./components/EvolutionLayout";
import EvolutionRoutes from "./components/EvolutionRoutes";
import { CharactersContextProvider } from "./context/charactersContext.js";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <CharactersContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/characters"
              element={
                <ProtectedRoute>
                  <Characters />
                </ProtectedRoute>
              }
            />
            <Route path="/characters/:name" element={<Details />} />
            <Route path="/characters/newCharacter" element={<NewCharacter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/evolution/*" element={<EvolutionRoutes />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </CharactersContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
