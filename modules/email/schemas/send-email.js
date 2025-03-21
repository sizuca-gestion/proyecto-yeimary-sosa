import { z } from "zod";
import { validationMessages } from "@/locale";

export const sendEmailSchema = z.object({
  email: z
    .string({ required_error: validationMessages.required })
    .email(validationMessages.email),
  subject: z
    .string({
      required_error: validationMessages.required,
    })
    .min(1, validationMessages.min(1)),
  text: z
    .string({
      required_error: validationMessages.required,
    })
    .min(1, validationMessages.min(1)),
});
