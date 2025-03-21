"use client";
import { Alert } from "@mui/material";
import { SnackbarProvider } from "notistack";

export const NotistackProvider = () => {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={5000}
    />
  );
};
