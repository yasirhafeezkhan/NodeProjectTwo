import { QueryTypes } from "sequelize";
import express, { Request, Response, NextFunction } from "express";
import db from "../config/database";
import registrationModel from "../models/Registration";
let output: any;

export async function loginUser(
  email: string,
  password: string,
  res: Response
) {
  output = "";
  output = await db.query(
    `SELECT
	* 
FROM
	demo_registration 
WHERE
	email = "${email}" 
	AND PASSWORD = "${password}"`,
    {
      type: QueryTypes.SELECT,
      mapToModel: true,
      model: registrationModel,
    }
  );
  if (Object.keys(output).length === 0)
    res.status(401).json("Username or Password is not correct");
  return output;
}
