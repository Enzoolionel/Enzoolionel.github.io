import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./layout/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yo" element={<NavBar />} />
      <Route path="/contacto" element={<NavBar />} />
      <Route path="/portfolio" element={<NavBar />} />
    </Routes>
  );
}

export default App;
