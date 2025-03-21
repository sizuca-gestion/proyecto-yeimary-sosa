import { TextField } from "@mui/material";
import { forwardRef } from "react";

export const ExtendedTextField = forwardRef((props, ref) => {
  return <TextField ref={ref} size="small" margin="none" {...props} />;
});
