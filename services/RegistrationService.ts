import { Sequelize } from "sequelize-typescript";
import { literal } from "zod";
import registration from "../models/Registration";

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

//Create User Registration
export async function addUserRegistration(input: any) {
  return await registration.create({
    title: input.title,
    firstName: input.firstName,
    lastName: input.lastName,
    fullName: input.firstName + " " + input.lastName,
    email: input.email,
    password: input.password,
    phoneNo: input.phoneNo,
    dob: input.dob,
  });
}
