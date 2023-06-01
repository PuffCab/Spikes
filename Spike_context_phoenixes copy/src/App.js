import { Route, Routes } from "react-router-dom";
import "./App.css";
import Characters from "./views/Characters";
import Home from "./views/Home";
import About from "./views/About";
import NoMatch from "./views/NoMatch";
import Navbar from "./components/Navbar";
import Details from "./views/Details";
import Seasons from "./views/Seasons";
import Season1 from "./components/Season1";
import Season2 from "./components/Season2";
import SeasonsLayout from "./components/SeasonsLayout";
import { CharactersContextProvider } from "./context/CharactersContext";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <CharactersContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/characters"
              element={
                <ProtectedRoute>
                  <Characters />
                </ProtectedRoute>
              }
            />
            <Route path="/characters/:name" element={<Details />} />
            <Route path="/seasons" element={<SeasonsLayout />}>
              <Route index element={<Seasons />} />
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
