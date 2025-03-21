import { z } from "zod";
import { validationMessages } from "@/locale";

export const ACCEPTED_PROJECT_TYPES = [
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
export const ACCEPTED_SLIDES_TYPES = [
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

export const updateProfileCollegeDataFormSchema = z.object({
  college_major: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  college_name: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  college_plan: z
    .any()
    .refine(
      (file) => ACCEPTED_PROJECT_TYPES.includes(file?.type),
      validationMessages.excelOnly
    ),
  project_name: z
    .string({ required_error: validationMessages.required })
    .min(1, validationMessages.min(1)),
  project_plan: z
    .any()
    .refine(
      (file) => ACCEPTED_PROJECT_TYPES.includes(file?.type),
      validationMessages.excelOnly
    ),
  project_slides: z
    .any()
    .refine(
      (file) => ACCEPTED_SLIDES_TYPES.includes(file?.type),
      validationMessages.excelOnly
    ),
});
