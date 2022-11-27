import express, { Express, Request, Response, NextFunction } from "express";
import {
  getAllUsers,
  getOneUser,
  updateUserRegistration,
  deleteUserRegistration,
} from "../services/UserService";
//=== Varaibles
let output: any;
let param: number;
//===Functions Start Here

//===Get All Users
export async function getUsers(req: Request, res: Response) {
  try {
    output = await getAllUsers()
      .then((output) => {
        res.status(200).json(output);
      })
      .catch((error) => {
        res.status(300).json("Not found");
        console.log("===Record not found===", error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
}

//===Get All Users
export async function getUser(req: Request, res: Response) {
  try {
    param = Number(req.params.id);
    output = await getOneUser(param)
      .then((output) => {
        res.status(200).json(output);
      })
      .catch((error) => {
        res.status(300).json("Not found");
        console.log("===Record not found===", error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
}

//===Update  Users
export async function updateUser(req: Request, res: Response) {
  try {
    param = Number(req.params.id);
    output = await updateUserRegistration(req, param)
      .then((output) => {
        if (output)
          res
            .status(200)
            .json({ message: "Updated successfully", user: output });
        else res.status(404).json(`User not found with id ${param}`);
      })
      .catch((error) => {
        res.status(403).json(error);
        console.log(error);
      });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
}

//===Delete User

export async function deleteUser(req: Request, res: Response) {
  try {
    param = Number(req.params.id);
    output = await deleteUserRegistration(param)
      .then((output) => {
        if (output)
          res
            .status(200)
            .json({ message: "Deleted successfully!", output: output });
        else res.status(404).json(`User not found with id ${param}`);
      })
      .catch((error) => {
        res.status(403).json(error);
        console.log(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
}
