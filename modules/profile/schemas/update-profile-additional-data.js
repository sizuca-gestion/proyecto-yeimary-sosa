import { z } from "zod";

export const updateProfileAdditionalDataFormSchema = z.object({
  has_relative_working: z.string(),
  has_commercial_relationship: z.string(),
  has_volunteered: z.string(),
  has_own_business: z.string(),
});
