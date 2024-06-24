import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import colors from "colors";
import router from "./routes/testRoute.js";
import mealRouter from "./routes/mealsRouter.js";

dotenv.config();
const app = express();

const addMiddlewares = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
};

const startServer = () => {
  const port = process.env.port || 5002;
  app.listen(port, () => {
    console.log("server is running on ", port, " port");
  });
};

const loadRoutes = () => {
  app.use("/api", router);
  app.use("/api/famous-meals", mealRouter);
};

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connection with MongoDB established".bgGreen);
  } catch (error) {
    console.log("problems connecting to MongoDB".bgRed, error);
  }
};

//IIFE //we use it in order not to create a new instance of the function everytime our server starts again
(async function controller() {
  await DBConnection();
  addMiddlewares();
  loadRoutes();
  startServer();
})();
