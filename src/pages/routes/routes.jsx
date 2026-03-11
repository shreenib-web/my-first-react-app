import { Routes, Route } from "react-router-dom";
import HomeBanner from "../Home/HomeBanner";
import AboutUs from "../About/AboutUs";
// import Services from "../Services/Services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeBanner />} />
      {/* <Route path="/about" element={<AboutUs />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
    </Routes>
  );
};

export default AppRoutes;