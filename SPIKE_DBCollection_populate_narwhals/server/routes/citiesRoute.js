import express from "express";
import {
  getAllCities,
  getCitiesByCountryCode,
} from "../controllers/citiesController.js";
import cityModel from "../models/citiesModel.js";
const router = express.Router();

router.get("/all", getAllCities);
router.get("/all/:countryCode", getCitiesByCountryCode);

export default router;
