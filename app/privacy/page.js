"use client";
import { Box, Container, Stack, Typography } from "@mui/material";

import privacyImage from "@/src/assets/images/privacy.jpg";

function PrivacyPage() {
  return (
    <Box flex={1}>
      <Box padding={4} textAlign="center" bgcolor="primary.main">
        <Typography variant="h3" color="secondary.main" fontWeight={700}>
          Políticas de Privacidad
        </Typography>
      </Box>

      <Box padding={4}>
        <Container>
          <Stack spacing={2}>
            <Typography variant="h6" fontWeight="normal" textAlign="center">
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

            <Typography variant="h6" fontWeight="normal" textAlign="center">
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
        </Container>
      </Box>
    </Box>
  );
}

export default PrivacyPage;
