import express from "express";
import colors from "colors";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import router from "./routes/test.js";
import cityRoutes from "./routes/cityRoutes.js";
import museumRoutes from "./routes/museumRoutes.js";
const app = express();

const addMiddlewares = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
};

const addRoutes = () => {
  app.use("/api", router);
  app.use("/api/cities", cityRoutes);
  app.use("/api/museums", museumRoutes);
};

const startServer = () => {
  const port = process.env.PORT || 5001;

  app.listen(port, () => {
    console.log("Server is running on ".bgBlue + port + " port");
  });
};

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connection to Mongo DB established");
  } catch (error) {
    console.log(err);
  }
};

//IIFE
(async function controller() {
  await dbConnection();
  addMiddlewares();
  addRoutes();
  startServer();
})();
