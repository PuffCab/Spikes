import { v2 as cloudinary } from "cloudinary";
import usersModel from "../models/usersModel.js";
import encryptPassword from "../utils/encryptPassword.js";

const imageUpload = async (req, res) => {
  try {
    console.log("req :>> ", req.file);
    // Upload the image
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "demo-images",
    });
    console.log("result >>>>", result);
    res.status(200).json({
      msg: "image upload Ok",
      image: result.url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "error uploading picture",
      error: error,
    });
  }
};
const signup = async (req, res) => {
  console.log("req.body :>> ", req.body);
  const { email, password, userName } = req.body;

  try {
    const existingUser = await usersModel.findOne({ email: req.body.email });
    console.log("existingtUser :>> ", existingUser);
    if (existingUser) {
      res.status(200).json({ msg: "email already in use" });
    } else {
      const hashedPassword = await encryptPassword(password);
      console.log("hashedPassword :>> ", hashedPassword);

      const newUser = new usersModel({
        email: email,
        password: hashedPassword,
        userName: userName,
        avatarPicture: req.body.avatarPicture
          ? req.body.avatarPicture
          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
      });
      try {
        const savedUser = await newUser.save();

        res.status(201).json({
          msg: "user Registered succesfully",
          user: savedUser,
        });
      } catch (error) {
        console.log("error", error);
        res.status(500).json({
          msg: "signup went wrong",
        });
      }
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      msg: "something went wrong during signup",
      error: error,
    });
  }
};

export { imageUpload, signup };
