import { Autocomplete } from "@mui/material";
import { forwardRef } from "react";

export const ExtendedAutocomplete = forwardRef((props, ref) => {
  return <Autocomplete ref={ref} size="small" {...props} />;
});
