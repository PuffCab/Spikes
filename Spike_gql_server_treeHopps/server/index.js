//REVIEW[epic=1-Server setup, seq=1] 1-setup server as usual and connect to DB

import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import colors from "colors";

import connectDB from "./config/db.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs } from "./graphql/schema/typeDefs.js";
import { resolvers } from "./graphql/resolvers/resolvers.js";

const app = express();

const addMiddlewares = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
};

const startServer = async () => {
  await server.start();

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: ({ req, res }) => {
        return { token: req.headers.authorization };
      },
    })
  );

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Server is running in port ${port} `.bgGreen);
  });
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async function controller() {
  await connectDB();
  addMiddlewares();
  startServer();
})();
