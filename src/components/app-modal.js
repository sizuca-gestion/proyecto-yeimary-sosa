"use client";
import React from "react";
import {
  Dialog,
  Box,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import privacyImage from "@/src/assets/images/privacy.jpg";

const AppModal = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Typography variant="h6" textAlign="center">
          Políticas de Privacidad
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Stack spacing={2} color="black">
            <Typography fontWeight="normal" textAlign="center">
              Gracias por unirse a Siderúrgica Zuliana, en Sizuca, respetamos la
              privacidad del usuario y queremos que comprenda cómo recopilamos,
              utilizamos y compartimos los datos sobre él. Esta Política de
              privacidad aborda nuestras prácticas de recopilación de datos y
              describe los derechos del usuario en relación con sus datos
              personales. A menos que enlacemos con una política diferente o que
              indiquemos otra cosa, esta Política de privacidad se aplicará
              cuando el usuario visite o utilice el sitio web de Siderurgica
              Zuliana C.A Todos los datos que figuran en esta sección están
              sujetos a las siguientes actividades de procesamiento:
              recopilación, registro, estructuración, almacenamiento,
              alteración, recuperación y encriptación.
            </Typography>

            <Typography fontWeight="normal" textAlign="center">
              Al utilizar los Servicios, el usuario acepta los términos de esta
              Política de privacidad.
            </Typography>

            <Box paddingY={4} paddingX={8}>
              <img
                src={privacyImage.src}
                alt="Privacidad Sizuca"
                width="100%"
              />
            </Box>
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose} autoFocus>
          Aceptar
        </Button>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppModal;
