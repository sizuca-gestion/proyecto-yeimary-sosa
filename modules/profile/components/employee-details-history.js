import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import EmployeeDetailsHistoryItem from "./employee-details-history-item";
import EmployeeDetailsHistoryReclassificationItem from "./employee-details-history-reclassification-item";

export default function EmployeeDetailsHistory({ data }) {
  return (
    <Box>
      <Stepper orientation="vertical">
        {data.map((item) => (
          <Step key={item.id} active>
            <StepLabel>Integración: {item.integration_date}</StepLabel>
            <StepContent>
              {item.contract_type ? (
                <EmployeeDetailsHistoryItem data={item} />
              ) : (
                <EmployeeDetailsHistoryReclassificationItem data={item} />
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
