"use client";
import { Box, Container, Stack, Typography } from "@mui/material";

import aboutImage from "@/src/assets/images/about.jpeg";

function AboutPage() {
  return (
    <Box flex={1}>
      <Box padding={4} textAlign="center" bgcolor="primary.main">
        <Typography variant="h3" color="secondary.main" fontWeight={700}>
          ¿Quiénes somos?
        </Typography>
      </Box>

      <Box padding={4}>
        <Container>
          <Stack spacing={2}>
            <Typography variant="h6" fontWeight="normal" textAlign="center">
              Fundada el 04 de octubre de 1967, estamos ubicados en el Parque
              Industrial de Ciudad Ojeda, Estado Zulia, en un terreno de:
              214.568 Mts2 con un área de cobertura en galpones industriales de
              21.135 Mts2 y 500 Mts2 de oficinas. Iniciamos operaciones de
              fabricación de barras de acero estriadas, partiendo de la
              recolección de chatarra como materia prima en nuestros productos,
              a diferencia de las otras industrias siderúrgicas del país que
              iniciaban sus procesos con mineral de hierro propiamente.
            </Typography>

            <Box paddingY={4} paddingX={8}>
              <img src={aboutImage.src} alt="Sobre Sizuca" width="100%" />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutPage;
