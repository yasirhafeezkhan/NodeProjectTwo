import express, { Express, Request, Response, NextFunction } from "express";
import {
  addCustomerInvoice,
  getCustomerInvoice,
  getCustomerInvoiceById,
} from "../services/InvoiceService";
import nodemailer from "nodemailer";

//=== Varaibles
let output: any;
let param: number;
//===Functions Start Here

//===Add Invoice
export async function addInvoice(req: Request, res: Response) {
  try {
    console.log("hitting add invoice");
    const invoiceNumber = Math.ceil(Math.random() * 1000 * 1000);
    output = addCustomerInvoice(req, invoiceNumber)
      .then((output) => {
        res
          .status(200)
          .json({ message: "Invoice Added Successfully", output: output });
      })
      .catch((error) => {
        res.status(404).json("Something went wrong");
      });
  } catch (error) {
    res.status(500).json(error);
  }
}

//===Get Invoice
export async function getInvoice(req: Request, res: Response) {
  try {
    output = getCustomerInvoice()
      .then((output) => {
        res.status(200).json({ output: output });
      })
      .catch((error) => {
        res.status(404).json("Something went wrong");
      });
  } catch (error) {
    res.status(500).json(error);
  }
}

//===Get Invoice By Id
export async function getInvoiceById(req: Request, res: Response) {
  try {
    param = Number(req.params.id);
    output = getCustomerInvoiceById(param)
      .then((output) => {
        res.status(200).json({ output: output });
      })
      .catch((error) => {
        res.status(404).json("Something went wrong");
      });
  } catch (error) {
    res.status(500).json(error);
  }
}

//===Post mail
export async function sendInvoice(req: Request, res: Response) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "natalia.hyatt84@ethereal.email",
        pass: "6V29Q1hUPwBKGWnnGD",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Yasir khan" <natalia.hyatt84@ethereal.email>',
      to: "yasirkhanhafeez95@gmail.com",
      subject: "Invoice",
      text:
        "Invoice No:" +
        req.body.invoiceNo +
        "Address :" +
        req.body.address +
        "Invoice Date :" +
        req.body.invoiceDate +
        "Invoice Desc :" +
        req.body.invoiceDesc +
        "Amount :" +
        req.body.amount,
      html:
        "<div><b>Invoice No:</b>" +
        req.body.invoiceNo +
        "</div>" +
        "<div><b>Address :</b>" +
        req.body.address +
        "</div>" +
        "<div><b>Invoice Date :</b>" +
        req.body.invoiceDate +
        "</div>" +
        "<div><b>Invoice Desc :</b>" +
        req.body.invoiceDesc +
        "</div>" +
        "<div><b>Amount :</b>" +
        req.body.amount +
        "</div>",
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    res.status(500).json(error);
  }
}
