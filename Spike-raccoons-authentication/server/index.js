import colors from "colors";
import express from "express";

import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/userRoutes.js";
import petRouter from "./routes/petRoutes.js";
import mongoose from "mongoose";
import cloudinaryConfig from "./config/cloudinary.js";

const app = express();

const addMiddlewares = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use(cors());
  cloudinaryConfig();
};

const addRoutes = () => {
  app.use("/api/users", userRouter);
  app.use("/api/pets", petRouter);
  app.use("*", (req, res) =>
    res.status(404).json({ error: "Endpoint not found." })
  );
};

const startServer = () => {
  const port = process.env.PORT || 5002;

  app.listen(port, () => {
    console.log(`Server running in port :${port}`.bgGreen);
  });
};
const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI2);
    console.log("Conneciton to MongoDB established".bgCyan);
  } catch (error) {
    console.log("error connecting to the MongoDB".bgRed, error);
  }
};

//IIFE

(async function controller() {
  await DBConnection();
  addMiddlewares();
  addRoutes();
  startServer();
})();
