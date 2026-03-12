import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import aboutImg from "../../../assets/images/aboutImg.png";

function InfoSection() {
  return (
    <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "44px" },
                fontWeight: 700,
                color: "#25219b",
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              AstralHelp: Helping you find clarity, stability, and inner peace.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "15px", md: "18px" },
                color: "#555",
                lineHeight: 1.8,
                mb: 3,
                maxWidth: "600px",
              }}
            >
              Life's problems can often make you feel emotionally stressed, confused and feeling stuck. At Astralhelp, we use spiritual sciences like astrology and reiki to primarily guide you towards a deeper self-understanding and emotional healing.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "18px" },
                color: "#555",
                lineHeight: 1.8,
                mb: 3,
                maxWidth: "600px",
              }}
            >
              AstralHelp was founded by Dr Gaurii—an experienced practitioner in energy healing and astrology. You can read more about her journey and achievements here.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "18px" },
                color: "#555",
                lineHeight: 1.8,
                mb: 3,
                maxWidth: "600px",
              }}
            >
              Our goal is to free you from any emotional blocks, to help regain mental clarity, and restore inner balance. Which is why each session is conducted in a calm and supporting environment with a goal to help your personal growth, gain spiritual connection, and overall wellbeing.
            </Typography>

            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#ff7f21",
                px: 3,
                py: 1.2,
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "#e46e16",
                },
              }}
            >
              Read More
            </Button>
          </Box>

          {/* Right Image */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={aboutImg}
              alt="Info Section"
              sx={{
                width: "100%",
                maxWidth: "520px",
                height: "auto",
                display: "block",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default InfoSection;