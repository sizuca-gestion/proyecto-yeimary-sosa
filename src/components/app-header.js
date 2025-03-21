"use client";
import { Box, Stack, MenuItem } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ProfileSelector } from "@/modules/profile/components";
import { AppHeaderIncidentsButton } from "./app-header-incidents-menu";

export function AppHeader() {
  const session = useSession();

  if (session.status === "unauthenticated") {
    return null;
  }

  return (
    <Stack
      id="header"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      padding={2}
      bgcolor="background.paper"
      spacing={2}
    >
      <Link href="/">
        <Box justifyContent="center" display="flex" alignItems="center">
          <Image src="/logo.png" alt="Sizuca" width={120} height={45} />
        </Box>
      </Link>

      {["S", "G", "RH"].includes(session.data.user.role) ? (
        <Box flex={1}>
          <ProfileSelector />
        </Box>
      ) : null}

      <Stack direction="row" alignItems="center" spacing={1.5}>
        <MenuItem component={Link} href="/profile">
          Mi Perfil
        </MenuItem>

        {["S", "RH"].includes(session.data.user.role) ? (
          <MenuItem component={Link} href="/profile-history/add">
            Nuevo Ingreso
          </MenuItem>
        ) : null}

        {["S", "RH"].includes(session.data.user.role) ? (
          <MenuItem component={Link} href="/profile-history/update">
            Reclasificaciones
          </MenuItem>
        ) : null}

        {["S", "P", "B"].includes(session.data.user.role) ? (
          <MenuItem component={Link} href="/profile/college-data">
            Cimientos
          </MenuItem>
        ) : null}

        {["P", "B", "E"].includes(session.data.user.role) ? (
          <MenuItem component={Link} href="/courses">
            Cursos
          </MenuItem>
        ) : null}

        <AppHeaderIncidentsButton />

        <MenuItem onClick={signOut}>Cerrar Sesión</MenuItem>
      </Stack>
    </Stack>
  );
}
