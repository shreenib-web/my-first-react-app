import Navbar from "./components/Navbar";
import HomeBanner from "./pages/Home/HomeBanner";
import AppRoutes from "./pages/routes/routes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <HomeBanner />
    </>
  );
}

export default App;