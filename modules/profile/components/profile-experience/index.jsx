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
import { Add, Assignment } from "@mui/icons-material";
import { formatDate } from "@/src/utils";

import { useProfileExperience } from "../../hooks/use-profile-experience";
import { useProfileExperienceForm } from "../profile-experience-form";

export function ProfileExperience({ id }) {
  const [modal, setModal] = useState({ type: undefined, id: undefined });

  const openAddExperienceModal = useEventCallback(() => {
    setModal({ type: "add-profile-experience", id: undefined });
  });

  const closeModal = useEventCallback(() => {
    setModal({ type: undefined, id: undefined });
  });

  const profileExperience = useProfileExperience(id);
  const profileExperienceForm = useProfileExperienceForm({
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
          Experiencia
        </Typography>
        {id ? null : (
          <IconButton onClick={openAddExperienceModal}>
            <Add />
          </IconButton>
        )}
      </Stack>

      <Stack divider={<Divider />}>
        {profileExperience.data?.data.map((experience) => {
          return (
            <Stack key={experience.id} direction="row" spacing={2} padding={2}>
              <Avatar sx={{ bgcolor: "secondary.main" }}>
                <Assignment />
              </Avatar>
              <Stack>
                <Typography fontWeight="bold">{experience.position}</Typography>
                <Typography>{experience.company}</Typography>
                <Typography color="text.secondary">
                  {formatDate(experience.start_date, "MMM YYY").toUpperCase()} -{" "}
                  {formatDate(experience.end_date, "MMM YYY").toUpperCase()}
                </Typography>
                <Typography>{experience.description}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>

      <Dialog
        open={modal.type === "add-profile-experience"}
        sx={{ ".MuiPaper-root": { flex: 1 } }}
      >
        <DialogTitle>Agregar Experiencia</DialogTitle>
        <DialogContent>{profileExperienceForm.component}</DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancelar</Button>
          <Button variant="contained" onClick={profileExperienceForm.onSubmit}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
