"use client";
import { useProfile } from "@/modules/profile/hooks";
import { Room } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

export function ProfilePrint() {
  const profile = useProfile();

  if (profile.isLoading) return null;

  return (
    <Stack
      id="print"
      width="236mm"
      height="305mm"
      margin="0 auto"
      boxShadow="0 0 10px rgba(88, 88, 95, 0.12)"
      padding={5}
      paddingRight={0}
      border="1px solid #e8ecf0"
    >
      <Stack direction="row" alignItems="center">
        <Box flex={0.35} bgcolor="#2a2d37" padding={4}>
          <img
            width="100%"
            src={
              profile.data.data.avatar
                ? `data:image/jpeg;base64,${profile.data.data.avatar}`
                : "/avatar.png"
            }
          />
        </Box>

        <Stack flex={0.65} bgcolor="#f4d643" padding={4}>
          <Typography variant="h4">{profile.data.data.name}</Typography>
          <Typography variant="h5">{profile.data.data.profession}</Typography>
        </Stack>
      </Stack>

      <Stack direction="row" height="100%">
        <Box
          flex={0.35}
          //   spacing={2}
          color="white"
          bgcolor="#2a2d37"
          padding={4}
        >
          <Stack direction="row" spacing={1}>
            <Room />
            <Typography>{profile.data.data.address}</Typography>
          </Stack>
        </Box>

        <Stack flex={0.65} padding={4}>
          <Box>
            <Box borderBottom="3px solid #e7d36e">
              <Typography variant="h5">EXPERIENCIA</Typography>
            </Box>
          </Box>

          <Box>
            <Box borderBottom="3px solid #e7d36e">
              <Typography variant="h5">REFERENCIAS</Typography>
            </Box>
          </Box>
        </Stack>
      </Stack>

      {/* <Stack flex={0.65} spacing={4}></Stack> */}
    </Stack>
  );
}

export default ProfilePrint;
