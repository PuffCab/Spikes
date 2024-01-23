import express from "express";
import { getAllMuseums } from "../controller/museumCountroller.js";

const router = express.Router();

router.get("/all", getAllMuseums);

export default router;
