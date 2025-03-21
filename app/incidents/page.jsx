"use client";
import Image from "next/image";
import Link from "next/link";
import { Stack, Box, Button, Typography } from "@mui/material";

import image1 from "@/src/assets/images/incidents-01.jpg";
import image2 from "@/src/assets/images/incidents-02.jpeg";

import image3 from "@/src/assets/images/background.jpg";
import image4 from "@/src/assets/images/privacy.jpg";

function IncidentsPage() {
  return (
    <Box>
      <Box
        height="80vh"
        position="relative"
        padding={5}
        style={{
          backgroundImage: `url(${image1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Stack
          position="absolute"
          top="40%"
          right={50}
          padding={3}
          alignItems="flex-end"
          spacing={3}
        >
          <Box bgcolor="white" padding={3}>
            <Typography variant="h3">Canal de Ética Sizuca</Typography>
          </Box>
          <Button
            sx={{ paddingX: 12, paddingY: 1 }}
            variant="contained"
            color="secondary"
            component={Link} 
            href="/incidents/add"
          >
            Click aquí
          </Button>
        </Stack>
      </Box>

      <Box
        padding={5}
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box paddingX={6} paddingY={3}>
          <Typography color="white" variant="h5" textAlign="center">
            El canal de ética es una herramienta exclusiva y segura destinada a
            la comunicación de inquietudes éticas, violaciones al código, así
            como a políticas directrices o lesgilación vigente.
          </Typography>
        </Box>

        <Stack direction="row" spacing={3}>
          <Stack flex={1} spacing={4}>
            <Image src={image3} style={{ width: "100%", height: "auto" }} />
            <Stack spacing={4}>
              <Typography
                color="primary.contrastText"
                textAlign="center"
                variant="h5"
              >
                Nuestro objetivo es
              </Typography>

              <Typography color="primary.contrastText">
              Sabemos que contar con equipos altamente calificados es fundamental para nuestro éxito y competitividad en el mercado.
               Por ello, hemos creado una biblioteca virtual enfocada en procesos de trabajo, diseñada para que cada miembro del equipo, 
               según su disponibilidad e interés, tenga la oportunidad de aprender cada día. Esta iniciativa no solo impulsa el crecimiento 
               personal, sino que también permite asumir nuevos desafíos y fomentar el intercambio de aprendizajes que nos guiarán en la creación de soluciones innovadoras.
              </Typography>
            </Stack>
          </Stack>
          <Stack flex={1} spacing={4}>
            <Image src={image2} style={{ width: "100%", height: "auto" }} />
            <Stack spacing={4}>
              <Typography
                color="primary.contrastText"
                textAlign="center"
                variant="h5"
              >
                Siderúrgica Zuliana
              </Typography>

              <Typography color="primary.contrastText">
                Fundada el 04 de octubre de 1967, estamos ubicados en el Parque Industrial de Ciudad Ojeda, Estado Zulia,
                 en un terreno de: 214.568 Mts2 con un área de cobertura en galpones industriales de 21.135 Mts2 y 500 Mts2 de oficinas. 
                 Iniciamos operaciones de fabricación de barras de acero estriadas, partiendo de la recolección de chatarra como materia prima en nuestros productos,
                 a diferencia de las otras industrias siderúrgicas del país que iniciaban sus procesos con mineral de hierro propiamente.


              </Typography>
            </Stack>
          </Stack>
          <Stack flex={1} spacing={4}>
            <Image src={image4} style={{ width: "100%", height: "auto" }} />
            <Stack spacing={4}>
              <Typography
                color="primary.contrastText"
                textAlign="center"
                variant="h5"
              >
                Actualidad
              </Typography>

              <Typography color="primary.contrastText">
              Siderúrgica Zuliana, C.A cuenta con una capacidad instalada de 240 mil toneladas anuales de acero y 180 mil toneladas de laminación o producción de Barras de Acero con Resaltes de diferentes diámetros. 
              Somos una planta de siderúrgica semi integrada, ya que nuestra materia prima es la chatarra ferrosa, junto a las ferroaleaciones, coque y cal. La chatarra es fundida y preparada a través del Horno eléctrico de arco
               para luego pasar por horno cuchara para el suministro de aditivos y finalmente verter el acero líquido en Maquina de Colada continua a través de los distribuidores para formar las palanquillas.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default IncidentsPage;
