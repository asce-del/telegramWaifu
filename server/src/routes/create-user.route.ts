const { Router } = require("express");
const router = Router();
import { Request, Response } from "express";
import { prisma } from "../prisma";
import { validateRegsiter } from "../utils/validateRegister";
import { Session, SessionData } from "express-session";
import argon2 from "argon2";

// create-user/
router.post(
  "/",
  async (
    req: Request & {
      session: Session & Partial<SessionData> & { userId?: number };
    },
    res: Response
  ) => {
    try {
      console.log(req.body);
      const { fname, lname, email, password } = req.body.values;
      const errors = validateRegsiter({ fname, lname, email, password });

      if (errors) {
        return res.status(400).json({ errors });
      }

      const hashedPassword = await argon2.hash(password);

      const exist = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (exist) {
        return res.status(400).json({ message: "User already exist" });
      }

      const user = await prisma.user.create({
        data: {
          fname: fname,
          lname: lname,
          email: email,
          password: hashedPassword,
        },
      });

      req.session.userId = user.id;

      res.status(201).json({ user, message: "User created" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "An error occurred" });
    }
  }
);

module.exports = router;
