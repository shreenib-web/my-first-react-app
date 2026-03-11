// src/App.jsx
import { Routes, Route } from "react-router-dom";  // Import routing components
import Navbar from "./components/Navbar";  // Import the Navbar component
import Home from "./pages/Home";  // Import Home page
import About from "./pages/About";  // Import About page
import Services from "./pages/Services";  // Import Services page
import News from "./pages/News";  // Import News page

function App() {
  return (
    <div>
      {/* Navbar with NavLink for routing */}
      <Navbar />

      {/* Routes for different components */}
      <Routes>
        <Route path="/" element={<Home />} />         {/* Home route */}
        <Route path="/about" element={<About />} />   {/* About route */}
        <Route path="/contact" element={<Services />} /> {/* Services route */}
        <Route path="/news" element={<News />} />     {/* News route */}
      </Routes>
    </div>
  );
}

export default App;