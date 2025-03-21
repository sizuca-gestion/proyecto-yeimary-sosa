import { validationMessages } from "@/locale";
import { z } from "zod";

export const addProfileHistorySchema = z.object({
  profile_id: z
    .number({
      required_error: validationMessages.required,
      invalid_type_error: validationMessages.number,
    })
    .min(1, validationMessages.min(1)),
  position: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  integration_date: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1))
    .transform((date) => (date ? new Date(date).toISOString() : date)),
  contract_reason: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  contract_type: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  contract_start_date: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1))
    .transform((date) => (date ? new Date(date).toISOString() : date)),
  contract_end_date: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1))
    .transform((date) => (date ? new Date(date).toISOString() : date)),
  organizational_unit: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  comment: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  additional_comment_1: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  additional_comment_2: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  medical_condition: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
});
