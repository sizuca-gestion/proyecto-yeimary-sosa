import { z } from "zod";
import { validationMessages } from "@/locale";

export const updateProfileCertificationFormSchema = z.object({
  name: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  issuer: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  description: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  start_date: z.coerce.date({
    errorMap: ({ code }) => {
      if (code == "invalid_date") return { message: validationMessages.date };
      return { message: validationMessages.required };
    },
  }),
  duration: z.coerce
    .number({
      required_error: validationMessages.required,
      invalid_type_error: validationMessages.number,
    })
    .min(0, validationMessages.min(0)),
});
