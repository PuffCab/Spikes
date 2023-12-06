import express from "express";
import { getAllCities } from "../controller/citiesController.js";
const router = express.Router();

router.get("/all", getAllCities);

export default router;
