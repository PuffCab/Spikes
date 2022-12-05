import express from "express";
import { imageUpload, signup } from "../controller/userController.js";
import multerUpload from "../middlewares/multer.js";
const router = express.Router();

router.post("/imageupload", multerUpload.single("image"), imageUpload);
router.post("/signup", signup);

export default router;
