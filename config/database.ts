import { Sequelize } from "sequelize-typescript";
import demoRegistration from "../models/Registration";
import demoQualification from "../models/Qualification";

const db: any = new Sequelize("demo", "root", "Yasir@12345", {
  host: "localhost",
  storage: ".database/mysql",
  dialect: "mysql",
  models: ["../models/*.ts"],
  logging: false,
});

db.addModels([demoRegistration, demoQualification]);

export default db;
