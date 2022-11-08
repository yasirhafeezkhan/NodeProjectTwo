import express, { Express, Request, Response, NextFunction } from "express";
import { addUserRegistration } from "../services/RegistrationService";

//=== Varaibles
let output: any;
let param: string;
//===Functions Start Here

//===Add User Registration
export async function addUser(req: Request, res: Response) {
  output = await addUserRegistration(req.body)
    .then((output) => {
      res
        .status(200)
        .json({ message: "Registered Successfully", user: output });
    })
    .catch((error) => {
      res.status(300).json("Not found");
      console.log("===Record not found===", error);
    });
}
