import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function EmployeeDetailsHistoryItem({ data }) {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Box flex={1}>
          <Typography fontWeight="bold">Motivo de Contratación</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{data.contract_reason}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Box flex={1}>
          <Typography fontWeight="bold">Fecha Inicio de Contrato</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{data.contract_start_date}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Box flex={1}>
          <Typography fontWeight="bold">Fecha Fin de Contrato</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{data.contract_end_date}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Box flex={1}>
          <Typography fontWeight="bold">Posición</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{data.position}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Box flex={1}>
          <Typography fontWeight="bold">Unidad Organizativa</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{data.organizational_unit}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Box flex={1}>
          <Typography fontWeight="bold">Observaciones</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{data.comment}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Box flex={1}>
          <Typography fontWeight="bold">Extensión 1</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{data.additional_comment_1}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Box flex={1}>
          <Typography fontWeight="bold">Extensión 2</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{data.additional_comment_2}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Box flex={1}>
          <Typography fontWeight="bold">Condicion Médica</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{data.medical_condition}</Typography>
        </Box>
      </Stack>
    </>
  );
}
