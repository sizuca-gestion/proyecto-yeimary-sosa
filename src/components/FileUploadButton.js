"use client";
import React, { useState } from "react";
import { Button, Input, Stack, Typography } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export function FileUploadButton() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  return (
    <div>
      <Input
        accept="*"
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        inputProps={{ multiple: true }}
      />
      <label htmlFor="file-upload">
        <Button
          variant="contained"
          component="span"
          startIcon={<AttachFileIcon />}
        >
          Adjuntar Archivo
        </Button>
      </label>
      {files.length ? (
        <Stack  >
          {files.map(file => (
            <Typography key={file.name}>{file.name}</Typography>
          ))}
        </Stack>
      ) : null}
    </div>
  );
}
