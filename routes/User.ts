import express from "express";
import { getUsers, getUser, updateUser } from "../controller/UserController";
import { registrationSchema } from "../schema/registrationSchema";
import validateResource from "../middleware/middleware";
import isAuth from "../middleware/authCheck";

const route = express();

let token;
//===Route Starts

//===Get All Registered Users
route.get("/users", isAuth, getUsers);

//===Get One User By Id
route.get("/user/:id", isAuth, getUser);

//===Update User
route.patch("/user/:id", isAuth, updateUser);

export default route;
