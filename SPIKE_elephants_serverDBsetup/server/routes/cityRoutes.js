import express from "express";
import { getAllCities } from "../controller/cityController.js";
import cityModel from "../models/cityModel.js";

const router = express.Router();

router.get("/all", getAllCities);

export default router;
