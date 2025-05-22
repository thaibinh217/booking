import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Booking from "./pages/Booking";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
