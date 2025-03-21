"use client";
import { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  InputLabel,
  LinearProgress,
  MenuItem,
  Stack,
  Typography,
  useEventCallback,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { ExtendedTextField, FileInput } from "@/src/components";
import {
  useProfile,
  useUpdateProfileCollegeData,
} from "@/modules/profile/hooks";
import { updateProfileCollegeDataFormSchema } from "@/modules/profile/schemas";

import { updateProfileCollegeDataFormDefaultValues } from "./utils";

function UpdateProfileCollegeDataForm() {
  const profile = useProfile();
  const updateProfileCollegeData = useUpdateProfileCollegeData();

  const form = useForm({
    resolver: zodResolver(updateProfileCollegeDataFormSchema),
    defaultValues: updateProfileCollegeDataFormDefaultValues,
  });

  useEffect(() => {
    if (!profile.isSuccess) return;
    form.reset(profile.data.data);
  }, [profile.isSuccess]);

  const handleSubmit = useEventCallback(async (payload) => {
    try {
      const response = await updateProfileCollegeData.mutateAsync(payload);

      enqueueSnackbar({ message: response.message, variant: "success" });
      form.reset(response.data);
    } catch (error) {
      console.error(error);
      enqueueSnackbar({
        message: error.response.data.message,
        variant: "error",
      });
    }
  });

  if (profile.isLoading) {
    return <LinearProgress />;
  }

  return (
    <Box flex={1} paddingBottom={4} bgcolor="primary.main">
      <Container maxWidth="lg">
        <Box padding={4} textAlign="center">
          <Typography variant="h3" color="secondary.main" fontWeight={700}>
            Formulario de Cimientos
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
              <Stack spacing={0.5}>
                <InputLabel shrink={false} htmlFor="name">
                  Nombre
                </InputLabel>
                <ExtendedTextField
                  id="name"
                  value={profile.data.data.name}
                  InputProps={{ readOnly: true }}
                />
              </Stack>

              <Box
                display="grid"
                gap={1}
                gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
              >
                <Box>
                  <InputLabel shrink={false} htmlFor="national_id">
                    Cédula de Identidad
                  </InputLabel>
                  <ExtendedTextField
                    id="national_id"
                    sx={{ display: "flex", flex: 1 }}
                    value={profile.data.data.national_id}
                    InputProps={{ readOnly: true }}
                  />
                </Box>

                <Box>
                  <InputLabel shrink={false} htmlFor="sex">
                    Género
                  </InputLabel>
                  <ExtendedTextField
                    id="sex"
                    select
                    sx={{ display: "flex", flex: 1 }}
                    value={profile.data.data.sex}
                    InputProps={{ readOnly: true }}
                  >
                    <MenuItem value="M">Masculino</MenuItem>
                    <MenuItem value="F">Femenino</MenuItem>
                  </ExtendedTextField>
                </Box>
              </Box>

              <Box
                display="grid"
                gap={1}
                gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
              >
                <Box>
                  <InputLabel shrink={false} htmlFor="birth_date">
                    Fecha de Nacimiento
                  </InputLabel>
                  <ExtendedTextField
                    type="date"
                    id="birth_date"
                    sx={{ display: "flex", flex: 1 }}
                    value={profile.data.data.birth_date.substring(0, 10)}
                    InputProps={{ readOnly: true }}
                  />
                </Box>

                <Box>
                  <InputLabel shrink={false} htmlFor="address">
                    Dirección
                  </InputLabel>
                  <ExtendedTextField
                    id="address"
                    sx={{ display: "flex", flex: 1 }}
                    value={profile.data.data.address}
                    InputProps={{ readOnly: true }}
                  />
                </Box>
              </Box>

              <Box
                display="grid"
                gap={1}
                gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
              >
                <Box>
                  <InputLabel shrink={false} htmlFor="college_name" required>
                    Universidad
                  </InputLabel>
                  <Controller
                    name="college_name"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="college_name"
                          error={!!error}
                          helperText={error ? error.message : null}
                          sx={{ display: "flex", flex: 1 }}
                        />
                      );
                    }}
                  />
                </Box>

                <Box>
                  <InputLabel shrink={false} htmlFor="college_major" required>
                    Carrera Universitaria
                  </InputLabel>
                  <Controller
                    name="college_major"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="college_major"
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
                  <InputLabel shrink={false} htmlFor="project_name">
                    Título de Proyecto
                  </InputLabel>
                  <Controller
                    name="project_name"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <ExtendedTextField
                          {...field}
                          id="project_name"
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
                  <InputLabel shrink={false} htmlFor="project_plan">
                    Plan de Proyecto Sizuca
                  </InputLabel>

                  <Controller
                    name="project_plan"
                    control={form.control}
                    render={({
                      field: { onChange },
                      fieldState: { error },
                    }) => {
                      return (
                        <FileInput
                          inputProps={{
                            accept:
                              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                          }}
                          error={!!error}
                          onChange={onChange}
                        />
                      );
                    }}
                  />
                </Box>

                <Box>
                  <InputLabel shrink={false} htmlFor="college_plan">
                    Plan de Proyecto Universidad
                  </InputLabel>

                  <Controller
                    name="college_plan"
                    control={form.control}
                    render={({
                      field: { onChange },
                      fieldState: { error },
                    }) => {
                      return (
                        <FileInput
                          inputProps={{
                            accept:
                              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                          }}
                          error={!!error}
                          onChange={onChange}
                        />
                      );
                    }}
                  />
                </Box>
              </Box>

              <Box paddingTop={2}>
                <Typography
                  variant="h5"
                  color="warning.main"
                  textAlign="center"
                >
                  Presentación del Proyecto
                </Typography>

                <Typography variant="h6">Lineamientos del Proyecto</Typography>

                <Stack direction="column" spacing={2}>
                  <Typography>
                    Los lineamientos son necesarios para garantizar que la
                    actividad sea productiva en cada una de sus fases para que
                    el encuentro sea conciso en virtud de la cantidad de
                    practicantes que se encuentran activos:
                  </Typography>

                  <Typography>
                    1.- Los practicantes han ingresado en distintos periodos,
                    por ende, mostraran consolidados en distintas fases. (eviten
                    comparar sus trabajos, es un proceso de aprendizaje, no una
                    competencia y cada proyecto que han identificado es
                    importante para nuestra unidad).
                  </Typography>
                  <Typography>
                    2.- La información que presentaran es en base al proyecto
                    identificado en el plan de actividades que han ido entregado
                    (no sobre actividades rutinarias adicionales) y debe ser
                    validada previamente por el facilitador. La fecha tope de
                    entrega de esta presentación se indicará por correo
                    electrónico.
                  </Typography>
                  <Typography>
                    3.- La duración de la presentación será solo de 15 minutos
                    por practicante.
                  </Typography>
                  <Typography>
                    4.- La presentación será realizada bajo el modelo anexo y
                    solo pueden ser de 6 láminas mínimo, 8 láminas máximo.
                    Planteando: nombre del proyecto e identificación del
                    practicante y tutor, delimitación/ contexto, objetivos y
                    alcance, cronograma o plazo de duración de las actividades
                    para alcanzar el objetivo, diagnóstico inicial (comparativos
                    de costo por tiempo, repuestos, perdidas), resultados y
                    propuesta para alcanzar mayor rendimiento.
                  </Typography>
                  <Typography>
                    Puedes cambiar la plantilla de presentación e incluso
                    mostrar un ejemplo ilustrado.
                  </Typography>

                  <Box textAlign="center">
                    <Button
                      variant="contained"
                      component="a"
                      href="/slides_template.pptx"
                      download="slides_template"
                    >
                      Descargar plantilla
                    </Button>
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Box>
                  <InputLabel shrink={false} htmlFor="project_slides">
                    Carga tu presentación
                  </InputLabel>

                  <Controller
                    name="project_slides"
                    control={form.control}
                    render={({
                      field: { onChange },
                      fieldState: { error },
                    }) => {
                      return (
                        <FileInput
                          inputProps={{
                            accept:
                              "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                          }}
                          error={!!error}
                          onChange={onChange}
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
                disabled={updateProfileCollegeData.isPending}
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

export default UpdateProfileCollegeDataForm;
