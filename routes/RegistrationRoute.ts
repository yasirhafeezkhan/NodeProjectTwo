import express, { Response, Request, NextFunction } from "express";
import { addUser } from "../controller/RegistrationController";
import { registrationSchema } from "../schema/registrationSchema";
import validateResource from "../middleware/middleware";
import uploader from "../middleware/uploader";

const route = express();

//===Route Starts

//===Add User Registration
route.post(
  "/register",
  uploader,
  validateResource(registrationSchema),
  addUser
);

export default route;
