import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/mainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import News from "./pages/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="news" element={<News />} />
      </Route>
    </Routes>
  );
}

export default App;