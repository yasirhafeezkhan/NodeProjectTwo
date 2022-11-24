import express, { Express, Request, Response, NextFunction } from "express";
import { addUserRegistration } from "../services/RegistrationService";
import bcrypt from "bcrypt";

//=== Varaibles
let output: any;
let param: string;
//===Functions Start Here

//===Add User Registration
export async function addUser(req: Request, res: Response) {
  //===Encrypt Password Function
  await bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) res.status(400).json(err);
    else {
      output = addUserRegistration(req, hash)
        .then((output) => {
          res
            .status(200)
            .json({ message: "Registered Successfully", user: output });
        })
        .catch((error) => {
          res.status(404).json("Not found");
          console.log("===Record not found===", error);
        });
    }
  });
}
