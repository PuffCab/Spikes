import express from "express";
import cors from "cors";
import router from "./routes/citiesRoute.js";
// import router from "./routes/testRoutes.js";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// app.use(cors());

// app.listen(port, () => {
//   console.log(`Server is running on ${port} port`);
// });

// mongoose
//   .connect(process.env.DB)
//   .then(() => console.log(`MongoDB is connected on port ${port} `))
//   .catch((error) => console.log("Error connecting to MongoDB", error));

// app.use("/users", router);

const addMiddleware = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
};

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
  });
};

const mongoBConnection = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log(`MongoDB is connected on port ${port} `);
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

const loadRoutes = () => {
  // app.use("/users", router);
  app.use("/cities", router);
};

(async function controller() {
  await mongoBConnection();
  addMiddleware();
  loadRoutes();
  startServer();
})();
