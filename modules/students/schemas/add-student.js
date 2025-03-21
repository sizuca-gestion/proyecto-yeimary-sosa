import { z } from "zod";
import { validationMessages } from "@/locale";

export const addStudentFormSchema = z.object({
  name: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  national_id: z.coerce
    .number({
      required_error: validationMessages.required,
      invalid_type_error: validationMessages.number,
    })
    .min(1000000, validationMessages.min(1000000))
    .max(50000000, validationMessages.max(50000000)),
  sex: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  birth_date: z
    .string({ required_error: validationMessages.required })
    .transform((date) => (date ? new Date(date).toISOString() : date)),
  address: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  college_name: z.string().min(1, validationMessages.min(1)),
  college_major: z.string().min(1, validationMessages.min(1)),
  project_name: z.string().min(1, validationMessages.min(1)),
});
