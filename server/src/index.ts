import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { PrismaClient } from "@prisma/client";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import express from "express";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { Context } from "./context";

const main = async () => {
  const app = express();
  const prisma = new PrismaClient();

  const RedisStore = connectRedis(session);
  const redis = new Redis();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redis as any,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 YEARS
        httpOnly: true,
        sameSite: "lax", // csrf protection
        secure: process.env.NODE_ENV === "production", // cookie only works in https
      },
      saveUninitialized: false,
      secret: "dfjstretreqwrerewt",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      prisma,
    }),
    playground: true,
    introspection: true,
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
};

main().catch((error) => console.error(error));
