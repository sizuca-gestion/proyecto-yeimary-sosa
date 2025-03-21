import { validationMessages } from "@/locale";
import { z } from "zod";

export const updateProfileHistorySchema = z.object({
  profile_id: z
    .number({
      required_error: validationMessages.required,
      invalid_type_error: validationMessages.number,
    })
    .min(1, validationMessages.min(1)),
  name: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  national_id: z.coerce
    .number({
      invalid_type_error: validationMessages.number,
    })
    .min(1000000, validationMessages.min(1000000))
    .max(50000000, validationMessages.max(50000000)),
  position: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  organizational_unit: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  new_position: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  new_organizational_unit: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  movement_type: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  shift: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  reclassification_date: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1))
    .transform((date) => (date ? new Date(date).toISOString() : date)),
  integration_date: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1))
    .transform((date) => (date ? new Date(date).toISOString() : date)),
});
