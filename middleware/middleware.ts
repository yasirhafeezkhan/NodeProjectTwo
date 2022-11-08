import express, { Express, Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = schema.safeParse(req.body);
      if (!result.success) {
        console.log("======in  result error====", result.error.issues);
        const errorDetails = result.error.issues;
        const message = errorDetails.map((i: any) => i.message);
        return res.status(300).json({ error: message });
      } else {
        next();
      }
    } catch (error: any) {
      console.log("======in error====", error);
      return res.status(500).json(error);
    }
  };

export default validate;
