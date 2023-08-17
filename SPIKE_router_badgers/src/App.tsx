import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  NavLink,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Characters from "./views/Characters";
import About from "./views/About";
import Home from "./views/Home";
import NoMatch from "./views/NoMatch";
import Details from "./views/Details";
import Favorites from "./views/Favorites";
import Season1 from "./views/Season1";
import Season2 from "./views/Season2";
import History from "./views/History";
import SeasonsLayout from "./components/SeasonsLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<NoMatch />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:name" element={<Details />} />
        {/* <Route path="user/profile/favorites" element={<Favorites />} /> */}
        <Route path="history" element={<SeasonsLayout />}>
          <Route index element={<History />} />
          <Route path="season1" element={<Season1 />} />
          <Route path="season2" element={<Season2 />} />
        </Route>
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    )
  );
  return (
    <>
      <h1>Rick & Morty Fan site</h1>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <Link to="/characters">Characters</Link>|
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return isActive
              ? { backgroundColor: "green" }
              : { backgroundColor: "grey" };
          }}
        >
          About
        </NavLink>{" "}
        |{" "}
        <NavLink to="/history">
          {({ isActive }) => {
            return isActive ? "history" : "not-in-history";
          }}
        </NavLink>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
