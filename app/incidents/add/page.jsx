"use client";
import {
  Stack,
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CheckCircle, Close, Done } from "@mui/icons-material";
import { AddIncidentForm } from "@/modules/incidents";

function AddIncidentPage() {
  return (
    <Container>
      <Stack paddingY={3} spacing={2}>
        <Typography variant="h4" color="primary">
          REGISTRAR INCIDENTE
        </Typography>

        <Typography>
          Para que podamos evaluar su informe de manera más precisa y oportuna,
          complete los campos seguientes y brinde la mayor cantidad de detalles
          posible, que pueda ayudarnos a comprender la situación denunciada.
        </Typography>

        <Typography>
          Es importante que su relato sea completo y detallado, pues eso tornará
          el proceso de averiguación más rápido y preciso. No se olvide de
          incluír en su relato:
        </Typography>

        <Box>
          <Typography>Qué: descripción detallada de la situación</Typography>
          <Typography>
            Quién: informe el nombre de los involucrados. Si es posible, incluya
            también el nombre de testigos que puedan confirmar las informaciones
            presentadas
          </Typography>
          <Typography>
            Cuándo: fecha o periodo en que la situación aconteció
          </Typography>
          <Typography>
            Cuánto: si es posible mensurar, informe los montantes comprometidos;
          </Typography>
          <Typography>
            Pruebas: si existen, indique donde estas pueden ser encontradas. En
            caso de que tenga alguna prueba en su poder, envíenosla.
          </Typography>
        </Box>

        <Typography>
          Para acompañar el andamiento de su relato y verificar la existencia de
          cuestionamientos adicionales por parte de los responsables de la
          averiguación, anote el número de protocolo que le será informado
          después del registro del relato.
        </Typography>

        <Typography>
          Le agradecemos su iniciativa y que nos ayude a mantener el principio
          de ACTUAR ÉTICAMENTE.
        </Typography>

        <Stack direction="row" spacing={4}>
          <Box
            flex={1}
            border="1px solid"
            borderColor="primary"
            borderRadius={2}
          >
            <Stack direction="row" alignItems="center" spacing={1} padding={2}>
              <Close />
              <Typography>No registre tu relato si se refiere a:</Typography>
            </Stack>

            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Dudas sobre el contrato de trabajo, como temas de carrera, salario o prestaciones. En estos casos, contacta a Gestión de Personas." />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Insatisfacción con las condiciones de trabajo en la planta y sus instalaciones. Dirígete al apoyo administrativo para resolverlo.;" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Problemas operativos en producción. Por favor, contacta a tu gestor para obtener asistencia." />
              </ListItem>
            </List>
          </Box>

          <Box
            flex={1}
            border="1px solid"
            borderColor="primary"
            borderRadius={2}
          >
            <Stack direction="row" alignItems="center" spacing={1} padding={2}>
              <Done />
              <Typography>Registra tu relato si se refiere a:</Typography>
            </Stack>

            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="presuntas infracciones de las leyes, el Código de Ética y Conducta o las Políticas y Directrices internas; fraude; corrupción; desviaciones y manipulación de registros; el acoso sexual; intimidación; discriminación; favorecer a terceros; filtración de información confidencial; conflicto de intereses; robos; violaciónes de derechos humanos; incumplimiento de las normas de seguridad; agresiones al medio ambiente." />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="preguntas y sugerencias sobre el Código de Ética y Conducta." />
              </ListItem>
            </List>
          </Box>
        </Stack>

        <AddIncidentForm />
      </Stack>
    </Container>
  );
}

export default AddIncidentPage;
