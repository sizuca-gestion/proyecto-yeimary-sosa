import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import {
  Box,
  Button,
  InputLabel,
  Stack,
  Typography,
  useEventCallback,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ExtendedTextField } from "@/src/components";
import { useProfile, useUpdateProfileAdditionalData } from "../../hooks";
import {
  serverToClientProfileAdditionalDataTransformer,
  updateProfileAdditionalDataFormDefaultValues,
} from "./utils";
import { updateProfileAdditionalDataFormSchema } from "../../schemas/update-profile-additional-data";

export function ProfileAdditionalDataForm() {
  const profile = useProfile();
  const updateProfileAdditionalData = useUpdateProfileAdditionalData();

  const form = useForm({
    resolver: zodResolver(updateProfileAdditionalDataFormSchema),
    defaultValues: updateProfileAdditionalDataFormDefaultValues,
  });

  useEffect(() => {
    if (!profile.isSuccess) return;
    const data = serverToClientProfileAdditionalDataTransformer(
      profile.data.data
    );
    form.reset(data);
  }, [profile.isSuccess]);

  const handleSubmit = useEventCallback(async (payload) => {
    try {
      const response = await updateProfileAdditionalData.mutateAsync(payload);

      enqueueSnackbar({ message: response.message, variant: "success" });

      const data = serverToClientProfileAdditionalDataTransformer(
        response.data
      );
      form.reset(data);
    } catch (error) {
      console.error(error);
      enqueueSnackbar({
        message: error.response.data.message,
        variant: "error",
      });
    }
  });

  return (
    <>
      <Typography variant="h5" textTransform="uppercase" fontWeight="bold">
        Datos adicionales
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Stack spacing={2}>
          <Box
            display="grid"
            gap={1}
            gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
          >
            <Box>
              <InputLabel shrink={false} htmlFor="has_volunteered">
                ¿Realizas actividades de voluntariado? Menciónalas
              </InputLabel>
              <Controller
                name="has_volunteered"
                control={form.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <ExtendedTextField
                      {...field}
                      id="has_volunteered"
                      error={!!error}
                      helperText={error ? error.message : null}
                      sx={{ display: "flex", flex: 1 }}
                    />
                  );
                }}
              />
            </Box>

            <Box>
              <InputLabel shrink={false} htmlFor="has_own_business">
                ¿Tienes negocio propio? Menciona de qué se trata
              </InputLabel>
              <Controller
                name="has_own_business"
                control={form.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <ExtendedTextField
                      {...field}
                      id="has_own_business"
                      error={!!error}
                      helperText={error ? error.message : null}
                      sx={{ display: "flex", flex: 1 }}
                    />
                  );
                }}
              />
            </Box>
          </Box>

          <Box
            display="grid"
            gap={1}
            gridTemplateColumns={{ xs: "1fr", md: "repeat(1, 1fr)" }}
          >
            <Box>
              <InputLabel
                shrink={false}
                sx={{ whiteSpace: "wrap" }}
                htmlFor="has_relative_working"
              >
                ¿Usted tiene algún familiar o amigo trabajando dentro de la
                empresa? Especifique nombre y cargo
              </InputLabel>
              <Controller
                name="has_relative_working"
                control={form.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <ExtendedTextField
                      {...field}
                      id="has_relative_working"
                      error={!!error}
                      helperText={error ? error.message : null}
                      sx={{ display: "flex", flex: 1 }}
                    />
                  );
                }}
              />
            </Box>

            <Box>
              <InputLabel
                shrink={false}
                sx={{ whiteSpace: "wrap" }}
                htmlFor="has_commercial_relationship"
              >
                ¿Tú o algún familiar mantiene relaciones comerciales (como
                proveedor o cliente) con SIZUCA? Especifique cuál
              </InputLabel>
              <Controller
                name="has_commercial_relationship"
                control={form.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <ExtendedTextField
                      {...field}
                      id="has_commercial_relationship"
                      error={!!error}
                      helperText={error ? error.message : null}
                      sx={{ display: "flex", flex: 1 }}
                    />
                  );
                }}
              />
            </Box>
          </Box>
        </Stack>

        <Box marginY={3} display="flex" justifyContent="flex-end">
          <Button
            size="large"
            variant="contained"
            type="submit"
            disabled={
              profile.isLoading || updateProfileAdditionalData.isPending
            }
          >
            Guardar
          </Button>
        </Box>
      </form>
    </>
  );
}
