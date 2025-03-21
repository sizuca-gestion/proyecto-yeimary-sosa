import Link from "next/link";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

export function AppHeaderIncidentsButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Canal de Ética
      </MenuItem>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem component={Link} href="/incidents" onClick={handleClose}>
          Inicio
        </MenuItem>
        <MenuItem component={Link} href="/incidents/add" onClick={handleClose}>
          Registrar Incidente
        </MenuItem>
        <MenuItem
          component={Link}
          href="/incidents/status"
          onClick={handleClose}
        >
          Consultar Status
        </MenuItem>
        <MenuItem component={Link} href="/incidents/code" onClick={handleClose}>
          Código de Ética
        </MenuItem>
        <MenuItem
          component={Link}
          href="/data-protection"
          onClick={handleClose}
        >
          Protección de Datos
        </MenuItem>
      </Menu>
    </>
  );
}
