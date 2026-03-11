import { useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import logo from "../assets/images/logo.png";
import "../App.css";


const pages = ["Home", "About", "Services", "News"];

function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <AppBar position="static" sx={{ background: "white" }}>
      <Toolbar>

        {/* Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        </Box>

        {/* Nav Links */}
        <Box>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => setActive(page)}
              sx={{
                color: "#25219b",
                mx: 2,
                fontWeight: "400",
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: active === page ? "100%" : "0%",
                  height: "3px",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "orange",
                  transition: "0.3s"
                }
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;