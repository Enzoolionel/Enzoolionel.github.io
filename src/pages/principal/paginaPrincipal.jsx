import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/navBar";
import Proyectos from "../proyectos/proyectos";
import Habilidades from "../habilidades/habilidades";
import SobreMi from "../sobreMi/sobreMi";
import Home from "../home/home";
import Footer from "../../components/footer";
import sol from "../../assets/sol.svg";
import luna from "../../assets/luna.svg";
import "../../styles/darkMode.css";
import "../../styles/lightMode.css";
import "../../styles/variables.css";
import "../../styles/botton.css";


const Principal = () => {
  const [tema, setTema] = useState("dark");
  const [temaIcon, setTemaIcon] = useState(null);

  useEffect(() => {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado) {
      setTema(temaGuardado);
      if (temaGuardado === "dark") {
        setTemaIcon(sol);
      }
      if (temaGuardado === "light") {
        setTemaIcon(luna);
      }
    }
  }, []);

  useEffect(() => {
    if (tema === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [tema]);

  const handleTema = () => {
    if (temaIcon == sol) {
      setTemaIcon(luna);
      setTema("light");
      localStorage.setItem("tema", "light");
    }

    if (temaIcon == luna) {
      setTemaIcon(sol);
      setTema("dark");
      localStorage.setItem("tema", "dark");
    }
  };

  return (
    <div className={`principal ${tema}`}>
      <NavBar temaIcon={temaIcon} onclick={handleTema} tema={tema} />
      <Home tema={tema} />
      <Proyectos tema={tema} />
      <Habilidades tema={tema} />
      <SobreMi tema={tema} />
      <Footer tema={tema} />
    </div>
  );
};

const PaginaPrincipal = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </div>
  );
};

export default PaginaPrincipal;
