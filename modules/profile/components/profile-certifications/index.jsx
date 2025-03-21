import { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
  useEventCallback,
} from "@mui/material";
import { Add, WorkspacePremium } from "@mui/icons-material";
import { formatDate } from "@/src/utils";

import { useProfileCertifications } from "../../hooks/use-profile-certifications";
import { useProfileCertificationForm } from "../profile-certification-form";

export function ProfileCertifications({ id }) {
  const [modal, setModal] = useState({ type: undefined, id: undefined });

  const openAddCertificationModal = useEventCallback(() => {
    setModal({ type: "add-profile-certification", id: undefined });
  });

  const closeModal = useEventCallback(() => {
    setModal({ type: undefined, id: undefined });
  });

  const profileCertification = useProfileCertifications(id);
  const profileCertificationForm = useProfileCertificationForm({
    onClose: closeModal,
  });

  return (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="h5" textTransform="uppercase" fontWeight="bold">
          Certificación
        </Typography>
        {id ? null : (
          <IconButton onClick={openAddCertificationModal}>
            <Add />
          </IconButton>
        )}
      </Stack>

      <Stack divider={<Divider />}>
        {profileCertification.data?.data.map((certification) => {
          return (
            <Stack
              key={certification.id}
              direction="row"
              spacing={2}
              padding={2}
            >
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <WorkspacePremium />
              </Avatar>
              <Stack>
                <Typography fontWeight="bold">{certification.name}</Typography>
                <Typography>{certification.issuer}</Typography>
                <Typography color="text.secondary">
                  {formatDate(
                    certification.start_date,
                    "MMM YYY"
                  ).toUpperCase()}{" "}
                  ({certification.duration} horas)
                </Typography>
                <Typography>{certification.description}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>

      <Dialog
        open={modal.type === "add-profile-certification"}
        sx={{ ".MuiPaper-root": { flex: 1 } }}
      >
        <DialogTitle>Agregar Certificación</DialogTitle>
        <DialogContent>{profileCertificationForm.component}</DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancelar</Button>
          <Button
            variant="contained"
            onClick={profileCertificationForm.onSubmit}
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
