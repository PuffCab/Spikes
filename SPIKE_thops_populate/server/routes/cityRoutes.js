import express from "express";
import {
  getAllCities,
  getCitiesByContryCode,
} from "../controller/citiesController.js";
const router = express.Router();

router.get("/all", getAllCities);
router.get("/:countryCode", getCitiesByContryCode);

export default router;
