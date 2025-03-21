import { z } from "zod";
import { validationMessages } from "@/locale";

export const updateProfileExperienceFormSchema = z.object({
  position: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  company: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  location: z
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
  end_date: z.coerce.date({
    errorMap: ({ code }) => {
      if (code == "invalid_date") return { message: validationMessages.date };
      return { message: validationMessages.required };
    },
  }),
});
