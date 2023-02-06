import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SeasonsLayout from "./components/SeasonsLayout";
import About from "./views/About";

import Characters from "./views/Characters";
import Contact from "./views/Contact";
import Details from "./views/Details";
import Home from "./views/Home";
import NoMatch from "./views/NoMatch";
import Season1 from "./views/Season1";
import Season2 from "./views/Season2";
import Seasons from "./views/Seasons";

function App() {
  const myStyle = {
    color: "tomato",
    fontSize: "50px",
  };

  return (
    <div className="App">
      <h1 className="red">Hello React World</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:name" element={<Details />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/seasons" element={<SeasonsLayout />}>
          <Route index element={<Seasons />} />
          <Route path="season1" element={<Season1 />} />
          <Route path="season2" element={<Season2 />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
