import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Stack,
  Switch,
  Typography,
  useEventCallback,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { addIncidentFormSchema } from "../../schemas";
import { addIncidentFormDefaultValues } from "./utils";
import { useAddIncident } from "../../hooks";
import { enqueueSnackbar } from "notistack";
import { ExtendedTextField } from "@/src/components";
import { incidentTypes } from "@/src/constants";
import { FileUploadButton } from "@/src/components/FileUploadButton";
import { useState } from "react";

export function AddIncidentForm() {
  const addIncident = useAddIncident();

  const form = useForm({
    resolver: zodResolver(addIncidentFormSchema),
    defaultValues: addIncidentFormDefaultValues,
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (async (payload) => {
    try {
      const response = await addIncident.mutateAsync(payload);

      // if (file) {
      //   const formData = new FormData();
      //   formData.set("avatar", file);
      //   await updateProfileAvatar.mutateAsync(formData);
      // }

      enqueueSnackbar({ message: response.message, variant: "success" });
      // form.reset(values);
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
      <Typography variant="h4" color="primary">
        DATOS DE LA DENUNCIA
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Stack spacing={2}>
          <Box>
            <InputLabel shrink={false} htmlFor="type" required>
              Tipo
            </InputLabel>
            <Controller
              name="type"
              control={form.control}
              render={({ field, fieldState: { error } }) => {
                return (
                  <ExtendedTextField
                    {...field}
                    id="type"
                    error={!!error}
                    helperText={error ? error.message : null}
                    sx={{ display: "flex", flex: 1 }}
                    select
                  >
                    {incidentTypes.map((type) => (
                      <MenuItem value={type}>{type}</MenuItem>
                    ))}
                  </ExtendedTextField>
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

          <FileUploadButton />

          <Stack spacing={1}>

            <Typography
            >
              La captación de esas informaciones tiene por finalidad el escrutado de
              posibles conductas consideradas antiéticas o que violen los principios
              éticos, patrones de conducta, y / o la legislación vigente.

            </Typography>
            <Typography>
              Todos los relatos serán almacenados por tiempo indefinido para realizar el proceso
              de investigación y deliberación acerca del caso, observándose las
              exigencias legales específicas. Además, la información consolidada se
              utilizará para la generación de estadísticas de la operación, pero no se
              expondrá un nombre o información que permita identificar a la persona
              implicada.
            </Typography>
            <Typography>
              Los eventuales datos personales informados serán tratados
              conforme a las normativas establecidas por la legislación vigente en lo
              que se refiere a la protección de datos personales. Esto incluye la
              implementación de medidas de seguridad adecuadas para proteger la
              integridad y confidencialidad de los datos recopilados.
            </Typography>

            <Typography>
              La responsable del tratamiento de estos datos será Sizuca y se dará seguimiento a
              través de Aliant en el proceso de captación y por su organización en el
              proceso de investigación de las denuncias aquí registradas. El acceso a
              los datos personales se limitará a aquellos empleados autorizados que
              necesiten esta información para llevar a cabo la investigación, y se
              asegurará que toda revelación de datos se realice dentro del marco legal
              y con el debido consentimiento del denunciante.
            </Typography>

            <Typography>
              Al acceder usted indica su aceptación de las condiciones de uso de informaciones que serán única
              y exclusivamente utilizadas para este propósito. Si lo desea,
              posteriormente podrá ejercer sus derechos de acceso, rectificación,
              cancelación y oposición, así como cualquier otro derecho relacionado con
              la protección de sus datos.
            </Typography>
          </Stack>

          <Box >
            <FormControlLabel
              control={
                <Switch
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  name="agreement"
                />
              }
              label="Declaro que leí y comprendí las informaciones de arriba y deseo proseguir con la manifestación."
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              type='submit'
              onClick={form.handleSubmit(handleSubmit)}
              disabled={!isChecked}
            >
              Guardar
            </Button>
          </Box>
        </Stack>
      </form>
    </>
  );
}