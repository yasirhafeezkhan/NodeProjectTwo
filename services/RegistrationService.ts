import { Sequelize } from "sequelize-typescript";
import express, { Express, Request, Response, NextFunction } from "express";
import { literal } from "zod";
import registration from "../models/Registration";

//===Service Functions Start===//

//Create User Registration
export async function addUserRegistration(req: Request, encryptPass: any) {
  return await registration.create({
    title: req.body.title,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    fullName: req.body.firstName + " " + req.body.lastName,
    photo: req.file?.filename,
    email: req.body.email,
    password: encryptPass,
    phoneNo: req.body.phoneNo,
    dob: req.body.dob,
  });
}
