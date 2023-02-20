import { z } from "zod";

export const invoiceSchema = z.object({
  invoiceDesc: z
    .string()
    .min(1, { message: "Please! Enter invoice description" }),
  address: z.string().min(1, { message: "Please! Enter address" }),
  amount: z.number().min(1),
});
