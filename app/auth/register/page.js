"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  InputLabel,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import backgroundImage from "@/src/assets/images/background.jpg";
import { ExtendedTextField } from "@/src/components";
import { apiClient } from "@/src/lib/axios";
import { addUserSchema } from "@/modules/users/schemas/add-user";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(addUserSchema),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await apiClient.post("/auth/register", values);
      router.push("/auth/login");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Stack
      justifyContent="center"
      minHeight="100vh"
      bgcolor="primary.main"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="xs">
        <Box
          padding={4}
          boxShadow={5}
          bgcolor="background.paper"
          borderRadius={1}
        >
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Stack spacing={2}>
              <Box textAlign="center">
                <Image src="/logo.png" alt="Sizuca" width={200} height={75} />
              </Box>
              <Stack spacing={0.5}>
                <Typography variant="h5" fontWeight="bold">
                  Registrarse
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Por favor, ingrese su email, usuario y contraseña
                </Typography>
              </Stack>

              <Stack spacing={0.5}>
                <InputLabel shrink={false} htmlFor="email" required>
                  Correo
                </InputLabel>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <ExtendedTextField
                        {...field}
                        id="email"
                        type="email"
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                />
              </Stack>

              <Stack spacing={0.5}>
                <InputLabel shrink={false} htmlFor="username" required>
                  Usuario
                </InputLabel>
                <Controller
                  name="username"
                  control={form.control}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <ExtendedTextField
                        {...field}
                        id="username"
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                />
              </Stack>

              <Stack spacing={0.5}>
                <InputLabel shrink={false} htmlFor="password" required>
                  Contraseña
                </InputLabel>
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <ExtendedTextField
                        {...field}
                        id="password"
                        type="password"
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                />
              </Stack>
            </Stack>

            <Box marginY={3}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                type="submit"
                disabled={loading}
              >
                Registrarse
              </Button>
            </Box>

            <Typography>
              Si ya te has registrado,{" "}
              <MuiLink component={Link} href="/auth/login">
                ingresa aquí
              </MuiLink>
            </Typography>
          </form>
        </Box>
      </Container>
    </Stack>
  );
}
