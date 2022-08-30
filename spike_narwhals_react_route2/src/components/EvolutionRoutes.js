import React from "react";
import { Route, Routes } from "react-router-dom";
import Evolution from "../views/Evolution";
import Season1 from "../views/Season1";
import Season2 from "../views/Season2";
import EvolutionLayout from "./EvolutionLayout";

function EvolutionRoutes() {
  return (
    <>
      <EvolutionLayout />
      <Routes>
        <Route index element={<Evolution />} />
        <Route path="season1" element={<Season1 />} />
        <Route path="season2" element={<Season2 />} />
      </Routes>
    </>
  );
}

export default EvolutionRoutes;
