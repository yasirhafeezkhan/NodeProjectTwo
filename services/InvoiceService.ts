import { Request } from "express";
import invoice from "../models/Invoice";

//===Service Functions Start===//

//Create Invoice
export async function addCustomerInvoice(req: Request, invoiceNo: number) {
  return await invoice.create({
    invoiceNo: invoiceNo,
    address: req.body.address,
    invoiceDesc: req.body.invoiceDesc,
    amount: req.body.amount,
  });
}

//===Get All Invoices
export async function getCustomerInvoice() {
  return await invoice.findAll({
    attributes: [
      "id",
      "invoiceNo",
      "address",
      "invoiceDesc",
      "invoiceDate",
      "amount",
    ],
  });
}

//===Get One Invoice By Id
export async function getCustomerInvoiceById(id: number) {
  return await invoice.findOne({
    where: invoice.sequelize?.literal(`invoice_id=$id`),
    bind: { id },
  });
}
