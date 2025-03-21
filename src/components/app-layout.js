"use client";
import { useCallback, useEffect, useState } from "react";
import { Backdrop, CircularProgress, Stack } from "@mui/material";
import { useSession } from "next-auth/react";

import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";
import AppModal from "./app-modal";

export function AppLayout({ children }) {
  const session = useSession();

  const [showModal, setShowModal] = useState(false);

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, []);

  useEffect(() => {
    if (session.status === "authenticated") {
      setShowModal(true);
    }
  }, [session.status]);

  if (session.status === "loading") {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    );
  }

  return (
    <Stack minHeight="100vh">
      <AppHeader />
      {children}
      <AppFooter />

      {showModal ? <AppModal open={showModal} onClose={handleClose} /> : null}
    </Stack>
  );
}
