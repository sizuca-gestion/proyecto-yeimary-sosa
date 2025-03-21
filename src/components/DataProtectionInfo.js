"use client";
import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";

const DataProtectionInfo = () => {
  const [agreed, setAgreed] = useState(false);

  const handleAccept = () => {
    setAgreed(true);
    console.log("Usuario ha aceptado las condiciones.");
  };

  const handleSave = () => {
    if (agreed) {
      console.log("Datos guardados.");
    } else {
      console.log("Debe aceptar las condiciones antes de guardar.");
    }
  };

  return (
    <Box
      style={{
        marginTop: "20px",
        lineHeight: "1.5",
        background: "#f9f9f9",
        padding: "15px",
        borderRadius: "5px",
        border: "1px solid #e0e0e0",
      }}
    >
      <Typography variant="body1">
        La captación de esas informaciones tiene por finalidad el escrutado de
        posibles conductas consideradas antiéticas o que violen los principios
        éticos, patrones de conducta, y / o la legislación vigente.
      </Typography>
      <Typography variant="body2" style={{ marginTop: "20px" }}>
        Declaro que he leído y comprendido las informaciones arriba y deseo
        proseguir con la manifestación.
      </Typography>

      <Box
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleAccept}>
          Aceptar
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleSave}>
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default DataProtectionInfo;
