import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/testRoutes.js";
import museumsRoute from "./routes/museumsRoute.js";
import * as dotenv from "dotenv";
import citiesRoute from "./routes/citiesRoute.js";
dotenv.config();

const port = process.env.PORT || 5003;
const app = express();

const addMiddlewares = () => {
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
};

const mongoDBConnection = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("you connected to mongoDB, on port..." + port);
  } catch (error) {
    console.log("error connecting to MongoDB..." + error);
  }
};

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
  });
};

const loadRoutes = () => {
  app.use("/users", router);
  app.use("/api/cities", citiesRoute);
  app.use("/api/museums", museumsRoute);
};

(async function controller() {
  await mongoDBConnection();
  addMiddlewares();
  loadRoutes();
  startServer();
})();
