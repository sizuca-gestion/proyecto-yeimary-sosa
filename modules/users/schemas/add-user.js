import { validationMessages } from "@/locale";
import { z } from "zod";

export const addUserSchema = z.object({
  email: z
    .string({ required_error: validationMessages.required })
    .email(validationMessages.email),
  username: z
    .string({
      required_error: validationMessages.required,
    })
    .min(1, validationMessages.min(1)),
  password: z
    .string({
      required_error: validationMessages.required,
    })
    .min(1, validationMessages.min(1)),
});
