import { Box, Typography, Button } from "@mui/material";
import imageUrl from "../assets/images/ACME-Solar-Holdings-resized.png";



function Section() {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: 4
      }}
    >
      {/* Left Image */}
      <Box
        component="img"
        src={imageUrl}
        alt="ACME Solar Holdings"
        sx={{
          width: "30%",
          borderRadius: 2,
          ml: 11,
          display:"flex",
            justifyContent: "center"
        }}
      />

      {/* Right Text */}
      <Box sx={{ width: "60%" }}>
        <Typography variant="h2" sx={{ mb: 2, color: "#013973" }}>
          ACME Solar Holdings Limited
        </Typography>

        <Typography variant="body1">
          ACME Solar is one of India’s leading renewable energy independent power producers (IPP), managing a 7.39 GW portfolio across solar, wind, hybrid, and FDRE projects. We develop, build, own, and operate large-scale clean energy solutions.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Founded in 2003 by Mr. Manoj Kumar Upadhyay, Chairman of ACME Group, the company first established itself as an energy management provider for the telecom sector. ACME Solar entered the renewable energy sector in 2009, commissioning its first solar plant in 2012.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Expanding further, ACME is setting up a 1.2 GW solar PV module facility in Jaipur and leading Green Hydrogen and Green Ammonia initiatives.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Committed to a cleaner future, ACME Solar continues to lead innovation and sustainability in the renewable energy sector.
        </Typography>
        <Button variant="contained" sx={{ mt: 3, borderRadius: 2 }}>Know More</Button>
      </Box>
      
    </Box>
     
     </>
  );
}

export default Section;