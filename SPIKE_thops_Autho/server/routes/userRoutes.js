import express from "express";
import {
  getUserProfile,
  imageUpload,
  login,
  register,
} from "../controller/usersController.js";
import multerUpload from "../middlewares/multer.js";
import jwtAuthorization from "../middlewares/jwtAuthorization.js";
const router = express.Router();

router.post("/imageUpload", multerUpload.single("image"), imageUpload);
router.post("/register", register);
router.post("/login", login);
router.get("/profile", jwtAuthorization, getUserProfile);

export default router;
