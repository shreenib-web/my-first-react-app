import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import logo from "../../assets/images/logo.png";
import "../../App.css";

const navLinkStyles = ({ isActive }) => ({
  color: "#25219b",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px 8px",
  borderBottom: isActive ? "2px solid #ff7f21" : "2px solid transparent",
  display: "inline-block",
});

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#fff",
        boxShadow: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" style={{ height: "40px" }} />
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <NavLink to="/" end style={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/about" style={navLinkStyles}>
          About
        </NavLink>
        <NavLink to="/services" style={navLinkStyles}>
          Services
        </NavLink>
        <NavLink to="/news" style={navLinkStyles}>
          News
        </NavLink>
      </Box>
    </Box>
  );
}

export default Navbar;