import express, { Express, Request, Response, NextFunction } from "express";
import {
  getAllUsers,
  getOneUser,
  addUserRegistration,
} from "../services/RegistrationService";
import jwtDecode from "jwt-decode";
import { json } from "stream/consumers";

//=== Varaibles
let output: any;
let param: string;
//===Functions Start Here

//===Get All Users
export async function getUsers(req: Request, res: Response) {
  output = await getAllUsers()
    .then((output) => {
      console.log("====response output===", output);
      res.status(200).json(output);
    })
    .catch((error) => {
      res.status(300).json("Not found");
      console.log("===Record not found===", error);
    });
}

//===Get All Users
export async function getUser(req: Request, res: Response) {
  param = req.params.id;
  output = await getOneUser(param)
    .then((output) => {
      console.log("====response output===", output);
      res.status(200).json(output);
    })
    .catch((error) => {
      res.status(300).json("Not found");
      console.log("===Record not found===", error);
    });
}

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

export async function updateUser(req: Request, res: Response) {
  authUserId(req);
}

function authUserId(req: Request) {
  let userToken: any = req.headers.authorization;
  console.log("======user token====", userToken);
  let userDetails: any = jwtDecode(userToken);
  console.log("=====user details====", userDetails);
}
