import { v2 as cloudinary } from "cloudinary";
import { isValidObjectId } from "mongoose";

import UserModel from "../models/userModel.js";
import { encryptPassword, verifyPassword } from "../utils/encryptPassword.js";
import { generateToken } from "../utils/tokenServices.js";

const test = (req, res) => {
  console.log("testing successful");
  res.send("testing successful");
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find({})
      .select("-password")
      .populate({ path: "ownedPet", select: ["name", "type"] });
    res.status(200).json(allUsers);
  } catch (e) {
    console.log("error", e);
    res.status(500).json({ error: "server error" });
  }
};

const findUserByEmail = async (req, res) => {
  console.log(req.params);
  try {
    const foundUser = await UserModel.findOne({
      email: req.params.email,
    }).select("-password");
    if (!foundUser) {
      return res.status(404).json({ error: "No user found" });
    }
    res.status(200).json(foundUser);
  } catch (e) {
    console.log("error", e);
    res.status(500).json({ error: "server error" });
  }
};

const signup = async (req, res) => {
  console.log(req.body);
  //! FORM VALIDATION IMPORTANT!! Express validator . package to validate forms in the backend
  const { email, password, userName, userImage } = req.body;
  console.log("email, password :>> ", email, password);

  //! Refactored code below after spike. To be explained (please, if you see this, remind me about it, if i haven't explained already)
  // if (!email || !password)
  //   return res.status(400).json({ error: "All fields must be included" });

  // if (!email || !password) {
  if (email === "undefined" || password === "undefined") {
    res.status(400).json({ error: "All fields must be included" });
    return;
  }
  try {
    console.log("try");
    //IF all credentials are provided, we check if user is already in database
    const existingUser = await UserModel.findOne({ email: email });
    console.log("existingUser :>> ", existingUser);
    //User with same email exists
    if (existingUser) {
      res.status(400).json({ error: "Email already registered." });
    }

    //No user with same email exists in our DB

    if (!existingUser) {
      //encrypt password
      try {
        const hashedPassword = await encryptPassword(password);
        if (!hashedPassword) {
          res.status(500).json({
            message: "problem enconding password",
          });
        }
        //Create user
        if (hashedPassword) {
          const newUser = await UserModel.create({
            email: email,
            password: hashedPassword,
            userName: userName,
            userImage: userImage,
          });

          console.log("newUSer", newUser);
          if (newUser) {
            res.status(201).json({
              message: "user Registered OK",
              error: false,
              data: {
                user: {
                  userName: newUser.userName,
                  email: newUser.email,
                  image: newUser.image,
                },
              },
            });
          } else {
            res.status(400).json({ error: "User couldn't be created" });
          }
        }
      } catch (error) {
        console.log("something very bad happened", error);
      }
    }
  } catch (error) {
    console.log(error);
    if (error.code === 11000)
      res.status(400).json({ error: "Email already registered." });
    res.status(500).json({ error: "Something went wrong..." });
  }
};

// const login = async (req, res) => {
//   console.log(req.body);
//   const { email, password } = req.body;
//   if (!email || !password)
//     return res.status(400).json({ error: "All fields must be included" });
//   try {
//     const foundUser = await UserModel.findOne({ email });
//     if (!foundUser)
//       return res.status(404).json({ error: "No user with that email." });
//     if (foundUser.password === password) {
//       const user = {
//         _id: foundUser._id,
//         email: foundUser.email,
//         username: foundUser.username,
//         createdAt: foundUser.createdAt,
//       };
//       return res.status(200).json(user);
//     } else res.status(400).json({ error: "Password incorrect" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Something went wrong..." });
//   }
// };

const login = async (req, res) => {
  //1. Check that required fields are coming in the req.body
  console.log("req.body :>> ", req.body);
  if (!req.body.password || !req.body.email) {
    console.log("no credentials");
    res.status(500).json({
      message: "required fields missing",
      error: true,
      data: null,
    });
    return;
  }

  //2. Check if any user with the same email exists in our DB
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });
    console.log("existingUser :>> ", existingUser);

    //A) there is no user in our database
    if (!existingUser) {
      res.status(500).json({
        message: "user not registered ...",
        error: true,
        data: null,
      });
    }

    //B) email exists in our DB
    if (existingUser) {
      //B.1) Verify password
      const isPasswordCorrect = await verifyPassword(
        req.body.password,
        existingUser.password
      );
      //C.1) passwords do not match
      if (!isPasswordCorrect) {
        res.status(500).json({
          message: "incorrect password",
          error: true,
          data: null,
        });
      }
      //C.2) passwords DO Match
      if (isPasswordCorrect) {
        //D) Generate Token

        const token = generateToken(existingUser._id);

        //D.1) token is not generated

        if (!token) {
          res.status(500).json({
            message: "something went wrong generating the token",
            error: true,
            data: null,
          });
        }

        //D.2) token is generated

        if (token) {
          const user = {
            userName: existingUser.userName,
            email: existingUser.email,
            userImage: existingUser.userImage,
          };

          res.status(200).json({
            message: "user succesfully logged in",
            error: false,
            data: {
              user: user,
              token,
            },
          });
        }
      }
    }
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json({
      message: "no idea what happened here",
      error: true,
      data: null,
    });
  }
};

const updateUser = async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const valid = isValidObjectId(id);
  if (!valid) return res.status(400).json({ error: "invalid ID" });
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong..." });
  }
};

const uploadPicture = async (req, res) => {
  console.log("req :>> ", req.file);
  if (!req.file) {
    console.log("send response file not supported");
    res.status(500).json({
      message: "File not supported",
    });
  }

  if (req.file) {
    //Upload File to cloudinary
    // console.log("req.file :>> ", req.file);
    try {
      const pictureUpload = await cloudinary.uploader.upload(req.file.path, {
        folder: "userProfiles",
      });

      console.log("pictureUpload :>> ", pictureUpload);
      res.status(201).json({
        message: "file uploaded succesfully",
        error: false,
        data: { imageUrl: pictureUpload.secure_url },
      });
    } catch (error) {
      console.log("error :>> ", error);
      res.status(500).json({
        message: "something went wrong, upload not ok",
        error: true,
        data: null,
      });
    }
  }
};

export {
  test,
  getAllUsers,
  findUserByEmail,
  signup,
  login,
  updateUser,
  uploadPicture,
};
