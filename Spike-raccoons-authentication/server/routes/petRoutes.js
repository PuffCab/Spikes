import express from "express";
import { getAllPets } from "../controllers/petController.js";

const router = express.Router();

router.get("/all", getAllPets);

export default router;
