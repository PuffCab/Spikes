import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import router from "./routes/test.js";
import cityRoutes from "./routes/cityRoutes.js";
const app = express();

const addMiddlewares = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
};

const addRoutes = () => {
  app.use("/api", router);
  app.use("/api/cities", cityRoutes);
};

const startServer = () => {
  const port = process.env.PORT || 5001;

  app.listen(port, () => {
    console.log("Server is running on " + port + " port");
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
