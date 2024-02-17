import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/navBar";
import Proyectos from "../proyectos/proyectos";
import Habilidades from "../habilidades/habilidades";
import SobreMi from "../sobreMi/sobreMi";
import Home from "../home/home";
import Footer from "../../components/footer";

const Principal = () => {
  return (
    <>
      <Home />
      <Proyectos />
      <Habilidades />
      <SobreMi />
      <Footer />
    </>
  );
};

const PaginaPrincipal = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </div>
  );
};

export default PaginaPrincipal;
