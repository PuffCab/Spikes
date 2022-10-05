import express from "express";
import { getAllMuseums } from "../controllers/museumsController.js";
const router = express.Router();

router.get("/all", getAllMuseums);

export default router;
