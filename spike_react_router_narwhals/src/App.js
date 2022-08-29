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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:name" element={<Details />} />
        <Route path="/characters/newCharacter" element={<NewCharacter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/evolution" element={<EvolutionLayout />}>
          <Route index element={<Evolution />} />
          <Route path="season1" element={<Season1 />} />
          <Route path="season2" element={<Season2 />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
