import { useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import logo from "../assets/images/logo.png";
import "../App.css";
import { NavLinks } from "react-router-dom";

const pages = ["Home", "About", "Services", "News"];

function Navbar() {
  return (
    // Container for the navbar
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#fff', boxShadow: 2 }}>
      {/* Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <img
          src={logo}  // Use the imported logo image
          alt="Logo"
          style={{ height: '40px' }}
        />
      </Box>

      {/* Navigation links */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <NavLink to="/" style={navLinkStyles}>
          <Button sx={{ textTransform: 'none' }}>Home</Button>
        </NavLink>
        <NavLink to="/about" style={navLinkStyles}>
          <Button sx={{ textTransform: 'none' }}>About</Button>
        </NavLink>
        <NavLink to="/contact" style={navLinkStyles}>
          <Button sx={{ textTransform: 'none' }}>Services</Button>
        </NavLink>
        <NavLink to="/news" style={navLinkStyles}>
          <Button sx={{ textTransform: 'none' }}>News</Button>
        </NavLink>
      </Box>
    </Box>
  );
}

export default Navbar;