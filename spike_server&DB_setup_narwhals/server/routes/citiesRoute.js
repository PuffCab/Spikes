import express from "express";
import { getAllCities } from "../controllers/citiesController.js";
import cityModel from "../models/citiesModel.js";
const router = express.Router();

router.get("/all", getAllCities);

export default router;
