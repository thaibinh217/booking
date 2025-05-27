import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./pages/client/login";
import SignUp from "./pages/client/signup";
import Home from "./pages/client/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
