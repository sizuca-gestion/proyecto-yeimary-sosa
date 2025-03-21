"use client";
import Image from "next/image";
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
import { signIn } from "next-auth/react";

import backgroundImage from "@/src/assets/images/background.jpg";
import { ExtendedTextField } from "@/src/components";
import { loginUserForm } from "./utils";
import Link from "next/link";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginUserForm),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (response.ok) {
        router.push("/");
      }
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
              <Stack spacing={0.5}>
                <Box textAlign="center">
                  <Image src="/logo.png" alt="Sizuca" width={200} height={75} />
                </Box>
                <Typography variant="h5" fontWeight="bold">
                  Ingresar
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Por favor, ingrese su email y contraseña
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
                Ingresar
              </Button>
            </Box>

            <Typography>
              Sino te has registrado,{" "}
              <MuiLink component={Link} href="/auth/register">
                regístrate aquí
              </MuiLink>
            </Typography>
          </form>
        </Box>
      </Container>
    </Stack>
  );
}
