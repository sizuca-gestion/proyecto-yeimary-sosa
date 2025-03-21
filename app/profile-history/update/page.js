"use client";
import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Stack,
  Typography,
  useEventCallback,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ExtendedTextField } from "@/src/components";

import { updateProfileHistoryDefaultValues } from "./utils";
import { useUpdateProfileHistory } from "./hooks";
import { updateProfileHistorySchema } from "@/modules/profile-history/schemas";
import { enqueueSnackbar } from "notistack";
import { ProfileSelector } from "@/modules/profile/components";

function UpdateProfileHistory() {
  const form = useForm({
    resolver: zodResolver(updateProfileHistorySchema),
    defaultValues: updateProfileHistoryDefaultValues,
  });

  const updateProfileHistory = useUpdateProfileHistory();

  const handleSubmit = useEventCallback(async (payload) => {
    try {
      const response = await updateProfileHistory.mutateAsync(payload);
      enqueueSnackbar({ message: response.data.message, variant: "success" });
      form.reset();
    } catch (error) {
      console.error(error);
      enqueueSnackbar({
        message: error.response.data.message,
        variant: "error",
      });
    }
  });

  return (
    <Box flex={1} paddingBottom={4} bgcolor="primary.main">
      <Container maxWidth="lg">
        <Box padding={4} textAlign="center">
          <Typography variant="h3" color="secondary.main" fontWeight={700}>
            Formulario de Reclasificación
          </Typography>
        </Box>

        <Box
          padding={4}
          boxShadow={5}
          bgcolor="background.paper"
          borderRadius={1}
        >
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Stack spacing={2}>
              <Box
                display="grid"
                gap={1}
                gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
              >
                <Box>
                  <InputLabel shrink={false} htmlFor="profile_id" required>
                    Perfil
                  </InputLabel>
                  <Controller
                    name="profile_id"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ProfileSelector
                          {...field}
                          onChange={(_, value) => {
                            field.onChange(value.id);

                            if (value) {
                              form.setValue("name", value.name);
                              form.setValue("national_id", value.national_id);
                              form.setValue("position", value.position ?? "");
                              form.setValue(
                                "organizational_unit",
                                value.organizational_unit ?? ""
                              );
                            } else {
                              form.reset();
                            }
                          }}
                          isOptionEqualToValue={(profile) => profile.id}
                          getOptionLabel={(profile) => profile.name}
                          TextFieldProps={{
                            id: "profile_id",
                            error: !!error,
                            helperText: error ? error.message : null,
                          }}
                        />
                      );
                    }}
                  />
                </Box>
              </Box>

              <Box
                display="grid"
                gap={1}
                gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
              >
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
                          InputProps={{ ...field.InputProps, readOnly: true }}
                          sx={{ display: "flex", flex: 1 }}
                        />
                      );
                    }}
                  />
                </Box>

                <Box>
                  <InputLabel shrink={false} htmlFor="national_id" required>
                    Cédula de Identidad
                  </InputLabel>
                  <Controller
                    name="national_id"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="national_id"
                          error={!!error}
                          helperText={error ? error.message : null}
                          InputProps={{ ...field.InputProps, readOnly: true }}
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
                gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
              >
                <Box>
                  <InputLabel shrink={false} htmlFor="position" required>
                    Cargo Actual
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
                          InputProps={{ ...field.InputProps, readOnly: true }}
                          sx={{ display: "flex", flex: 1 }}
                        />
                      );
                    }}
                  />
                </Box>

                <Box>
                  <InputLabel
                    shrink={false}
                    htmlFor="organizational_unit"
                    required
                  >
                    Unidad Organizativa Actual
                  </InputLabel>
                  <Controller
                    name="organizational_unit"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="organizational_unit"
                          error={!!error}
                          helperText={error ? error.message : null}
                          InputProps={{ ...field.InputProps, readOnly: true }}
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
                gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
              >
                <Box>
                  <InputLabel shrink={false} htmlFor="new_position" required>
                    Nuevo Cargo
                  </InputLabel>
                  <Controller
                    name="new_position"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="new_position"
                          error={!!error}
                          helperText={error ? error.message : null}
                          InputProps={{ ...field.InputProps }}
                          sx={{ display: "flex", flex: 1 }}
                        />
                      );
                    }}
                  />
                </Box>

                <Box>
                  <InputLabel
                    shrink={false}
                    htmlFor="new_organizational_unit"
                    required
                  >
                    Nueva Unidad Organizativa
                  </InputLabel>
                  <Controller
                    name="new_organizational_unit"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="new_organizational_unit"
                          error={!!error}
                          helperText={error ? error.message : null}
                          InputProps={{ ...field.InputProps }}
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
                gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
              >
                <Box>
                  <InputLabel
                    shrink={false}
                    htmlFor="reclassification_date"
                    required
                  >
                    Fecha de Reclasificación
                  </InputLabel>
                  <Controller
                    name="reclassification_date"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          type="date"
                          id="reclassification_date"
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
                    htmlFor="integration_date"
                    required
                  >
                    Fecha de Integración
                  </InputLabel>
                  <Controller
                    name="integration_date"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          type="date"
                          id="integration_date"
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
                gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
              >
                {" "}
                <Box>
                  <InputLabel shrink={false} htmlFor="movement_type" required>
                    Tipo de Movimiento
                  </InputLabel>
                  <Controller
                    name="movement_type"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="movement_type"
                          error={!!error}
                          helperText={error ? error.message : null}
                          sx={{ display: "flex", flex: 1 }}
                          select
                        >
                          <MenuItem value="Promoción">Promoción</MenuItem>
                          <MenuItem value="Transferencia">
                            Transferencia
                          </MenuItem>
                        </ExtendedTextField>
                      );
                    }}
                  />
                </Box>
                <Box>
                  <InputLabel shrink={false} htmlFor="shift" required>
                    Turno
                  </InputLabel>
                  <Controller
                    name="shift"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="shift"
                          error={!!error}
                          helperText={error ? error.message : null}
                          sx={{ display: "flex", flex: 1 }}
                          select
                        >
                          <MenuItem value="Día">Día</MenuItem>
                          <MenuItem value="Tarde">Tarde</MenuItem>
                          <MenuItem value="Noche">Noche</MenuItem>
                        </ExtendedTextField>
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
                disabled={updateProfileHistory.isPending}
              >
                Enviar
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default UpdateProfileHistory;
