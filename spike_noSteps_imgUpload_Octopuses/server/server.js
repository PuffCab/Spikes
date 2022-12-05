import express from "express";
import cors from "cors";
import router from "./routes/test.js";
// const express = require("express")
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import mongoose from "mongoose";
import citiesRoutes from "./routes/citiesRoutes.js";
import museumsRoutes from "./routes/museumsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import cloudinaryConfig from "./config/cloudinary.js";

const app = express();

const port = process.env.PORT || 5001;

const addMiddleWares = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
  app.use(cors(corsOptions));
  cloudinaryConfig();
};

const startServer = () => {
  app.listen(port, () => {
    console.log("Server is running in port " + port);
  });
};

const loadRoutes = () => {
  app.use("/api", router);
  app.use("/api/cities", citiesRoutes);
  app.use("/api/museums", museumsRoutes);
  app.use("/api/users", usersRoutes);
};

const mongoDBConnection = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("MongoDB is running in port :>> ", port);
  } catch (error) {
    console.log("error connecting to MongoDB", error);
  }
};

(async function controller() {
  await mongoDBConnection();
  addMiddleWares();
  loadRoutes();
  startServer();
})();
