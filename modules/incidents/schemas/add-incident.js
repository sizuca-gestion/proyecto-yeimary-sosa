import { z } from "zod";
import { validationMessages } from "@/locale";

export const addIncidentFormSchema = z.object({
  type: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  description: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
});
