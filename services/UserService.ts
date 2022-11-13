import express, { Express, Request, Response, NextFunction } from "express";
import registration from "../models/Registration";
let output: any;

//===Service Functions Start===//

//Get All Registered Users
export async function getAllUsers() {
  return await registration.findAll();
}

//Get One Registered Users
export async function getOneUser(id: string) {
  return await registration.findOne({
    where: registration.sequelize?.literal(`registration_id=$id`),
    bind: { id },
  });
}

//Update Registration user
export async function updateUserRegistration(req: Request, id: string) {
  output = "";
  output = await registration.findOne({
    where: registration.sequelize?.literal(`registration_id=$id`),
    bind: { id },
  });
  if (output) return await registration.update(req.body, { where: { id: id } });
  else return false;
}
