"use strict";
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

let tokenResponse: any = "";

export default async function isAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const jwtPrivateKey: any = process.env.PRIVATEKEY;
  let authorization = req.headers["authorization"];
  if (authorization) {
    const authHeader = authorization;
    const token = authHeader.split(" ")[1];
    try {
      const userDetails: any = jwt.verify(token, jwtPrivateKey);
      if (userDetails) {
        tokenResponse = {
          id: userDetails.registrationId,
          firstName: userDetails.firstName,
          email: userDetails.email,
          password: userDetails.password,
          status: 200,
        };
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(403).json({ message: "Access is Denied" });
    }
    return tokenResponse;
  } else {
    res.status(403).json({ message: "No Token found" });
  }
}
