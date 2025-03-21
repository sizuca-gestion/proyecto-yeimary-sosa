import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import {
  Box,
  Button,
  Chip,
  InputLabel,
  MenuItem,
  Stack,
  Typography,
  useEventCallback,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  ExtendedAutocomplete,
  ExtendedTextField,
  ImageFileInput,
} from "@/src/components";
import { areasOfInterest } from "@/src/constants/areas_of_interest";
import { updateProfileFormSchema } from "../../schemas/update-profile";
import {
  useProfile,
  useUpdateProfile,
  useUpdateProfileAvatar,
} from "../../hooks";
import {
  serverToClientProfileDataTransformer,
  updateProfileFormDefaultValues,
} from "./utils";

export function ProfileForm({ id }) {
  const profile = useProfile(id);
  const updateProfile = useUpdateProfile();
  const updateProfileAvatar = useUpdateProfileAvatar();

  const [file, setFile] = useState(null);

  const form = useForm({
    resolver: zodResolver(updateProfileFormSchema),
    defaultValues: updateProfileFormDefaultValues,
  });

  useEffect(() => {
    if (!profile.isSuccess) return;
    const values = serverToClientProfileDataTransformer(profile.data.data);
    form.reset(values);
  }, [profile.isSuccess]);

  const handleSubmit = useEventCallback(async (payload) => {
    try {
      const response = await updateProfile.mutateAsync(payload);

      if (file) {
        const formData = new FormData();
        formData.set("avatar", file);
        await updateProfileAvatar.mutateAsync(formData);
      }

      enqueueSnackbar({ message: response.message, variant: "success" });
      // Convert some values
      const values = serverToClientProfileDataTransformer(response.data);
      form.reset(values);
    } catch (error) {
      console.error(error);
      enqueueSnackbar({
        message: error.response.data.message,
        variant: "error",
      });
    }
  });

  const handleFileChange = useEventCallback((file) => {
    setFile(file ?? null);
  });

  return (
    <>
      <Typography variant="h5" textTransform="uppercase" fontWeight="bold">
        Datos básicos
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Stack spacing={2}>
          <Box width="200" alignSelf="center">
            <ImageFileInput
              label="Subir foto"
              accept="image/jpeg,image/png"
              url={profile.data?.data?.avatar}
              onChange={handleFileChange}
            />
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
              <InputLabel shrink={false} htmlFor="sex" required>
                Género
              </InputLabel>
              <Controller
                name="sex"
                control={form.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <ExtendedTextField
                      {...field}
                      id="sex"
                      error={!!error}
                      helperText={error ? error.message : null}
                      sx={{ display: "flex", flex: 1 }}
                      select
                    >
                      <MenuItem value="M">Masculino</MenuItem>
                      <MenuItem value="F">Femenino</MenuItem>
                    </ExtendedTextField>
                  );
                }}
              />
            </Box>

            <Box>
              <InputLabel shrink={false} htmlFor="birth_date" required>
                Fecha de Nacimiento
              </InputLabel>
              <Controller
                name="birth_date"
                control={form.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <ExtendedTextField
                      {...field}
                      type="date"
                      id="birth_date"
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
              <InputLabel shrink={false} htmlFor="address" required>
                Dirección
              </InputLabel>
              <Controller
                name="address"
                control={form.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <ExtendedTextField
                      {...field}
                      id="address"
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
              <InputLabel shrink={false} htmlFor="summary" required>
                Habilidades / Competencias (e.g. Idiomas, Software Utilizados)
              </InputLabel>
              <Controller
                name="summary"
                control={form.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <ExtendedTextField
                      {...field}
                      id="summary"
                      multiline
                      rows={3}
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
              <InputLabel shrink={false} htmlFor="profession">
                Profesión
              </InputLabel>
              <Controller
                name="profession"
                control={form.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <ExtendedTextField
                      {...field}
                      id="profession"
                      error={!!error}
                      helperText={error ? error.message : null}
                      sx={{ display: "flex", flex: 1 }}
                    />
                  );
                }}
              />
            </Box>

            <Box>
              <InputLabel shrink={false} htmlFor="education_level">
                Nivel Educativo
              </InputLabel>
              <Controller
                name="education_level"
                control={form.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <ExtendedTextField
                      {...field}
                      id="education_level"
                      error={!!error}
                      helperText={error ? error.message : null}
                      sx={{ display: "flex", flex: 1 }}
                      select
                    >
                      <MenuItem value="">Seleccione una opción</MenuItem>
                      <MenuItem value="Bachiller">Bachiller</MenuItem>
                      <MenuItem value="TSU">TSU</MenuItem>
                      <MenuItem value="Universitario">Universitario</MenuItem>
                      <MenuItem value="Posgrado">Posgrado</MenuItem>
                    </ExtendedTextField>
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
              <InputLabel shrink={false} htmlFor="area_of_interest">
                Áreas de interés para ser desarrolladas (e.g TI, Calidad)
              </InputLabel>
              <Controller
                name="area_of_interest"
                control={form.control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => {
                  return (
                    <ExtendedAutocomplete
                      value={value}
                      onChange={(_, value) => {
                        onChange(value);
                      }}
                      id="area_of_interest"
                      multiple
                      // sx={{ display: "flex", flex: 1 }}
                      options={areasOfInterest}
                      renderInput={(params) => (
                        <ExtendedTextField
                          {...params}
                          error={!!error}
                          helperText={error ? error.message : null}
                          // placeholder={profileModuleMessages.searchEmployee}
                        />
                      )}
                      renderOption={(props, option) => {
                        return (
                          <li {...props} key={option}>
                            {option}
                          </li>
                        );
                      }}
                      renderTags={(tagValue, getTagProps) => {
                        return tagValue.map((option, index) => (
                          <Chip
                            {...getTagProps({ index })}
                            key={option}
                            label={option}
                          />
                        ));
                      }}
                    />
                  );
                }}
              />
            </Box>

            <Box></Box>
          </Box>
        </Stack>

        <Box marginY={3} display="flex" justifyContent="flex-end">
          <Button
            size="large"
            variant="contained"
            type="submit"
            disabled={profile.isLoading || updateProfile.isPending}
          >
            Guardar
          </Button>
        </Box>
      </form>
    </>
  );
}
