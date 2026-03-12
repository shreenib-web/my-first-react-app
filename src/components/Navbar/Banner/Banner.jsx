import React from "react";
import { Box, Typography } from "@mui/material";
import bannerImg from "../../../assets/images/banner-bg.jpg";

function Banner() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={bannerImg}
        alt="Banner"
        sx={{
          width: "100%",
          height: { xs: "300px", sm: "420px", md: "550px" },
          objectFit: "cover",
          display: "block",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 180, sm: 260, md: 420 },
          height: { xs: 180, sm: 260, md: 420 },
          borderRadius: "50%",
          backgroundColor: "#f3f3f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: { xs: 2, sm: 3, md: 5 },
          boxSizing: "border-box",
        }}
      >
        <Typography
          sx={{
            color: "#25219b",
            fontWeight: 700,
            lineHeight: 1.3,
            fontSize: { xs: "20px", sm: "28px", md: "34px" },
          }}
        >
          Step into
          <br />
          transformation and
          <br />
          welcome a new wave
          <br />
          of positivity.
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;