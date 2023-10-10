import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Link,
  Outlet,
  createHashRouter,
  createMemoryRouter,
} from "react-router-dom";
import "./App.css";
import Characters from "./views/Characters";
import About from "./views/About";
import Home from "./views/Home";
import MyNavbar from "./components/MyNavbar";
import ErrorPage from "./views/ErrorPage";
import Details from "./views/Details";
import Season1 from "./views/Season1";
import Season2 from "./views/Season2";
import Seasons from "./views/Seasons";
import SeasonsLayout from "./components/SeasonsLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:characterName" element={<Details />} />
        <Route path="about" element={<About />} />
        <Route path="seasons" element={<SeasonsLayout />}>
          <Route index element={<Seasons />} />
          <Route path="season1" element={<Season1 />} />
          <Route path="season2" element={<Season2 />} />
        </Route>
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    )
  );

  return (
    <>
      <h1>Rick & Morty</h1>

      <RouterProvider router={router} />
      <Outlet />
    </>
  );
}

const Root = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
    </>
  );
};
export default App;
