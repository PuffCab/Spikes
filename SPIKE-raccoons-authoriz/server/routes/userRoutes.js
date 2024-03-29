import express from "express";
import {
  findUserByEmail,
  getAllUsers,
  getProfile,
  login,
  signup,
  test,
  updateUser,
  uploadPicture,
} from "../controllers/userControllers.js";
import multerUpload from "../middlewares/multer.js";
import passport from "passport";
import jwtAuth from "../middlewares/jwtAuth.js";

const userRouter = express.Router();

userRouter.get("/test", test);
userRouter.get("/all", getAllUsers);
userRouter.get("/find/:email", findUserByEmail);
userRouter.get("/profile", jwtAuth, getProfile);

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/update/:id", jwtAuth, updateUser);
userRouter.post(
  "/pictureUpload",
  multerUpload.single("userImage"),
  uploadPicture
);

export default userRouter;
