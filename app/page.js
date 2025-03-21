"use client";
import { Box } from "@mui/material";
import { DashboardCarousel } from "@/src/components/carousel";

function Dashboard() {
  return (
    <Box flex={1}>
      <DashboardCarousel />
    </Box>
  );
}

export default Dashboard;
