import { z } from "zod";

export const registrationSchema = z.object({
  title: z.string().optional(),
  firstName: z.string().min(1, { message: "Please! Enter first name" }),
  lastName: z.string().min(1, { message: "Please! Enter last name" }),
  email: z
    .string()
    .min(1, { message: "Enter email address" })
    .email({ message: "Enter valid email" }),
  password: z
    .string()
    .min(6, { message: "Password Should be atleast 6 characters" }),
  phoneNo: z.string().length(10, { message: "Phone number must be 10 digits" }),
  dob: z.string().min(1, { message: "Please! Enter DOB" }),
});
