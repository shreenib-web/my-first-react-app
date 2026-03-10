import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", color: "#000" }}>
      <Toolbar>

        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>

        {/* Menu Items */}
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;