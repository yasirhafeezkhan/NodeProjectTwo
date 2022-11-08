import express from "express";
import validateResource from "../middleware/middleware";
import { loginSchema } from "../schema/loginSchema";
import { login } from "../controller/LoginController";
const route = express();

//Login user
route.post("/login", validateResource(loginSchema), login);

export default route;
