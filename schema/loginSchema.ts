import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please! Enter email." })
    .email({ message: "Enter valid email" }),
  password: z.string().min(6, { message: "Atleast enter 6 characters" }),
});
