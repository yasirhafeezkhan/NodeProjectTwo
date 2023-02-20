import { Sequelize } from "sequelize-typescript";
import invoice from "../models/Invoice";

const db: any = new Sequelize("demo", "root", "Yasir@12345", {
  host: "localhost",
  storage: ".database/mysql",
  dialect: "mysql",
  models: ["../models/*.ts"],
  logging: false,
});

db.addModels([invoice]);

export default db;
