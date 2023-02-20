import express, { Response, Request, NextFunction } from "express";
import {
  addInvoice,
  getInvoice,
  getInvoiceById,
  sendInvoice,
} from "../controller/InvoiceController";

const route = express();

//===Route Starts

//===Add Invoice
route.post("/invoice", addInvoice);

//===Get Invoice
route.get("/invoices", getInvoice);

//===Get Invoice By Id
route.get("/invoice/:id", getInvoiceById);

//===Send Mail
route.post("/mail", sendInvoice);
export default route;
