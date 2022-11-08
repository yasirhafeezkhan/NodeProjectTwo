import express, { Request, Response, NextFunction } from "express";
import { loginUser } from "../services/LoginService";
import * as jwt from "jsonwebtoken";
import privateKey from "dotenv";

let output;
privateKey.config();
const jwtPrivateKey: any = process.env.PRIVATEKEY;

export async function login(req: Request, res: Response) {
  let email = req.body.email;
  let password = req.body.password;
  output = await loginUser(email, password, res).then((output: any) => {
    if (output) {
      const jwtPayload = {
        id: output.registrationId,
        firstName: output.firstName,
        email: output.email,
        password: output.password,
      };
      const webToken = jwt.sign(jwtPayload, jwtPrivateKey);
      res.status(200).json({ message: "Login Successfully", token: webToken });
    }
  });
}
