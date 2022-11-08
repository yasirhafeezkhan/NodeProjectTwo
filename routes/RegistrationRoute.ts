import express from "express";
import { addUser } from "../controller/RegistrationController";
import { registrationSchema } from "../schema/registrationSchema";
import validateResource from "../middleware/middleware";

const route = express();

//===Route Starts

//===Add User Registration
route.post("/register", validateResource(registrationSchema), addUser);

export default route;
