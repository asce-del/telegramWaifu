import express from "express";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import * as dotenv from "dotenv";

const main = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded());

  dotenv.config();

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
      name: process.env.COOKIE_NAME,
      store: new RedisStore({
        client: redis as any,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 YEAR
        httpOnly: true,
        sameSite: "lax", // csrf protection
        secure: process.env.NODE_ENV === "production", // cookie only works in https
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET as any,
      resave: false,
    })
  );

  app.use("/create-user", require("./routes/create-user.route"));
  app.use("/login-user", require("./routes/login-user.route"));


  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
};

main().catch((error) => console.error(error));
