const { Router } = require("express");
const router = Router();
import { Request, Response } from "express";
import { prisma } from "../prisma";
import { Session, SessionData } from "express-session";
import argon2 from "argon2";

// login-user/
router.post(
  "/",
  async (
    req: Request & {
      session: Session & Partial<SessionData> & { userId?: number };
    },
    res: Response
  ) => {
    try {
      const { email, password } = req.body.values;

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const valid = await argon2.verify(user.password, password);

      if (!valid) {
        return res.status(400).json({ message: "Invalid password" });
      }

      req.session.userId = user.id;

      res.status(201).json({ user, message: "User logged in" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "An error occurred" });
    }
  }
);

module.exports = router;
