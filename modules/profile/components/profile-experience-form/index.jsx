import { enqueueSnackbar } from "notistack";
import { Box, InputLabel, Stack, useEventCallback } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExtendedTextField } from "@/src/components";

import { useAddProfileExperience } from "../../hooks/use-add-profile-experience";
import { updateProfileExperienceFormSchema } from "../../schemas/update-profile-experience";
import { updateProfileExperienceFormDefaultValues } from "./utils";

export function useProfileExperienceForm({ onClose }) {
  const addProfileExperience = useAddProfileExperience();

  const form = useForm({
    resolver: zodResolver(updateProfileExperienceFormSchema),
    defaultValues: updateProfileExperienceFormDefaultValues,
  });

  const handleSubmit = useEventCallback(async (payload) => {
    try {
      const response = await addProfileExperience.mutateAsync(payload);
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
          <InputLabel shrink={false} htmlFor="position" required>
            Cargo
          </InputLabel>
          <Controller
            name="position"
            control={form.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <ExtendedTextField
                  {...field}
                  id="position"
                  error={!!error}
                  helperText={error ? error.message : null}
                  sx={{ display: "flex", flex: 1 }}
                />
              );
            }}
          />
        </Box>

        <Box>
          <InputLabel shrink={false} htmlFor="company" required>
            Empresa
          </InputLabel>
          <Controller
            name="company"
            control={form.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <ExtendedTextField
                  {...field}
                  id="company"
                  error={!!error}
                  helperText={error ? error.message : null}
                  sx={{ display: "flex", flex: 1 }}
                />
              );
            }}
          />
        </Box>

        <Box>
          <InputLabel shrink={false} htmlFor="location" required>
            Lugar
          </InputLabel>
          <Controller
            name="location"
            control={form.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <ExtendedTextField
                  {...field}
                  id="location"
                  error={!!error}
                  helperText={error ? error.message : null}
                  sx={{ display: "flex", flex: 1 }}
                />
              );
            }}
          />
        </Box>

        <Box display="grid" gap={2} gridTemplateColumns="repeat(2, 1fr)">
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
            <InputLabel shrink={false} htmlFor="end_date" required>
              Fecha Fin
            </InputLabel>
            <Controller
              name="end_date"
              control={form.control}
              render={({ field, fieldState: { error } }) => {
                return (
                  <ExtendedTextField
                    {...field}
                    id="end_date"
                    type="month"
                    error={!!error}
                    helperText={error ? error.message : null}
                    sx={{ display: "flex", flex: 1 }}
                  />
                );
              }}
            />
          </Box>
        </Box>

        <Box>
          <InputLabel shrink={false} htmlFor="description" required>
            Principales Actividades Realizadas
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
      </Stack>
    </form>
  );

  return {
    component,
    onSubmit: form.handleSubmit(handleSubmit),
  };
}
