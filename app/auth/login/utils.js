import { z } from "zod";

export const loginUserForm = z.object({
  email: z
    .string({
      required_error: "Este campo es requerido",
    })
    .email("Correo invalido"),
  password: z.string({
    required_error: "Este campo es requerido",
  }),
});
