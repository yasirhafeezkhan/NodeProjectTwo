import express, { Express, Request, Response, NextFunction } from "express";
import {
  getAllUsers,
  getOneUser,
  updateUserRegistration,
} from "../services/UserService";
import jwt_decode from "jwt-decode";
import { error } from "console";
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

export async function updateUser(req: Request, res: Response) {
  try {
    let userId = req.params.id;
    output = await updateUserRegistration(req, userId)
      .then((output) => {
        if (output)
          res
            .status(200)
            .json({ message: "Updated successfully", user: output });
        else res.status(401).json(`User not found with id ${userId}`);
      })
      .catch((error) => {
        res.status(403).json(error);
        console.log(error);
      });
  } catch (error) {
    res.status(403).json(error);
    console.log(error);
  }
}

// function authUserId(req: Request) {
//   const userToken: any = req.headers.authorization;
//   console.log("======user token====", userToken);
//   const decode: any = jwt_decode(userToken);
//   console.log("=====user details====", decode);
//   return decode.email;
// }
