import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import { Assignment } from "@mui/icons-material";
import { formatDate } from "@/src/utils";

import { useProfileHistory } from "../../hooks";

export function ProfileHistory({ id }) {
  const profileHistory = useProfileHistory(id);

  return (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="h5" textTransform="uppercase" fontWeight="bold">
          Mi historial de Trabajo
        </Typography>
      </Stack>

      <Stack divider={<Divider />}>
        {profileHistory.data?.data.map((history) => {
          return (
            <Stack
              key={history.id}
              direction="row"
              spacing={2}
              padding={2}
              flex={1}
            >
              <Avatar sx={{ bgcolor: "secondary.main" }}>
                <Assignment />
              </Avatar>
              <Stack flex={1}>
                {history.contract_start_date ? (
                  <Typography color="text.secondary">
                    {formatDate(
                      history.contract_start_date,
                      "MMM YYY"
                    ).toUpperCase()}{" "}
                    -{" "}
                    {formatDate(
                      history.contract_end_date,
                      "MMM YYY"
                    ).toUpperCase()}
                  </Typography>
                ) : null}

                <Stack direction="row" spacing={1}>
                  <Box flex={1}>
                    <Typography fontWeight="bold">
                      Motivo de Contratación
                    </Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography>{history.contract_reason}</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Box flex={1}>
                    <Typography fontWeight="bold">
                      Tipo de Contratación
                    </Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography>{history.contract_type}</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Box flex={1}>
                    <Typography fontWeight="bold">
                      Fecha Inicio de Contrato
                    </Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography>{history.contract_start_date}</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Box flex={1}>
                    <Typography fontWeight="bold">
                      Fecha Fin de Contrato
                    </Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography>{history.contract_end_date}</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Box flex={1}>
                    <Typography fontWeight="bold">Posición</Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography>{history.position}</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Box flex={1}>
                    <Typography fontWeight="bold">
                      Unidad Organizativa
                    </Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography>{history.organizational_unit}</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Box flex={1}>
                    <Typography fontWeight="bold">Observaciones</Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography>{history.comment}</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Box flex={1}>
                    <Typography fontWeight="bold">Extensión 1</Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography>{history.additional_comment_1}</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Box flex={1}>
                    <Typography fontWeight="bold">Extensión 2</Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography>{history.additional_comment_2}</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Box flex={1}>
                    <Typography fontWeight="bold">Condicion Médica</Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography>{history.medical_condition}</Typography>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
