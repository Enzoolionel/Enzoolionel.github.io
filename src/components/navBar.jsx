import { useState, useEffect } from "react";
import "../styles/navBar.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import sol from "../assets/sol.svg";
import luna from "../assets/luna.svg";

const NavBar = () => {
  const [tema, setTema] = useState(luna);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTema = () => (tema === sol ? setTema(luna) : setTema(sol));

  return (
    <nav className={`contenedor__ul ${scroll ? "scroll" : null}`}>
      <a href="#home" className="ul--icon-e">
        E
      </a>
      <a href="#proyectos" className="ul--item">
        Proyectos
      </a>
      <a href="#habilidades" className="ul--item">
        Habilidades
      </a>
      <a href="#sobre-mi" className="ul--item">
        Sobre mí
      </a>
      <hr className="hr" />
      <a href="https://github.com/Enzoolionel" target="_blank">
        <img src={github} className="icon--img" alt="icono linkedin" />
      </a>
      <a href="https://www.linkedin.com/in/enzo-peralta-b64132216/" target="_blank">
        <img src={linkedin} className="icon--img" alt="icono linkedin" />
      </a>
      <img src={tema} onClick={handleTema} className="ul--button-tema"></img>
    </nav>
  );
};

export default NavBar;
