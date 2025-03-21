import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import EmployeeDetailsHistory from "./employee-details-history";

export function EmployeeDetails({ data }) {
  return (
    <Box marginY={2} padding={2} boxShadow={1}>
      <Stack
        direction="row"
        spacing={2}
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          alt={String(data.name[0]).toUpperCase()}
          sx={{
            bgcolor: "primary.main",
            width: { xs: 74, md: 74, lg: 74 },
            height: { xs: 74, md: 74, lg: 74 },
          }}
        />

        <Stack>
          <Typography variant="h4">{data.name}</Typography>
          <Typography variant="h5" fontWeight="normal" color="text.secondary">
            {data.position}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Stack flex={1} spacing={2}>
          <Stack divider={<Divider />}>
            <Typography
              variant="h5"
              color="primary.main"
              textTransform="uppercase"
            >
              Datos
            </Typography>
            <Stack direction="row" spacing={1}>
              <Box flex={1}>
                <Typography fontWeight="bold">Nombre</Typography>
              </Box>
              <Box flex={1}>
                <Typography>{data.name}</Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Box flex={1}>
                <Typography fontWeight="bold">Cédula</Typography>
              </Box>
              <Box flex={1}>
                <Typography>{data.national_id}</Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Box flex={1}>
                <Typography fontWeight="bold">Correo</Typography>
              </Box>
              <Box flex={1}>
                <Typography>{data.email}</Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Box flex={1}>
                <Typography fontWeight="bold">Sexo</Typography>
              </Box>
              <Box flex={1}>
                <Typography>{data.sex}</Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Box flex={1}>
                <Typography fontWeight="bold">Fecha de Nacimiento</Typography>
              </Box>
              <Box flex={1}>
                <Typography>{data.birth_date}</Typography>
              </Box>
            </Stack>

            {data.college_name ? (
              <Stack direction="row" spacing={1}>
                <Box flex={1}>
                  <Typography fontWeight="bold">Universidad</Typography>
                </Box>
                <Box flex={1}>
                  <Typography>{data.college_name}</Typography>
                </Box>
              </Stack>
            ) : null}

            {data.college_major ? (
              <Stack direction="row" spacing={1}>
                <Box flex={1}>
                  <Typography fontWeight="bold">Carrera</Typography>
                </Box>
                <Box flex={1}>
                  <Typography>{data.college_major}</Typography>
                </Box>
              </Stack>
            ) : null}

            <Stack direction="row" spacing={1}>
              <Box flex={1}>
                <Typography fontWeight="bold">Dirección</Typography>
              </Box>
              <Box flex={1}>
                <Typography>{data.address}</Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>

        <Box flex={1}>
          <Typography
            variant="h5"
            color="primary.main"
            textTransform="uppercase"
          >
            Historial
          </Typography>
          <EmployeeDetailsHistory data={data.job_history} />
        </Box>
      </Stack>
    </Box>
  );
}
