import { Box } from "@mui/material";
import bannerImg from "../../assets/images/banner-bg.jpg";

const HomeBanner = () => {
    return (
        <Box
        sx={{
            width: "100%",
            height: "400px",
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        
        
        
        >

        </Box>
    )
}
export default HomeBanner;