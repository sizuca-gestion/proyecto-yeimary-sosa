"use client";
import { useSession } from "next-auth/react";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useEventCallback,
} from "@mui/material";
import { Print } from "@mui/icons-material";
import { ProfileForm } from "@/modules/profile/components/profile";
import { ProfileExperience } from "@/modules/profile/components/profile-experience";
import { ProfileCertifications } from "@/modules/profile/components/profile-certifications";
import { ProfileAdditionalDataForm } from "@/modules/profile/components/profile-additional-data";
import { generateCVPdf } from "@/modules/profile/utils/print-cv";
import {
  useProfile,
  useProfileCertifications,
  useProfileExperience,
} from "@/modules/profile/hooks";
import { ProfileHistory } from "@/modules/profile/components/profile-history";

function ViewProfile({ id }) {
  const session = useSession();
  const profile = useProfile(id);
  const profileExperience = useProfileExperience(id);
  const profileCertifications = useProfileCertifications(id);

  const printCV = useEventCallback(async () => {
    if (
      !profile.isSuccess ||
      !profileExperience.isSuccess ||
      !profileCertifications.isSuccess
    )
      return;
    const data = {
      ...profile.data.data,
      experience: profileExperience.data.data,
      certifications: profileCertifications.data.data,
    };
    await generateCVPdf(data, session.data);
  });

  return (
    <Box flex={1} paddingBottom={4} bgcolor="primary.main">
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box></Box>
          <Box padding={4} textAlign="center">
            <Typography variant="h3" color="secondary.main" fontWeight={700}>
              {id ? `Perfil de Empleado` : `Mi Perfil`}
            </Typography>
          </Box>
          <Box>
            <IconButton
              variant="secondary"
              sx={{ color: "white" }}
              onClick={printCV}
            >
              <Print />
            </IconButton>
          </Box>
        </Stack>

        <Stack spacing={2}>
          <Box
            padding={4}
            boxShadow={5}
            bgcolor="background.paper"
            borderRadius={1}
          >
            <ProfileForm id={id} />
          </Box>

          <Box
            padding={4}
            boxShadow={5}
            bgcolor="background.paper"
            borderRadius={1}
          >
            <ProfileCertifications id={id} />
          </Box>

          <Box
            padding={4}
            boxShadow={5}
            bgcolor="background.paper"
            borderRadius={1}
          >
            <ProfileExperience id={id} />
          </Box>

          <Box
            padding={4}
            boxShadow={5}
            bgcolor="background.paper"
            borderRadius={1}
          >
            <ProfileHistory id={id} />
          </Box>

          <Box
            padding={4}
            boxShadow={5}
            bgcolor="background.paper"
            borderRadius={1}
          >
            <ProfileAdditionalDataForm />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default ViewProfile;
