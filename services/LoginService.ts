import { QueryTypes, Op } from "sequelize";
import express, { Request, Response, NextFunction } from "express";
import db from "../config/database";
import registrationModel from "../models/Registration";
import bcrypt from "bcrypt";
let output: any;

//=== find user by email
export async function findUserByMail(req: Request, res: Response) {
  output = "";
  output = await registrationModel.findOne({
    attributes: ["password"],
    where: {
      email: req.body.email,
    },
  });
  if (output) return output;
  else return false;
}

//===Login user
export async function loginUser(req: Request, hashPassword: string) {
  output = "";
  await bcrypt.compare(req.body.password, hashPassword).then(function (result) {
    if (result) {
      output = registrationModel.findOne({
        where: {
          [Op.and]: [
            {
              email: req.body.email,
            },
            { password: hashPassword },
          ],
        },
      });
    } else return false;
  });
  return output;
}
