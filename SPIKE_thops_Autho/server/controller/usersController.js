import { v2 as cloudinary } from "cloudinary";
import userModel from "../models/userModel.js";
import { encryptPassword, verifyPassword } from "../utils/passwordServices.js";
import { issueToken } from "../utils/jwt.js";

const imageUpload = async (req, res) => {
  //   console.log("route working");
  // console.log("req :>> ", req);
  console.log("req.file :>> ".bgBlue, req.file);
  if (req.file) {
    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "thooppers",
      });
      console.log("result".bgBlue, result);
      res.status(201).json({
        message: "image uploaded",
        userImage: result.secure_url,
      });
    } catch (error) {
      console.error(error);
    }
  } else {
    res.status(500).json({
      message: "file not supported",
    });
  }
};

const register = async (req, res) => {
  console.log("register controller working");
  console.log("req.body :>> ", req.body);

  //Check if the user already exist in our DB
  const exisitingUser = await userModel.findOne({ email: req.body.email });
  if (exisitingUser) {
    res.status(200).json({
      message: "email already exist",
    });
  }
  if (!exisitingUser) {
    //encrypt passorwd
    const hashedPassword = await encryptPassword(req.body.password);
    if (hashedPassword) {
      // creating the user

      const newUser = new userModel({
        userName: req.body.userName,
        email: req.body.email,
        userImage: req.body.image,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();
      console.log("savedUser :>> ", savedUser);

      res.status(201).json({
        message: "user registered!!",
        user: {
          userName: savedUser.userName,
          email: savedUser.email,
          userImage: savedUser.userImage,
        },
      });
    } else {
      res.status(500).json({
        message: "something went wrong",
      });
    }
  }
};
const login = async (req, res) => {
  console.log("login route works");
  const { email, password } = req.body;
  //check if we recieve the parameters we need
  if (!email && !password) {
    res.status(400).json({
      message: "password or email are missing",
    });
  } else {
    try {
      const existingUser = await userModel.findOne({ email: req.body.email });
      //check if user exists in our database
      if (!existingUser) {
        res.status(400).json({
          message: "email not found...do you have an account?",
        });
      }
      if (existingUser) {
        //check if password is correct
        const isPasswordMatch = await verifyPassword(
          req.body.password,
          existingUser.password
        );

        if (!isPasswordMatch) {
          //password is incorrect
          res.status(400).json({
            message: "wrong password",
          });
        }
        if (isPasswordMatch) {
          // generate Token
          const token = issueToken(existingUser._id);

          if (token) {
            //if token is generated, we send to the client the user information + token
            res.status(200).json({
              message: "user succesfully logged in",
              user: {
                userName: existingUser.userName,
                email: existingUser.email,
                userImage: existingUser.userImage,
                id: existingUser._id,
              },
              token,
            });
          }
          //login our user

          // send user information (existingUser to the client)
        }
      }
    } catch (error) {
      console.log("error :>> ", error);
      res.status(400).json({
        message: "something went wrong",
      });
    }
  }
};

const getUserProfile = async (req, res) => {
  console.log("getprofile route working  ");
  console.log("req :>> ", req.user);

  if (req.user) {
    res.status(200).json({
      message: "user profile",
      user: {
        id: req.user._id,
        email: req.user.email,
        userName: req.user.userName,
        userImage: req.user.userImage,
      },
    });
  }
  if (!req.user) {
    req.status(400).json({
      message: "something went wrong ...Login again",
    });
  }
};
export { imageUpload, register, login, getUserProfile };
