import React from "react";
import { Stack, Box, Button, useEventCallback } from "@mui/material";

export const ImageFileInput = ({ label, url, onChange, ...other }) => {
  const [preview, setPreview] = React.useState("");

  const handleChange = useEventCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview("");
    }

    onChange(file);
  });

  return (
    <Stack spacing={2} justifyContent="center">
      <Box position="relative" height={200} textAlign="center">
        <img
          src={
            preview ||
            (url ? `data:image/jpeg;base64,${url}` : undefined) ||
            "/avatar.png"
          }
          alt="image preview"
          width="100%"
          height="100%"
        />
      </Box>
      <Button variant="contained" component="label">
        {label}
        <input type="file" hidden onChange={handleChange} {...other} />
      </Button>
    </Stack>
  );
};
