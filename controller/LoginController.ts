import express, { Request, Response, NextFunction } from "express";
import { loginUser, findUserByMail } from "../services/LoginService";
import * as jwt from "jsonwebtoken";
import privateKey from "dotenv";

//===Varaibles===
let output;
let hashPassword;
privateKey.config();
const jwtPrivateKey: any = process.env.PRIVATEKEY;

//===Functions Start===

//===Login User Function
export async function login(req: Request, res: Response) {
  try {
    hashPassword = await findUserByMail(req, res).then((hashPassword: any) => {
      if (hashPassword) {
        output = loginUser(req, hashPassword.password).then((output: any) => {
          if (output) {
            const jwtPayload = {
              id: output.id,
            };
            const webToken = jwt.sign(jwtPayload, jwtPrivateKey, {
              expiresIn: "1d",
            });
            res
              .status(200)
              .json({ message: "Login Successfully", token: webToken });
          } else res.status(404).json("Password is not correct");
        });
      } else res.status(404).json("Username is not correct");
    });
  } catch (error) {
    res.status(500).json(error);
  }
}
