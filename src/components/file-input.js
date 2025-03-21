import React from "react";
import { useEventCallback, Input } from "@mui/material";

export const FileInput = ({ label, url, onChange, ...other }) => {
  const handleChange = useEventCallback((event) => {
    const file = event.target.files[0];
    onChange(file);
  });

  return <Input type="file" fullWidth onChange={handleChange} {...other} />;
};
