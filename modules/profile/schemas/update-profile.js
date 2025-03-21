import { z } from "zod";
import { validationMessages } from "@/locale";

export const updateProfileFormSchema = z.object({
  name: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  national_id: z.coerce
    .number({
      invalid_type_error: validationMessages.number,
    })
    .min(1000000, validationMessages.min(1000000))
    .max(50000000, validationMessages.max(50000000)),
  sex: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  birth_date: z.coerce.date({
    errorMap: ({ code }) => {
      if (code == "invalid_date") return { message: validationMessages.date };
      return { message: validationMessages.required };
    },
  }),
  address: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  summary: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  area_of_interest: z.array(z.string()).min(1),
  profession: z.string(),
  education_level: z.string(),
});
