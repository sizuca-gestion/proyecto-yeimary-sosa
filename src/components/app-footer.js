"use client";
import Image from "next/image";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

export function AppFooter() {
  return (
    <Stack
      id="footer"
      direction="row"
      justifyContent="space-between"
      bgcolor="primary.main"
    >
      <Box
        flex={0.3}
        justifyContent="center"
        display="flex"
        alignItems="center"
        padding={2}
      >
        <Image src="/logo-2.png" alt="Sizuca" width={160} height={60} />
      </Box>

      <Stack flex={0.7} padding={2}>
        <Stack direction="row" spacing={2}>
          <Stack flex={1}>
            <Typography variant="h6" color="white">
              SOBRE NOSOTROS
            </Typography>

            <Link href="/about">
              <Typography variant="h6" color="white">
                ¿Quiénes somos?
              </Typography>
            </Link>

            <Link href="#">
              <Typography variant="h6" color="white">
                Coordenadas
              </Typography>
            </Link>
          </Stack>
          <Stack flex={1}>
            <Typography variant="h6" color="white">
              TÉRMINOS Y PRIVACIDAD
            </Typography>
            <Link href="/privacy">
              <Typography variant="h6" color="white">
                Políticas de Privacidad
              </Typography>
            </Link>
          </Stack>
        </Stack>

        <Typography variant="h6" color="white" textAlign="center">
          Siderúrgica Zuliana, C.A. 2024
        </Typography>
      </Stack>
    </Stack>
  );
}
