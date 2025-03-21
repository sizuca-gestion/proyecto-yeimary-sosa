import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function EmployeeDetailsHistoryReclassificationItem({ data }) {
  return (
    <>
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

      {data.shift ? (
        <Stack direction="row" spacing={1}>
          <Box flex={1}>
            <Typography fontWeight="bold">Turno</Typography>
          </Box>
          <Box flex={1}>
            <Typography>{data.shift}</Typography>
          </Box>
        </Stack>
      ) : null}
    </>
  );
}
