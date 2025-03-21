import { enqueueSnackbar } from "notistack";
import { Box, InputLabel, Stack, useEventCallback } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExtendedTextField } from "@/src/components";

import { useAddProfileCertification } from "../../hooks/use-add-profile-certification";
import { updateProfileCertificationFormSchema } from "../../schemas/update-profile-certification";
import { updateProfileCertificationFormDefaultValues } from "./utils";

export function useProfileCertificationForm({ onClose }) {
  const addProfileCertification = useAddProfileCertification();

  const form = useForm({
    resolver: zodResolver(updateProfileCertificationFormSchema),
    defaultValues: updateProfileCertificationFormDefaultValues,
  });

  const handleSubmit = useEventCallback(async (payload) => {
    try {
      const response = await addProfileCertification.mutateAsync(payload);
      enqueueSnackbar({ message: response.message, variant: "success" });

      onClose?.();
      form.reset();
    } catch (error) {
      console.error(error);
      enqueueSnackbar({
        message: error.response.data.message,
        variant: "error",
      });
    }
  });

  const component = (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Stack spacing={2}>
        <Box>
          <InputLabel shrink={false} htmlFor="name" required>
            Nombre
          </InputLabel>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <ExtendedTextField
                  {...field}
                  id="name"
                  error={!!error}
                  helperText={error ? error.message : null}
                  sx={{ display: "flex", flex: 1 }}
                />
              );
            }}
          />
        </Box>

        <Box>
          <InputLabel shrink={false} htmlFor="issuer" required>
            Empresa
          </InputLabel>
          <Controller
            name="issuer"
            control={form.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <ExtendedTextField
                  {...field}
                  id="issuer"
                  error={!!error}
                  helperText={error ? error.message : null}
                  sx={{ display: "flex", flex: 1 }}
                />
              );
            }}
          />
        </Box>

        <Box>
          <InputLabel shrink={false} htmlFor="description" required>
            Descripción
          </InputLabel>
          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <ExtendedTextField
                  {...field}
                  id="description"
                  error={!!error}
                  helperText={error ? error.message : null}
                  sx={{ display: "flex", flex: 1 }}
                />
              );
            }}
          />
        </Box>

        <Box>
          <InputLabel shrink={false} htmlFor="start_date" required>
            Fecha Inicio
          </InputLabel>
          <Controller
            name="start_date"
            control={form.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <ExtendedTextField
                  {...field}
                  id="start_date"
                  type="month"
                  error={!!error}
                  helperText={error ? error.message : null}
                  sx={{ display: "flex", flex: 1 }}
                />
              );
            }}
          />
        </Box>

        <Box>
          <InputLabel shrink={false} htmlFor="duration" required>
            Duración
          </InputLabel>
          <Controller
            name="duration"
            control={form.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <ExtendedTextField
                  {...field}
                  id="duration"
                  type="number"
                  error={!!error}
                  helperText={error ? error.message : null}
                  sx={{ display: "flex", flex: 1 }}
                />
              );
            }}
          />
        </Box>
      </Stack>
    </form>
  );

  return {
    component,
    onSubmit: form.handleSubmit(handleSubmit),
  };
}
