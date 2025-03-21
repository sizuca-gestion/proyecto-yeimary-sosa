"use client";
import { useIncidents } from "@/modules/incidents/hooks";
import {
  Stack,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { incidentsStatusGridColumns } from "./settings";

function IncidentStatusPage() {
  const incidents = useIncidents()

  return (
    <Container>
      <Stack paddingY={3} spacing={2}>
        <Typography variant="h4" color="primary">
          INCIDENCIAS
        </Typography>

        <Box height='70vh'>
          <DataGrid
            columns={incidentsStatusGridColumns}
            rows={incidents.data?.data ?? []}
          />
        </Box>
      </Stack>
    </Container>
  );
}

export default IncidentStatusPage;
