import { Sequelize } from "sequelize-typescript";
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
