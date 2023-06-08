import { Route, Routes } from "react-router-dom";
import "./App.css";
import { app } from "./config/firebaseConfig";
import { CharactersContextProvider } from "./context/CharactersContext";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
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
import Register from "./views/Register";
import Login from "./views/Login";
import Chat from "./views/Chat";

function App() {
  // console.log("app", app);
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <CharactersContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
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
