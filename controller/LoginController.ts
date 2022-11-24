import express, { Request, Response, NextFunction } from "express";
import { loginUser, findUserByMail } from "../services/LoginService";
import * as jwt from "jsonwebtoken";
import privateKey from "dotenv";

let output;
let hashPassword;
privateKey.config();
const jwtPrivateKey: any = process.env.PRIVATEKEY;

export async function login(req: Request, res: Response) {
  hashPassword = await findUserByMail(req, res).then((hashPassword: any) => {
    if (hashPassword) {
      output = loginUser(req, hashPassword.password).then((output: any) => {
        if (output) {
          const jwtPayload = {
            id: output.id,
            firstName: output.firstName,
            email: output.email,
            password: output.password,
          };
          const webToken = jwt.sign(jwtPayload, jwtPrivateKey);
          res
            .status(200)
            .json({ message: "Login Successfully", token: webToken });
        } else res.status(404).json("Password is not correct");
      });
    } else res.status(404).json("Username is not correct");
  });
}
