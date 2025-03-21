"use client";
import {
  Box,
  Button,
  Container,
  InputLabel,
  Stack,
  Typography,
  useEventCallback,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { ExtendedTextField } from "@/src/components";
import { ProfileSelector } from "@/modules/profile/components";
import { addProfileHistorySchema } from "@/modules/profile-history/schemas";

import { addProfileHistoryDefaultValues } from "./utils";
import { useAddProfileHistory } from "./hooks";

function AddProfileHistory() {
  const form = useForm({
    resolver: zodResolver(addProfileHistorySchema),
    defaultValues: addProfileHistoryDefaultValues,
  });

  const addProfileHistory = useAddProfileHistory();

  const handleSubmit = useEventCallback(async (payload) => {
    try {
      const response = await addProfileHistory.mutateAsync(payload);
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
  console.log(form.formState.errors);
  return (
    <Box flex={1} paddingBottom={4} bgcolor="primary.main">
      <Container maxWidth="lg">
        <Box padding={4} textAlign="center">
          <Typography variant="h3" color="secondary.main" fontWeight={700}>
            Formulario de Ingreso
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
                <Box>
                  <InputLabel shrink={false} htmlFor="contract_reason" required>
                    Motivo de contratación
                  </InputLabel>
                  <Controller
                    name="contract_reason"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="contract_reason"
                          error={!!error}
                          helperText={error ? error.message : null}
                          sx={{ display: "flex", flex: 1 }}
                        />
                      );
                    }}
                  />
                </Box>

                <Box>
                  <InputLabel shrink={false} htmlFor="contract_type" required>
                    Tipo de contrato
                  </InputLabel>
                  <Controller
                    name="contract_type"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="contract_type"
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
                <Box>
                  <InputLabel
                    shrink={false}
                    htmlFor="contract_start_date"
                    required
                  >
                    Fecha de inicio de contrato
                  </InputLabel>
                  <Controller
                    name="contract_start_date"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          type="date"
                          id="contract_start_date"
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
                    htmlFor="contract_end_date"
                    required
                  >
                    Fecha de fin de contrato
                  </InputLabel>
                  <Controller
                    name="contract_end_date"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          type="date"
                          id="contract_end_date"
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
                <Box>
                  <InputLabel
                    shrink={false}
                    htmlFor="organizational_unit"
                    required
                  >
                    Unidad Organizativa
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
                          sx={{ display: "flex", flex: 1 }}
                        />
                      );
                    }}
                  />
                </Box>

                <Box>
                  <InputLabel shrink={false} htmlFor="comment" required>
                    Observaciones
                  </InputLabel>
                  <Controller
                    name="comment"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="comment"
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
                <Box>
                  <InputLabel
                    shrink={false}
                    htmlFor="additional_comment_1"
                    required
                  >
                    Extensión 1
                  </InputLabel>
                  <Controller
                    name="additional_comment_1"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="additional_comment_1"
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
                    htmlFor="additional_comment_2"
                    required
                  >
                    Extensión 2
                  </InputLabel>
                  <Controller
                    name="additional_comment_2"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="additional_comment_2"
                          error={!!error}
                          helperText={error ? error.message : null}
                          sx={{ display: "flex", flex: 1 }}
                        />
                      );
                    }}
                  />
                </Box>
              </Box>

              <Stack spacing={0.5}>
                <InputLabel shrink={false} htmlFor="medical_condition" required>
                  Condicion Médica
                </InputLabel>
                <Controller
                  name="medical_condition"
                  control={form.control}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <ExtendedTextField
                        {...field}
                        id="medical_condition"
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                />
              </Stack>
            </Stack>

            <Box marginY={3} display="flex" justifyContent="flex-end">
              <Button
                size="large"
                variant="contained"
                type="submit"
                disabled={addProfileHistory.isPending}
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

export default AddProfileHistory;
