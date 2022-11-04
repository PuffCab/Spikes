import { Route, Routes } from "react-router-dom";
import "./App.css";
import Characters from "./components/Characters";
import Evolution from "./components/Evolution";
import EvolutionLayout from "./components/EvolutionLayout";
import Nav from "./components/Nav";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { CharactersContextProvider } from "./context/charactersContext";
import Contact from "./views/Contact";
import Details from "./views/Details";
import Home from "./views/Home";
import NoMatch from "./views/NoMatch";
import Season1 from "./views/Season1";
import Season2 from "./views/Season2";

function App() {
  const myStyle = {
    backgroundColor: "yellow",
    fontSize: "50px",
  };

  return (
    // This is the JSX part
    <div className="App">
      <h2 className="my-style">Hello React World</h2>
      <AuthContextProvider>
        <Nav />
        <CharactersContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="characters"
              element={
                <ProtectedRoute>
                  <Characters />
                </ProtectedRoute>
              }
            />
            <Route path="characters/:name" element={<Details />} />

            <Route
              path="contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route path="evolution" element={<EvolutionLayout />}>
              <Route index element={<Evolution />} />
              <Route path="season1" element={<Season1 />} />
              <Route path="season2" element={<Season2 />} />
            </Route>

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </CharactersContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
